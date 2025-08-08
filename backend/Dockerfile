# Use Node.js 20 (LTS) as base image
FROM node:20-alpine

# Create app directory inside container
WORKDIR /usr/src/app

# Install dependencies first (faster rebuilds)
COPY package*.json ./

RUN npm install

# Install Nest CLI globally (optional, for dev hot reload)
RUN npm install -g @nestjs/cli

# Copy the rest of the app
COPY . .

# Generate Prisma Client (if using Prisma)
RUN npx prisma generate

# Expose backend port
EXPOSE 3000

# Default command (overridden by docker-compose for dev mode)
CMD ["npm", "run", "start:dev"]