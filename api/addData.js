const { createClient } = require('@supabase/supabase-js')

// Koneksi ke Supabase menggunakan environment variables
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {
  // Memeriksa apakah metode permintaan adalah POST
  if (req.method === 'POST') {
    const { nama_pelanggan, nama_produk, harga_produk, harga_jual } = req.body

    const { data, error } = await supabase
      .from('penjualan')
      .insert([
        {
          nama_pelanggan,
          nama_produk,
          harga_produk,
          harga_jual
        },
      ])

    if (error) {
      console.error('Error inserting data:', error)
      return res.status(500).json({ error: 'Error inserting data' })
    }

    return res.status(200).json({ message: 'Data inserted successfully', data })
  } else {
    // Mengembalikan 405 Method Not Allowed jika metode tidak didukung
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
