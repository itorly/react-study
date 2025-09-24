
### Writing fetch calls inside Effects is a very manual approach and it has significant downsides

* Effects don’t run on the server. 

* Fetching directly in Effects makes it easy to create “network waterfalls”.

* Fetching directly in Effects usually means you don’t preload or cache data.

* It’s not very ergonomic. 


### recommended approaches

* If you use a framework, use its built-in data fetching mechanism.

* Otherwise, consider using or building a client-side cache.

* You can continue fetching data directly in Effects if neither of these approaches suit you.