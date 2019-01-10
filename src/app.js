const intento = document.getElementById("try");

let queen = () => {
    let x1 = document.getElementById("x1").value;
    let x2 = document.getElementById("x2").value;
    let x3 = document.getElementById("x3").value;
    let x4 = document.getElementById("x4").value;
    let x5 = document.getElementById("x5").value;
    let x6 = document.getElementById("x6").value;
    let x7 = document.getElementById("x7").value;
    let x8 = document.getElementById("x8").value;
    let y1 = document.getElementById("y1").value;
    let y2 = document.getElementById("y2").value;
    let y3 = document.getElementById("y3").value;
    let y4 = document.getElementById("y4").value;
    let y5 = document.getElementById("y5").value;
    let y6 = document.getElementById("y6").value;
    let y7 = document.getElementById("y7").value;
    let y8 = document.getElementById("y8").value;
    
    let row = [x1, x2, x3, x4, x5, x6, x7, x8];
    let col = [y1, y2, y3, y4, y5, y6, y7, y8];
    
    let r = [];
    let c = [];
    let d = [];
    
    for (i=0; i<8; i++) {
        for (z=i+1; z<8; z++) {
          if (row[i]==row[z]) {r.push("Y");}
          else {r.push("N");}
          }
          }
    
    for (i=0; i<8; i++) {
        for (z=i+1; z<8; z++) {
          if (col[i]==col[z]) {c.push("Y");}
          else {c.push("N");}
          }
          }
    
    for (i=0; i<8; i++) {
        for (z=i+1; z<8; z++) {
          if ((col[i]-row[i])==(col[z]-row[z])) {d.push("Y");}
          else {d.push("N");}
          }
          }
    
    let rc = r.concat(c);
    let rcd = rc.concat(d);
    
    if (rcd.includes("Y")) {document.getElementById("demo").innerHTML = d + "No es una solución";}
    else {document.getElementById("demo").innerHTML = "Sí es una solución";}

  };

  intento.addEventListener('click', queen);



