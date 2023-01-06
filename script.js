        
    
const cellElements = document.querySelectorAll(".cell");     
const openModalButton = document.querySelectorAll(".open-modal-btn");
const closeModalButton = document.querySelectorAll(".close-modal-btn");
const modal = document.querySelectorAll("#modal");
const overlay = document.querySelector("#overlay");


const openModalObjKeys = Object.keys(openModalButton);

    
const openModalButtonArray = openModalObjKeys.toString().split(",");

  
openModalButtonArray.forEach((el, index) => {                        
  openModalButton[index].addEventListener("click", () => {        
    modal[index].classList.add("open")
    overlay.classList.add("open")
  })
})


for ( let i = 0; i < closeModalButton.length; i++) {           
  closeModalButton[i].addEventListener("click", closeModal)  
}
    
 
overlay.addEventListener("click", closeModal)       

function closeModal() {                             
  for (let i = 0; i < modal.length; i++ ){
    modal[i].classList.remove("open")
  }
  modal[6].classList.remove("open") 

  overlay.classList.remove("open")                 
}

 





