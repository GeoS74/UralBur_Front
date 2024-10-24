const root = ReactDOM.createRoot(document.getElementById("slider"));
import {flag, loaderFun, dropdownFun, homeSlider, noneLoop, owlCarousel1, owlCarousel2, contentWayPoint} from '../../js/main.js'

function Sliders({slides}) {
  React.useEffect(() => {
    if (!flag) {
      loaderFun();
    };

    homeSlider();
    dropdownFun();
    noneLoop();
    owlCarousel1();
    owlCarousel2();
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
  return (<>{slides.length !== 0 ? listSlide : startSlide}</>)
}

fetch(`http://localhost:8080/api/mcontent/slider/public/search`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    root.render(<Sliders slides={res} />);
  })

