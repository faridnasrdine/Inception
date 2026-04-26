FROM debian:bookworm

RUN apt-get update && \
    apt-get install -y \
    php \
    php-mysqli \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

RUN curl -L -o /var/www/html/adminer.php https://www.adminer.org/latest.php && \
    rm -rf index.html && mv adminer.php index.php

EXPOSE 8080

CMD ["php", "-S", "0.0.0.0:8080", "-t", "/var/www/html"]