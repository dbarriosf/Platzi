var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var u = 420;
var o = 420;
var teclas ={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargarOK: false
};
var vaca = {
  url: "vaca.png",
  cargarOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargarOK: false
};
var pollo = {
  url: "pollo.png",
  cargarOK: false
};

var cantidad = aleatorio(5, 10);
var sitioVacasX = new Array(cantidad);
var sitioVacasY = new Array(cantidad);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK == true)
  {
  papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK == true)
  {
      for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      sitioVacasX[v] = x;
      sitioVacasY[v] = y;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

}

document.addEventListener("keydown", moverConTeclado);
function moverConTeclado(evento)
{
    var movimiento = 10;
    switch (evento.keyCode)
    {
        case teclas.UP:
          dibujar2();
          papel.drawImage(cerdo.imagen, u, o - movimiento);
          o = o - movimiento
        break;

        case teclas.DOWN:
          dibujar2();
          papel.drawImage(cerdo.imagen, u, o + movimiento);
          o = o + movimiento
        break;

        case teclas.LEFT:
          dibujar2();
          papel.drawImage(cerdo.imagen, u - movimiento, o);
          u = u - movimiento
        break;

        case teclas.RIGHT:
          dibujar2();
          papel.drawImage(cerdo.imagen, u + movimiento, o);
          u = u + movimiento
        break;


      default:


      break;
    }

}

function dibujar2()
{
  if (fondo.cargaOK == true)
  {
  papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK == true)
  {
      for(var r=0; r < cantidad; r++)
    {
        papel.drawImage(vaca.imagen, sitioVacasX[r], sitioVacasY[r]);
    }
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
