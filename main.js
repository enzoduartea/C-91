var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 1;

    var width =     screen.width;

    newWidth = screen.width - 70;
    newHeight = screen.height - 300;
    if( weight < 992)
 {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
 }
 canvas.addEventListener("touchstart", my_tochstart);
 function my_touchstart(e)
 {
    console.log("my_touchsart");
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;

    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
 }
 canvas.addEventListener("touchmove" , my_touchmove);
 function my_touchmove(e)
 {
        console.log("my_touchMove");

        currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Última posicao das coodernadas x e y = ");
        console.log("x =" + lastPositionOfX + "y = " + lastPositionOfY );
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posicao atual das coodernadas x e y = ");
        console.log("x =" + currentPositionOfTouchX + "y = " + currentPositionOfTouchY );
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
ctx.stroke();

lastPositionOfX = currentPositionOfTouchX
lastPositionOfY = currentPositionOfTouchY

 }
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("cor").value;
        widthOfLine = document.getElementById("larguraDaLinha").value;
        //Fim da Atividade Adicional

        mouseEvent = "mousedown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

 canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posicao das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }
   


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}