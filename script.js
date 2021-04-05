var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");

var counter = 0
var count = document.createElement("h3")

var pages = [
  {
    title: "Home",
    content: "Welcome to my site!"
  },
  {
    title: "About",
    content: "My name is Taylor"
  },
  {
    title: "Interact",
    content: ""
  }
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title)
  })
  this.button.innerHTML = pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg!=="Interact"){
    display.innerHTML= "";
    var top = document.createElement("h1");
    var body = document.createElement("h3");
    top.innerHTML= pg;
    body.innerHTML= stuff;
    display.appendChild(top);
    display.appendChild(body);
  }else{
    writePage()
    count.style.color = "red";
  }
  
}

function counterIncrease(clicked){
  counter = counter + 1
  count.innerHTML = "Counter: " + counter 
}

function writePage(){
  display.innerHTML= "";
  var heading = document.createElement("h1")
  heading.innerHTML = "Interact"
  display.appendChild(heading);
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
    counterIncrease()
  });
  this.button.innerHTML = "Increase Counter"
  count.innerHTML = "Counter: " + counter
  display.appendChild(count)
  display.appendChild(this.button)
}

writeStuff(pages[0].content, "Home");
display.style.color = "purple"