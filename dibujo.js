var texto = document.getElementById("texto_lineas");
var d = document.getElementById("dibujito");
var ancho = d.width;

var lienzo = d.getContext("2d");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

  var t = document.getElementById("otro");
  var lienzodos = t.getContext("2d");

  dibujarLineados("red", 10, 150, 120, 10);
  dibujarLineados("blue", 190, 10, 10, 200);

  function dibujarLineados(color, xinicial, yinicial, xfinal, yfinal)
    {
      lienzodos.beginPath();
      lienzodos.strokeStyle = color;
      lienzodos.moveTo(xinicial, yinicial);
      lienzodos.lineTo(xfinal, yfinal);
      lienzodos.stroke();
      lienzodos.closePath();
    }

    function dibujoporclick()
      {
        var xxx = parseInt(texto.value);
        var lineas = xxx;
        var pru = 0;
        var ppru = 0;
        var l , yi , xf , bxf , byi , cxf , cyi, colorcito;

        for(l=0; l < lineas; l++)
        {
            console.log ("ppru es " + ppru);
            console.log ("pru es " + pru);
            if ( pru == 0 )
            {
              colorcito = "#33FF00";
            }
            else
            {
                  if ( pru == 132 )
                  {
                      colorcito = "#33FFCC";
                  }
                  else
                  {
                      if (pru == 165)
                      {
                        colorcito = "#33FFFF";
                        pru = 0;
                      }
                      else
                      {
                        colorcito = "#33FF" + pru;
                      }
                   }

              }
            console.log ("colorcito es " + colorcito);
            yi = (ancho/lineas) * l;
            xf = (ancho/lineas) * (l + 1);
            dibujarLinea(colorcito, 0, yi, xf, 300);
            cxf = 300 - xf;
            dibujarLinea(colorcito, yi, 300, 300, cxf);
            cyi = 300 - yi;
            dibujarLinea(colorcito, 0, cyi, xf, 0);
            bxf = xf - 10;
            byi = yi + 10;
            dibujarLinea(colorcito, bxf, 0, 300, byi);
            console.log ("linea" + l);

            pru = pru + 33;
            ppru = ppru + 1
        if (ppru == 6)
        {
          pru = 0
          ppru = 0
        }
        else
        {}
        }


        dibujarLinea(colorcito, 1, 1, 1, 300)
        dibujarLinea(colorcito, 0, 299, 299, 299)
        dibujarLinea(colorcito, 1, 1, 300, 1)
        dibujarLinea(colorcito, 299, 299, 299, 0)
      }
