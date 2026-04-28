# Developer Documentation — Inception Project

## 📋 Prerequisites

Before starting, make sure you have:

```bash
# Check Docker
docker --version
# Docker version 24.x.x or later

# Check Docker Compose
docker compose version
# Docker Compose version v2.x.x or later

# Check Make
make --version
```

---

## 📁 Project Structure

```
inception/
├── Makefile
├── README.md
├── USER_DOC.md
├── DEV_DOC.md
├── secrets/
│   ├── credentials.txt        ← WordPress admin password
│   ├── db_password.txt        ← Database user password
│   └── db_root_password.txt   ← Database root password
└── srcs/
    ├── .env                   ← Environment variables
    ├── docker-compose.yml
    └── requirements/
        ├── nginx/
        │   ├── Dockerfile
        │   └── conf/nginx.conf
        ├── wordpress/
        │   ├── Dockerfile
        │   └── tools/entrypoint.sh
        ├── mariadb/
        │   ├── Dockerfile
        │   └── tools/entrypoint.sh
        └── bonus/
            ├── redis/
            ├── ftp/
            ├── adminer/
            ├── netdata/
            └── website/
```

---

## ⚙️ Setup from Scratch

### Step 1 — Clone the repository
```bash
git clone <your-repo-url>
cd inception
```

### Step 2 — Create secrets
```bash
mkdir -p secrets
printf 'YourWPpassword!'   > secrets/credentials.txt
printf 'YourDBpassword!'   > secrets/db_password.txt
printf 'YourROOTpassword!' > secrets/db_root_password.txt
```

### Step 3 — Create `.env` file
```bash
nano srcs/.env
```

```env
DOMAIN_NAME=nafarid.42.fr
MYSQL_DATABASE=wordpress
MYSQL_USER=wp_user
ADMIN=superadmin
EMAIL=admin@nafarid.42.fr
```

### Step 4 — Add domain to `/etc/hosts`
```bash
echo "127.0.0.1 nafarid.42.fr" | sudo tee -a /etc/hosts
```

### Step 5 — Create data directories
```bash
mkdir -p ~/data/wordpress_data
mkdir -p ~/data/db_data
mkdir -p ~/data/portainer
```

---

## 🔨 Build and Launch

### Using Makefile (recommended)
```bash
make        # Build and start everything
make down   # Stop all containers
make clean  # Stop and remove containers + images + volumes
make re     # Clean and rebuild everything
```

### Using Docker Compose directly
```bash
# Build and start
docker compose -f srcs/docker-compose.yml up -d --build

# Stop
docker compose -f srcs/docker-compose.yml down

# Stop and remove volumes
docker compose -f srcs/docker-compose.yml down -v
```

---

## 🛠️ Managing Containers

### View all containers
```bash
docker compose -f srcs/docker-compose.yml ps
```

### View logs
```bash
# All services
docker compose -f srcs/docker-compose.yml logs

# Specific service
docker logs nginx
docker logs wordpress
docker logs mariadb
docker logs redis
```

### Enter a container
```bash
docker exec -it nginx bash
docker exec -it wordpress bash
docker exec -it mariadb bash
```

### Restart a single service
```bash
docker compose -f srcs/docker-compose.yml restart nginx
```

### Rebuild a single service
```bash
docker compose -f srcs/docker-compose.yml stop nginx
docker rm nginx
docker rmi nginx
docker compose -f srcs/docker-compose.yml up -d --build nginx
```

---

## 💾 Data Storage

All persistent data is stored on the host machine:

| Volume | Host Path | Container Path | Service |
|---|---|---|---|
| `wordpress_data` | `~/data/wordpress_data` | `/var/www/html` | WordPress, NGINX, FTP |
| `db_data` | `~/data/db_data` | `/var/lib/mysql` | MariaDB |

### How data persists
- When containers are stopped, data remains in `~/data/`
- When containers are rebuilt, data is reused automatically
- To reset all data: `sudo rm -rf ~/data/` then `make re`

### Backup data
```bash
# Backup database
docker exec mariadb mysqldump -u root -p wordpress > backup.sql

# Backup WordPress files
tar -czf wordpress_backup.tar.gz ~/data/wordpress_data/
```

---

## 🔍 Useful Debug Commands

```bash
# Check network
docker network inspect srcs_inception

# Check volumes
docker volume ls

# Check MariaDB users
docker exec -it mariadb mysql -u root -p -e "SELECT User, Host FROM mysql.user;"

# Check WordPress database
docker exec -it mariadb mysql -u root -p -e "SHOW DATABASES;"

# Check PHP-FPM
docker exec -it wordpress ps aux | grep php

# Check Redis
docker exec -it redis redis-cli ping

# Check NGINX config
docker exec -it nginx nginx -t
```

---

## 🔐 Security Notes

- All passwords are stored as **Docker secrets** in `/run/secrets/` inside containers
- Never put passwords in `Dockerfile` or `.env`
- Add `secrets/` and `.env` to `.gitignore`
- NGINX only accepts **TLSv1.2** and **TLSv1.3**
- Only port **443** is exposed externally from NGINX