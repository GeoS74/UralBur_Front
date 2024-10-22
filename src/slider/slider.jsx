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

  console.log(slides)
  return (<>
      {slides.map(slide => 
          <div key={slide.id} className="slider-item" style={{backgroundImage: `url(http://localhost:8080/api/mcontent/static/images/slider/${slide.image.fileName})`}}>
            <div className="container">
              <div className="row slider-text align-items-center justify-content-center">
                <div className="col-lg-7 text-center col-sm-12 element-animate">
                  <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div>
                  <h1 className="mb-4"><span>We Are Industrial Company</span></h1>
                  <p className="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?</p>
                </div>
              </div>
            </div>
          </div>
      )}
  </>)
};







root.render(/*#__PURE__*/React.createElement(Slides, null));














  // fetch('http://localhost:8080/api/mcontent/slider/public/search')
  // .then(async (res) => {
  //   if (res.ok) {
  //     const result = await res.json()
  //     console.log(result)
  //     return (<>
  //       {result.map(slide => {
  //         <p>{slide.id}</p>
  //       })}
  //     </>)



      
      // return (<>
      //   {
      //     result.map(slide => {
            // <div key={slide.key} className="slider-item" style={`background-image: url("http://localhost:8080//api/mcontent/static/images/slider/${slide.image.fileName}");`}>
            //   <div className="container">
            //     <div className="row slider-text align-items-center justify-content-center">
            //       <div className="col-lg-7 text-center col-sm-12 element-animate">
            //         <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div>
            //         <h1 className="mb-4"><span>We Are Industrial Company</span></h1>
            //         <p className="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
      //     })
      //   }
      // </>)
  //   }
  // })
// };

// root.render(/*#__PURE__*/React.createElement(Slides, null));