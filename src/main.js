import { createApp } from 'petite-vue'
import '../style.css'
import { visible ,enter , enterFrom, enterTo, leave, leaveFrom, leaveTo } from './directives/transition.js'
// register the directive
createApp().directive('visible',visible).directive('enter',enter).directive('enter-from',enterFrom).directive('enter-to',enterTo).directive('leave',leave).directive('leave-from',leaveFrom).directive('leave-to',leaveTo).mount()