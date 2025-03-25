function hitungLuas() {
    let sisi = document.getElementById('sisiLuas').value;
    if (sisi === "" || sisi <= 0) {
        alert("Nilai Sisi Tidak Valid!");
        return;
    }
    let luas = sisi * sisi;
    document.getElementById('hasilLuas').textContent = luas;
}

function hitungKeliling() {
    let sisi = document.getElementById('sisiKeliling').value;
    if (sisi === "" || sisi <= 0) {
        alert("Nilai Sisi Tidak Valid!");
        return;
    }
    let keliling = 4 * sisi;
    document.getElementById('hasilKeliling').textContent = keliling;
}

function resetLuas() {
    document.getElementById('sisiLuas').value = "";
    document.getElementById('hasilLuas').textContent = "...";
}

function resetKeliling() {
    document.getElementById('sisiKeliling').value = "";
    document.getElementById('hasilKeliling').textContent = "...";
}