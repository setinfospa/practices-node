FROM node:20.10.0-alpine AS development
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM node:20.10.0-alpine AS production
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]