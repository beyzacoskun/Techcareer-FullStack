const performCalculation = (userData) => {
  if (userData === 44) {
    console.log("Çıkış yapılıyor...");
    return;
  }

  let evenCount = 0;
  let oddCount = 0;
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 1; i <= userData; i++) {
    if (i % 2 === 0) {
      if (evenCount === 7) {
        continue;
      }
      evenCount++;
      evenSum += i;
    } else {
      oddCount++;
      oddSum += i;
    }

    if (i === 50) {
      console.log("50'ye kadar toplama yapıldı.");
      break;
    }
  }

  console.log(`Toplam çift sayı adedi: ${evenCount}`);
  console.log(`Toplam çift sayı toplamı: ${evenSum}`);
  console.log(`Toplam tek sayı adedi: ${oddCount}`);
  console.log(`Toplam tek sayı toplamı: ${oddSum}`);
};

const userInput = prompt("Lütfen bir sayı girin (1-50 arası):");
const userNumber = parseInt(userInput);

if (userNumber >= 1 && userNumber <= 50) {
  performCalculation(userNumber);
} else {
  console.log("Geçersiz giriş! Lütfen 1 ile 50 arasında bir sayı girin.");
}