all:
	mkdir -p /home/nafarid/data/wordpress
	mkdir -p /home/nafarid/data/mariadb
	docker compose -f srcs/docker-compose.yml up -d --build

down:
	docker compose -f srcs/docker-compose.yml down

clean:
	docker compose -f srcs/docker-compose.yml down -v --rmi all

re: clean all