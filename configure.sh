#!/usr/bin/env bash
pemKey="$(cat ./magento-contributor-assistant-docs.pem | base64)"
heroku config:set APP_ID=16601 WEBHOOK_SECRET=development PRIVATE_KEY="$pemKey"