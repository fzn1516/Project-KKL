function goLevel(id) {
  // Validasi id: pastikan ada dan berupa string/number
  if (id === undefined || id === null) {
    console.error('Level ID tidak valid!');
    return; // hentikan eksekusi jika id tidak valid
  }

  // Simpan level ke localStorage
  localStorage.setItem('levelId', String(id)); // konversi ke string agar aman

  // Redirect ke halaman ikon
  const baseUrl = 'https://fzn1516.github.io/Project-KKL-main-/bangun-ikon/index.html';
  window.location.href = `${baseUrl}?level=${encodeURIComponent(id)}`;
}
