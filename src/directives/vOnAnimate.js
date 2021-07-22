
function animent(id,keyframes,options){
  let obj = document.getElementById(id).animate(keyframes,options)
  setTimeout(()=>{
    obj.commitStyles()
  },options.duration-1)
}

export const AnimateOnEnter = (ctx) => {
  const { id, keyframes, options } = ctx.get()
  ctx.el.onclick = () => {
    animent(id, keyframes, options)
  }
}

export const AnimateOnLeave = (ctx) => {
  const { id, keyframes, options } = ctx.get()
  ctx.el.onclick = () => {
    animent(id, keyframes, options)
  }
}