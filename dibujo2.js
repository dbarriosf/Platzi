var lienzo = document.getElementById("dibujito").getContext("2d");
console.log(lienzo);
alert("esta es la 2")

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("blue", 300, 10, 10, 220);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }


  var lienzodos = document.getElementById("otro").getContext("2d");

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
