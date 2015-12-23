var n;
function makef(n) {
    var theLeftSide = document.getElementById("left");
    var theRightSide = document.getElementById("right");
    
    while (theLeftSide.firstChild){
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild){
        theRightSide.removeChild(theRightSide.firstChild);
    }
    
    n = n;
    var top, left, node;
    for (var i = 0;i < n; i++) {
        top = Math.random() * 450;
        top = Math.floor(top) + 8;
        left = Math.random() * 430;
        left = Math.floor(left) + 8;
        node = document.createElement("img");
        node.setAttribute("src", "smile.jpg");
        node.setAttribute("style", "position:absolute;top:" + top + "px;left:"+ left + "px;");
        document.getElementById("left").appendChild(node);
    }    
    var clo = theLeftSide.cloneNode(true);
    clo.setAttribute("id", "clone");
    theRightSide.appendChild(clo);
document.getElementById("clone").removeChild(document.getElementById("clone").lastElementChild);
    theLeftSide.lastElementChild.setAttribute("onclick","makef("+(n+3)+");")
}



