//window.addEventListener("load", init);
//
//function $(nev) {
//    return document.querySelectorAll(nev);
//}
var kep1 = {
    eleresiut: "kepek/elswordelesis.jpg",
    cim: " Grand Master class and Empire Sword class",
    leiras: "Elsword game character: Elesis"};
//objektum;

var kep2 = {
    eleresiut: "kepek/elswordmaster.jpg",
    cim: " Infinity Sword class",
    leiras: "Elsword game character: Elsword"};

var kep3 = {
    eleresiut: "kepek/elswords.jpg",
    cim: " Elsword classes",
    leiras: "Elsword Game"};

var keptomb = [kep1, kep2, kep3];

$(function(){
    modositasok();
    
    
    
});
function modositasok() {
    for (var i = 0; i < keptomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article").eq(0).append(elem);
    }

    console.log("Üdvözől a JS");
    for (var i = 0; i < $("article img").length; i++) {
        $("article img").eq(i).attr("src", keptomb[i].eleresiut);
        $("article h3").eq(i).html(keptomb[i].cim) ;
        $("article p").html(keptomb[i].leiras);

    }
    document.getElementById("bal").addEventListener("click", bal);
    document.getElementById("jobb").addEventListener("click", jobb);

    //képekhezz kell rendelni egy eseménykezelőt , kattintásal
    //kattintásra után az a kép , amire kattintottam az kép címe,leírása,elérisi út jelenjen meg a konzolon üzenetben.
    for (var i = 0; i < keptomb.length; i++) {

        $("article div img")[i].addEventListener("click", betolt);
}
function betolt() {
        var index = this.id; // hanyadik kép;
        console.log(keptomb[index].eleresiut);
        console.log(keptomb[index].cim);
        console.log(keptomb[index].leiras);

        $("section div img").eq(0).attr("src" , keptomb[index].eleresiut);  
        $("section div h3").eq(0).html(keptomb[index].cim);
        $("section div p").eq(0).html(keptomb[index].leiras);
    }

    var index = 0;
    function bal() {

            $("section div img").eq(i).attr("src", keptomb[index].eleresiut);
            $("section div h3").eq(i).html(keptomb[index].cim);
            $("section div p").eq(i).html(keptomb[index].leiras);
        }
        index -= 1;
        if(index < 0) {
            index = -1;
        }
    function jobb() {
            $("section div img").eq(i).attr("src", keptomb[index + 1].eleresiut);
            $("section div h3").eq(i).html(keptomb[index + 1].cim);
            $("section div p").eq(i).html(keptomb[index + 1].leiras);
        }
        index += 1;
        if (index === keptomb.length) {
            index = 0;
        }
    

}





