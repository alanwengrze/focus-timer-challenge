import * as el from "./elements.js"
import * as actions from "./actions.js"

export function toggleAppearance(){
  el.appearance.addEventListener("click", (event)=>{
    const action = event.target.dataset.appearance
    actions[action]()
  })

}