# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jackiestchen/lotide`

**Require it:**

`const _ = require('@jackiestchen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: assert 2 arrays
* `assertEqual`: assert 2 values
* `assertObjectsEqual`: assert 2 objects (incomplete)
* `countLetters`: count letters in a string
* `countOnly`: count key/value pair in object
* `eqArrays`: test if two arrays are the same type and value 
* `eqObjects`: test if two objects are the same key/value pair (incomplete)
* `findKey`: find Key in object
* `findKeyByValue`: find Key by value in object
* `flatten`: flatten a nested array
* `head`: return element of index 0 of an array
* `letterPositions`: return first index position of a string 
* `map`: map with call back function
* `tail`: return a new array without the first element
* `takeUntil`: return a new array until first occurence of callback function
* `without`: return a new array without elements from 2nd array
