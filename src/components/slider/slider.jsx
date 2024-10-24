const root = ReactDOM.createRoot(document.getElementById("slider"));

function Sliders({slides}) {

  React.useEffect(() => {
    var loader = function() {
      setTimeout(function() { 
        if(jQuery('#loader').length > 0) {
          jQuery('#loader').removeClass('show');
        }
      }, 1);
    };
    loader();

    jQuery('.home-slider').owlCarousel({
      loop:true,
      lazyLoad: true,
      autoplay: false,
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav:true,
      autoplayHoverPause: true,
      items: 1,
      dragTouch: false,
      navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
      responsive:{
        0:{
          items:1,
          nav:false
        },
        600:{
          items:1,
          nav:false
        },
        1000:{
          items:1,
          nav:true
        }
      }
    });

    var contentWayPoint = function() {
      var i = 0;
      $('.element-animate').waypoint( function( direction ) {
  
        if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
          
          i++;
  
          $(this.element).addClass('item-animate');
          setTimeout(function(){
  
            $('body .element-animate.item-animate').each(function(k){
              var el = $(this);
              setTimeout( function () {
                var effect = el.data('animate-effect');
                if ( effect === 'fadeIn') {
                  el.addClass('fadeIn element-animated');
                } else if ( effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft element-animated');
                } else if ( effect === 'fadeInRight') {
                  el.addClass('fadeInRight element-animated');
                } else {
                  el.addClass('fadeInUp element-animated');
                }
                el.removeClass('item-animate');
              },  k * 100);
            });
            
          }, 100);
          
        }
  
      } , { offset: '95%' } );
    };
    contentWayPoint();
  })  

  const startSlide = <>
                        <div className="slider-item" style={{backgroundImage: `url(images/start_fon.jpg)`}}>
                          <div className="container">
                            <div className="row slider-text align-items-center justify-content-center">
                              <div className="col-lg-7 text-center col-sm-12 element-animate">
                                <h1 className="mb-4"><span>Мы первые во всем</span></h1>
                              </div>
                            </div>
                          </div>
                        </div>
                     </>

  const listSlide = <>
                      {slides.map(slide => 
                          <div key={slide.id} className="slider-item" style={{backgroundImage: `url(http://localhost:8080/api/mcontent/static/images/slider/${slide.image.fileName})`}}>
                            <div className="container">
                              <div className="row slider-text align-items-center justify-content-center">
                                <div className="col-lg-7 text-center col-sm-12 element-animate">
                                  <h1 className="mb-4"><span>{slide.title}</span></h1>
                                  <p className="mb-5 w-75">{slide.message}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                      )}
                    </>
  return (<>{listSlide}</>)
}

fetch(`http://localhost:8080/api/mcontent/slider/public/search`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    root.render(<Sliders slides={res} />);
  })

