FROM node:latest

EXPOSE 9001

COPY ./exercise1/package*.json ./
# WORKDIR /
RUN npm install

COPY exercise1 ./

RUN echo "hello world?"

CMD ["node", "server.js"]