FROM debian:bookworm

RUN apt-get update && \
    apt-get install -y mariadb-server iputils-ping && \
    rm -rf /var/lib/apt/lists/*
COPY conf/maria.cnf /etc/mysql/mariadb.conf.d/50-server.cnf

COPY tools/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3306

ENTRYPOINT [ "/entrypoint.sh" ]
