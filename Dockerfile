FROM node:18-bullseye-slim

ENV APP_ROOT=/app \
    APP_PATH=${APP_ROOT}/passport-saml-example \
    TZ=Asia/Tokyo
COPY . ${APP_ROOT}
WORKDIR ${APP_ROOT}
RUN npm install

CMD [ "node", "app.js" ]

