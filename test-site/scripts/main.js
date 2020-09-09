//const myHeading = document.querySelector('h1');
//myHeading.textContent = "Hello world!";

var myImage = document.querySelector("img");
myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/mozilla-firefox-screenshot.png"){
        myImage.setAttribute("src", "images/firefox2.jpg");
    }else{
        myImage.setAttribute("src", "images/mozilla-firefox-screenshot.png");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    var myName = prompt("Tell me your name");
    if (!myName||myName === null){
        setUserName();
    } else {
        // prompt()はユーザーにデータ入力を求め変数に格納できる。
        localStorage.setItem("name", myName);
        //キャシュ？クッキー？上かどこかに保存されるんだろな。
        myHeading.textContent = "Mozilla is Great " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is great, " + storedName;
}

myButton.onclick = function(){
    setUserName();
}

//let 変数名; 変数名を宣言。
//var 変数名 = 1; も可能
/*
データ型：Sting, Number, Boolean, Array, Object
Objectはvar myVariable = document.querySelector('h1');の上記など。
Javascriptの全てがオブジェクトでありなんでも格納できるって。
*/

/*
演算子：
 +,-,*,/   ：四則演算
= 　　　　　：代入
===        ：真偽値の判定。True/Falseがかえる。
!, !==     ：true/falseを逆にして返す。
例）
var myVariable = 3;
!(myVariable === 3);　
　false         3で無いことを確かめたいときに使う。
var myVariable = 3;
myVariable !== 3;　同様
*/

/*
alert("")  //phpのecho
*/