window.addEventListener("load", iniciar);
var posicionX = 0;
var posicionY = 0;

function iniciar() {

    posicionX = Number(document.getElementById('caja').style.left);
    posicionY = Number(document.getElementById('caja').style.top);
    document.addEventListener("click", clickea);
    window.addEventListener("keydown", teclado);
}
function clickea(e) {
    alert("pop");
}

function teclado(e) {
    switch (e.key) {
        case "ArrowUp":
            moveUp()
            break;
        case "ArrowLeft":
            moveLeft()
            break;
        case "ArrowDown":
            moveDown()
            break;
        case "ArrowRight":
            moveRight()
            break;
    }
    /*940 1840*/
    function moveUp(e) {
        if(posicionY>0){
            posicionY -= 10;
            document.getElementById('caja').style.top = String(posicionY) + "px";
            console.log(posicionX , posicionY,Number(document.getElementById('caja').style.bottom));
        }
    }

    function moveDown(e) {
        if(Number(document.getElementById('caja').style.bottom)>=0){
            posicionY += 10;
            document.getElementById('caja').style.top = String(posicionY) + "px";
            console.log(posicionX , posicionY,Number(document.getElementById('caja').style.bottom));

        }
    }

    function moveLeft(e) {
        if(posicionX>0){
            posicionX -= 10;
            document.getElementById('caja').style.left = String(posicionX) + "px";
            console.log(posicionX , posicionY,Number(document.getElementById('caja').style.bottom));
        }
    }

    function moveRight(e) {
        if(Number(document.getElementById('caja').style.right)>=0){
        posicionX += 10;
        document.getElementById('caja').style.left = String(posicionX) + "px";
        console.log(posicionX , posicionY,Number(document.getElementById('caja').style.bottom));
        }
    }
}


