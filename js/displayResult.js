// Fungsi untuk menampilkan hasil perhitungan dari localStorage
function displayResult() {
  // Ambil nilai dari localStorage
  const nilaiTugas = localStorage.getItem("nilaiTugas");
  const nilaiUTS = localStorage.getItem("nilaiUTS");
  const nilaiUAS = localStorage.getItem("nilaiUAS");
  const rataRata = localStorage.getItem("rataRata");
  const nilaiHuruf = localStorage.getItem("nilaiHuruf");
  const status = localStorage.getItem("status");

  // Tentukan warna status berdasarkan hasil
  const statusClass = status === "Lulus" ? "pass" : "fail";

  // Tampilkan hasil ke elemen dengan id 'hasil'
  document.getElementById("hasil").innerHTML = `
        <p>Nilai Tugas (30%): ${nilaiTugas}</p>
        <p>Nilai UTS (30%): ${nilaiUTS}</p>
        <p>Nilai UAS (40%): ${nilaiUAS}</p>
        <p>Rata-rata Tertimbang: ${rataRata}</p>
        <p>Nilai Huruf: ${nilaiHuruf}</p>
        <p class="${statusClass}">Status: ${status}</p>
    `;
}

// Panggil fungsi displayResult ketika halaman dimuat
window.onload = displayResult;
