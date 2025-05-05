const lightDark = document.getElementById('darkLight'),
    github = document.getElementById('github'),
    popup = document.getElementById('popup'),
    active = document.getElementById('active'),
    menu = document.getElementById('menu_bar'),
    closedropDownBar = document.getElementById('closelist'),
    list = document.getElementById('list'),

    openModal = document.querySelectorAll('[id^="openModal-"]'),
    modal = document.getElementById('modal'),
    search = document.getElementById('openModal-2'),
    search2 = document.getElementById('openModal-3'),
    menubelow = document.querySelectorAll('#menubelow'),
    navbar = document.getElementById('navbar'),
    theMain = document.getElementById('the-main')

image1 = '../image/moon.png',
    image2 = '../image/sun.png',
    image3 = '../image/githubw.png',
    image4 = '../image/github.png',
    image5 = '../image/menu.png',
    image6 = '../image/menuB.png',
    image7 = '../image/cross.png',
    image8 = '../image/search.png',
    image9 = '../image/searchleft.png',
    image10 = '../image/searchB.png'


function lightDarkToggle() {
    document.body.classList.toggle('darkmode')
    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('mode', 'dark')
        lightDark.src = image2
        github.src = image4
        search.src = image10
        search2.src = image10
        popup.classList.add('show', 'rotated')
        setTimeout(() => {
            popup.classList.remove('rotated')
        }, 1000)
        setTimeout(() => {
            popup.classList.remove('show',)
        }, 11000)
    } else {
        localStorage.setItem('mode', 'light')
        lightDark.src = image1
        github.src = image3
        search.src =image8
        search2.src =image9
        popup.classList.add('show')
        // popup.textContent = 'Lightmode activated'
        setTimeout(() => {
            popup.classList.remove('show')
        }, 60)
    }

}



lightDark.addEventListener('click', lightDarkToggle)

const savemode = localStorage.getItem('mode')

if (savemode === 'dark') {
    document.body.classList.add('darkmode')
    lightDark.src = image2

    closedropDownBar.style.display = 'none'
} else {
    document.body.classList.remove('darkmode')
    lightDark.src = image1

    closedropDownBar.style.display = 'none'
}
// if (window.innerWidth <= 960) {
//     document.querySelectorAll('.closemenu').forEach(el => el.style.display = 'none')
    // document.querySelectorAll('closemenu').forEach(el => el.style.display)
// } else {
//     document.querySelectorAll('.closemenu').forEach(el => el.style.display = 'flex')
// }

function handleResize() {
    const isSmallScreen = window.innerWidth <= 960;
    document.querySelectorAll('.menuB').forEach(el => el.style.display = 'none')


    document.querySelectorAll('.closemenu').forEach(el => {
        if (isSmallScreen) {
            el.style.display = 'none'
        } else {
            el.style.display = 'flex'
        }
    });


    if (isSmallScreen) {
        menu.addEventListener('click', toggle);
    } else {
        menu.removeEventListener('click', toggle);
    }
}

window.addEventListener('resize', handleResize);
handleResize(); 


function toggle() {
    if (window.innerWidth > 960) return
    const image = menu.src,
        children = document.querySelectorAll('#hell .closemenu, #list .closemenu')
    if (image.includes('menu.png')) {
        menu.src = image7
        navbar.classList.add('navmenu')
        theMain.style.display = "none"
        children.forEach(child => {
            child.style.display = 'flex';
            menubelow.forEach(child =>[
                child.style.display = 'flex'
            ])
        })
    } else {
        menu.src = image5
        navbar.classList.remove('navmenu')
        menu.classList.add('main')

        theMain.style.display = "flex"

        children.forEach(child => {
            child.style.display = 'none'
        })
        menubelow.forEach(child =>[
            child.style.display = 'none'
        ])

    }
}
menu.addEventListener('click', toggle)

// modal
openModal.forEach(search => {
    search.addEventListener('click', function () {
        modal.style.display = 'block'
    })
})
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})
