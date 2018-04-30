# wdio-debug-service

> WebDriverIO service to enable debugging mode on a specific port


### Installation

```
npm install wdio-debug-service --save
```

### Usage

#### config.js

```js

exports.config = {
	services: ['debug']
};
```

#### Options

```js
{
	debugOptions: {
		port: 6666
	}
}
```

The `6666` port is used by default. 


#### CLI

```
wdio wdio.config.js --debug
```
