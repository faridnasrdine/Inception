all:
	docker compose -f srcs/docker-compose.yml up -d --build
	@mkdir -p /home/nafarid/data/db_data
	@mkdir -p /home/nafarid/data/wordpress_data


down:
	docker compose -f srcs/docker-compose.yml down

clean:
	docker compose -f srcs/docker-compose.yml down -v --rmi all

re: clean all