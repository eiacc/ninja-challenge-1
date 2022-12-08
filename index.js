let hero = document.getElementById('image__case')
const innerDiv = document.createElement('div')
innerDiv.classList.add('down1')
hero.appendChild(innerDiv)
console.log(hero)
let countStep = 0
let x = 135
let y = 75

function updatePos() {
    innerDiv.style.left = `${x}px`
    innerDiv.style.top = `${y}px`
}

document.addEventListener('keyup', (e) => {
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
            if(countStep % 2 === 0) {
                innerDiv.className = ''
                innerDiv.classList.add('down2')
            } else {
                innerDiv.className = ''
                innerDiv.classList.add('down1')
            }
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
            // countStep % 2 === 0 ? hero.firstElementChild.src = `./assets/img/top2.png` : hero.firstElementChild.src = `./assets/img/top1.png`    
            if (countStep % 2 === 0) {
                innerDiv.className = ''
                innerDiv.classList.add('top2')
            } else {
                innerDiv.className = ''
                innerDiv.classList.add('top1')
            }      
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
            if (countStep % 2 === 0) {
                innerDiv.className = ''
                innerDiv.classList.add('left2')
            } else {
                innerDiv.className = ''
                innerDiv.classList.add('left1')
            } 
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
            if (countStep % 2 === 0) {
                innerDiv.className = ''
                innerDiv.classList.add('right2')
            } else {
                innerDiv.className = ''
                innerDiv.classList.add('right1')
            }  
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