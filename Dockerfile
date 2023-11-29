# Source image
FROM node:alpine

RUN apk add --update --no-cache curl py-pip

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*

# Create working directory with name app
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install dependency inside container
RUN npm install

# Copy all to working directory
COPY . .

# Running application
CMD [ "npm", "run", "start" ]