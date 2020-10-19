FROM node:12.6.0
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 4221
CMD ["npm", "run", "start"]
