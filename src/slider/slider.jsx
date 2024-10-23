const root = ReactDOM.createRoot(document.getElementById("slider"));
const useState = React.useState;
const useEffect = React.useEffect;

function Slides(){
  const [slides, setSlides] = useState(Array)
  useEffect(() => {
    fetch('http://localhost:8080/api/mcontent/slider/public/search')
    .then((res) => res.json())
    .then((data )=> setSlides(data))
  }, [])
  
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
  return (<>
      {slides.length !== 0 ? listSlide : startSlide}
  </>)
};


root.render(/*#__PURE__*/React.createElement(Slides, null));