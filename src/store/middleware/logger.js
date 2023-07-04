/* 
middleware拓展了redux dispatch函数的功能
一个记录了dispatch的action和得到新的state的middleware
*/
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatch',action)
  let result = next(action)
  console.log('next state',store.getState())
  console.groupEnd()
  return result
}
export default logger