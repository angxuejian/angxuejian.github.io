
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

  let top  = parseFloat(DRAG.moveY) - parseFloat(DRAG.startY)
  let left = parseFloat(DRAG.moveX) - parseFloat(DRAG.startX)


  DRAG.yy = top
  DRAG.xx = left 
 
  // 当宽度相等时、左右不可移动
  if (T_IMG_.left === BOX_.left && T_IMG_.scale === 1) {
    left = 0
    CTX_DRAW.x = 0
  } else T_IMG_.left = left 

  // 当高度相等时、上下不可移动
  if (T_IMG_.top === BOX_.top && T_IMG_.scale === 1) {
    top = 0
    CTX_DRAW.y = 0
  } else T_IMG_.top  = top
 
  T_IMG.style.transform = `translate3d(${left}px, ${top}px, 0) scale(${T_IMG_.scale})`
}


/**
 * 单指拖动事件 - 结束
 * 超出边界后 回退至边界
 */
function dragEnd() {
    const top  = T_IMG_.top  - Math.abs(T_IMG_.diffH)
    const left = T_IMG_.left - Math.abs(T_IMG_.diffW)

    let t = 0
    let l = 0

    if (top >= 0) t = Math.abs(T_IMG_.diffH)
    if (top <= T_IMG_.diffH * 2) t = T_IMG_.diffH

    if (left >= 0) l = Math.abs(T_IMG_.diffW)
    if (left <= T_IMG_.diffW * 2) l = T_IMG_.diffW

    if (t) {
      DRAG.yy    = t
      T_IMG_.top = t
    }

    if (l) {
      DRAG.xx     = l
      T_IMG_.left = l
    }

    if (t || l) {
      T_IMG.style.transform = `translate3d(${l}px, ${t}px, 0) scale(${T_IMG_.scale})`
    }

    CTX_DRAW.y = T_IMG_.top - BOX_.top === T_IMG_.diffH ? T_IMG_.top - BOX_.top : T_IMG_.top - Math.abs(T_IMG_.diffH)
    CTX_DRAW.x = T_IMG_.left - BOX_.left === T_IMG_.diffW ? T_IMG_.left - BOX_.left : T_IMG_.left - Math.abs(T_IMG_.diffW)

}