function oy(){
    var a = +document.getElementById("angka1").value;
    var b = +document.getElementById("angka2").value;
    var c = 1/2*a*b;
    document.getElementById("hasil").innerHTML = "Luas Segitiga= "+c;
}

// Menghitung Luas Segitiga
function calculateTriangleArea(){
    var ta1 = +document.getElementById("base-triangle").value;
    var ta2 = +document.getElementById("height-triangle").value;
    var calculateTriangleArea = 1/2 * ta1 * ta2;
    document.getElementById("resultTriangleArea").innerHTML = "L = 1/2 x "+ta1+" x "+ta2;
    document.getElementById("calculateTriangleArea").innerHTML = "L = "+calculateTriangleArea;
}

// Menghitung Keliling Segitiga
function calculateKelilingTriangle(){
    var tc1 = +document.getElementById("side-triangle1").value;
    var tc2 = +document.getElementById("side-triangle2").value;
    var tc3 = +document.getElementById("side-triangle3").value;
    var rtc = tc1+tc2+tc3;
    alert("Keliling Segitiga ="+rtc);
}