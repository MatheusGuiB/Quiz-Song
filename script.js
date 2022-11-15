function comecar(){
    com.style = 'display:none'
    container.style = 'display:flex'
}
const com = document.getElementById('start')
const container = document.getElementById('container')
com.addEventListener('click', comecar)

function musica1(){
    const mus1 = document.getElementById('bruno')
    mus1.play() 
}
const resposta1 = document.getElementById('resposta1')
const resposta2 = document.getElementById('resposta2')
const resposta4 = document.getElementById('resposta4')

function respostaErrada(){
    resposta1.style.color = 'red'
    resposta1.style.backgroundColor = 'lightgrey'
    resposta2.style.color = 'red'
    resposta2.style.backgroundColor = 'lightgrey'
    resposta4.style.color = 'red'
    resposta4.style.backgroundColor = 'lightgrey'
    next1.style.display = 'flex'
    resposta1.style.cursor = 'default'
    resposta2.style.cursor = 'default'
    resposta3.style.cursor = 'default'
    resposta4.style.cursor = 'default'
    resposta3.style.color = 'lime'
    resposta3.style.backgroundColor = 'white'
    mus1.stop() // fazer a música parar ao clicar
}
resposta1.addEventListener('click', respostaErrada)
resposta2.addEventListener('click', respostaErrada)
resposta4.addEventListener('click', respostaErrada)
const resposta3 = document.getElementById('resposta3')

function respostaCorreta(){
    resposta3.style.color = 'lime'
    resposta3.style.backgroundColor = 'white'
    next1.style.display = 'flex'
    resposta1.style.cursor = 'default'
    resposta2.style.cursor = 'default'
    resposta3.style.cursor = 'default'
    resposta4.style.cursor = 'default'
    resposta1.style.color = 'red'
    resposta1.style.backgroundColor = 'lightgrey'
    resposta2.style.color = 'red'
    resposta2.style.backgroundColor = 'lightgrey'
    resposta4.style.color = 'red'
    resposta4.style.backgroundColor = 'lightgrey'
    // pontos.innerHTML = +1
}
resposta3.addEventListener('click', respostaCorreta)
const next1 = document.getElementById('next1')
const res1 = document.getElementById('res1')
const res2 = document.getElementById('res2')
const res3 = document.getElementById('res3')
const res4 = document.getElementById('res4')
const res5 = document.getElementById('res5')
const mus2 = document.getElementById('fallout')

const mus1 = document.getElementById('bruno')

function visible(){
    res1.style.display = 'none'
    res2.style.display = 'flex'
    mus1.pause()
}
next1.addEventListener('click', visible)

function musica2(){
    mus2.play()
}

const resposta5 = document.getElementById('resposta5')
const resposta6 = document.getElementById('resposta6')
const resposta7 = document.getElementById('resposta7')
const resposta8 = document.getElementById('resposta8')

function respostaErrada2(){
    resposta6.style.color = 'red'
    resposta6.style.backgroundColor = 'lightgrey'
    resposta7.style.color = 'red'
    resposta7.style.backgroundColor = 'lightgrey'
    resposta8.style.color = 'red'
    resposta8.style.backgroundColor = 'lightgrey'
    next2.style.display = 'flex'
    resposta5.style.cursor = 'default'
    resposta6.style.cursor = 'default'
    resposta7.style.cursor = 'default'
    resposta8.style.cursor = 'default'
    resposta5.style.color = 'lime'
    resposta5.style.backgroundColor = 'white'
    // pontos.innerHTML = -1
}

resposta6.addEventListener('click', respostaErrada2)
resposta7.addEventListener('click', respostaErrada2)
resposta8.addEventListener('click', respostaErrada2)


function respostaCorreta2(){
    resposta5.style.color = 'lime'
    resposta5.style.backgroundColor = 'white'
    next2.style.display = 'flex'
    resposta5.style.cursor = 'default'
    resposta6.style.cursor = 'default'
    resposta7.style.cursor = 'default'
    resposta8.style.cursor = 'default'
    resposta6.style.color = 'red'
    resposta6.style.backgroundColor = 'lightgrey'
    resposta7.style.color = 'red'
    resposta7.style.backgroundColor = 'lightgrey'
    resposta8.style.color = 'red'
    resposta8.style.backgroundColor = 'lightgrey'
    // pontos.innerHTML = +1
}
resposta5.addEventListener('click', respostaCorreta2)
const next2 = document.getElementById('next2')

function visible2(){
    res2.style.display = 'none'
    res3.style.display = 'flex'
    mus2.pause()
}
next2.addEventListener('click', visible2)

const mus3 = document.getElementById('marsh')
function musica3(){
    mus3.play()
}

const resposta9 = document.getElementById('resposta9')
const resposta10 = document.getElementById('resposta10')
const resposta11 = document.getElementById('resposta11')
const resposta12 = document.getElementById('resposta12')

function respostaErrada3(){
    resposta9.style.color = 'red'
    resposta9.style.backgroundColor = 'lightgrey'
    resposta10.style.color = 'red'
    resposta10.style.backgroundColor = 'lightgrey'
    resposta11.style.color = 'red'
    resposta11.style.backgroundColor = 'lightgrey'
    next3.style.display = 'flex'
    resposta9.style.cursor = 'default'
    resposta10.style.cursor = 'default'
    resposta11.style.cursor = 'default'
    resposta12.style.cursor = 'default'
    resposta12.style.color = 'lime'
    resposta12.style.backgroundColor = 'white'
    // pontos.innerHTML = ''
}

resposta9.addEventListener('click', respostaErrada3)
resposta10.addEventListener('click', respostaErrada3)
resposta11.addEventListener('click', respostaErrada3)


function respostaCorreta3(){
    resposta12.style.color = 'lime'
    resposta12.style.backgroundColor = 'white'
    next3.style.display = 'flex'
    resposta9.style.cursor = 'default'
    resposta10.style.cursor = 'default'
    resposta11.style.cursor = 'default'
    resposta12.style.cursor = 'default'
    resposta9.style.color = 'red'
    resposta9.style.backgroundColor = 'lightgrey'
    resposta10.style.color = 'red'
    resposta10.style.backgroundColor = 'lightgrey'
    resposta11.style.color = 'red'
    resposta11.style.backgroundColor = 'lightgrey'
    // pontos++ 
}
resposta12.addEventListener('click', respostaCorreta3)
const next3 = document.getElementById('next3')

function visible3(){
    res3.style.display = 'none'
    res4.style.display = 'flex'
    mus3.pause()
}
next3.addEventListener('click', visible3)

const mus4 = document.getElementById('linkin')
function musica4(){
    mus4.play()
}

const resposta13 = document.getElementById('resposta13')
const resposta14 = document.getElementById('resposta14')
const resposta15 = document.getElementById('resposta15')
const resposta16 = document.getElementById('resposta16')

function respostaErrada4(){
    resposta13.style.color = 'red'
    resposta13.style.backgroundColor = 'lightgrey'
    resposta14.style.color = 'red'
    resposta14.style.backgroundColor = 'lightgrey'
    resposta15.style.color = 'red'
    resposta15.style.backgroundColor = 'lightgrey'
    next4.style.display = 'flex'
    resposta13.style.cursor = 'default'
    resposta14.style.cursor = 'default'
    resposta15.style.cursor = 'default'
    resposta16.style.cursor = 'default'
    resposta15.style.color = 'lime'
    resposta15.style.backgroundColor = 'white'
    // pontos.innerHTML = ''
}

resposta13.addEventListener('click', respostaErrada4)
resposta14.addEventListener('click', respostaErrada4)
resposta16.addEventListener('click', respostaErrada4)


function respostaCorreta4(){
    resposta15.style.color = 'lime'
    resposta15.style.backgroundColor = 'white'
    next4.style.display = 'flex'
    resposta13.style.cursor = 'default'
    resposta14.style.cursor = 'default'
    resposta15.style.cursor = 'default'
    resposta16.style.cursor = 'default'
    resposta13.style.color = 'red'
    resposta13.style.backgroundColor = 'lightgrey'
    resposta14.style.color = 'red'
    resposta14.style.backgroundColor = 'lightgrey'
    resposta16.style.color = 'red'
    resposta16.style.backgroundColor = 'lightgrey'
    // pontos++ 
}
resposta15.addEventListener('click', respostaCorreta4)
const next4 = document.getElementById('next4')

function visible4(){
    res4.style.display = 'none'
    res5.style.display = 'flex'
    mus4.pause()
}
next4.addEventListener('click', visible4)

const mus5 = document.getElementById('50cent')
function musica5(){
    mus5.play()
}

const resposta17 = document.getElementById('resposta17')
const resposta18 = document.getElementById('resposta18')
const resposta19 = document.getElementById('resposta19')
const resposta20 = document.getElementById('resposta20')

function respostaErrada5(){
    resposta17.style.color = 'red'
    resposta17.style.backgroundColor = 'lightgrey'
    resposta19.style.color = 'red'
    resposta19.style.backgroundColor = 'lightgrey'
    resposta20.style.color = 'red'
    resposta20.style.backgroundColor = 'lightgrey'
    next5.style.display = 'flex'
    resposta17.style.cursor = 'default'
    resposta18.style.cursor = 'default'
    resposta19.style.cursor = 'default'
    resposta20.style.cursor = 'default'
    resposta18.style.color = 'lime'
    resposta18.style.backgroundColor = 'white'
    // pontos.innerHTML = ''
}

resposta17.addEventListener('click', respostaErrada5)
resposta19.addEventListener('click', respostaErrada5)
resposta20.addEventListener('click', respostaErrada5)


function respostaCorreta5(){
    resposta18.style.color = 'lime'
    resposta18.style.backgroundColor = 'white'
    next5.style.display = 'flex'
    resposta17.style.cursor = 'default'
    resposta18.style.cursor = 'default'
    resposta19.style.cursor = 'default'
    resposta20.style.cursor = 'default'
    resposta17.style.color = 'red'
    resposta17.style.backgroundColor = 'lightgrey'
    resposta19.style.color = 'red'
    resposta19.style.backgroundColor = 'lightgrey'
    resposta20.style.color = 'red'
    resposta20.style.backgroundColor = 'lightgrey'
    // pontos++ 
}
resposta18.addEventListener('click', respostaCorreta5)
const next5 = document.getElementById('next5')

function visible5(){
    res5.style.display = 'none'
    res6.style.display = 'flex'
    mus5.pause()
}
next5.addEventListener('click', visible5)
const res6 = document.getElementById('res6')
// const retornar1 = document.getElementById('retornar')

const btn = document.getElementById('retornar')

btn.addEventListener('click', () => {
    location.reload()
})