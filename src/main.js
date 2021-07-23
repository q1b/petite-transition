import { createApp } from 'petite-vue'
import css from '../style.css'
import { state } from './directives/transition.js'
// register the directive
createApp().directive('state',state).mount()