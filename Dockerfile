FROM node:slim

WORKDIR /usr/home
 
COPY app.js .
 
EXPOSE 3000

CMD ["node", "app.js"]
