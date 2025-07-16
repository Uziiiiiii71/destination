fetch('http://localhost:5000/api/destinations')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('destinations');

        data.forEach(dest => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
        <img src="${dest.image}" alt="${dest.title}">
        <h3>${dest.title}</h3>
        <p>${dest.description}</p>
        <p><strong>From $${dest.price}</strong></p>`;
            container.appendChild(card);
        });
    })
    .catch(err => {
        console.error('Gagal ambil data:', err);
    });
fetch('http://localhost:5000/api/destinations')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('destination-list');
        container.innerHTML = ''; // hapus konten statis jika ada

        data.forEach(dest => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
        <img src="${dest.image}" alt="${dest.title}" />
        <div class="card-content">
          <h3>${dest.title}</h3>
          <p>${dest.description}</p>
          <p class="price">FROM $${dest.price}</p>
        </div>
      `;
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Gagal mengambil data:', error);
    });
