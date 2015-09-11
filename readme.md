# observ-value [![Build Status](https://travis-ci.org/bendrucker/observ-value.svg?branch=master)](https://travis-ci.org/bendrucker/observ-value)

> Get the value of an observable via a single interface

## Install

```
$ npm install --save observ-value
```


## Usage

observ-value is designed to let you easily write functions that can take both observables themselves as well as the copies they return/emit.

```js
var value = require('observ-value')
var Observ = require('observ')

var name = Observ('Ben')

value(name)
//=> Ben

value(name())
//=> Ben
```

## API

#### `value(input)` -> `any`

##### input

*Required*  
Type: `any`

Either an [observable](https://github.com/raynos/observ) or a copy emitted by the observable.


## License

MIT © [Ben Drucker](http://bendrucker.me)
