FROM node:12.16.1-alpine as builder

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm ci
RUN npm run build
RUN npm prune --production

FROM node:12.16.1-alpine

COPY --from=builder /dist /dist
COPY --from=builder /node_modules /node_modules

ENV NODE_ENV production
ENV TZ utc

CMD ["node", "/dist/main.js"]
