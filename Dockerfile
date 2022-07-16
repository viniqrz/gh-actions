FROM node:14.18-alpine3.15

COPY package*.json /usr/app/
COPY src/ /usr/app/src/
COPY tsconfig.json /usr/app/

ENV PORT=3000

WORKDIR /usr/app

RUN npm install
RUN npm run build
RUN ls -a

EXPOSE 3000

CMD ["npm", "run", "start"]


