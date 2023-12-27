import { loadTrophies, newTrophy } from "./socket.js"
import { handleSubmit, readTrophies, progressbar } from "./UI.js"


newTrophy(readTrophies)
loadTrophies(readTrophies)

export const trophyList = document.querySelector('#trophies')
export const trophyForm = document.querySelector('#form')
trophyForm.addEventListener('submit', handleSubmit)
