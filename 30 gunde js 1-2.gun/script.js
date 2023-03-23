//comment line can make code readble
/*same shit different color*/

// let name,surname,age,from;
// name=prompt("adınız");
// surname=prompt("soy adınız");
// age=prompt("yaşınız");
// from=prompt("nerelisiniz ?");
// alert(name+surname+age+from)

//let ve const farkı şu ikisi de veri tanımlarken kullanılıyor ama biri değişebilir diğeri değişemez
//örn yer çekimi sabittir ama yaşım seneden seneye değişebilir ya da doğum tarihim yine const veya pi sayısı suyun kaynmama derecesi vsvs

//non-primitive data types yani içindeki veriyi sonradan değişebiliyorum
//let num1 num2 diye farklı farklı değişkenlere atamış olsaydım değişmicekti böyle
//çünkü onlar primitive yani ilkel

//bu bir dizi
let num = [1,2,3,4,5] 
num[0]="güven"
console.log(num[0])

//bu bir nesne
let user = {
    name:"güven",
    surname:"kuzucanlı"
}

console.log(user)
//şöyle bir durum var burada örn sayı1=3 sayı2=3 oldugunda sayı1=sayı2 dedğimizde
//true oluyor primitivelerde durum bu ama nonprimitivelerde tam tersi eşit olmuyor
//içindeki bütün değerler aynı olsa bile


//MATH OBJECT
//YUVARLAMA İŞLEMLERİ
Math.round() //0.5 den büyükse yukarıya küçükse aşağıya yuvarlıyor klasik yuvarlama
Math.ceil()//0.1 bile olsa yukarıya yuvarlıyor kelime anlamıda tavan demek zaten
Math.floor()//buda aşağıya yuvarlıyor 0.9 u bile 0 yapıyor
Math.min(1,2,3,4) // içindeki en küçük değeri gösteriyor örn bir dizi oluşturuyorum math.min(diziadi) yaptığımda en küçük değeri veriyor
Math.max(1,2,3,4)//bu da min in tam tersi en büyüğü veriyor
Math.random()//0-1 arasında random sayı oluşturuyor
Math.floor(Math.random()*11)//0-10 arasında random sayı oluşturuyor n+1 gibi düşün
Math.abs(-10)//mutlak değer
Math.sqrt(36)//karekök buda
Math.pow(3,2)//3 üssü 2 3**2 bu da aynı şey
Math.log(9)//bildiğimiz logaritma
Math.sin(90)//trigonnometri işte
Math.cos(90)//trigonnometri işte
const paragraph="lorem ipsum dolor asimet\
lorem ipsum dolor asimet\
lorem ipsum dolor asimet\
lorem ipsum dolor asimet\
lorem ipsum dolor asimet" //uzun paragraflarda alt satıra geçince veri bozuluyor o yüzden devam etmesi için ters slash koyuyor
//alt+*(sıfırın yanındaki tuş soru işareti vs)
//tek satırlık cumlelerde alta inmek istiyorsak \n dan sonraki harfler kelimeler neyse alt satıra geçiyor örn;
console.log("benim \n adım ")

let name = "guven"
let surname="kuzu"
let fullName=` ${name} ${surname}`//bu kullanım için sadece ters tırnak kullanılması lazım `` araya + koymaya bile gerek yok
let longText=`alo
alo
alo
alo
alo
`
console.log(longText) // ters tırnak sen ne delikanlı adammışsın ya
console.log(surname.length)//string metinlerin kaç karakterden oluştuğunu gösteriyor
//güzel bir kullanım
let youtube ="youtube"
youtube[youtube.length-1]//youtube stinginin son harfini gösteriyor uzunluğu kafadan bilmiyorsam böyle kullanılıyormuş
lastIndex=youtube.length-1
youtube[lastIndex]//bu da aynı şeyi veriyor css deki clear classı gibi düşün
youtube.toUpperCase //büyük harflerle yazdırıyor stringi
youtube.toLowerCase//küçük harflerle yazdırıyor
youtube=youtube.toUpperCase // kalıcı olarak değişmek istersekte böyle
console.log(surname.substr(2,1))//surname değişkeninin içindeki stringin 2 harfini silsin sonrasindaki 1 harfi göstersin gibi bişey demek
console.log(surname.substring(0,2))// buda 0. harften başlıyor 2 harf alıyor gibi bişey tam ayıkamadım
let isim ="  güven kuzucanlı  "
console.log(isim.split(" "))//(2) ["güven","kuzucanlı"] diye bir dizi oluşturuyor boşluktan bölüyor n den bölersem güve kuzuca lı diye 3 e bölüyor 
console.log(isim.trim(""))// başta ve sondaki gereksiz boşlukları siliyor
let cumle = " bu bir cümle örneğidir"
console.log(cumle.includes("bir"))// içeriyorsa true içermiyorsa false diye değer veriyor harf duyarlılığı var büyük-küçük
