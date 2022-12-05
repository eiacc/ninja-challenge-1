let hero = document.getElementById('hero').parentElement;
let countStep = 0
let x = 135
let y = 75

function updatePos() {
    hero.style.left = `${x}px`
    hero.style.top = `${y}px`
}



document.addEventListener('keydown', (e) => {
    // countStep
    // if step % 2 == 0, change image to (down2) else image set to (down1) [keycodes 40 and 38]
    // if step % 2 == 0, change image to (top2) else image set to (top1) [keycodes 40 and 38]
    // if step % 2 == 0, change image to (left2) else image set to (left1) [keycodes 40 and 38]
    // if step % 2 == 0, change image to (right2) else image set to (right1) [keycodes 40 and 38]

    countStep = countStep + 1
    // console.log('steps taken: ', countStep)
    
    if (e.keyCode === 40) {
        /*
            if condition is true, log 'you hit the boundary' & y stays the same
            else condition if false, log 'pressed ~> [name_of_the_key](specifically the arrow(s) key)' & keep doing this operation 'y + 70'

            optimized solution by not using if else statement
            y = y >= 280 ? y : y + 15
        */

        if(y >= 280) {
            y = y
            console.log(`you hit the boundary`)
        } else {
            console.log(`pressed ~> ${e.key}`)
            y = y + 15
            countStep % 2 === 0 ? hero.firstElementChild.src = `./assets/img/down2.png` : hero.firstElementChild.src = `./assets/img/down1.png`
        }
    } else if (e.keyCode === 38) {
        /*
            optimized solution by not using if else statement
            y = y <= 0 ? y : y - 15
        */

        if (y <= 0) {
            y = y
            console.log(`you hit the boundary`)
        } else {
            console.log(`pressed ~> ${e.key}`)
            y = y - 15
            countStep % 2 === 0 ? hero.firstElementChild.src = `./assets/img/top2.png` : hero.firstElementChild.src = `./assets/img/top1.png`          
        }
    } else if (e.keyCode === 37) {
        /*
            optimized solution by not using if else statement
            x = x <= 0 ? x : x - 15
        */

        if(x <= 0 ) {
            x = x
            console.log(`you hit the boundary`)
        } else {
            console.log(`pressed ~> ${e.key}`)
            x = x - 15   
            countStep % 2 === 0 ? hero.firstElementChild.src = `./assets/img/left2.png` : hero.firstElementChild.src = `./assets/img/left1.png`
        }
    } else if (e.keyCode === 39) {
        /*
            optimized solution by not using if else statement
            x = x >= 280 ? x : x + 15
        */

        if(x >= 280) {
            x = x
            console.log(`you hit the boundary`)
        } else {
            console.log(`pressed ~> ${e.key}`)
            x = x + 15
            countStep % 2 === 0 ? hero.firstElementChild.src = `./assets/img/right2.png` : hero.firstElementChild.src = `./assets/img/right1.png` 
        }
    } else {        
        console.log('key ' + e.key   + ' is not recognized')
    }

    updatePos()
})

setInterval(() => {
    console.clear()
    console.log('successfully cleaned up!')
}, 5_000) // clears console after 15 seconds