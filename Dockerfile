# # Dockerfile frontend
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

CMD ["npx", "serve","dist"]

# dms_stuact_frontend/Dockerfile

# FROM node:14

# Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY package*.json ./

# RUN npm install

# # Bundle app source
# COPY . .

# # Build the app
# RUN npm run build

# # Install serve to serve the built app
# RUN npm install -g serve

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the app
# CMD ["serve", "-s", "build"]

