node_modules:
	npm install

run: node_modules
	npm run dev

build-mac: node_modules
	npm run build:mac

build-linux: node_modules
	npm run build:linux

.PHONY: run, build-mac, build-linux