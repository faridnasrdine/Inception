#!/bin/bash
set -e

FTP_USER=nafarid
FTP_PASSWORD=$(cat /run/secrets/credentials)

if ! id "$FTP_USER" &>/dev/null; then
    useradd -m "$FTP_USER"
    echo "$FTP_USER:$FTP_PASSWORD" | chpasswd
fi


chown -R "$FTP_USER":"$FTP_USER" /var/www/html

mkdir -p /var/run/vsftpd/empty

exec vsftpd /etc/vsftpd.conf
