# 事件订阅和解绑

```js
Object.prototype.on = function (event, callback) {
  //listen
  this.__eventCache = this.__eventCache || {};
  this.__eventCache[event] = callback;
  return this;
};
Object.prototype.fire = function (event, data) {
  //emit
  this.__eventCache &&
    this.__eventCache[event] &&
    this.__eventCache[event](data);
};
var sd = {};
sd.on("as", function (d) {
  console.log(5487 + d);
});
sd.fire("as", 324);
```
