# Install node
FROM node:19-alpine

# Create /usr/src/app folder in the docker VM
# Create app directory
WORKDIR /usr/app

# COPY command executes on the HOST machine
# Install app dependencies
COPY package*.json ./

COPY . .

RUN ls -a
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 4001

CMD ["node", "app.js"]