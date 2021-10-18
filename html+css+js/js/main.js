var btncontact = document.querySelector('.kj-btn-contact');

btncontact.addEventListener('click', function(){
 var boxcontact = document.querySelector('.kj-contact-info');
 boxcontact.classList.toggle('kj-is-open');

 
 this.classList.toggle('kj-change-icon');
})