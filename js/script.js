var idea = document.getElementById('idea')
  
function ideaGenerator(){
  var randNum = Math.floor(Math.random() * ideas.length)
   let id = ideas.map(i => {
     if(i.site !== "" || null){
       return `<a href=${i.site}>${i.name}</a>`
     } else {
       return `<p>${i.name}</p>`
     }
   })
   idea.innerHTML = id[randNum];
 }