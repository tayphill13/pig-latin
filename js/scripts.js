// business logic
var letters = includes("q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m");
console.log(letters);



//user interface logic

$(document).ready(function() {
  $("form#pig").submit(function(event) {
    event.preventDefault();
  })
})