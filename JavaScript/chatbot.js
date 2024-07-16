document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');

    sendBtn.addEventListener('click', function() {
        sendMessage();
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText) {
            appendMessage(userText, 'user');
            userInput.value = '';
            showTypingIndicator();
            setTimeout(() => {
                const botResponse = getBotResponse(userText);
                hideTypingIndicator();
                appendMessage(botResponse, 'bot');
                const currentDate = new Date().toLocaleDateString('id-ID');
                appendMessage(`Tanggal Konsultasi: ${currentDate}`, 'bot');
            }, 1000);
        }
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.innerHTML = `<div class="message-content">${message}</div>`;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('chat-message', 'bot-message', 'typing-indicator');
        typingIndicator.innerHTML = `<div class="message-content">...</div>`;
        chatbox.appendChild(typingIndicator);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            chatbox.removeChild(typingIndicator);
        }
    }

    function getBotResponse(userText) {
        userText = userText.toLowerCase();
        if (userText.includes("paracetamol")) {
            return `
               <div class="message-content">
                <img src="paracetamol.jpg" alt="paracetamol" style="max-width: 100%; border-radius: 8px;"><br>
                <strong>Nama:</strong> Paracetamol<br>
                <strong>Deskripsi:</strong> Paracetamol digunakan untuk mengobati nyeri ringan hingga sedang dan demam.<br>
                <strong>Usia:</strong> Dapat digunakan oleh semua usia dengan dosis yang sesuai.<br>
                <strong>Efek Samping:</strong> Efek samping jarang terjadi, namun dapat termasuk mual, ruam kulit, dan gangguan hati jika dikonsumsi berlebihan.<br>
                <strong>Cara Penggunaan:</strong> Ikuti petunjuk dokter atau sesuai dengan kemasan, biasanya diminum setiap 4-6 jam.<br>
                <strong>Kisaran Harga:</strong> Rp 2.000 - Rp 10.000 per tablet
                </div>
            `;
        } else if (userText.includes("ibuprofen")) {
            return `
                <div class="message-content">
                    <img src="ibuprofen.jpg" alt="Ibuprofen" style="max-width: 100%; border-radius: 8px;"><br>
                    <strong>Nama:</strong> Ibuprofen<br>
                    <strong>Deskripsi:</strong> Ibuprofen adalah obat anti-inflamasi nonsteroid (NSAID) yang digunakan untuk mengurangi demam dan mengobati nyeri atau peradangan.<br>
                    <strong>Usia:</strong> Biasanya digunakan oleh orang dewasa dan anak-anak di atas 6 bulan.<br>
                    <strong>Efek Samping:</strong> Efek samping termasuk sakit perut, mual, muntah, sakit kepala, dan pendarahan lambung.<br>
                    <strong>Cara Penggunaan:</strong> Minum dengan makanan atau susu untuk menghindari sakit perut. Jangan melebihi dosis yang dianjurkan.<br>
                    <strong>Kisaran Harga:</strong> Rp 3.000 - Rp 15.000 per tablet
                </div>
            `;
        } else if (userText.includes("amoxicillin")) {
            return `
            <div class="message-content">
                <img src="amoxicillin.jpg" alt="amoxicillin" style="max-width: 100%; border-radius: 8px;"><br>
                <strong>Nama:</strong> Amoxicillin<br>
                <strong>Deskripsi:</strong> Amoxicillin adalah antibiotik yang digunakan untuk mengobati berbagai infeksi bakteri.<br>
                <strong>Usia:</strong> Bisa digunakan oleh semua usia dengan dosis yang sesuai.<br>
                <strong>Efek Samping:</strong> Dapat menyebabkan diare, mual, muntah, dan reaksi alergi.<br>
                <strong>Cara Penggunaan:</strong> Diminum sesuai resep dokter, biasanya setiap 8 atau 12 jam.<br>
                <strong>Kisaran Harga:</strong> Rp 5.000 - Rp 50.000 per tablet
            </div>
            `;
        } else if (userText.includes("cetirizine")) {
            return `
            <div class="message-content">
                <img src="cetirizine.jpg" alt="cetirizine" style="max-width: 100%; border-radius: 8px;"><br>
                <strong>Nama:</strong> Cetirizine<br>
                <strong>Deskripsi:</strong> Cetirizine adalah antihistamin yang digunakan untuk mengobati alergi.<br>
                <strong>Usia:</strong> Bisa digunakan oleh anak-anak dan dewasa dengan dosis yang sesuai.<br>
                <strong>Efek Samping:</strong> Mengantuk, mulut kering, dan sakit kepala.<br>
                <strong>Cara Penggunaan:</strong> Diminum sekali sehari sesuai kebutuhan.<br>
                <strong>Kisaran Harga:</strong> Rp 2.000 - Rp 15.000 per tablet
            </div>
            `;
        } else if (userText.includes("omeprazole")) {
            return `
            <div class="message-content">
                <img src="omeprazole.jpg" alt="omeprazole" style="max-width: 100%; border-radius: 8px;"><br>
                <strong>Nama:</strong> Omeprazole<br>
                <strong>Deskripsi:</strong> Omeprazole digunakan untuk mengobati penyakit asam lambung dan tukak lambung.<br>
                <strong>Usia:</strong> Digunakan oleh orang dewasa dan anak-anak dengan dosis yang sesuai.<br>
                <strong>Efek Samping:</strong> Sakit kepala, mual, muntah, diare, dan sakit perut.<br>
                <strong>Cara Penggunaan:</strong> Biasanya diminum sekali sehari sebelum makan.<br>
                <strong>Kisaran Harga:</strong> Rp 5.000 - Rp 30.000 per tablet
            </div>
            `;
        } else if (userText.includes("loratadine")) {
            return `
            <div class="message-content">
                <img src="loratadine.jpg" alt="loratadine" style="max-width: 100%; border-radius: 8px;"><br>
                <strong>Nama:</strong> Loratadine<br>
                <strong>Deskripsi:</strong> Loratadine adalah antihistamin yang digunakan untuk mengobati gejala alergi.<br>
                <strong>Usia:</strong> Digunakan oleh orang dewasa dan anak-anak dengan dosis yang sesuai.<br>
                <strong>Efek Samping:</strong> Mengantuk, sakit kepala, dan mulut kering.<br>
                <strong>Cara Penggunaan:</strong> Diminum sekali sehari sesuai kebutuhan.<br>
                <strong>Kisaran Harga:</strong> Rp 2.000 - Rp 10.000 per tablet
            </div>
            `;
        } else if (userText.includes("ranitidine")) {
            return `
            <div class="message-content">
                <img src="ranitidine.jpg" alt="ranitidine" style="max-width: 100%; border-radius: 8px;"><br>
                <strong>Nama:</strong> Ranitidine<br>
                <strong>Deskripsi:</strong> Ranitidine digunakan untuk mengobati dan mencegah tukak lambung dan usus, serta penyakit refluks gastroesofageal (GERD).<br>
                <strong>Usia:</strong> Digunakan oleh orang dewasa dan anak-anak dengan dosis yang sesuai.<br>
                <strong>Efek Samping:</strong> Sakit kepala, pusing, diare, dan sembelit.<br>
                <strong>Cara Penggunaan:</strong> Diminum sekali atau dua kali sehari sesuai kebutuhan.<br>
                <strong>Kisaran Harga:</strong> Rp 3.000 - Rp 20.000 per tablet
            `;
        } else if (userText.includes("metformin")) {
            return `
            <div class="message-content">
                <img src="metformin.jpg" alt="metformin" style="max-width: 100%; border-radius: 8px;"><br>
                <strong>Nama:</strong> Metformin<br>
                <strong>Deskripsi:</strong> Metformin digunakan untuk mengontrol kadar gula darah pada pasien diabetes tipe 2.<br>
                <strong>Usia:</strong> Digunakan oleh orang dewasa dengan dosis yang sesuai.<br>
                <strong>Efek Samping:</strong> Mual, muntah, sakit perut, diare, dan kehilangan nafsu makan.<br>
                <strong>Cara Penggunaan:</strong> Diminum sekali atau dua kali sehari bersama makanan.<br>
                <strong>Kisaran Harga:</strong> Rp 5.000 - Rp 25.000 per tablet
            `;
        } else if (userText.includes("batuk") || userText.includes("pilek")) {
            return `
                <strong>Konsultasi:</strong> Untuk keluhan batuk dan pilek, disarankan mengonsumsi obat seperti dextromethorphan untuk mengatasi batuk kering dan pseudoephedrine untuk mengatasi hidung tersumbat.<br>
                <strong>Saran:</strong> Minum banyak air putih, istirahat yang cukup, dan hindari minuman dingin.
            `;
        } else if (userText.includes("demam")) {
            return `
                <strong>Konsultasi:</strong> Untuk keluhan demam, Anda bisa mengonsumsi paracetamol atau ibuprofen untuk menurunkan suhu tubuh.<br>
                <strong>Saran:</strong> Istirahat yang cukup, minum air putih yang banyak, dan kompres dengan air hangat jika diperlukan.
            `;
        } else {
            return `
                <strong>Konsultasi:</strong> Maaf, saya tidak mengerti. Bisa coba jelaskan lebih spesifik atau tanyakan tentang Paracetamol, Ibuprofen, Amoxicillin, Cetirizine, Omeprazole, Loratadine, Ranitidine, atau Metformin.
            `;
        }
    }
});