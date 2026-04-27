FROM debian:bookworm

RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    wget \
    && rm -rf /var/lib/apt/lists/*

RUN curl https://get.netdata.cloud/kickstart.sh > /tmp/kickstart.sh && \
    sh /tmp/kickstart.sh --dont-wait --no-updates --stable-channel

EXPOSE 19999

CMD ["netdata", "-D", "-i", "0.0.0.0"]