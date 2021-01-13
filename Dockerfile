FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

EXPOSE 80

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/spotify-data /usr/share/nginx/html

# docker build
# sudo docker build -t spotify-data .

# docker run
# sudo docker run -d -it -p 5025:80 spotify-data
