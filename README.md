# Image Search Abstraction Layer

+ User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

+ User Story: I can paginate through the responses by adding a &offset=2 parameter to the URL.

+ User Story: I can get a list of the most recently submitted search strings.

## Routes

**/search?q=lolcats&offset=10**
Returns a JSON object including url, alt-text and context

&offset=x paginates the results

**/history**

Lists recently submitted strings
