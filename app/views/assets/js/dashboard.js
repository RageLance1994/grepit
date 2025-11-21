var nav_toggles = document.querySelector('.sidebar').querySelectorAll('.sidebar-item');
var breadcrumb_scroller = document.querySelector('#breadcrumb-scroller');
nav_toggles.forEach((x) => {
    x.addEventListener('click',switchSection)
})


async function switchSection(ev){
    var idx = [...nav_toggles].indexOf(ev.currentTarget);
    var scroll = `translateY(${-100 / nav_toggles.length * (idx)}%)`
    console.log(scroll,breadcrumb_scroller);
    breadcrumb_scroller.style.transform = scroll;
    

}