# Songs of Myself

A web interface for viewing revised lines of Walt Whitman's Song of Myself in parallel.

Here: http://songsofmyself.com

Feel free to create an issue if you see any typos or weird behaviors, or if you have any ideas for new features.

### Dependencies ###

* ruby 2.3.1 (incompatible with 2.4+ until I upgrade middleman)

### Working on it ###

* `make start` will get the site going with live reloading

### Deploying it ###

* `make deploy` will sync with the production s3 bucket
* there is no staging environment
* need the aws cli to be properly credentialed
