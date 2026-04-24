#!/bin/bash
set -e

DB_PASS=$(cat /run/secrets/db_password)
DB_ROOT=$(cat /run/secrets/db_root_password)


mkdir -p /run/mysqld
chown -R mysql:mysql /run/mysqld
chown -R mysql:mysql /var/lib/mysql

if [ ! -d "/var/lib/mysql/mysql" ]; then

    mysql_install_db --user=mysql --datadir=/var/lib/mysql

    mysqld --user=mysql --bootstrap << EOF
DELETE FROM mysql.user WHERE User='';
DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1');

CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;

CREATE USER '${MYSQL_USER}'@'%' IDENTIFIED BY '${DB_PASS}';
GRANT ALL PRIVILEGES ON ${MYSQL_DATABASE}.* TO '${MYSQL_USER}'@'%';

ALTER USER 'root'@'localhost' IDENTIFIED BY '${DB_ROOT}';

FLUSH PRIVILEGES;
EOF

fi

exec mysqld --user=mysql