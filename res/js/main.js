const kontakty = document.getElementById("kontakty");
const main = document.getElementById("main");
const obsah = document.getElementById("obsah");
const kontaktyObsah = document.getElementById("kontaktyObsah");
const jidelnicek = document.getElementById("jidelnicek");
const napojnicek = document.getElementById("napojnicek");
const listek1 = document.getElementById("listek1");
const listek2 = document.getElementById("listek2");
const footer = document.getElementById("footer");

main.onclick = () =>{
    obsah.style.display = "block";
    kontaktyObsah.style.display = "none";
    napojnicek.style.display = "none";
    jidelnicek.style.display = "none";
}

kontakty.onclick = () =>{
    obsah.style.display = "none";
    kontaktyObsah.style.display = "block";
    jidelnicek.style.display = "none";
    napojnicek.style.display = "none";
}

listek1.onclick = () =>{
    obsah.style.display = "none";
    kontaktyObsah.style.display = "none";
    jidelnicek.style.display = "block";
    napojnicek.style.display = "none";
}

listek2.onclick = () =>{
    obsah.style.display = "none";
    kontaktyObsah.style.display = "none";
    jidelnicek.style.display = "none";
    napojnicek.style.display = "block";
}