import { getSentence, getScientist } from "./seeders";
import { getHash, getValueFromHash, ValueSeed, Hash } from "./helpers";
import { DateTime } from "luxon";

export type Messages = { [key: string]: Message };

export class Inbox {
  inboxId: string;
  inboxAlias: string;
  fetchedAt: string;
  messages: Messages;
}

export class Message {
  messageSenderId: string;
  messageSender: string;
  messageAt: string;
  messagePriority: number;
  messageSubject: string;
  messageContent: string;
}

export function buildInbox(id: string = "000000") {
  const inboxId = getHash(id);
  const inbox: Inbox = {
    inboxId,
    inboxAlias: id,
    fetchedAt: DateTime.local().toISO(),
    messages: buildMessages(inboxId)
  };
  return inbox;
}

function buildMessages(inboxId: string) {
  // determinstic rule for message count
  const numberOfMessages = getMessageCount(getValueFromHash(inboxId));

  // attempt to make dates look fixed in time;
  // but in effect relative to the current time with in a month window
  const earliestDatePossible = getEarliestDatePossible();

  // get an array of objects
  const protoMessages = Array(numberOfMessages)
    .fill({})
    .map((_, index) => {
      return buildMessage(inboxId, index, earliestDatePossible);
    });

  // combine protoMessages by extracting their key: value structure
  const messages: Messages = protoMessages.reduce(
    (a, b) => ({ ...a, ...b }),
    {}
  );

  return messages;
}

function buildMessage(
  inboxId: Hash,
  entropy: number,
  baseDateTime: DateTime
): Messages {
  const messageIdSource = `${inboxId}-${entropy}`;
  const messageId = getHash(messageIdSource);

  const messageSeed: ValueSeed = getValueFromHash(messageId);
  const messageSeedLong: ValueSeed = getValueFromHash(messageId, 0, 5);

  const messagePriority = getMessagePriority(messageSeed);
  const messageSubject = getMessageSubject(messageSeed);
  const messageContent = getMessageContent(messageSeed);

  const messageSender = getMessageSender(messageSeed);
  const messageSenderId = getMessageSenderId(messageSender);

  const messageDateTime = getMessageDateTime(baseDateTime, messageSeedLong);
  const messageAt = messageDateTime.toISO();

  const message = {
    [messageId]: {
      messageSender,
      messageSenderId,
      messagePriority,
      messageSubject,
      messageContent,
      messageAt
    }
  };

  return message;
}

function getMessageDateTime(datetime: DateTime, messageSeedLong: ValueSeed) {
  const seconds = messageSeedLong % 86400;
  const days = messageSeedLong % 255;
  const augmented = datetime.plus({ days }).plus({ seconds });
  return augmented;
}

function getEarliestDatePossible() {
  const now = DateTime.local();
  const twoMonthsAgo = now.minus({ months: 2 }).startOf("month");
  const start = twoMonthsAgo.minus({ days: 255 });
  return start;
}

function getMessageCount(value: number) {
  const priority = Math.round(value / 25.5) + 1;
  return priority;
}

function getMessagePriority(value: number) {
  return value % 4;
}

function getMessageSenderId(string: string) {
  return getHash(string);
}

function getMessageSender(seed: ValueSeed) {
  return getScientist(seed);
}

function getMessageSubject(seed: ValueSeed) {
  return getSentence(seed);
}

function getMessageContent(seed: ValueSeed) {
  const numberOfSentences = Math.round(seed / 64) + 1;

  const sentences = Array(numberOfSentences)
    .fill("")
    .map((_, i) => {
      const sentenceSeed: ValueSeed = getValueFromHash(getHash(`${seed}-${i}`));
      const sentence = getSentence(sentenceSeed);
      return sentence;
    });

  const content = sentences.join(" ");
  return content;
}
