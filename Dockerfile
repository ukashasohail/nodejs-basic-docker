FROM node:12-stretch

COPY server.js server.js

CMD [ "node", "server.js"]