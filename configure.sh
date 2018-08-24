#!/usr/bin/env bash
heroku config:set APP_ID=16601 \
    WEBHOOK_SECRET=development \
    PRIVATE_KEY="$(cat ./magento-contributor-assistant-docs.pem)" \
    LOG_LEVEL=trace