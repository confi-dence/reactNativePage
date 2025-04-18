const modal = document.getElementById('myModal'),
 openmodal = document.querySelectorAll('[id^="open-modal-"]'); 
closedmodal = document.getElementById('close-modal'),
 ModeToggle = document.getElementById('modeToggle'),
 githuB = document.getElementById('github'),
openmenu = document.getElementById('open-menu'),
newid = document.getElementById('newid'),


menu = document.getElementById('menu'),
closemenu = document.getElementById('closemenu'),
navbar = document.getElementById('navbar')


 image1 = '../image/moon.png',
 image2 = '../image/sun.png', 
 image3 = '../image/github.png',
 image4 = '../image/githubw.png'; 
 image5 = '../image/menu.png',
 image6 = '../image/menuB.png'; 
 image7 = '../image/cross.png'

openmenu.id = 'newid'
function toggleMode() {
    document.body.classList.toggle('darkmode')
    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('mode+', 'dark')
        ModeToggle.src = image2
        githuB.src= image3
    }else{
        localStorage.setItem('mode', 'light')
        ModeToggle.src = image1
        githuB.src = image4
        // openmenu.src = image5
        openmenu.src = image5
    }
}

const savemode = localStorage.getItem('mode')
if(savemode === 'dark'){
    document.body.classList.add('darkmode')
    ModeToggle.src = image2
    githuB.src= image3
    openmenu.src = image6
}else{
    document.body.classList.remove('darkmode')
    ModeToggle.src = image1
    githuB.src = image4
    openmenu.src = image5
}

ModeToggle.addEventListener('click', toggleMode)
openmodal.forEach(imgbutton => {
    imgbutton.addEventListener('click', function () {
        modal.style.display = 'block' 
    })
})
closedmodal.addEventListener('click', function () {
    modal.style.display = 'none'
})
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})

openmenu.addEventListener('click', function () {
    menu.style.display= 'block'

    localStorage.setItem('menuset', 'menu')
})
closemenu.addEventListener('click', function () {
    menu.style.display = 'none'
    localStorage.setItem('menuset', 'cross')


})
window.addEventListener('click', function (events) {
    if (events.target === menu) {
        menu.style.display = 'none'
        localStorage.setItem('menuset', 'cross')

    }
})


function  imagetoggle(){
    const currentSrc = openmenu.src;
   
    if(currentSrc.includes('menu.png')){
        localStorage.setItem('menuset', 'menu')
        openmenu.src = image7
        menu.appendChild(closemenu)
        navbar.classList.add('navmenu')
    }else {
        localStorage.setItem('menuset', 'cross')
        openmenu.src = image5
        navbar.classList.remove('navmenu')
        menu.removeChild(closemenu)
    }
}
openmenu.addEventListener('click', imagetoggle )
 


// function toggleMode() {
//     document.body.classList.toggle('darkmode')
//     if (document.body.classList.contains('darkmode')) {
//         localStorage.setItem('mode', 'dark')
        
//     }else{
//         localStorage.setItem('mode', 'light')
     
//     }
// }
// menu.addEventListener('click', function () {
//     if (navbar.classList.contains('navmenu')) {
//         navbar.classList.remove('navmenu')
//     }else(
//         navbar.classList.add('navmenu')
//     )
// })
// openmenu.addEventListener('click', function () {
//     // Get the full path of the current image
//     const currentSrc = openmenu.src;

//     // Compare the full path with the full path of image5 and image7
//     if (currentSrc.includes('menu.png')) { // Check if the current image is menu.png
//         openmenu.src = image7; // Change to cross.png
//     } else {
//         openmenu.src = image5; // Change back to menu.png
//     }
// });


 