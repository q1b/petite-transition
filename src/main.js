import { createApp } from 'petite-vue'
import { AnimateOnEnter, AnimateOnLeave } from './directives/vOnAnimate.js'  
import { myTransition } from './directives/ClsTransition.js'
import { visible ,enter , enterFrom, enterTo, leave, leaveFrom, leaveTo } from './directives/transition.js'
// register the directive
createApp().directive('visible',visible).directive('enter',enter).directive('enter-from',enterFrom).directive('enter-to',enterTo).directive('leave',leave).directive('leave-from',leaveFrom).directive('leave-to',leaveTo)  .directive('c-transition', myTransition).directive('on-enter',AnimateOnEnter).directive('on-leave',AnimateOnLeave).mount()