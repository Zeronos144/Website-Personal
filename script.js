document.getElementById("startButton").addEventListener("click", function() {
    // Memulai animasi
    const animationArea = document.getElementById("animationArea");
    const shofaPhoto = document.getElementById("shofaPhoto");

    // Menambahkan balon
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        
        // Posisi acak balon
        const randomLeft = Math.floor(Math.random() * 90) + "%"; // Posisi horizontal acak
        balloon.style.left = randomLeft;

        // Gambar balon
        balloon.innerHTML = "<img src='https://i.imgur.com/F9SYTqa.png' alt='Balon'>"; // Gambar balon

        animationArea.appendChild(balloon);

        // Membuat balon menghilang setelah animasi selesai
        setTimeout(() => {
            balloon.style.animation = "balloonBurst 1s ease-out forwards";
        }, 3000);
    }

    // Menampilkan foto Shofa di tengah
    setTimeout(() => {
        shofaPhoto.style.display = "block";
        shofaPhoto.src = "https://your-photo-url.com/shofa.jpg";  // Ganti dengan foto Shofa kamu
    }, 15000); // Foto muncul setelah 15 detik

    // Menghentikan animasi setelah 30 detik
    setTimeout(() => {
        alert("Selamat Ulang Tahun Shofa! Semoga harimu penuh kebahagiaan!");
    }, 30000); // Setelah 30 detik
});
