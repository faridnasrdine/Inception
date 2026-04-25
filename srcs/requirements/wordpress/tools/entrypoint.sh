#!/bin/bash

WP_PATH="/var/www/html"
CONFIG_FILE="$WP_PATH/wp-config.php"
SAMPLE_FILE="$WP_PATH/wp-config-sample.php"

if [ ! -f "$CONFIG_FILE" ]; then

    if [ ! -f "$SAMPLE_FILE" ]; then
        curl -O https://wordpress.org/latest.tar.gz
        tar -xzf latest.tar.gz
        cp -r wordpress/* $WP_PATH/
        rm -rf wordpress latest.tar.gz
    fi

    cp "$SAMPLE_FILE" "$CONFIG_FILE"


    sed -i "s|database_name_here|${MYSQL_DATABASE}|g" "$CONFIG_FILE"
    sed -i "s|username_here|${MYSQL_USER}|g" "$CONFIG_FILE"
    sed -i "s|password_here|${DB_PASSWORD}|g" "$CONFIG_FILE"
    sed -i "s|localhost|mariadb:3306|g" "$CONFIG_FILE"
    
    wp config set WP_REDIS_HOST redis --allow-root
    wp config set WP_REDIS_PORT 6379 --raw --allow-root
    wp plugin install redis-cache --activate --allow-root
    wp redis enable --allow-root
fi

mkdir -p /run/php

exec php-fpm7.4 -F
