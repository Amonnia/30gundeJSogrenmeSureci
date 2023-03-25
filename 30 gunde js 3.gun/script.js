//3. GÜN
let ten = 10
ten =='10' //true
ten ==='10' //false
parseInt('9.8') == ten // false parseInt 9 a yuvarlıyor

5>4 //true
4>5 //false
"güven".length<"kuzucanlı".length //true
"güven".length>"kuzucanlı".length //false

//bence bu kısım aşırı gereksiz ama koymuşlar egzersize yapıcaz mecbur
4>3 //true
4>=3 //true
4<3 //false
4<=3 //false
4==4 //true
4===4 //true
4=='4' //true
4==='4' //false
4!=4 //false
4!==4 // false
4!=='4'//true

4>3 && 10<12 //true
4>3 && 10>12 //false
4>3 || 10<12 //true
4>3 || 10>12 //true
!(4>3) //false
!(4<3) //true
!(false) // true
!(4>3 && 10<12) //false
!(4>3 && 10>12) //true
!(4==='4') //true

const date = new Date()
date.getDate() //ayın kaçı olduğunu veriyor bugun 25
date.getMonth() // ayı veriyor ama 0 dan başladığı için marta 2 veriyor date.getMonth()+1 bu şekilde yazarsak bildiğimiz kıvama geliyor
date.getHours() // saati veriyor
date.getMinutes()//saatin dakikasını veriyor 0-59 şeklinde 
date.getFullYear() //yılı veriyor

let base = prompt("Üçgenin taban uzunluğu")
let height = prompt("üçgenin yüksekliği")
let sabit = 0.5
let area = base*height*sabit

alert(`Üçgeninizin alanı = ` +area)

//kalanlarda benzer şeyler veriyi alıp işlem yaptırmaktan ibaret
