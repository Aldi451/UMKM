// Data Dummy Produk (Simulasi Database UMKM)
const productsData = [
    { id: 1, name: "Kopi Arabika Gayo", category: "makanan", price: "Rp 85.000", img: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Tas Anyaman Bambu", category: "kerajinan", price: "Rp 150.000", img: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Keripik Tempe Premium", category: "makanan", price: "Rp 20.000", img: "https://via.placeholder.com/300x200" },
    { id: 4, name: "Kain Batik Tulis", category: "kerajinan", price: "Rp 350.000", img: "https://via.placeholder.com/300x200" }
];

// Render Fungsi Produk
const displayProducts = (products) => {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(product => `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="card border-0 shadow-sm">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <span class="badge badge-success mb-2">${product.category.toUpperCase()}</span>
                    <h6 class="font-weight-bold mb-1">${product.name}</h6>
                    <p class="text-danger small font-weight-bold">${product.price}</p>
                    <button class="btn btn-sm btn-outline-success btn-block">Beli Sekarang</button>
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
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const alertBox = document.getElementById('formAlert');

        // Simulasi pengiriman data asinkron (Async/Await ES8)
        alertBox.className = "mt-3 alert alert-info";
        alertBox.innerText = "Sedang mengirim pesan...";
        alertBox.classList.remove('d-none');

        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay jaringan

        alertBox.className = "mt-3 alert alert-success";
        alertBox.innerText = `Terima kasih ${name}, pesan Anda berhasil dikirim!`;
        contactForm.reset();
    });
});
