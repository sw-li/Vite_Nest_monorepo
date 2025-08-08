# Use Node.js 20 (LTS)
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first
COPY package*.json ./

RUN npm install

# Copy all source files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Default command (overridden by docker-compose for dev mode)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]