FROM node:18-bullseye-slim

ENV APP_ROOT=/app \
    APP_PATH=${APP_ROOT}/passport-saml-example \
    TZ=Asia/Tokyo
WORKDIR ${APP_ROOT}

RUN git clone https://github.com/takbanno/passport-saml-example.git && \
    cd ${APP_PATH} && \
    npm install

CMD [ "node", "app.js" ]

