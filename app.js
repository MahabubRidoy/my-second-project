const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header, nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header, nav-bar .nav-list ul a');
const header = document.querySelector('.header.container');
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
})
document.addEventListener('scroll',()=>{
    var scroll_position = windo.scrollY;
    if(scroll_position > 250){
        header.style.backgroundcolor = '#49323c';
    }
    else{
        header.style.backgroundcolor = 'transparent';
    }
});
menu_item.foreach(item) => {
    item.addEventlistner('click',()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toogle('active');
    });
});