'use strict'

{
  const button = document.getElementById('modalButton');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const closeButton = document.getElementById('closeButton');


  button.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  })

  closeButton.addEventListener('click', () =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  })







  const loadingButton = document.getElementById('loadingButton');


  loadingButton.addEventListener('click',() =>{
  })
}