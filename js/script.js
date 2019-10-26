  var idea = document.getElementById('idea')
  var button = document.getElementById('button')
  
 function myFun(){
    // button.addEventListener('click', function(){
        var randNum = Math.floor(Math.random() * ideas.length)
        idea.innerText = ideas[randNum]
    //   })
  }
  