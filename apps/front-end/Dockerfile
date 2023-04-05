# Install dependencies only when needed
FROM node:16-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat python3-dev git
WORKDIR /app
COPY . .
RUN npm install

RUN npm run build:front-end

RUN apk add --no-cache --upgrade bash
RUN ["chmod", "+x", "./apps/front-end/entrypoint.js"]
EXPOSE 3000

CMD [ "sh", "-c", "node ./apps/front-end/entrypoint.js && npm run start:front-end" ]
