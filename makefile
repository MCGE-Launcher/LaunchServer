up:
	docker network inspect mcgenet >/dev/null 2>&1 || docker network create --driver=bridge --attachable mcgenet
	docker compose up --build -d