FROM node:15

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV API_URL=https://ws.apicep.com/cep.json?code=

EXPOSE 3001

CMD [ "npm", "start" ]