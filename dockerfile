# Etapa de construcción
FROM node:22-alpine AS build
ENV NG_CLI_ANALYTICS=ci
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Build con config por defecto (production)
RUN npx ng build --configuration=production

# Etapa de producción
FROM nginx:alpine

COPY --from=build /app/dist/salvador/browser/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
