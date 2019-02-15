import * as express from "express";
import { Router } from "express";
import { getRoot, getRootVersion, makeJwt } from "./helpers";
import { buildInbox } from "./inbox";
import { JwtPayload, JwtResponse } from "./types";

const PORT = process.env.port || 3000;

function bootServer() {
  const app = express();

  const router = Router();

  router.get("/", (_, res) => {
    res.redirect("/api");
  });

  router.get("/api", (_, res) => {
    const response = getRoot();
    res.json(response);
  });

  router.get("/api/v1", (_, res) => {
    const response = getRootVersion("v1");
    res.json(response);
  });

  router.get("/api/v1/inbox", (_, res) => {
    res.status(405);
    res.json({
      code: 405,
      status: "method not supported",
      message: "inbox can only be accessed by inbox id"
    });
  });

  router.get("/api/v1/inbox/:id([0-9]{6})", (request, response) => {
    let { debug = false }: { debug?: boolean } = request.query;
    debug = Boolean(debug);

    const { id } = request.params;

    const inbox = buildInbox(id);
    const jwt: JwtPayload = makeJwt(inbox);
    const jwtResponse: JwtResponse = {
      payload: jwt
    };

    if (debug === true) {
      response.json(inbox);
    } else {
      response.json(jwtResponse);
    }
  });

  app.use(router);

  app.use((_, res, __) => {
    res.status(404).json({ code: 404, status: "not found" });
  });

  const ExceptionHandler: express.ErrorRequestHandler = (error, _, res, __) => {
    console.error(error.stack);
    res.status(500).send({ code: 500, status: "internal server error" });
  };

  app.use(ExceptionHandler);

  app.listen(PORT, () => {
    console.info(`api listening on ${PORT}`);
  });

  return app;
}

const app = bootServer();

export default app;
