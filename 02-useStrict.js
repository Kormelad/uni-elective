function a() {
  x = 1;
}
function b() {
  'use strict';
  let y = 1;
}

a();
b();

console.log(x);
