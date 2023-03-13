const input = document.querySelector('#CPF');

input.addEventListener('keypress', function(event) {
  if (event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
});

document.getElementById("author").onclick = function() {
  var input = document.createElement("input");
  input.className = "input-group-text";
  input.placeholder = "Autor"
  document.getElementById("main").appendChild(input);
}
const second_page = document.querySelector('.second_page')
const main = document.querySelector('.main')
const button = document.querySelector('#continue')
button.addEventListener('click',  async ()=>{
  await gsap.fromTo(".main", {x:0},{x:500, duration:1, opacity:0})
  main.style.display = 'none'
  second_page.style.display = 'flex'
  await gsap.fromTo(".second_page", {x:-500}, {x:0, duration:1, }) 
})

