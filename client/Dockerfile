ARG NODE_VERSION=18
ARG NGINX_VERSION=1.22

# "development" stage
FROM node:${NODE_VERSION}-alpine AS development

WORKDIR /usr/src/app

CMD ["yarn", "dev"]

# prevent the reinstallation of node modules if package.json unchanged
FROM node:${NODE_VERSION}-alpine AS node_modules

WORKDIR /usr/src

COPY package.json yarn.lock ./

RUN set -eux; \
	yarn install;

# prevent rebuild if source code unchanged
FROM node_modules AS build

COPY public ./public
COPY src ./src
COPY webpack.config.js ./webpack.config.js
COPY .babelrc ./.babelrc

RUN set -eux; \
	yarn build;

# "nginx" stage
# depends on the "build" stage above
FROM nginx:${NGINX_VERSION}-alpine AS production

WORKDIR /var/www

RUN chown -R nginx:nginx /var/www /var/log/nginx /var/cache/nginx;

COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker/run.sh /run.sh
COPY --chown=nginx:nginx --from=build /usr/src/build ./

CMD ["/run.sh"]
