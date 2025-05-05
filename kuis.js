const timerContainer = document.getElementById("timer");
const soalContainer = document.getElementById("soal");
const jawabanContainer = document.getElementById("jawaban");
const hasilContainer = document.getElementById("hasil");
const skorContainer = document.createElement("div");
const nomorSoalContainer = document.createElement("div");

document.body.insertBefore(skorContainer, document.getElementById("kuis-container"));
document.body.insertBefore(nomorSoalContainer, document.getElementById("kuis-container"));

let waktu = 10; // Batas waktu dalam detik
let interval;
let skor = 0;
let soalSaatIni = 0;

const pertanyaan = [
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["45", "55", "65", "75"],
        jawabanBenar: "Jakarta",
    },
    {
        soal: "Berapa hasil dari = ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    {
        soal: "Berapa hasil dari 5+5x5+5= ?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
        
    ];

function updateTampilan() {
    skorContainer.textContent = `Skor: ${skor}`;
    nomorSoalContainer.textContent = `Soal ke: ${soalSaatIni + 1} dari ${pertanyaan.length}`;
}

function mulaiTimer() {
    waktu = 10;
    timerContainer.textContent = `Waktu tersisa: ${waktu} detik`;
    interval = setInterval(() => {
        waktu--;
        timerContainer.textContent = `Waktu tersisa: ${waktu} detik`;
        if (waktu <= 0) {
            clearInterval(interval);
            cekJawaban(""); // Lewati soal jika waktu habis
        }
    }, 1000);
}

function tampilkanSoal() {
    clearInterval(interval);
    mulaiTimer();
    updateTampilan();
    
    const soal = pertanyaan[soalSaatIni];
    soalContainer.textContent = soal.soal;

    jawabanContainer.innerHTML = "";
    soal.jawaban.forEach((jawaban) => {
        const tombol = document.createElement("button");
        tombol.textContent = jawaban;
        tombol.addEventListener("click", () => cekJawaban(jawaban));
        jawabanContainer.appendChild(tombol);
    });
}

function cekJawaban(jawaban) {
    const soal = pertanyaan[soalSaatIni];
    if (jawaban === soal.jawabanBenar) {
        skor++;
    }
    soalSaatIni++;
    if (soalSaatIni < pertanyaan.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    hasilContainer.textContent = `Skor Anda: ${skor} dari ${pertanyaan.length}`;
}

tampilkanSoal();