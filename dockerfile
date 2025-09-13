# Etapa de construcción
FROM node:22-alpine AS build

RUN npm install -g @angular/cli@latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN ng build --configuration=production

# Etapa de producción
FROM nginx:alpine
# ¡ESTA LÍNEA DEBE ESTAR EN LA ETAPA FINAL!
COPY --from=build /app/dist/salvador/browser/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]