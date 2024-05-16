const html = document.documentElement
import * as sounds from './sounds.js'
import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function tree(){
  html.classList.add("tree")
  html.classList.remove("rain")
  html.classList.remove("flame")
  html.classList.remove("coffee")

  state.isMute = document.documentElement.classList.toggle("music-on")
  if(state.isMute){
    sounds.rainAudio.pause()
    sounds.flameAudio.pause()
    sounds.coffeeAudio.pause()
    sounds.treeAudio.play()
    return
  }
  sounds.treeAudio.pause()

}
export function rain(){
  html.classList.add("rain")
  html.classList.remove("flame")
  html.classList.remove("coffee")
  html.classList.remove("tree")

  state.isMute = document.documentElement.classList.toggle("music-on")
  if(state.isMute){
    sounds.coffeeAudio.pause()
    sounds.flameAudio.pause()
    sounds.treeAudio.pause()
    sounds.rainAudio.play()
    return
  }
  sounds.rainAudio.pause()
}

export function flame(){
  html.classList.add("flame")
  html.classList.remove("rain")
  html.classList.remove("coffee")
  html.classList.remove("tree")

  state.isMute = document.documentElement.classList.toggle("music-on")
  if(state.isMute){
    sounds.rainAudio.pause()
    sounds.coffeeAudio.pause()
    sounds.treeAudio.pause()
    sounds.flameAudio.play()
    return
  }
  sounds.flameAudio.pause()
}

export function coffee(){
  html.classList.add("coffee")
  html.classList.remove("flame")
  html.classList.remove("rain")
  html.classList.remove("tree")

  state.isMute = document.documentElement.classList.toggle("music-on")
  if(state.isMute){
    sounds.rainAudio.pause()
    sounds.flameAudio.pause()
    sounds.treeAudio.pause()
    sounds.coffeeAudio.play()
    return
  }else{
    sounds.coffeeAudio.pause()
  }
  
}

export function play(){
  state.isRunning = document.documentElement.classList.toggle("isRunning")
  timer.countDown()
}

export function reset(){
  console.log("resetou")
  state.isRunning = false
  timer.updateDisplay()
}

export function add(){
  timer.updateDisplay(Number(el.minutes.textContent) + 5)
}

export function minus(){
  timer.updateDisplay(Number(el.minutes.textContent) - 5)
}