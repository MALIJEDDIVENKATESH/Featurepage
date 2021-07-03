var activetablinks=document.querySelectorAll(".count .nav-link.active img");

activetablinks.forEach((img)=>{
  var link=img.getAttribute('src');
  link=link.replace('B.svg','W.svg');
  img.src=link;

});

var tabEls = document.querySelectorAll('.count .nav-link[data-bs-toggle="tab"]');
tabEls.forEach((tabEl)=>{
  
tabEl.addEventListener('shown.bs.tab', function (event) {


 var prevlink=event.relatedTarget.getAttribute('href');
 var prevtab=document.querySelectorAll(`.count a[href="${prevlink}"]`);
 prevtab.forEach((tab)=>{
  tab.classList.remove('active');
})

prevtab=document.querySelectorAll(`.count a[href="${prevlink}"] img`);
prevtab.forEach((img)=>{
  var link=img.getAttribute('src');
  link=link.replace('W.svg','B.svg');
  img.src=link;

})


 var currentlink=event.target.getAttribute('href');
 var currenttab=document.querySelectorAll(`.count a[href="${currentlink}"]`);
 currenttab.forEach((tab)=>{
   tab.classList.add('active');
 })


  currenttab=document.querySelectorAll(`.count a[href="${currentlink}"] img`);
  currenttab.forEach((img)=>{
    var link=img.getAttribute('src');
    link=link.replace('B.svg','W.svg');
    img.src=link;

  })

  





});



});



