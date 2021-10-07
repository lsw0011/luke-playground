FROM node:16.4

RUN mkdir -p app

WORKDIR /app
COPY ./frontend ./
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
CMD npm install --include=dev

CMD ["npm", "run", "start-dev"]