FROM node:12 as builder
MAINTAINER Tobias Schramek "ts@wunschloesung.com"

RUN apt-get update && apt-get install -y ruby-dev rubygems

# there is no other way to say no or have an non-interactrive shell
#ENV NG_CLI_ANALYTICS false
RUN npm install -g @vue/cli@4.3.1
# https://stackoverflow.com/a/39452453/1248724
RUN gem install --no-rdoc --no-ri sass -v 3.4.22
RUN gem install --no-rdoc --no-ri compass -v 0.12.7

COPY --from=registry.wunschloesung.com:5000/commons/build-settings npmrc /root/.npmrc

RUN npm set progress=false

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# keep dependencies cached
COPY vue.config.js package.json package-lock.json tsconfig.json .eslintrc.js ./

RUN npm ci && npm cache clean --force
RUN npm install

COPY src ./src

RUN npm run build

FROM nginx:1.17
COPY --from=builder /usr/src/app/dist /var/www/html
COPY public/*.png /var/www/html/
COPY public/*.ico /var/www/html/
COPY public/*.jpg /var/www/html/
COPY public/*.svg /var/www/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY docker_nginx.conf /etc/nginx/conf.d/docker.conf

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh / # backwards compat

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
