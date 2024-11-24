//console.log('Hello World!');
var btn=document.querySelector('.nav_btn');
var ulist=document.querySelector('.ull');
var li=document.querySelectorAll('.lii');


btn.addEventListener('click',function(){
  
 if(ulist.classList.contains('ull'))
 {
   ulist.classList.remove('ull');
   ulist.classList.add("ul_visible");
   console.log(ulist.classList);

 }
 else{
   
   ulist.classList.remove('ul_visible');
   ulist.classList.add('ull');
 }
  
  li.forEach(function(indi){
    
    indi.addEventListener('click',function(){
      
       ulist.classList.remove('ul_visible');
       ulist.classList.add('ull');
    });
    
  });
  
  
 console.log(li.length) ;
  
  
  
  
});
