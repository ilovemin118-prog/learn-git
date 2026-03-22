
/// ดึงข้อมูล Element ทั้งหมด
const emailInput = document.getElementById("Email");
const pass1Input = document.getElementById("psw1");
const pass2Input = document.getElementById("psw2");

const errorEmail = document.getElementById("NaE");
const errorPass1 = document.getElementById("Nap1");
const errorPass2 = document.getElementById("Nap2");

const btnSubmit = document.getElementById("btnY");
const btnCancel = document.getElementById("btnN");

const overlay = document.getElementById("overlay");
const popupMsg = document.getElementById("popup-msg");

// ฟังก์ชันหลัก (ปุ่มตกลง)
btnSubmit.addEventListener('click', () => {
    const emailValue = emailInput.value.trim();
    const p1 = pass1Input.value;
    const p2 = pass2Input.value;

    // ล้างข้อความแจ้งเตือนเก่าทิ้งก่อน
    errorEmail.innerText = "";
    errorPass1.innerText = "";
    errorPass2.innerText = "";

    // --- Logic ตรวจสอบเงื่อนไขตามเดิมของคุณ ---
    const hasAt = emailValue.indexOf("@");
    const hasDotCom = emailValue.indexOf(".com");

    if (emailValue === "") {
        errorEmail.innerText = "โปรดใส่อีเมล";
    } else if (hasAt === -1) {
        errorEmail.innerText = "คุณควรมี @";
    } else if (hasDotCom === -1) {
        errorEmail.innerText = "คุณควรมี .com";
    } else if (p1 === "") {
        errorPass1.innerText = "โปรดใส่รหัสผ่าน";
    } else if (p1.length < 8) {
        errorPass1.innerText = "รหัสผ่านขั้นต่ำ 8 ตัว";
    } else if (p1 !== p2) {
        errorPass2.innerText = "โปรดใส่รหัสผ่านให้ตรงกัน!";
    } else {
        // ถ้าผ่านหมดทุกอย่าง...
        const userName = emailValue.split("@")[0]; // ดึงชื่อก่อน @
        popupMsg.innerHTML = `ยินดีด้วยคุณ <span style="color:#5aff99">${userName}</span>!<br>โปรเจกต์ขโมยรหัสผ่านสำเร็จแล้ว 555`;
        overlay.classList.add('addbox');
    }
});

// ฟังก์ชันล้างข้อมูล (ปุ่มยกเลิก)
btnCancel.addEventListener('click', () => {
    emailInput.value = "";
    pass1Input.value = "";
    pass2Input.value = "";
    errorEmail.innerText = "";
    errorPass1.innerText = "";
    errorPass2.innerText = "";
    overlay.classList.remove('addbox');
});

// คลิกที่พื้นหลังสีดำเพื่อปิดหน้าต่างได้ด้วย
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('addbox');
    }
});