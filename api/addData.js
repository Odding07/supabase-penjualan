// pages/api/addData.js
const { createClient } = require('@supabase/supabase-js');

// Koneksi ke Supabase (ganti dengan detail proyek Anda)
const supabaseUrl = 'https://ggfnqqsznfxlbujjpidj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZm5xcXN6bmZ4bGJ1ampwaWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0NDEyNDksImV4cCI6MjA0NDAxNzI0OX0.-hhUwLwXz4oygXprNZISGD430lbnEviFDVM6Il_uIKU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nama_pelanggan, nama_produk, harga_produk, harga_jual } = req.body;

    // Validasi input
    if (!nama_pelanggan || !nama_produk || harga_produk == null || harga_jual == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Fungsi untuk menambahkan data ke tabel
    const { data, error } = await supabase
      .from('penjualan')
      .insert([
        {
          nama_pelanggan,
          nama_produk,
          harga_produk,
          harga_jual,
        },
      ]);

    // Menangani kesalahan
    if (error) {
      console.error('Error inserting data:', error);
      return res.status(500).json({ error: 'Error inserting data' });
    } else {
      return res.status(200).json({ message: 'Data inserted successfully', data });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
