

.PHONY: backend
backend:
	cd backend && \
	cargo +nightly build --target wasm32-unknown-unknown


dev: backend
	 docker run --rm -v `pwd`/backend/target/wasm32-unknown-unknown/debug/cryptopoker.wasm:/code/module.wasm -p 30000:30000 fluencelabs/frun
