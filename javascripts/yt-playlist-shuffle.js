
// Random = 0 : pas de fond
// Random = 1-10 vidéo définie
// Random = 'aléa' : vidéo aléatoire
Random=localStorage.getItem('Random')

if(Random==undefined){
Random=Math.floor(Math.random()*10 + 1); 
localStorage.setItem('Random', Random)
}
if(localStorage.getItem('welcome')==undefined){
   var Random=8
   localStorage.setItem('Random', 8)
}


// l'ordre des url correspond a l'ordre des video dans la playlist : https://www.youtube.com/playlist?list=PLZHdY_46KnYuY7kUUXm__NrLMEll8IGGX

if(Random==1){
    var url = 'JBoUwElRFVM?si=1amPNUesWhASz1yH'
    var theme = 'blanc'
}
if(Random==2){
    var url = 'hJLgLTpI9U8?si=gXARP3JRx9tIUCw-'
    var theme = 'vert'
}
if(Random==3){
    var url = '9Y0TZkTjbc8?si=w51xJ_VGWFs8'
    var theme = 'desert'
}
if(Random==4){
    var url = 'FqnAV6tkwzA?si=yjpRRzdaGe9qfwZB'
    var theme = 'feu'
}
if(Random==5){
    var url = 'bEoa2GjmPUk?si=RnpAKuwo5BSsSmtU'
    var theme = 'gris'
}
if(Random==6){
    var url = 'EjBdURAwJHI?si=e-UlOaqFX0HmfMxM'
    var theme = 'rose'
}
if(Random==7){
    var url = 'n0vvGQL6PpI?si=DznAFCKEgE2YpgWn'
    var theme = 'marécage'
}
if(Random==8){
    var url = 'RnnctM5Rf9I?si=NmYugfwIaiZvNjWD'
    var theme = 'ocean'
}
if(Random==9){
    var url = 'SZu6k3riYso?si=NNibiN6t8S3A5d_9'
    var theme = 'sunset'
}
if(Random==10){
    var url = 'xLo-BrCh7JQ?si=qrDtWlHD2WylqfrW'
    var theme = 'foret'
}


if(Random!=0){

    var Lien = '<iframe id=random-video tabindex="-1" src="https://www.youtube.com/embed/' + url + '&autoplay=1&mute=1&controls=0&disablekb=1"></iframe>'
    document.writeln(Lien)
}

if(Random != null){
localStorage.setItem('theme', theme)}

function bgreroll(Random){
    
    if(Random==undefined){
Random=Math.floor(Math.random()*10 + 1);   
}
if(Random==1){
   var url = 'JBoUwElRFVM?si=1amPNUesWhASz1yH'
}
if(Random==2){
    var url = 'hJLgLTpI9U8?si=gXARP3JRx9tIUCw-'
}
if(Random==3){
    var url = '9Y0TZkTjbc8?si=w51xJ_VGWFs8'
}
if(Random==4){
    var url = 'FqnAV6tkwzA?si=yjpRRzdaGe9qfwZB'
}
if(Random==5){
    var url = 'bEoa2GjmPUk?si=RnpAKuwo5BSsSmtU'
}
if(Random==6){
    var url = 'EjBdURAwJHI?si=e-UlOaqFX0HmfMxM'
}
if(Random==7){
    var url = 'n0vvGQL6PpI?si=DznAFCKEgE2YpgWn'
}
if(Random==8){
    var url = 'RnnctM5Rf9I?si=NmYugfwIaiZvNjWD'
}
if(Random==9){
    var url = 'SZu6k3riYso?si=NNibiN6t8S3A5d_9'
}
if(Random==10){
    var url = 'xLo-BrCh7JQ?si=qrDtWlHD2WylqfrW'
}

   if(Random!=0){ var Lien = '<iframe id=random-video tabindex="-1" src="https://www.youtube.com/embed/' + url + '&autoplay=1&mute=1&controls=0&disablekb=1"></iframe>'
    //document.getElementById('random-video').replaceWith(' ')
    document.getElementById('fond').innerHTML = Lien;
    
    
}
else{
 document.getElementById('random-video').replaceWith(':(')   
}

localStorage.setItem('Random', Random)
return Random
}


