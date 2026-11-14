function hitungTotal() {
    // 1. Ambil data dari input
    let nama = document.getElementById('nama').value;
    let barang = document.getElementById('barang').value;
    let harga = parseFloat(document.getElementById('harga').value);
    let jumlah = parseInt(document.getElementById('jumlah').value);

    // Validasi input agar tidak error jika kosong atau minus
    if (!nama || !barang || isNaN(harga) || isNaN(jumlah) || harga <= 0 || jumlah <= 0) {
        alert("Harap isi semua kolom dengan benar! Harga dan jumlah harus lebih dari 0.");
        return;
    }

    // 2. Hitung subtotal
    let subtotal = harga * jumlah;
    let diskon = 0;

    // 3. Tentukan diskon dengan if...else
    if (subtotal >= 500000) {
        diskon = subtotal * 0.10; // Diskon 10%
    } else if (subtotal >= 250000) {
        diskon = subtotal * 0.05; // Diskon 5%
    } else {
        diskon = 0; // Tidak ada diskon
    }

    // 4. Hitung total pembayaran
    let totalBayar = subtotal - diskon;

    // Fungsi format angka ke Rupiah
    const formatRupiah = (angka) => {
        return "Rp" + angka.toLocaleString('id-ID');
    };

    // 5. Tampilkan data ke dalam nota
    document.getElementById('out-nama').textContent = nama;
    document.getElementById('out-barang').textContent = barang;
    document.getElementById('out-subtotal').textContent = formatRupiah(subtotal);
    document.getElementById('out-diskon').textContent = formatRupiah(diskon);
    document.getElementById('out-total').textContent = formatRupiah(totalBayar);

    // 6. Tampilkan nota dengan efek animasi turun dan memudar (fade-in)
    const nota = document.getElementById('hasil-output');
    nota.classList.remove('hidden');
    nota.classList.add('fade-in');
}

// Fungsi tambahan untuk tombol Reset
function resetForm() {
    // Kosongkan semua input
    document.getElementById('nama').value = '';
    document.getElementById('barang').value = '';
    document.getElementById('harga').value = '';
    document.getElementById('jumlah').value = '';

    // Sembunyikan kembali nota
    const nota = document.getElementById('hasil-output');
    nota.classList.add('hidden');
    nota.classList.remove('fade-in');
    
    // Kembalikan kursor ke kolom Nama Pembeli
    document.getElementById('nama').focus();
}