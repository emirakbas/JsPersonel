kisiler = [ 
    {
    ad: "Ali",
    soyad: "Yılmaz",
    cinsiyet: "Erkek",
    telefon: "0555 555 55 55",
    adres: "İstanbul",
    meslek: "Mühendis",
    diller: ["Türkçe", "İngilizce", "Almanca"],
    hobiler: ["Sinema", "Spor", "Kitap Okumak"],

}, //Objeler arasında virgül koymayı unutma!

{
    ad: "Mehmet",
    soyad: "Akın",
    cinsiyet: "Erkek",
    telefon: "0551 000 00 00",
    adres: "İstanbul",
    meslek: "Demirci Ustası",
    diller: ["Türkçe", "Almanca"],
    hobiler: ["Kılıç Sporları", "Geleneksel Dövüş Sanatları", "Kitap Okumak"],
},

{
    ad: "Muhammed",
    soyad: "Kadıoğlu",
    cinsiyet: "Erkek",
    telefon: "0501 000 00 00",
    adres: "Bursa",
    meslek: "İmam",
    diller: ["Türkçe", "Arapça", "Farsça"],
    hobiler: ["Hat Sanatı", "Musiki", "Araştırma Yapmak"]
}

];

let istek = prompt('Sistemde toplam ' + kisiler.length + ' kişi bulunmaktadır. Lütfen bilgi almak istediğiniz kişinin adını yazınız veya tüm kişileri görmek için "all" yazınız.');

console.log(istek);

if (istek === "all") {
    tumKisiler = kisiler.map(kisi => kisi.ad + ' ' + kisi.soyad);
    console.log(tumKisiler);
}

else if (istek === "Ali") {
    const ali = kisiler[0];
    console.log(kisiler[0]);
    console.log('Bu personel toplam ' + ali.diller.length + ' dil bilmektedir.' + '\n' + 'Bu personel toplam ' + ali.hobiler.length + ' hobiye sahiptir:');
    ali.hobiler.forEach(hobi => console.log(hobi));
}

else if (istek === "Mehmet") {
    const mehmet = kisiler[1];
    console.log(kisiler[1]);
    console.log('Bu personel toplam ' + mehmet.diller.length + ' dil bilmektedir.' + '\n' + 'Bu personel toplam ' + mehmet.hobiler.length + ' hobiye sahiptir:');
    mehmet.hobiler.forEach(hobi => console.log(hobi));
}

else if (istek === "Muhammed") {
    const muhammed = kisiler[2];
    console.log(kisiler[2]);
    console.log('Bu personel toplam ' + muhammed.diller.length + ' dil bilmektedir.' + '\n' + 'Bu personel toplam ' + muhammed.hobiler.length + ' hobiye sahiptir:');
    muhammed.hobiler.forEach(hobi => console.log(hobi));
}

else {
    console.log('Aradığınız kişi sistemde bulunamadı. Lütfen tekrar deneyiniz.');
};