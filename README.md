# timestamp-api

* A service that checks to see whether a passed query string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

## Examples
### Natural > Unix

https://infinite-cliffs-17971.herokuapp.com/January, 4, 1991
#### Returns

{ "unix": 662947200, "natural": "January, 4, 1991" }

### Unix > Natural

https://infinite-cliffs-17971.herokuapp.com/1509408000
#### Returns

{ "unix": "1509408000", "natural": "2017-10-31T00:00:00.000Z" }
