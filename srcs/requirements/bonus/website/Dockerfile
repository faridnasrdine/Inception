FROM debian:bookworm

RUN apt-get update && \
    apt-get install -y lighttpd && \
    rm -rf /var/lib/apt/lists/*

COPY site/ /var/www/html/
COPY conf/lighttpd.conf /etc/lighttpd/lighttpd.conf

EXPOSE 80

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]