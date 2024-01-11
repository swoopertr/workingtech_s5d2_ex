// 1 .Bir HTML sayfasında bulunan bir başlık elementini (h1) JavaScript kullanarak değiştirin. Yeni başlık metni "Merhaba, Dünya!" olsun.
// 2. Bir HTML sayfasında bulunan bir div elementinin arka plan rengini JavaScript kullanarak değiştirin.
// 3. Bir HTML sayfasında bulunan bir ul (sırasız liste) elementine JavaScript kullanarak yeni liste elemanları ekleyin.
// 4. Bir düğmeye tıklandığında bir metni güncelleyen bir JavaScript fonksiyonunu çağırın.
// 5. Bir HTML formunda kullanıcıdan bir metin girmesini isteyin. Ardından, girilen metni başka bir bölümde görüntüleyin.
// 6. Bir HTML sayfasında bulunan bir div elementinin (veya istediğiniz bir elementin) stilini JavaScript kullanarak değiştirin. Örneğin, genişliğini artırın ve rengini değiştirin.
// 7. Bir HTML sayfasında bulunan bir sırasız listeyi (ul) JavaScript kullanarak filtreleyin. Örneğin, sadece belirli bir harfi içerenleri gösterin.
// 8. Bir HTML sayfasında bulunan bir sırasız listeye JavaScript kullanarak yeni bir liste elemanı ekleyin ve ardından bir elemanı silin.
// 9. Bir HTML sayfasında bulunan bir liste üzerinde olay delegasyonu kullanarak tıklanan elemanın metnini gösterin.
// 10. Bir HTML formunu JavaScript kullanarak doğrulayın. Örneğin, kullanıcı adı ve şifre alanlarını kontrol edin ve hatalı giriş durumunda bir uyarı gösterin.

document.addEventListener("DOMContentLoaded", function () {
  updateFirstTitle();
  backGroundMyDiv();
  appendLi();
  divStyleChange();
});
let a = 1;
let b = 2;
let c = a + b;
let d = a - b;

//todo send rocket to space....
function updateFirstTitle() {
  const newh1 = document.getElementById("myh1");
  newh1.innerText = "Merhaba, Dünya!";
}

let abc = function (x,y) {
  return x + y;
}

function AddText() {
  let newText = "deneme metin içerik";
  let myh1 = document.getElementById("myh1");
  myh1.innerText = newText;
}

function backGroundMyDiv() {
  const mydiv = document.getElementById("mydiv");
  mydiv.style.backgroundColor = "red";
}

function appendLi() {
  let ul = document.getElementById("101");
  let createdLi = document.createElement("li");

  createdLi.innerText = "Liste 3";

  ul.appendChild(createdLi);
}

function metniGoruntule () {
    let girilenMetin = document.getElementsByName("fname")[0];
    let girilenMetinDegeri = girilenMetin.value
    let myh1 = document.getElementById("myh1");
    myh1.innerText = girilenMetinDegeri;
}

function submitBtn (event) {
    event.preventDefault();
    metniGoruntule();
}

function divStyleChange () {
    //background-Color = "brown" ok
    //font-family="arial" ok
    //font-size ="22px"ok
    //width: "300px"ok
    //height; "610px"ok
    let mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = "hsl(0, 0%, 15%)";
    mydiv.style.fontFamily = "Arial"
    mydiv.style.fontSize ="22px"
    mydiv.style.width = "300px"
    mydiv.style.height = "610px"
}