const { createClient } = require('@supabase/supabase-js')

// Koneksi ke Supabase (ganti dengan detail proyek Anda)
const supabaseUrl = 'https://ggfnqqsznfxlbujjpidj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZm5xcXN6bmZ4bGJ1ampwaWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0NDEyNDksImV4cCI6MjA0NDAxNzI0OX0.-hhUwLwXz4oygXprNZISGD430lbnEviFDVM6Il_uIKU'
const supabase = createClient(supabaseUrl, supabaseKey)

// Fungsi untuk menambahkan data ke tabel
async function addData() {
  const { data, error } = await supabase
    .from('penjualan')
    .insert([
      {
        nama_pelanggan: 'John Doe',
        nama_produk: 'Produk A',
        harga_produk: 50000,
        harga_jual: 60000
      },
    ])

  if (error) {
    console.error('Error inserting data:', error)
  } else {
    console.log('Data inserted successfully:', data)
  }
}

addData()
