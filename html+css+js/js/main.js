//DECLARANDO VARIAVEIS
var btncontact = document.querySelector('.kj-btn-contact');

//PAGE PRELOADER
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.kj-preloader');
    pagePreloder.classList.add('kj-fade-out');
 
    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});


//ABRINDO E FECHANDO INFORMAÇÕES DE CONTATO
btncontact.addEventListener('click', function(){
 var boxcontact = document.querySelector('.kj-contact-info');
 boxcontact.classList.toggle('kj-is-open');

 
 this.classList.toggle('kj-change-icon');
})