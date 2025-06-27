let externalLinks = document.querySelectorAll('.external-link');

if(externalLinks !== null){
    externalLinks.forEach(function(externalLink){
        externalLink.addEventListener("click", function(){
            let href = externalLink.getAttribute("data-href");
            if(confirm("ce lien vous redirige sur un autre site, Continuer ?")) {
                window.location.replace(href);
            }
        });
    });
}