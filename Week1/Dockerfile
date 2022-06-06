FROM node:latest

EXPOSE 9001

COPY ./message/package*.json ./

RUN npm install

COPY message ./

RUN echo "hello world?"

CMD ["node", "server.js"]