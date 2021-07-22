
// Directive to make transitions with css animations
export const myTransition = (ctx) => {
  const { cls, from, to } = ctx.get()
  // the element the directive is on
  // console.log(ctx.get()) // { cls:'' , from:'' , to:'' }
  ctx.el.classList = [cls]
  // console.log(ctx)
  ctx.el.onclick = ()=>{
    if(ctx.el.classList.contains(...from.split(' '))){
      ctx.el.classList.remove(...from.split(' '))
      ctx.el.classList.add(...to.split(' '))
      // console.log(ctx.el.classList)
    }else{
      ctx.el.classList.remove(...to.split(' '))
      ctx.el.classList.add(...from.split(' '))
      // console.log(ctx.el.classList)
    }
  } 
  // run reactive effect
  ctx.effect(() => {
    // this will re-run every time the get() value changes
    // console.log('El()Element: \n',ctx.el,' \n Argument \n',ctx.arg,'\n Modifiers \n',ctx.modifiers,'\n Get \n',ctx.get())
  })

  return () => {
    // cleanup if the element is unmounted
  }
}
