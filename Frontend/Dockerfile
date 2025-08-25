FROM node:18-slim

WORKDIR /app

# Copy package.json and install dependencies first
COPY package.json ./
RUN npm install

# Copy everything else (including server.js)
COPY . .

CMD ["npm", "start"]
