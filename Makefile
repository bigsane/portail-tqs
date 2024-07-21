#!make

.PHONY: init start

include ./var/project.local.conf

init:
	@./tools/scripts/init.sh $(PROXY_DOMAIN)
	$(MAKE) local-yarn

local-yarn:
	@./client/install.sh

info: 	
	@./tools/scripts/info.sh $(PROXY_DOMAIN)

build: stop
	@echo ""		
	@docker-compose up -d --build
	$(MAKE) start

start:
	@echo "Installation des services"
	@echo ""
	@docker-compose up -d
	@echo ""
	$(MAKE) info

restart:
	@echo "Redémarrage des services"
	@echo ""
	@docker-compose restart
	@echo ""
	$(MAKE) info

stop:
	@echo "Removing services"
	@echo ""
	@docker-compose down

%:
	@echo "ghaHvaD tlhap nuv DaneHlaH :) "