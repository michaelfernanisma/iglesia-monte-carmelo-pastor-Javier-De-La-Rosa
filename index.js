const yesBtn  = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Ya que decidiste aceptar a Jesucristo en tu vida, repite esta oración para abrirle la puerta de tu corazón: Romanos 10:9: Si confiesas con tu boca que Jesús es el Señor y crees en tu corazón que Dios le levantó de los muertos, serás salvo.Por lo tanto, Confieso con mi boca y creo en mi corazón que Jesús es el Hijo de Dios, resucitado de entre los muertos y mi Salvador y Señor de mi vida. Ahora eres una nueva persona en cristo Jesús 2Corintios 5:17')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

})