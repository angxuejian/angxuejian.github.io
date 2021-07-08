
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

  T_IMG_.top  = top
  T_IMG_.left = left 

 
  // if (left === 0) 
  T_IMG.style.transform = `translate3d(${left}px, ${top}px, 0)`
//   T_IMG.style.top  = `${T_IMG_.top}px`
//   T_IMG.style.left = `${T_IMG_.left}px`
}