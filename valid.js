function validateForm() {
    // let x = document.validTeszt.kNev.value;
    // let y = document.validTeszt.vNev.value;
    // let z = document.validTeszt.jelszo1.value;
    // let a = document.validTeszt.jelszo2.value;
    let x = document.getElementById("kNev").value;
    let y = document.getElementById("vNev").value;
    let jelszo1 = document.getElementById("jelszo1").value;
    let jelszo2 = document.getElementById("jelszo2");
    if (x === "" || y === "" || jelszo1 === "" || jelszo2.value === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
    else if(jelszo1!==jelszo2.value){
        alert("A jelszónak egyeznie kell!");
        jelszo2.focus();
        return false;
    }
}
