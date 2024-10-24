const root = ReactDOM.createRoot(document.getElementById("mainSlider"));

function Foo({slides}) {

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
  })

  return slides.map((e, i) => <div key={i} className="slider-item" style={{"backgroundImage": `url('http://localhost:8080/api/mcontent/static/images/slider/${e.image.fileName}')`}}>
  <div className="container">
    <div className="row slider-text align-items-center justify-content-center">
      <div className="col-lg-7 text-center col-sm-12 element-animate">
       <h1 className="mb-4"><span>Производство Буровых установок</span></h1>
        <p className="mb-5 w-75">Производство буровых установок в г. Миасс с 1891г</p>
      </div>
    </div>
  </div>
</div>)
}

fetch(`http://localhost:8080/api/mcontent/slider/public/search`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    console.log(res)

    root.render(<Foo slides={res} />);
  })


