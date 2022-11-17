




const $ = selector => document.querySelector(selector)

//Cambiar modos: modo claro o modo oscuro


pasarAModoClaro = () =>{
   $('.btnModoOscuro').classList.add('ocultarBoton')
   $('.btnModoClaro').classList.remove('ocultarBoton')
   $('.btnModoClaro').classList.add('mostrarBoton')
   $('body').classList.remove('modoOscuro')
   $('body').classList.add('modoClaro')
}

$('.btnModoOscuro').addEventListener('click', pasarAModoClaro)



pasarAModoOscuro = () =>{
   $('.btnModoClaro').classList.remove('mostrarBoton')
   $('.btnModoOscuro').classList.remove('ocultarBoton')
   $('.btnModoClaro').classList.add('ocultarBoton')
   $('body').classList.remove('modoClaro')
   $('body').classList.add('modoOscuro')
}

$('.btnModoClaro').addEventListener('click', pasarAModoOscuro)


//Menú imagen

//AgregarImagen

agregarImagen = () =>{
   let url = $('.agregarUrl').value
   $('.imagen').style.backgroundImage = `url('${url}')`
}
$('.agregarUrl').addEventListener('input', agregarImagen)


//Filtros en la imagen

filtros = () =>{
   let brillo = $('.brillo').value
   let opacidad = $('.opacidad').value
   let contraste = $('.contraste').value
   let desenfoque = $('.desenfoque').value
   let escalaDeGrises = $('.escalaDeGrises').value
   let sepia = $('.sepia').value
   let hue = $('.hue').value
   let saturado = $('.saturado').value
   let negativo = $('.negativo').value
   $('.imagen').style.filter =  `brightness(${brillo})
                                 opacity(${opacidad})
                                 contrast(${contraste}%)
                                 blur(${desenfoque}px)
                                 grayscale(${escalaDeGrises}%)
                                 sepia(${sepia}%)
                                 hue-rotate(${hue}deg)
                                 saturate(${saturado}%)
                                 invert(${negativo})`

}


//Capturar los filtros
$('.brillo').addEventListener('change', filtros)
$('.opacidad').addEventListener('change', filtros)
$('.contraste').addEventListener('change', filtros)
$('.desenfoque').addEventListener('change', filtros)
$('.escalaDeGrises').addEventListener('change', filtros)
$('.sepia').addEventListener('change',filtros)
$('.saturado').addEventListener('change', filtros)
$('.negativo').addEventListener('change', filtros)


//Modificar color elegido  del span
//Agregar el background-color


//Agregar la mezcla blend.

colorImagen = () =>{
   $('.imagen').style.backgroundColor = $('.colorElegido').value
   $('span').innerHTML = $('.colorElegido').value
}

$('.colorElegido').addEventListener('input', colorImagen)


agregarMezcla = () => {
   $('.imagen').style.backgroundBlendMode = $('.seleccionarColor').value
}

$('.seleccionarColor').addEventListener('change', agregarMezcla)


//Reestablecer filtos

reestablecerFiltros = () =>{
    $('.brillo').value = 1
    $('.opacidad').value = 0.1
    $('.contraste').value = 100
    $('.desenfoque').value = 0.1
    $('.escalaDeGrises').value = 0
    $('.sepia').value = 0
    $('.hue').value = 0
    $('.saturado').value = 100
    $('.negativo').value = 0
    filtros()
}

$('.reestablecerFiltros').addEventListener('click', reestablecerFiltros)



//Textos




//Texto superior
modificarTextoSuperior = () =>{
   $('.topText').innerText = $('#modificarTextoSuperior').value
}
$('#modificarTextoSuperior').addEventListener('input', modificarTextoSuperior)



//Sin texto superior
sinTextoSuperior = () =>{
   if($('#sinTextoSuperior').checked){
      $('.superior').style.display = 'none'
   }else{
      $('.superior').style.display = 'block'
   }
}
$('#sinTextoSuperior').addEventListener('change', sinTextoSuperior)


//Texto inferior
modificarTextoInferior = () =>{
   $('.bottomText').innerText = $('#modificarTextoInferior').value
}
$('#modificarTextoInferior').addEventListener('input', modificarTextoInferior)

//Sin texto inferior

sinTextoInferior = () =>{
   if($('#sinTextoInferior').checked){
      $('.inferior').style.display = 'none'
   }else{
      $('.inferior').style.display = 'block'
   }
}

$('#sinTextoInferior').addEventListener('change', sinTextoInferior)


//Fuentes de los textos

fuenteDeTextos = () =>{
   $('.superior').style.fontFamily = $('#fuenteDeTextos').value
   $('.inferior').style.fontFamily = $('#fuenteDeTextos').value
}



$('#fuenteDeTextos').addEventListener('change', fuenteDeTextos)


//Tamaño de letra

tamanioDeLetra = () => {
   $('.topText').style.fontSize = $('.tamanioLetra').value
   $('.bottomText').style.fontSize = $('.tamanioLetra').value
}


$('.tamanioLetra').addEventListener('input', tamanioDeLetra)


//Alineación de textos

textoIzquierda = () =>{
   $('.topText').style.textAlign = 'left'
   $('.bottomText').style.textAlign = 'left'
}
$('#textoEnIzquierda').addEventListener('click',  textoIzquierda)

centrarTexto = () =>{
   $('.topText').style.textAlign = 'center'
   $('.bottomText').style.textAlign = 'center'
}

$('#textoEnElCentro').addEventListener('click', centrarTexto)

textoDerecha = () =>{
   $('.topText').style.textAlign = 'right'
   $('.bottomText').style.textAlign = 'right'
}


$('#textoEnLaDerecha').addEventListener('click', textoDerecha)


//Color de texto

colorDeTexto = () =>{
   $('.topText').style.color = $('#colorDeTexto').value
   $('.bottomText').style.color = $('#colorDeTexto').value
}

$('#colorDeTexto').addEventListener('input', colorDeTexto)


//Fondo de texto

fondoTexto = () =>{
   $('.topText').style.backgroundColor = $('#fondoDeTexto').value
   $('.bottomText').style.backgroundColor = $('#fondoDeTexto').value
}
$('#fondoDeTexto').addEventListener('input', fondoTexto)


//Contorno textos

sinContorno = () =>{
   $('.topText').style.textShadow = "none"
   $('.bottomText').style.textShadow = "none"
}


contornoClaro = () =>{
   $('.topText').style.textShadow = "2px 2px white"
   $('.bottomText').style.textShadow = "2px 2px white"
}

contornoOscuro = () =>{
   $('.topText').style.textShadow = "2px 2px black"
   $('.bottomText').style.textShadow = "2px 2px black"
}


$('#sinContorno').addEventListener('click', sinContorno)
$('#contornoOscuro').addEventListener('click', contornoOscuro)
$('#contornoClaro').addEventListener('click', contornoClaro)


//Espaciado de texto

espaciado = () =>{
   $('.topText').style.paddingTop = $('#espaciado').value
   $('.bottomText').style.paddingTop = $('#espaciado').value
   $('.topText').style.paddingBottom = $('#espaciado').value
   $('.bottomText').style.paddingBottom = $('#espaciado').value
}

$('#espaciado').addEventListener('input', espaciado)


//Interlineado de texto

interlineado = () =>{
   $('.topText').style.lineHeight = $('#interlineado').value
   $('.bottomText').style.lineHeight = $('#interlineado').value
}

$('#interlineado').addEventListener('change', interlineado)



//Fondo de texto transparente

quitarFondoLetra = () =>{
   if($('.fondoTransparente').checked){
      $('.meme').classList.add('conTextoTransparente')


   }else{
      $('.meme').classList.remove('conTextoTransparente')
   }
}


$('.fondoTransparente').addEventListener('change', quitarFondoLetra)


//Ocultar menu imagen y motrar menu texto

mostrarMenuTexto = () =>{
   $('.menuTexto').classList.remove('ocultarMenu')
   $('.menuImagen').classList.add('ocultarMenu')
}


$('.botonMenuTexto').addEventListener('click', mostrarMenuTexto)



//Ocultar menu texto mostrar menu imagen

mostrarMenuImagen = () =>{
   $('.menuImagen').classList.remove('ocultarMenu')
   $('.menuTexto').classList.add('ocultarMenu')
}



$('.botonMenuImagen').addEventListener('click', mostrarMenuImagen)


//Descargar el meme

const meme = $('#meme')

descargarMeme = () => {
   domtoimage.toBlob(meme).then(function (blob) {
      window.saveAs(blob, 'meme.png');
  });
 }

 $('.descargarMeme').addEventListener('click', descargarMeme)

 /*Responsive menus*/


 mostrarMenuTextoResponsive = () =>{
   $('.menuTexto').classList.remove('ocultarEnMobile')
   $('.menuTexto').classList.add('aparecerMenu')
   $('.seccionMeme').classList.add('ocultarEnMobile')
   $('header').classList.add('ocultarEnMobile')
   $('.colocarEnColumna').classList.add('ocultarEnMobile')
}

$('.botonMenuTexto').addEventListener('click', mostrarMenuTextoResponsive)


mostrarMenuImagen = () =>{
   $('.menuImagen').classList.remove('ocultarEnMobile')
   $('.menuImagen').classList.add('aparecerMenu')
   $('.seccionMeme').classList.add('ocultarEnMobile')
   $('header').classList.add('ocultarEnMobile')
   $('.colocarEnColumna').classList.add('ocultarEnMobile')
}

$('.botonMenuImagen').addEventListener('click', mostrarMenuImagen)









//Cerrar menu y aparecer header e imagen

cerrarMenu = () =>{
   $('.menuTexto').classList.add('ocultarEnMobile')
   $('.menuImagen').classList.add('ocultarEnMobile')
   $('.seccionMeme').classList.remove('ocultarEnMobile')
   $('header').classList.remove('ocultarEnMobile')
   $('.colocarEnColumna').classList.remove('ocultarEnMobile')
   $('.menuTexto').classList.remove('aparecerMenu')
}


$('.cerrarMenuTexto').addEventListener('click', cerrarMenu)
$('.cerrarMenuImagen').addEventListener('click', cerrarMenu)
