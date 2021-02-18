#base image
FROM node:alpine

#install dependancies
WORKDIR /usr/abdul
COPY ./ ./
RUN npm install

#start-up command
CMD ["npm", "start"]
