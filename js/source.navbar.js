const navshow =() => {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav-links');
    const line = document.querySelector('.line');

    toggle.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        line.classList.toggle('nav-active');
    });
}
navshow();