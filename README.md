# Interview Coding Assignment API

This is the API that powers the interview coding assignments.

## Tech

- TypeScript
- [Zeit / Now](https://zeit.co)
- Express
- `jsonwebtoken`
- `ts-node`

## Local commands

To run:

```
yarn run api:start
```

To run the service in _watch_ mode for automatic restarts:

```
yarn run api:dev
```

You can run an arbitrary endpoint file (as in serverless style):

```
yarn run dev $1
yarn run dev:watch $1
```

## Deployment

You can deploy:

```
now
```

This will use the `now.json` and the user configuration as locally configured, and deploy the project.

## LICENSE

This is licensed under MIT. Please read the LICENSE file.
