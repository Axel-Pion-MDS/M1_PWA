# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

# Build the app
RUN npm run build

# Serve the app using the serve package
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "80"]