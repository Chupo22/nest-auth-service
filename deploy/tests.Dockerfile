FROM node:12.16.1-alpine

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./
COPY src ./src
COPY test ./test

RUN npm ci

ENV NODE_ENV test
ENV TZ utc

CMD ["./node_modules/.bin/jest", "--config", "./test/jest-e2e.js"]
