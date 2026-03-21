let NaE = document.getElementById("NaE");
let Nap1 = document.getElementById("Nap1");
let Nap2 = document.getElementById("Nap2");
let btnY = document.getElementById("btnY");
let btnN = document.getElementById("btnN");
//***************************************//
let Email = document.getElementById("Email");
let psw1 = document.getElementById("psw1");
let psw2 = document.getElementById("psw2");

btnY.addEventListener('click', function () {
    let val1 = Email.value;
    let val2 = psw1.value;
    let val3 = psw2.value;

    let index = val1.indexOf("@");
    let userName = val1.slice(0, index)
    console.log(userName);



    if (val1 == '') {
        NaE.innerText = "โปรดใส่อีเมล";

    } else {
        NaE.innerText = "";
    } if (val2 == '') {
        Nap1.innerText = "โปรดใส่รหัสผ่าน";

    } else {
        Nap1.innerText = "";
    } if (val3 == val2) {
        Nap2.innerText = "";
    } else {
        Nap2.innerText = "โปรดใส่รหัสผ่านให้ตรงกัน!";
    }

});

btnN.addEventListener('click', function () {
    NaE.innerText = "";
    Nap1.innerText = "";
    Nap2.innerText = "";

    let val1 = Email.value = "";
    let val2 = psw1.value = "";
    let val3 = psw2.value = "";
})
