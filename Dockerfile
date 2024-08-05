# Install dependencies only when needed
FROM node:18-alpine AS build_image
WORKDIR /app
#COPY source/package.json source/package-lock.json ./
COPY package.json ./
RUN npm install

# Rebuild the source code only when needed
COPY . .
RUN npm install -g next

RUN npm run build
RUN npm prune --production

# Production image, copy all the files and run next
FROM node:18-alpine AS prod_image
WORKDIR /app

# Copy the build output from the build stage
COPY --from=build_image /app /app
COPY --from=build_image /app/.next /app/.next


# Set NODE_ENV to production
ENV NODE_ENV=production
ENV BUILD_STANDALONE true

EXPOSE 3000

# Next.js start command
CMD ["npm", "start"]
