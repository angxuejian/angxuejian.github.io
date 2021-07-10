


function getWidthFix(width, height, styleW, styleH) {

  let [w, h, s] = []

  // 获取图片本身宽高 与 样式宽高的比例
  s = styleW / width 

  w = styleW
  h = styleH * s

  return [w, h] 
}

function getHeightFix(width, height, styleW, styleH) {

  let [w, h, s] = []

  // 获取图片本身宽高 与 样式宽高的比例
  s = styleH / height 

  w = styleW * s
  h = styleH

  return [w, h] 
}

function getPixelRatio(context) {
  let backingStore = context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1;

  return (window.devicePixelRatio || 1) / backingStore;
}

function throttle(func, wait = 2000) {
  let timeout;
  return function() {
    const context = this;
    const args    = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait);
    }
  }
}