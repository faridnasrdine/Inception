#!/bin/bash

set -e

FTP_PASSWORD=$(cat /run/secrets/credentials | tr -d '\n\r')

if ! id "$FTP_USER" &>/dev/null; then 
	useradd -m -s /bin/bash $FTP_USER
fi
echo "$FTP_USER:$FTP_PASSWORD" | chpasswd

mkdir -p /var/run/vsftpd/empty

usermod -d /var/www/html "$FTP_USER"

while [ ! -f /var/www/html/wp-config.php ]; do
    echo "Waiting for wordpress..."
    sleep 2
done

chown -R $FTP_USER:$FTP_USER /var/www/html

exec vsftpd /etc/vsftpd.conf