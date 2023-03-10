function validateForm() {
    let x = document.validTeszt.kNev.value;
    let y = document.validTeszt.vNev.value;
    let z = document.validTeszt.jelszo1.value;
    let a = document.validTeszt.jelszo2.value;
    if (x === "" || y === "" || z === "" || a === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
}
