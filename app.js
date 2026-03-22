
let NaE = document.getElementById("NaE");
let Nap1 = document.getElementById("Nap1");
let Nap2 = document.getElementById("Nap2");
let btnY = document.getElementById("btnY");
let btnN = document.getElementById("btnN");
//***************************************//
let Email = document.getElementById("Email");
let psw1 = document.getElementById("psw1");
let psw2 = document.getElementById("psw2");

let box = document.querySelector(".box")

btnY.addEventListener('click', function () {
    let val1 = Email.value;
    let val2 = psw1.value;
    let val3 = psw2.value;

    let index = val1.indexOf("@");
    let index2 = val1.indexOf(".com");
    let userName = val1.slice(0, index)
    console.log(userName);

    if(val1 == "") {
        NaE.innerText = "โปรดใส่อีเมล";
    } else if(index === -1) {
        NaE.innerText = "คุณควรมี @";
    } else if(index2 === -1) {
        NaE.innerText = "คุณควรมี .com";
    } else if(val2 == "") {
       Nap1.innerText = "โปรดใส่รหัสผ่าน";
    } else if(val2.length < 8) {
        Nap1.innerText = "รหัสผ่านขั้นต่ำ 8 ตัว";
    } else if(val2 !== val3) {
         Nap2.innerText = "โปรดใส่รหัสผ่านให้ตรงกัน!";
    } else {
        NaE.innerText = "";
        Nap1.innerText = "";
        Nap2.innerText = "";
        box.classList.add('addbox')
    };
});

btnN.addEventListener('click', function () {
    NaE.innerText = "";
    Nap1.innerText = "";
    Nap2.innerText = "";

    let val1 = [Email.value = "",psw1.value = "",psw2.value = ""]

})
