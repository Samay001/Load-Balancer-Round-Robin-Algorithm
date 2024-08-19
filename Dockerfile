# Use an official Node.js runtime as a parent image
FROM node:14

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install all dependencies from the package.json file
RUN npm install --production

# Bundle the app's source code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]
