FROM node:current-slim
WORKDIR /code
COPY package* /code/
RUN npm install && npm cache clean --force
COPY . /code
CMD ["npm", "start"]
