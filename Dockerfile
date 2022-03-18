FROM node:15

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY .env ./dist

EXPOSE 8080

CMD [ "npm", "start" ]