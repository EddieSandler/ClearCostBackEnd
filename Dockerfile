FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .

EXPOSE 8080

CMD ["node", "app.js"]
