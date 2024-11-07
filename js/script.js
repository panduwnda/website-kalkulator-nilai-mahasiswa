// Mendefinisikan konstanta bobot untuk nilai tugas, UTS, dan UAS
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;

// Fungsi untuk menghitung nilai berdasarkan input
function calculateGrade(event) {
  event.preventDefault(); // Mencegah form dari reload halaman

  // Ambil nilai input
  const nilaiTugas = parseFloat(document.getElementById("tugas").value);
  const nilaiUTS = parseFloat(document.getElementById("uts").value);
  const nilaiUAS = parseFloat(document.getElementById("uas").value);

  // Hitung rata-rata tertimbang
  const rataRata = nilaiTugas * BOBOT_TUGAS + nilaiUTS * BOBOT_UTS + nilaiUAS * BOBOT_UAS;

  // Tentukan nilai huruf
  let nilaiHuruf;
  if (rataRata >= 90) {
    nilaiHuruf = "A";
  } else if (rataRata >= 80) {
    nilaiHuruf = "B";
  } else if (rataRata >= 70) {
    nilaiHuruf = "C";
  } else if (rataRata >= 60) {
    nilaiHuruf = "D";
  } else {
    nilaiHuruf = "E";
  }

  // Tentukan status lulus atau gagal
  const status = rataRata >= 60 ? "Lulus" : "Gagal";

  // Simpan hasil perhitungan ke localStorage
  localStorage.setItem("nilaiTugas", nilaiTugas);
  localStorage.setItem("nilaiUTS", nilaiUTS);
  localStorage.setItem("nilaiUAS", nilaiUAS);
  localStorage.setItem("rataRata", rataRata.toFixed(2));
  localStorage.setItem("nilaiHuruf", nilaiHuruf);
  localStorage.setItem("status", status);

  // Redirect ke halaman hasil
  window.location.href = "result.html";
}
