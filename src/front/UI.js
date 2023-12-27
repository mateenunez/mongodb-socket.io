import { trophyForm, trophyList} from "./main.js"
import { saveTrophy, deleteTrophy, completeTrophy } from "./socket.js"

var total = 45;
var done = 32;

export const handleSubmit = (e) => {
    saveTrophy(trophyForm['title'].value, trophyForm['description'].value, trophyForm['imgUrl'].value, trophyForm['date'].value)
    console.log("Trophy submitted...")
}

export const handleDelete = (e) => {
    e.preventDefault()
    deleteTrophy(e.target.id)
    console.log("Deleting trophy...")
}

export const handleComplete = (e) =>{
  e.preventDefault()
  completeTrophy(e.target.id)
  progressbar()

}

const readTrophy = trophy => {
    const div = document.createElement("div")
    div.innerHTML = `<div class="card mb-3" style="max-height:280px; width:430px; min-height:215px">
    <div class="row g-0">
      <div class="col-md-2">
        <img src="${trophy.imgUrl}" alt="${trophy.title}" class="img-fluid rounded-start" >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> ${trophy.title} </h5>
          <p class="card-text">${trophy.description}</p>
          <p class="card-text"><small class="text-body-secondary">Estado: ${ (trophy.status) ? ('completo'):('incompleto')}</small></p>
          ${(trophy.date) ? (`<p class="card-text"><small class="text-body-secondary">Fecha objetivo: ${(trophy.date).slice(0,10)}</small></p>`) : ('')}
          ${(trophy.status) ? (`<p class="card-text"> Fecha completado: ${trophy.dateCompleted}</p>`):('')}
          </div>
          ${(trophy.status) ? ("") : (`<button class="btn btn-outline-success btn-sm" id="${trophy._id}"> Completar </button>`)}
          
          <button class="btn btn-outline-danger btn-sm" id="${trophy._id}"> Eliminar </button>
      </div>
    </div>
  </div>`;

    const btncomplete = div.querySelector(".btn-outline-success")
    if (btncomplete) btncomplete.addEventListener("click", handleComplete)
   

    const btndelete = div.querySelector(".btn-outline-danger")
    btndelete.addEventListener("click", handleDelete)

  
    return div
}

export const readTrophies = trophies => {
    trophyList.innerHTML = "";
    trophies.forEach(trophy => {
    if (trophy.status){done = done + 1}
    trophyList.append(readTrophy(trophy))   
    })
    progressbar()
}

export const progressbar = () => {
  
  var progress = (done*100)/total;
  console.log(`progress: ${progress}`)
  const div = document.getElementById("progress-ui")
  div.style = `width: ${progress}%`;
  
  const display = document.getElementById("display")
  display.innerHTML = `${Math.trunc(progress)}%`
  
}