---
template: BlogPost
path: /map-in-javascript
date: 2020-07-21T06:37:01.776Z
title: 'Maps in JavaScript '
metaDescription: 'Understanding Array Maps in JavaScript. '
---
Map is an Array Method that is called on existing array to return a new array based on what is returned from the function that’s passed as an argument. Here is a an example



```javascript
const names = ['Bello', 'Abdullahi', 'Abdulqudus'];

const nameLengths = names.map( name => name.length );
```



Let’s take a look at what’s happening. The .map() method works on arrays, so we have to have declared our Array to begin with:



```javascript
// list of array 

const names = ['Bello', 'Abdullahi', 'Abdulqudus'];
```



We call`.map()`on the`names`array and pass it a function as an argument:



```javascript
names.map( name => name.length );
```



The arrow function that’s passed to`.map()`gets called *for each item* in the`names`array! The arrow function receives the first name in the array, stores it in the`name`variable and returns its length. Then it does that again for the remaining two names.



`.map()`returns a new array with the values that are returned from the arrow function:



```javascript
const nameLengths = names.map( name => name.length );
```



So `nameLengths`will be a new array`[5, 9, 10]`. This is important to understand that the .Map() method doesn't modify the original arrays, it only returns a new array.
