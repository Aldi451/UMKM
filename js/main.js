// Data Dummy Produk (Simulasi Database UMKM) - Sudah diperbaiki tanda kurungnya
const productsData = [
    { id: 1, name: "Kopi Arabika Gayo", category: "makanan", price: "Rp 85.000", img: "https://www.image2url.com/r2/default/images/1784003877499-0c7e9213-c6f4-41ea-8941-35ae44b1e51a.png?auto=format&fit=crop&w=600&h=450&q=80" },
    { id: 2, name: "Tas Anyaman Bambu", category: "kerajinan", price: "Rp 150.000", img: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 3, name: "Keripik Tempe Premium", category: "makanan", price: "Rp 20.000", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 4, name: "Kain Batik Bali", category: "kerajinan", price: "Rp 350.000", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&h=300&q=80" }
];

// Render Fungsi Produk
const displayProducts = (products) => {
    const container = document.getElementById('product-container');
    if (!container) return; // Pengaman jika elemen id tidak ditemukan
    
    container.innerHTML = products.map(product => `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="card border-0 shadow-sm h-100">
                <img src="${product.img}" class="card-img-top" alt="${product.name}" style="height: 180px; object-fit: cover;">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <span class="badge badge-success mb-2">${product.category.toUpperCase()}</span>
                        <h6 class="font-weight-bold mb-1">${product.name}</h6>
                        <p class="text-danger small font-weight-bold">${product.price}</p>
                    </div>
                    <button class="btn btn-sm btn-outline-success btn-block mt-2">Beli Sekarang</button>
                </div>
            </div>
        </div>
    `).join('');
};

// Event Listener saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
    // Tampilkan semua produk di awal
    displayProducts(productsData);

    // Sistem Filter Kategori
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Ubah style tombol aktif
            filterButtons.forEach(b => {
                b.classList.remove('btn-success');
                b.classList.add('btn-outline-success');
            });
            e.target.classList.remove('btn-outline-success');
            e.target.classList.add('btn-success');

            const category = e.target.getAttribute('data-category');
            
            // Filter Data
            if (category === 'all') {
                displayProducts(productsData);
            } else {
                const filtered = productsData.filter(item => item.category === category);
                displayProducts(filtered);
            }
        });
    });

    // Validasi & Handling Form Kontak
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const alertBox = document.getElementById('formAlert');

            alertBox.className = "mt-3 alert alert-info";
            alertBox.innerText = "Sedang mengirim pesan...";
            alertBox.classList.remove('d-none');

            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay jaringan

            alertBox.className = "mt-3 alert alert-success";
            alertBox.innerText = `Terima kasih ${name}, pesan Anda berhasil dikirim!`;
            contactForm.reset();
        });
    }
});
