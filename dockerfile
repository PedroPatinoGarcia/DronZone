# Establecer la imagen base
FROM node:latest as build-stage

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración y el archivo package.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Construir la aplicación Angular
RUN npm run build

# Establecer la imagen base final para el entorno de producción
FROM nginx:latest

# Copiar los archivos de construcción de la aplicación Angular en la imagen de Nginx
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# Exponer el puerto en el que la aplicación Angular se ejecutará (generalmente el puerto 80)
EXPOSE 80

# Comando para iniciar Nginx y servir la aplicación Angular
CMD ["nginx", "-g", "daemon off;"]