var activetablinks=document.querySelectorAll(".slider .nav-link.active img");

activetablinks.forEach((img)=>{
  var link=img.getAttribute('src');
  link=link.replace('B.png','W.png');
  img.src=link;

});

var tabEls = document.querySelectorAll('.slider .nav-link[data-bs-toggle="tab"]');
tabEls.forEach((tabEl)=>{
  
tabEl.addEventListener('shown.bs.tab', function (event) {


 var prevlink=event.relatedTarget.getAttribute('href');
 var prevtab=document.querySelectorAll(`.slider a[href="${prevlink}"]`);
 prevtab.forEach((tab)=>{
  tab.classList.remove('active');
})

// prevtab=document.querySelectorAll(`.slider a[href="${prevlink}"] img`);
prevtab.forEach((tab)=>{
  let img=tab.children[0];
  let link=img.getAttribute('src');
  link=link.replace('W.png','B.png');
  img.src=link;

})


 let currentlink=event.target.getAttribute('href');
 let currenttab=document.querySelectorAll(`.slider a[href="${currentlink}"]`);
 currenttab.forEach((tab)=>{
   tab.classList.add('active');
 })


  // currenttab=document.querySelectorAll(`.slider a[href="${currentlink}"] img`);
  currenttab.forEach((tab)=>{
    let img=tab.children[0];
    let link=img.getAttribute('src');
    link=link.replace('B.png','W.png');
    img.src=link;

  })

  





});



});



