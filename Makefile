all: clone_gh deploy

clone_gh:
	@if [ ! -d gh ]; then                                       \
		git clone git@github.com:goadesign/swagger-service-ui gh; \
		cd gh && git config user.email=simon.raphael@gmail.com && git checkout gh-pages;                           \
	fi

deploy:
	@rm -rf dist
	@gulp
	@cp -r dist/* gh/
	@cd gh && git commit -am "auto-deploy" && git push origin gh-pages


