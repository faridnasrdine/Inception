FROM debian:bookworm

RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    wget \
    && rm -rf /var/lib/apt/lists/*

RUN curl https://get.netdata.cloud/kickstart.sh > /tmp/kickstart.sh && \
    sh /tmp/kickstart.sh --dont-wait --no-updates --stable-channel

RUN sed -i 's|<\/body>|<script>window.addEventListener("DOMContentLoaded", () => { setTimeout(() => { const skip = document.querySelector(".opt-out-link"); if (skip) skip.click(); else if (typeof loadDashboard === "function") loadDashboard(); }, 500); });<\/script><\/body>|g' /usr/share/netdata/web/index.html

EXPOSE 19999

CMD ["netdata", "-D", "-i", "0.0.0.0"]