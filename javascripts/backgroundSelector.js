

function selectBackground(idReroll, bgColor, isHome) {
    if(confirm('appliquer le fond ?')){

       
        document.getElementById('bgselect').style.visibility='hidden';
        document.getElementById('bgselect').style.height='0%'

        

        if(isHome){ 
            bgreroll(idReroll);
            if(idReroll!=0){
            document.getElementById('bg.btn').style.visibility='visible';
            document.getElementById('bg.btn2').style.visibility='hidden';
        }
   else {
    document.getElementById('bg.btn').style.visibility='hidden';
            document.getElementById('bg.btn2').style.visibility='hidden';

   }
    }
        
        localStorage.setItem('theme',bgColor);
        Theme(localStorage.getItem('theme'));
        localStorage.setItem('Random', idReroll)
    }
    if(idReroll==null){
        localStorage.removeItem('Random')
        localStorage.removeItem('theme')
        }
};
function notheme(){
    if (localStorage.getItem('wanttheme') == 1){
        if(confirm('désactiver les themes ?')){
            document.getElementById('bgselect').style.visibility='hidden'
            document.getElementById('bgselect').style.height='0%'
            localStorage.setItem('wanttheme', '0')
            
            
        }
    }
    else {
        if (confirm('réactiver les themes ?')){
            localStorage.setItem('wanttheme', '1');
            document.getElementById('bgselect').style.visibility='hidden';
            document.getElementById('bgselect').style.height='0%';
        }
    }
}

function bgToggle(remettre){
    if(remettre){
        if(confirm("restaurer le fond ?")){
            document.getElementById("fond").style.opacity = "100%";
            document.getElementById("fond").style.width = "100%" 
            document.getElementById("bg.btn").style.visibility="visible";
            document.getElementById("bg.btn2").style.visibility="hidden";
        }
    }else{
        if(confirm("retirer le fond Temporairement?")){
            document.getElementById("fond").style.opacity = "0%"; 
            document.getElementById("fond").style.width = "0%";
            document.getElementById("bg.btn").style.visibility="hidden";
            document.getElementById("bg.btn2").style.visibility="visible";
        }
    }
}