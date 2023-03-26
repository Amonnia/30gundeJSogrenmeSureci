//4.GÜN
//Exercises Level 1


// 1) araba kullanmak için yaşın yeterli mi sorusu 18 yaşından sonrası kullanabilir
// let EnoughToDrive = 18
// let UserAge = prompt('Kaç Yaşındasın ?')

// if (UserAge>=EnoughToDrive) {
    
//     alert("Araba Kullanabilirsin.")

// } else {
//     alert(`Henüz araba kullanamazsın araba kullanmak için ` + (EnoughToDrive - UserAge) + ` yılın daha var`  )
// }   



// 2) iki yaşı karşılaştırma kim daha büyük vs.
// let myAge = 22
// let yourAge = prompt("Kaç yaşındasın ?")

// if (myAge>yourAge)
//  {
//     alert(`Ben senden `+(myAge-yourAge) +` yaş daha büyüğüm.`)
// }
//  else if (myAge==yourAge) 
//  {
//     alert(`Aynı yaştayız, ikimizde ` + myAge +` yaşındayız`)
// }

// else
// {
//     alert(`Sen benden `+(yourAge-myAge) + ` yaş daha büyüksün` )
// }



// 3) sayı tek mi çift mi 
// let number = prompt('Bir sayı giriniz','Sayı pozitif olmalıdır!')

// number%2==0 
// ? alert("Sayınız Çifttir.")
// : alert("Sayınız tektir.")
//burada sıfırı çift sayı olarak alıyor zaten ama özel olarak sayınız sıfırdır vs yazdırmak için if else kullanmam gerekirdi ama ternary egzersizide olsun diye böyle yaptım.



//Exercises Level 2
// 1) öğrencilerin notlarına göre A-B-C-D-F Aldıklarını gösteren bir uygulama

// let grade = prompt('Sınav Puanınızı giriniz.')

// if (grade>=80 && grade<=100) {
//     console.log("Notunuz A.")
// } 

// else if (grade>=70 && grade<=79) {
//     console.log("Notunuz B.")
// } 

// else if (grade>=60 && grade<=69) {
//     console.log("Notunuz C.")
// }

// else if (grade>=50 && grade<=59) {
//     console.log("Notunuz D.")
// }

// else if (grade>=0 && grade<=49) {
//     console.log("Notunuz F.")
// }

// else
//  {
//    console.log("Lütfen Bir not giriniz!") 
// }

// 2) aylara  göre mevsim yazdırma

// let months = prompt("Hangi mevsimde olduğunuzu öğrenmek için bulunduğunuz ayı giriniz.")
// let result = months.toLowerCase() //büyük küçük harf duyarlılığı ortadan kalktı bunun sayesinde

// if (result=='ocak' || result=='aralık' || result=='şubat' ) {
//     alert("Şuanda kış mevsimindesiniz.")
// }

// else if (result=='mart' || result=='nisan' || result=='mayıs' ) {
//     alert("Şuanda ilkbahar mevsimindesiniz.")
// }

// else if (result=='haziran' || result=='temmuz' || result=='ağustos' ) {
//     alert("Şuanda yaz mevsimindesiniz.")
// }

// else if (result=='eylül' || result=='ekim' || result=='kasım' ) {
//     alert("Şuanda sonbahar mevsimindesiniz.")
// }

// else {
//     alert("Lütfen geçerli bir ay giriniz")
// }



