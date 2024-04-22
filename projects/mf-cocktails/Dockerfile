FROM node:lts-alpine3.18 AS build

WORKDIR /app

COPY package*.json angular.json tsconfig*.json ./

RUN npm install

COPY ./projects ./projects

WORKDIR /app/projects/mf-cocktails

RUN npm run build:mf-cocktails

FROM nginx:alpine
COPY --from=build /app/dist/mf-cocktails /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
