 FROM debian:bookworm

RUN apt-get update && apt-get install -y vsftpd iproute2

COPY conf/vsftpd.conf /etc/vsftpd.conf

COPY tools/entrypoint.sh /tools/entrypoint.sh

RUN chmod +x /tools/entrypoint.sh

RUN mkdir -p /var/run/vsftpd/empty

ENTRYPOINT [ "/tools/entrypoint.sh" ] 