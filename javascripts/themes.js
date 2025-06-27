Random=localStorage.getItem('Random')
if(localStorage.getItem('wanttheme')!=0 && localStorage.getItem('wanttheme')!= 1){
        localStorage.removeItem('wanttheme')
    }
    if(localStorage.getItem('Random') < 0 || localStorage.getItem('Random') > 10){
        localStorage.removeItem('Random')
        alert('une erreur est survenue, veullez recharger la page')
    }
    
if(localStorage.getItem('welcome')==undefined){
    alert("Bienvenu, ce site est un test qui m'a permi de découvrir d'aventage le monde du développement web, je vous invite donc a explorer ce site pour essayer de comprendre ce que j'ai appris pendant mon stage (vous pouvez appuyer sur controle pour changer le theme et le fond du site)")
    localStorage.setItem('welcome', 1)
    var Random=8
}

    
if(localStorage.getItem('wanttheme')==undefined){
    localStorage.setItem('wanttheme', '1')
}
if(Random==undefined){
Random=Math.floor(Math.random()*10 + 1);  


}
var theme = localStorage.getItem('theme') 
if (theme == undefined){
if(Random==1){
    var theme = 'blanc'
}
if(Random==2){
    var theme = 'vert'
}
if(Random==3){
    var theme = 'desert'
}
if(Random==4){
    var theme = 'feu'
}
if(Random==5){
    var theme = 'gris'
}
if(Random==6){
    
var theme = 'rose'
}
if(Random==7){
    var theme = 'marecage'
}
if(Random==8){
    var theme = 'ocean'
}
if(Random==9){
    var theme = 'sunset'
}
if(Random==10){
    
var theme = 'foret'
}
if (Random == 0){
var theme ='none'
}
localStorage.setItem('theme', theme)
}

setInterval(Theme, 100)
function Theme(theme){
    if (localStorage.getItem('wanttheme') == '1'){
    theme = localStorage.getItem('theme')
    if (theme == 'blanc'){
        document.getElementById('header').style.backgroundColor='white'
        document.getElementById('title').style.color='black'
        document.getElementById('body').style.backgroundColor='grey'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='black'
        }
        document.getElementById('footer').style.backgroundColor='white'
        document.getElementById('credits').style.color='black'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='#afeeee'
        }
        var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='#afeeee'
        }
}
if (theme == 'vert'){
        document.getElementById('header').style.backgroundColor='lightgrey'
        document.getElementById('title').style.color='black'
        document.getElementById('body').style.backgroundColor='darkgreen'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='white'
        }
        document.getElementById('footer').style.backgroundColor='grey'
        document.getElementById('credits').style.color='black'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='white'
            N2[i].style.background='purple'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='white'
            N4[i].style.background='purple'
        }
}
if (theme == 'desert'){
        document.getElementById('header').style.backgroundColor='#9933ff'
        document.getElementById('title').style.color='white'
        document.getElementById('body').style.backgroundColor='#f7fe95'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='black'
        }
        document.getElementById('footer').style.background='#ffff66'
        document.getElementById('credits').style.color='black'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='yellow'
}
var N3=document.getElementsByTagName('a')
        for (var i=0, max = N3.length; i < max; i++) {
            N3[i].style.color='black'
            N3[i].style.background='none'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='yellow'
        }
}
if (theme == 'feu'){
        document.getElementById('header').style.backgroundColor='#660000'
        document.getElementById('title').style.color='white'
        document.getElementById('body').style.backgroundColor='rgb(42, 40, 40'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='white'
        }
        document.getElementById('footer').style.background='#660000'
        document.getElementById('credits').style.color='white'
        


var N3=document.getElementsByTagName('a')
        for (var i=0, max = N3.length; i < max; i++) {
            N3[i].style.color='white'}
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='#ff9933'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='#ff9933'
        }
    }
if (theme == 'gris'){
        document.getElementById('header').style.backgroundColor=''
        document.getElementById('title').style.color=''
        document.getElementById('body').style.backgroundColor=''
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color=''
        }
        document.getElementById('footer').style.backgroundColor=''
        document.getElementById('credits').style.color=''
        var N2=document.getElementsByClassName('external-link')
        
        var N3=document.getElementsByTagName('a')
        for (var i=0, max = N3.length; i < max; i++) {
            N3[i].style.color='white'
        }
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='whitblacke'
            N2[i].style.background='darkgrey'
        }
        var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='darkgrey'
        }
}
if (theme == 'rose'){
        document.getElementById('header').style.backgroundColor='#ff99ff'
        document.getElementById('title').style.color='black'
        document.getElementById('body').style.backgroundColor='#ffb3ff'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='black'
        }
        document.getElementById('footer').style.background='#ff99ff'
        document.getElementById('credits').style.color='black'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='#ff66ff'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='#ff66ff'
        }
var N3=document.getElementsByTagName('a')
        for (var i=0, max = N3.length; i < max; i++) {
            N3[i].style.color='black'
            
}
}
if (theme == 'marecage'){
        document.getElementById('header').style.backgroundColor='green'
        document.getElementById('title').style.color='white'
        document.getElementById('body').style.backgroundColor='darkgreen'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='white'
        }
        document.getElementById('footer').style.backgroundColor='green'
        document.getElementById('credits').style.color='white'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='white'
            N2[i].style.background='purple'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='white'
            N4[i].style.background='purple'
        }
}
if (theme == 'ocean'){
        document.getElementById('header').style.backgroundColor='#00b3b3'
        document.getElementById('title').style.color='black'
        document.getElementById('body').style.backgroundColor='teal'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='white'
        }
        document.getElementById('footer').style.backgroundColor='#006666'
        document.getElementById('credits').style.color='white'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='lightblue'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='lightblue'
        }
}
if (theme == 'sunset'){
        document.getElementById('header').style.backgroundColor='	#2d00b3'
        document.getElementById('title').style.color='white'
        document.getElementById('body').style.backgroundColor='	#8600b3'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='white'
        }
        document.getElementById('footer').style.backgroundColor='#b30086'
        document.getElementById('credits').style.color='white'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='orange'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='orange'
        }
}
if (theme == 'foret'){
        document.getElementById('header').style.backgroundColor='#794dff'
        document.getElementById('title').style.color='black'
        document.getElementById('body').style.backgroundColor='#d24dff'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='black'
        }
        document.getElementById('footer').style.backgroundColor='#ff4dd2'
        document.getElementById('credits').style.color='black'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='white'
            N2[i].style.background='green'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='white'
            N4[i].style.background='green'
        }
}
if (theme == 'none'){
        document.getElementById('header').style.backgroundColor='#565656'
        document.getElementById('title').style.color='white'
        document.getElementById('body').style.backgroundColor='rgb(42, 40, 40)'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='white'
        }
        document.getElementById('footer').style.backgroundColor='#565656'
        document.getElementById('credits').style.color='white'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='#adff2f'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='#adff2f'
        }
}


}
else{
            document.getElementById('header').style.backgroundColor='#565656'
        document.getElementById('title').style.color='white'
        document.getElementById('body').style.backgroundColor='rgb(42, 40, 40)'
        document.getElementsByClassName('p');
        var N=document.getElementsByClassName('p')
        for (var i=0, max = N.length; i < max; i++) {
            N[i].style.color='white'
        }
        document.getElementById('footer').style.backgroundColor='#565656'
        document.getElementById('credits').style.color='white'
        var N2=document.getElementsByClassName('external-link')
        for (var i=0, max = N2.length; i < max; i++) {
            N2[i].style.color='black'
            N2[i].style.background='#adff2f'
}
var N4=document.getElementsByClassName('header-link')
        for (var i=0, max = N4.length; i < max; i++) {
            N4[i].style.color='black'
            N4[i].style.background='#adff2f'
        }
}
}

