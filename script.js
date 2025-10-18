const leaderboardData = [
    { rank: 1, name: "JuaraCoder", score: 1500, badge: "Emas" },
    { rank: 2, name: "SkillMaster", score: 1250, badge: "Perak" },
    { rank: 3, name: "BelajarKuy", score: 1100, badge: "Perunggu" },
    { rank: 4, name: "CepatTangguh", score: 950, badge: "Muda" },
    { rank: 5, name: "PemainBaru", score: 800, badge: "Muda" }
];

// Fungsi untuk menampilkan notifikasi poin dengan animasi
function showPointNotification(points) {
    // 1. Buat elemen notifikasi
    const notification = document.createElement('div');
    notification.className = 'point-notification';
    notification.textContent = `+${points} Poin! 🎉`;
    document.body.appendChild(notification);

    // 2. Hilangkan elemen setelah animasi selesai (sekitar 2 detik total)
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Fungsi untuk mengisi Leaderboard (hampir sama, tapi kini ada animasi CSS)
function renderLeaderboard() {
    const listContainer = document.getElementById('leaderboard-list');
    listContainer.innerHTML = ''; 

    // Urutkan data berdasarkan skor, meskipun sudah diurutkan di data dummy
    const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);

    sortedData.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        // Gunakan index+1 sebagai rank visual karena sudah diurutkan
        const rank = index + 1; 
        const topClass = rank <= 3 ? ' top-3' : '';
        itemDiv.className = `leaderboard-item${topClass}`;

        let badgeIcon = '';
        if (rank === 1) badgeIcon = '🥇';
        else if (rank === 2) badgeIcon = '🥈';
        else if (rank === 3) badgeIcon = '🥉';

        itemDiv.innerHTML = `
            <span class="rank">${badgeIcon || rank}</span>
            <span class="name">${item.name}</span>
            <span class="score">${item.score} Pts</span>
        `;
        // Set delay animasi berdasarkan index
        itemDiv.style.animationDelay = `${0.1 + index * 0.1}s`;
        
        listContainer.appendChild(itemDiv);
    });
}

// Fungsi untuk menangani klik tombol "Mulai Sekarang"
function setupChallengeHandlers() {
    const startButtons = document.querySelectorAll('.btn-start');
    startButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const challengeCard = event.target.closest('.challenge-card');
            const challengeName = challengeCard.querySelector('h3').textContent;

            // Simulasikan mulai kuis
            button.textContent = 'Dalam Proses...';
            button.disabled = true;
            
            // Simulasikan durasi kuis (5 menit diganti jadi 2 detik di sini)
            setTimeout(() => {
                const pointsEarned = 75; // Poin yang didapat
                
                // 1. Tampilkan Notifikasi Poin yang dramatis
                showPointNotification(pointsEarned);

                // 2. Beri Feedback Visual (perubahan teks)
                button.textContent = `Selesai! Berhasil!`;
                button.style.backgroundColor = '#1e90ff';

                // 3. Simulasikan Pembaruan Data (Leaderboard)
                // Di aplikasi nyata, ini akan memanggil API untuk update skor.
                // Untuk demo, kita beri jeda sedikit sebelum refresh Leaderboard
                setTimeout(() => {
                    alert("Leaderboard diperbarui! Cek posisimu!");
                    // renderLeaderboard(); // Panggil ini jika Anda benar-benar mengupdate data
                    button.textContent = 'Mulai Lagi?';
                    button.disabled = false;
                    button.style.backgroundColor = '#4CAF50';
                }, 2000); 

            }, 2000); // Simulasi waktu kuis (2 detik)
        });
    });
}

// Jalankan semua fungsi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderLeaderboard();
    setupChallengeHandlers();
});
