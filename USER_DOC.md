# User Documentation — Inception Project

## 🐳 What is this project?

Inception is a Docker-based web infrastructure running multiple services together.
All services are containerized and communicate through a private Docker network.

---

## 🌐 Available Services

| Service | URL | Description |
|---|---|---|
| **WordPress** | https://nafarid.42.fr | Main website |
| **Adminer** | http://nafarid.42.fr:8080 | Database management |
| **FTP** | nafarid.42.fr:21 | File transfer |
| **Website** | http://nafarid.42.fr:8888 | Static portfolio site |
| **Netdata** | http://nafarid.42.fr:19999 | Server monitoring |

---

## 🚀 Start and Stop the Project

### Start
```bash
make
```

### Stop
```bash
make down
```

### Full Clean (removes everything)
```bash
make clean
```

### Rebuild from scratch
```bash
make re
```

---

## 🌍 Access the Website

### WordPress Site
```
https://nafarid.42.fr
```
> Accept the SSL certificate warning in your browser.

### WordPress Admin Panel
```
https://nafarid.42.fr/wp-admin
```
- **Username:** superadmin
- **Password:** see `secrets/credentials.txt`

### Adminer (Database UI)
```
http://nafarid.42.fr:8080
```
- **Server:** mariadb
- **Username:** wp_user
- **Password:** see `secrets/db_password.txt`
- **Database:** wordpress

---

## 🔐 Credentials

All credentials are stored in the `secrets/` folder:

| File | Contains |
|---|---|
| `secrets/credentials.txt` | WordPress admin password |
| `secrets/db_password.txt` | Database user password |
| `secrets/db_root_password.txt` | Database root password |

> ⚠️ Never share or commit these files to Git.

---

## ✅ Check Services are Running

```bash
# Check all containers
docker compose -f srcs/docker-compose.yml ps
```

All containers should show **Up** status:

```
NAME        STATUS
mariadb     Up
wordpress   Up
nginx       Up
redis       Up
ftp         Up
adminer     Up
netdata     Up
website     Up
```

### Check individual service logs
```bash
docker logs nginx
docker logs wordpress
docker logs mariadb
```

---

## 🔄 Common Issues

| Problem | Solution |
|---|---|
| Site not loading | Check `docker logs nginx` |
| Database error | Check `docker logs mariadb` |
| WordPress error | Check `docker logs wordpress` |
| Port already in use | Run `make clean` then `make` |