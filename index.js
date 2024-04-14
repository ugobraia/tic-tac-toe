const startGameBtn = document.getElementById('startGameBtn')
const command = document.getElementById('command')
const board = document.querySelectorAll('.boardTile')
const restartBtn = document.getElementById('restartBtn')
const themeSwitcher = document.getElementById('themeSwitcher')
const main = document.querySelector('main')

const btn11 = document.getElementById('btn11')
const btn12 = document.getElementById('btn12')
const btn13 = document.getElementById('btn13')
const btn21 = document.getElementById('btn21')
const btn22 = document.getElementById('btn22')
const btn23 = document.getElementById('btn23')
const btn31 = document.getElementById('btn31')
const btn32 = document.getElementById('btn32')
const btn33 = document.getElementById('btn33')

let player1 = ''
let player2 = ''
let turn = 0

startGameBtn.addEventListener('click', function(ev){
    player1 = document.getElementById('player1').value
    player2 = document.getElementById('player2').value

    if(player1 == '' || player2 == ''){
        command.innerText = 'Please enter the players names!'
        return
    }

    board.forEach(function(button){
        button.removeAttribute('disabled')
    })

    document.getElementById('player1').setAttribute('disabled', true)
    document.getElementById('player2').setAttribute('disabled', true)
    ev.currentTarget.setAttribute('disabled', true)
    console.log(player1)
    console.log(player2)
    changeTurn()
})

function changeTurn(){
    if (turn == 0){
        turn = 1
        command.innerText = player1 + "'s turn"
        return
    }

    if(turn == 1){
        turn = 2
        command.innerText = player2 + "'s turn"
    } else {
        turn = 1
        command.innerText = player1 + "'s turn"
    }
    console.log('turn changed: '+ turn)
}

board.forEach(function(button){
    button.addEventListener('click', function(ev){
        button.innerText = putXO()
        button.setAttribute('disabled', true)
        changeTurn()
        checkWinner()
    })
})

function putXO(){
    if(turn == 1){
        return 'X'
    } else {
        return 'O'
    }
}

function checkWinner(){
    // Check rows
    line1 = btn11.innerText + btn12.innerText + btn13.innerText
    line2 = btn21.innerText + btn22.innerText + btn23.innerText
    line3 = btn31.innerText + btn32.innerText + btn33.innerText

    row1 = btn11.innerText + btn21.innerText + btn31.innerText
    row2 = btn12.innerText + btn22.innerText + btn32.innerText
    row3 = btn13.innerText + btn23.innerText + btn33.innerText

    diag1 = btn11.innerText + btn22.innerText + btn33.innerText
    diag2 = btn13.innerText + btn22.innerText + btn31.innerText

    if(line1 == 'XXX' || line2 == 'XXX' || line3 == 'XXX' || row1 == 'XXX' || row2 == 'XXX' || row3 == 'XXX' || diag1 == 'XXX' || diag2 == 'XXX'){
        command.innerText = player1 + ' wins!'
        if(line1 == 'XXX'){
            btn11.classList.add('winner')
            btn12.classList.add('winner')
            btn13.classList.add('winner')
        }
        if(line2 == 'XXX'){
            btn21.classList.add('winner')
            btn22.classList.add('winner')
            btn23.classList.add('winner')
        }
        if(line3 == 'XXX'){
            btn31.classList.add('winner')
            btn32.classList.add('winner')
            btn33.classList.add('winner')
        }
        if(row1 == 'XXX'){
            btn11.classList.add('winner')
            btn21.classList.add('winner')
            btn31.classList.add('winner')
        }
        if(row2 == 'XXX'){
            btn12.classList.add('winner')
            btn22.classList.add('winner')
            btn32.classList.add('winner')
        }
        if(row3 == 'XXX'){
            btn13.classList.add('winner')
            btn23.classList.add('winner')
            btn33.classList.add('winner')
        }
        if(diag1 == 'XXX'){
            btn11.classList.add('winner')
            btn22.classList.add('winner')
            btn33.classList.add('winner')
        }
        if(diag2 == 'XXX'){
            btn13.classList.add('winner')
            btn22.classList.add('winner')
            btn31.classList.add('winner')
        }
        board.forEach(function(button){
            button.setAttribute('disabled', true)
        })
        restartBtn.removeAttribute('disabled')
        return true
    }

    if(line1 == 'OOO' || line2 == 'OOO' || line3 == 'OOO' || row1 == 'OOO' || row2 == 'OOO' || row3 == 'OOO' || diag1 == 'OOO' || diag2 == 'OOO'){
        command.innerText = player2 + ' wins!'
        if(line1 == 'OOO'){
            btn11.classList.add('winner')
            btn12.classList.add('winner')
            btn13.classList.add('winner')
        }
        if(line2 == 'OOO'){
            btn21.classList.add('winner')
            btn22.classList.add('winner')
            btn23.classList.add('winner')
        }
        if(line3 == 'OOO'){
            btn31.classList.add('winner')
            btn32.classList.add('winner')
            btn33.classList.add('winner')
        }
        if(row1 == 'OOO'){
            btn11.classList.add('winner')
            btn21.classList.add('winner')
            btn31.classList.add('winner')
        }
        if(row2 == 'OOO'){
            btn12.classList.add('winner')
            btn22.classList.add('winner')
            btn32.classList.add('winner')
        }
        if(row3 == 'OOO'){
            btn13.classList.add('winner')
            btn23.classList.add('winner')
            btn33.classList.add('winner')
        }
        if(diag1 == 'OOO'){
            btn11.classList.add('winner')
            btn22.classList.add('winner')
            btn33.classList.add('winner')
        }
        if(diag2 == 'OOO'){
            btn13.classList.add('winner')
            btn22.classList.add('winner')
            btn31.classList.add('winner')
        }

        board.forEach(function(button){
            button.setAttribute('disabled', true)
        })
        restartBtn.removeAttribute('disabled')
        return true
    }

    if(btn11.innerText != '' && btn12.innerText != '' && btn13.innerText != '' && btn21.innerText != '' && btn22.innerText != '' && btn23.innerText != '' && btn31.innerText != '' && btn32.innerText != '' && btn33.innerText != ''){
        command.innerText = "It's a draw!"
        board.forEach(function(button){
            button.setAttribute('disabled', true)
        })
        restartBtn.removeAttribute('disabled')
        return true
    }
}

themeSwitcher.addEventListener('click', function(){
    const root = document.querySelector(':root')
    if(main.dataset.theme === 'dark-purple'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#5b42c0')
        root.style.setProperty('--border-color', '#5b42c0')
        root.style.setProperty('--disabled-bg-color', '#a9abae')
        root.style.setProperty('--disabled-font-color', '#402e86')
        root.style.setProperty('--disabled-border-color', '#402e86')
        root.style.setProperty('--primary-color', '#8872df')
        root.style.setProperty('--winner-bg-color', '#7565b2')
        main.dataset.theme = 'light-purple'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#f1f5f9')
        root.style.setProperty('--disabled-bg-color', '#3f3f3f')
        root.style.setProperty('--disabled-font-color', '#212529')
        root.style.setProperty('--disabled-border-color', '#191d20')
        root.style.setProperty('--primary-color', '#5b42c0')
        root.style.setProperty('--winner-bg-color', '#fd84ff')
        main.dataset.theme = 'dark-purple'
    }
})

restartBtn.addEventListener('click', function(){
    player1Input = document.getElementById('player1')
    player2Input = document.getElementById('player2')
    board.forEach(function(button){
        button.innerText = ''
        button.classList.remove('winner')
    })
    command.innerText = 'Set the players!'
    restartBtn.setAttribute('disabled', true)
    startGameBtn.removeAttribute('disabled')
    player1Input.removeAttribute('disabled')
    player2Input.removeAttribute('disabled')
    player1Input.value = ''
    player2Input.value = ''
    turn = 0
    player1 = ''
    player2 = ''
})