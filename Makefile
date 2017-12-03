lint:
	node_modules/.bin/eslint *.js

test:
	$(MAKE) lint
	node test.js

publish:
	if git ls-remote --exit-code origin &>/dev/null; then git push -u -f --tags origin master; fi
	if git ls-remote --exit-code gogs &>/dev/null; then git push -u -f --tags gogs master; fi
	npm publish

update:
	node_modules/.bin/updates -u
	rm -rf node_modules
	yarn

npm-patch:
	npm version patch

npm-minor:
	npm version minor

npm-major:
	npm version major

patch: lint npm-patch publish
minor: lint npm-minor publish
major: lint npm-major publish

.PHONY: lint publish update npm-patch npm-minor npm-major patch minor major
