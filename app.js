let starsArr = Array.from(document.getElementsByTagName('i'))
let backgroundS = document.getElementById('contenedor');

starsArr.forEach((star, actualIndex) => {
    star.addEventListener('click', () => {
        removeRating();
        starsArr.forEach((otraStar, reIndex) => {
            if(reIndex <= actualIndex) {
                otraStar.classList.add('rated');
                console.log()
            }
        });
    });
});

function removeRating () {
    starsArr.forEach((staR) => {
        staR.classList.remove('rated');
    })
}

document.addEventListener("mousedown", (event) => {
    if (!backgroundS.contains(event.target)) {
        removeRating();
    }
  });