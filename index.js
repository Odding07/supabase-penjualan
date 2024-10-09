const { createClient } = require('@supabase/supabase-js')

// Koneksi ke Supabase menggunakan environment variables
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
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
