*This project has been created as part of the 42 curriculum by nafarid.*

---

# Inception

## Description

Inception is a system administration project from **42 School**. The goal is to build a complete web infrastructure using **Docker Compose**, where each service runs in its own isolated container.

The infrastructure includes:
- A **WordPress** website served behind **NGINX** with TLS encryption
- A **MariaDB** database for WordPress data
- A **Redis** cache layer for performance
- An **FTP** server for file management
- An **Adminer** interface for database management
- A **Netdata** monitoring dashboard
- A **static website** served by Lighttpd

All containers are built from scratch using custom Dockerfiles based on **Debian Bookworm** — no pre-built images from DockerHub are used.

---

## Instructions

### Prerequisites

- Docker
- Docker Compose v2+
- Make
- A Virtual Machine (required by the project)

### Installation

**1 — Clone the repository**
```bash
git clone <your-repo-url>
cd inception
```

**2 — Create secret files**
```bash
mkdir -p secrets
printf 'YourWPpassword!'   > secrets/credentials.txt
printf 'YourDBpassword!'   > secrets/db_password.txt
printf 'YourROOTpassword!' > secrets/db_root_password.txt
```

**3 — Create `.env` file**
```bash
nano srcs/.env
```
```env
MYSQL_DATABASE=wordpress
MYSQL_USER=wp_user
NAME_D=nafarid.42.fr
FTP_USER=nafarid
DB_NAME=wordpress
DB_USER=jdsa
ADMIN=nafarid
EMAIL=fdafd@gmail.com
WP_USER=user2
WP_USER_EMAIL=hhasjdad
```

**4 — Add domain to `/etc/hosts`**
```bash
echo "127.0.0.1 nafarid.42.fr" | sudo tee -a /etc/hosts
```

**5 — Build and run**
```bash
make
```

**6 — Access the website**
```
https://nafarid.42.fr
```

### Makefile Commands

| Command | Description |
|---|---|
| `make` | Build and start all containers |
| `make down` | Stop all containers |
| `make clean` | Stop, remove containers + images + volumes |
| `make re` | Full rebuild from scratch |

---

## Project Description

### Docker in this Project

This project uses **Docker Compose** to orchestrate multiple containers. Each service has its own `Dockerfile` and runs in complete isolation. The containers communicate through a private **Docker bridge network** called `inception`.

The services included are:

| Service | Role |
|---|---|
| NGINX | Reverse proxy, TLS termination, entry point |
| WordPress + PHP-FPM | CMS and application server |
| MariaDB | Relational database |
| Redis | Object cache for WordPress |
| FTP (vsftpd) | File transfer to WordPress volume |
| Adminer | Web UI for database management |
| Netdata | Real-time container monitoring |
| Website (Lighttpd) | Static portfolio site |

---

### Design Choices

#### Virtual Machines vs Docker

| | Virtual Machine | Docker |
|---|---|---|
| **Isolation** | Full kernel isolation | Shares host kernel |
| **Size** | Gigabytes | Megabytes |
| **Startup** | Minutes | Seconds |
| **Use case** | Full OS simulation | Application isolation |
| **Performance** | Slower (hypervisor overhead) | Near-native |

**Choice:** Docker was chosen because it is lightweight, fast, and perfect for running multiple isolated services on the same machine.

---

#### Secrets vs Environment Variables

| | Environment Variables | Docker Secrets |
|---|---|---|
| **Storage** | In memory as variables | As files in `/run/secrets/` |
| **Visibility** | Visible in `docker inspect` | Never exposed |
| **Security** | Less secure | More secure |
| **Use case** | Non-sensitive config | Passwords, API keys |

**Choice:** Docker Secrets are used for all passwords. Environment variables (`.env`) are used only for non-sensitive configuration like domain name and database name.

---

#### Docker Network vs Host Network

| | Docker Network (bridge) | Host Network |
|---|---|---|
| **Isolation** | Containers isolated from host | Shares host network stack |
| **Security** | More secure | Less secure |
| **Communication** | Via container names (DNS) | Via localhost |
| **Port conflicts** | No conflicts | Possible conflicts |

**Choice:** A custom **bridge network** called `inception` is used. This allows containers to communicate using their names (e.g., `mariadb`, `wordpress`) while staying isolated from the host network. Host network is **forbidden** by the project rules.

---

#### Docker Volumes vs Bind Mounts

| | Docker Named Volumes | Bind Mounts |
|---|---|---|
| **Management** | Managed by Docker | Managed by user |
| **Portability** | Portable | Path-dependent |
| **Performance** | Optimized by Docker | Direct host access |
| **Security** | Better isolation | Less isolated |
| **Use case** | Persistent data | Development |

**Choice:** **Named volumes** are used for WordPress files and database data, stored at `/home/nafarid/data/` on the host. Bind mounts are **forbidden** by the project rules.

---

## Resources

### Documentation
- [Docker Official Documentation](https://docs.docker.com)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [WordPress CLI (WP-CLI)](https://wp-cli.org/)
- [NGINX Documentation](https://nginx.org/en/docs/)
- [MariaDB Documentation](https://mariadb.com/kb/en/)
- [vsftpd Documentation](https://security.appspot.com/vsftpd.html)
- [Redis Documentation](https://redis.io/docs/)
- [Adminer Documentation](https://www.adminer.org/)
- [Netdata Documentation](https://learn.netdata.cloud/)

### Articles & Tutorials
- [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [PID 1 in Docker containers](https://cloud.google.com/architecture/best-practices-for-building-containers)
- [Docker Secrets overview](https://docs.docker.com/engine/swarm/secrets/)
- [TLS/SSL configuration in NGINX](https://nginx.org/en/docs/http/configuring_https_servers.html)

