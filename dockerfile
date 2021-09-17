FROM node:14.17.6-alpine3.11

WORKDIR /app

COPY package.json /app/package.json

RUN npm install && npm cache clean --force

ENV PATH=/app/node_modules/.bin:$PATH

ENV NODE_ENV development
ENV TZ = Asia/Seoul

COPY . .

EXPOSE 3000

CMD ["npm", "start"]