.PHONY: default clean deploy start

default:
	bundle exec middleman build

clean:
	rm -rf ./build

deploy:
	bundle exec middleman build
	aws s3 sync --profile tg --delete ./build s3://songsofmyself.com

start:
	bundle exec middleman
