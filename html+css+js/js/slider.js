//SLIDER PORT


  //Vars slider
  var sliderContainer = document.querySelector('.kj-slider-container');
  var sliderList = document.querySelector('.kj-slider-list');
  var sliderItem = document.querySelectorAll('.kj-portfolio-item');
  const sliderTotalItems = sliderItem.length
  var sliderListWidth = null;
  var prevItem = document.querySelector('.kj-prev');
  var nextItem = document.querySelector('.kj-next');
  var sliderPos = 0;
  var currentSlide = document.querySelector('.kj-current-slide');
  var totalSlide = document.querySelector('.kj-total-slide');
  var currentCounter = 1
  var navItems = document.querySelectorAll('.kj-item-navgator a');
  var navCounter = document.querySelector('.kj-navigator-counter span');

  //Larguras Ind.
  var containerWidth = sliderContainer.parentElement.offsetWidth;

  // Larg. Dinamica
  sliderContainer.style.width = containerWidth+ 'px';

  for(var p = 0; p < sliderItem.length; p++){
    sliderItem[p].style.width = containerWidth+'px';

    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth; 
    console.log(sliderItemWidth);
  }

  sliderList.style.width = sliderListWidth + 'px';

  //Animação slider onClick


  //HANDLERS

  //NEXT SLIDER ANIM

  var nextSliderAnim = function(){
    var LastItem = sliderListWidth - containerWidth;

    if ((-1 * (sliderPos) === LastItem )) {
      return;
    }

   sliderPos -= containerWidth;
    anime({
      targets: sliderList,
      translateX: sliderPos,
      easing: 'cubicBezier(0,1.01,.32,1)'
    });
  }

//PREV SLIDER ANIM
  var prevSlideAnim = function(){
   if (sliderPos == 0) {
          return;
        }
    
       sliderPos += containerWidth;
        anime({
          targets: sliderList,
          translateX: sliderPos,
          easing: 'cubicBezier(0,1.01,.32,1)'
        });
      };

  //COUNTER FORMATER
  var counterFormater = function(n){
      if(n < 10){
          return '0'+ n;
      }else {
          return n;
      }
  }

  //COUNTER ADD

  var counterAdd = function () {
      if((currentCounter) >= 0  && (currentCounter < sliderTotalItems)){
        currentCounter++;
        currentSlide.innerHTML = counterFormater(currentCounter);
        navCounter.innerHTML = counterFormater(currentCounter);
      }
      
      
  }

  //COUNTER REMOVE

  var counterRemove = function () {
    if((currentCounter) > 1  && (currentCounter <= sliderTotalItems)){
      currentCounter--;
      currentSlide.innerHTML = counterFormater(currentCounter);
      navCounter.innerHTML = counterFormater(currentCounter);
    }
    
    
}

//SET ACTIVE NAV

var setActiveNav = function(){
  
for(var nv = 0; nv < navItems.length; nv++){
    let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
    if(myNavNum === currentCounter){
        navItems[nv].classList.add('kj-item-active');

        anime({
            targets: '.kj-item-active',
            width: 90,
          });
    }   
}

}



//SET ACTIVE SLIDE

var setActiveSlide = function(){
  
  for(var sld = 0; sld < sliderItem.length; sld++){
      let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));

      if(mySlideNum === currentCounter){
          sliderItem[sld].classList.add('kj-slide-active');
          sliderItem[sld].querySelector('.kj-portfolio-item-box').classList.add('kj-scale-right');
  
  
          
      }   
    }
  
  }
  
  var changeActive = function(){
      for(var rm = 0; rm < navItems.length; rm++){
          navItems[rm].classList.remove('kj-item-active');
  
        anime({
          targets:navItems[rm],
          width: 20
        });
      }

      for(var rms = 0; rms < sliderItem.length; rms++){
        sliderItem[rms].classList.remove('kj-slide-active');

    
    }

      
  
     setActiveNav();
     setActiveSlide();
  
  }


      //ACTIONS

      anime({
        targets: '.kj-item-active',
        width: 90
      });
  
  totalSlide.innerHTML = counterFormater(sliderTotalItems);
  

  nextItem.addEventListener('click', function () {
    nextSliderAnim();
    counterAdd();
    changeActive();
  });


  prevItem.addEventListener('click', function () {
      prevSlideAnim();
      counterRemove();
      changeActive();
  });




  