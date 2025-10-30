FROM node:18-slim

WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files (server.js, etc.)
COPY . .

# Expose port 3000 for ECS / local
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
