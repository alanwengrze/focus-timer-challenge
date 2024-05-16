import state from "./state.js"
import * as el from "./elements.js"
import { toggleAppearance } from "./toggleAppearence.js"
import * as events from "./events.js"
import * as timer from "./timer.js"
export function start(minutes, seconds){
  events.registerControls()
  toggleAppearance()
  timer.updateDisplay()
}