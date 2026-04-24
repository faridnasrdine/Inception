#!/bin/bash
set -e

DB_PASS=$(cat /run/secrets/db_password)
WP_PASS=$(cat /run/secrets/credentials)

if [ ! -f /usr/local/bin/wp ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    mv wp-cli.phar /usr/local/bin/wp
fi

cd /var/www/html

if [ ! -f wp-config.php ]; then

    wp core download --allow-root --locale=en_US

    wp config create \
        --dbname="${MYSQL_DATABASE}" \
        --dbuser="${MYSQL_USER}" \
        --dbpass="${DB_PASS}" \
        --dbhost="mariadb:3306" \
        --allow-root

    until wp db check --allow-root 2>/dev/null; do
        sleep 2
    done

    wp core install \
        --url="https://${DOMAIN_NAME}" \
        --title="Inception" \
        --admin_user="superadmin" \
        --admin_password="${WP_PASS}" \
        --admin_email="admin@${DOMAIN_NAME}" \
        --skip-email \
        --allow-root

    wp user create editor "editor@${DOMAIN_NAME}" \
        --role=editor \
        --user_pass="Editor@2024!" \
        --allow-root

fi

chown -R www-data:www-data /var/www/html

exec php-fpm7.4 -F