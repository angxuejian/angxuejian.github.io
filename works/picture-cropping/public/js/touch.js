
// 拖动事件所需要的参数
const DRAG = {
  startX: 0,
  startY: 0,
  moveX : 0,
  moveY : 0,
  xx    : 0,
  yy    : 0,
}


/**
 * 单指拖动事件 - 开始
 * @param {Array[Object]} touches 手指触摸页面时的参数
 */
function dragStart(touches) {
  isDrag = true

  DRAG.startX = touches[0].pageX - DRAG.xx// 手指触摸 x 起始位置
  DRAG.startY = touches[0].pageY - DRAG.yy // 手指触摸 y 起始位置
}

/**
 * 单指拖动事件 - 移动
 * @param {Array[Object]} touches 手指触摸页面时的参数
 */
function dragMove(touches) {
  DRAG.moveX = touches[0].pageX
  DRAG.moveY = touches[0].pageY

  //  + 
  let top  = parseFloat(DRAG.moveY) - parseFloat(DRAG.startY)
  let left = parseFloat(DRAG.moveX) - parseFloat(DRAG.startX)


  DRAG.yy = top
  DRAG.xx = left 

  
 
  // 当宽度相等时、左右不可移动
  if (T_IMG_.left === BOX_.left) {
    left = 0
    CTX_DRAW.x = 0
  } else T_IMG_.left = left 

  // 当高度相等时、上下不可移动
  if (T_IMG_.top === BOX_.top) {
    top = 0
    CTX_DRAW.y = 0
  } else T_IMG_.top  = top
 
  T_IMG.style.transform = `translate3d(${left}px, ${top}px, 0)`
}


/**
 * 单指拖动事件 - 结束
 */
function dragEnd() {

  // 上下距离超过边界之后、回退
  if (T_IMG_.left === BOX_.left) {
    const top = T_IMG_.top - Math.abs(T_IMG_.diffH)
    let t = 0
    
    if (top >= 0) t = Math.abs(T_IMG_.diffH)
    if (top <= T_IMG_.diffH * 2) t = T_IMG_.diffH

    if (t) {
      T_IMG.style.transform = `translate3d(0px, ${t}px, 0)`
      DRAG.yy    = t
      T_IMG_.top = t
    }

    CTX_DRAW.y = T_IMG_.top - BOX_.top === T_IMG_.diffH ? T_IMG_.top - BOX_.top : T_IMG_.top - Math.abs(T_IMG_.diffH)
  }

  // 左右距离超过边界之后、回退
  if (T_IMG_.top === BOX_.top) {
    const left = T_IMG_.left - Math.abs(T_IMG_.diffW)
    let l = 0

    if (left >= 0) l = Math.abs(T_IMG_.diffW)
    if (left <= T_IMG_.diffW * 2) l = T_IMG_.diffW
    
    if (l) {
      T_IMG.style.transform = `translate3d(${l}px, 0px, 0)`
      DRAG.xx     = l
      T_IMG_.left = l
    }

    CTX_DRAW.x = T_IMG_.left - BOX_.left === T_IMG_.diffW ? T_IMG_.left - BOX_.left : T_IMG_.left - Math.abs(T_IMG_.diffW)
  }
}