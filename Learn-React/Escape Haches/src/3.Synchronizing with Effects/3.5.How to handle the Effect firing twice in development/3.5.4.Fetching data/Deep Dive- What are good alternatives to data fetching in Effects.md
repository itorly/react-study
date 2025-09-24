
### Writing fetch calls inside Effects is a very manual approach and it has significant downsides

* Effects don’t run on the server. 

* Fetching directly in Effects makes it easy to create “network waterfalls”.

* Fetching directly in Effects usually means you don’t preload or cache data.

* It’s not very ergonomic. 