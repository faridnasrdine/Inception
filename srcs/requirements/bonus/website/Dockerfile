FROM debian:bookworm

RUN apt-get update && \
    apt-get install -y \
    lighttpd \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

COPY site/ /tmp/site/

RUN cd /tmp/site && \
    npm install && \
    npm run build && \
    cp -r dist/* /var/www/html/ && \
    rm -rf /tmp/site

COPY conf/lighttpd.conf /etc/lighttpd/lighttpd.conf

EXPOSE 80

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
