// Data Leaderboard Dummy
const leaderboardData = [
    { rank: 1, name: "JuaraCoder", score: 1500, badge: "Emas" },
    { rank: 2, name: "SkillMaster", score: 1250, badge: "Perak" },
    { rank: 3, name: "BelajarKuy", score: 1100, badge: "Perunggu" },
    { rank: 4, name: "CepatTangguh", score: 950, badge: "Muda" },
    { rank: 5, name: "PemainBaru", score: 800, badge: "Muda" }
];

// Fungsi untuk mengisi Leaderboard
function renderLeaderboard() {
    const listContainer = document.getElementById('leaderboard-list');
    listContainer.innerHTML = ''; // Kosongkan kontainer

    leaderboardData.forEach(item => {
        const itemDiv = document.createElement('div');
        // Tambahkan kelas khusus untuk Top 3
        const topClass = item.rank <= 3 ? ' top-3' : '';
        itemDiv.className = `leaderboard-item${topClass}`;

        let badgeIcon = '';
        if (item.rank === 1) badgeIcon = '🥇';
        else if (item.rank === 2) badgeIcon = '🥈';
        else if (item.rank === 3) badgeIcon = '🥉';

        itemDiv.innerHTML = `
            <span class="rank">${badgeIcon || item.rank}</span>
            <span class="name">${item.name}</span>
            <span class="score">${item.score} Pts</span>
        `;
        listContainer.appendChild(itemDiv);
    });
}

// Fungsi untuk menangani klik tombol "Mulai Sekarang"
function setupChallengeHandlers() {
    const startButtons = document.querySelectorAll('.btn-start');
    startButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Dapatkan nama tantangan dari data-challenge di card induk
            const challengeCard = event.target.closest('.challenge-card');
            const challengeName = challengeCard.querySelector('h3').textContent;

            // Logika Game: Peringatan cepat untuk simulasi
            alert(`Memulai: ${challengeName}!\nMode Game 5 Menit diaktifkan. Ayo main!`);
            
            // Tambahkan logika gamifikasi (misalnya, berikan poin)
            // Di sini, kita simulasikan penambahan poin.
            
            // Contoh sederhana: Mengubah teks tombol setelah diklik (opsional)
            button.textContent = 'Selesai! (+50 Pts)';
            button.disabled = true;
            
            // Di aplikasi nyata, ini akan memicu pembaruan skor pengguna dan leaderboard.
            setTimeout(() => {
                alert("Selamat! Anda mendapat 50 Poin dan Badge Harian!");
                // Panggil renderLeaderboard() lagi jika skor user diupdate
            }, 1000); // Simulasi waktu kuis selesai
        });
    });
}

// Jalankan semua fungsi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderLeaderboard();
    setupChallengeHandlers();
});
