FROM node

RUN npm i package.json

CMD [ "node", "main.js" ]