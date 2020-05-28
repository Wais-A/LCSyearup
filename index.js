

// using the document.querySelectorAll select every select class you choose

let all = document.querySelectorAll('.inst')


// this turns them into a javascript array
all = Array.prototype.slice.call(all)




// map loops over all of the and lets you control them with little code
const team = all.map(inst => {
 return inst.addEventListener('click', ()=>{
  inst.classList.toggle('increase')
 })
})







// these are the styles I added, change  to your liking

//  .team, .inst{
//  width: 100 %;
//  height: 100 %;
//  transition - duration: .5s;
// }

//   .increase{
//  transition - duration: .5s;
//  width: 350px!important;
//  height: 200 % !important;
//  box - sizing: border - box;
// }