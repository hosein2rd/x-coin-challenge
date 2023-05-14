# My Thought Process

## My Steps:

1. first of all I did some refactoring.

2. For maintaining the backend app we need logger. I used `winston` for this problem.

3. There wasn't any error handling. If the app crashes there was no appropriate error response for that. I added default express error handling.

4. We need to validate input from request to protect our APIs. I used `express-validator`.

5. I dockerized project for easy deployment.

## Quick Start

First of all create `.env` file and add snippet code below:

```m
PORT=ADD_YOUR_PORT
DBURL=ADD_YOUR_DB_URL
```

### Seed

To add data in database run `npm run seed`.

### Production

To run the app in production run `npm run build` for building. Then run `npm run start` to run the app.

### Development

To run the app in development `npm run dev`.

## Start With Docker

Run `docker build -t app . --build-arg PORT=${YOUR_PORT} --build-arg DBURL=${YOUR_DB_URL}`. It will create docker image. Then run container from image with `docker run -dp 8000:8000 app`
