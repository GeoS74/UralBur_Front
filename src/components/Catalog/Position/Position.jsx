import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";

connector.add("Position");

pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf/pdf.worker.js'
    // '../../node_modules/pdfjs-dist/build/pdf.worker.mjs';

function Position({ position }) {
  React.useEffect(() => connector.del("Position"));
  // console.log(position)

  const loadingTask = pdfjsLib.getDocument(`${serviceHost("mcontent")}/api/mcontent/static/catalog/position/pdf/${position.files.pdf.fileName}`);
  
  loadingTask.promise.then(pdf => {
    console.log('pdf');
    console.log(pdf);
    return pdf.getPage(1);
  })
  .then(page => {
    console.log('page');
    // return pdf.getPage(1);

    const scale = 0.5;
    const viewport = page.getViewport({ scale });
    const outputScale = window.devicePixelRatio || 1;
    const canvas = document.getElementById("the-canvas");
    const context = canvas.getContext("2d");

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height = Math.floor(viewport.height) + "px";

    const transform = outputScale !== 1
      ? [outputScale, 0, 0, outputScale, 0, 0]
      : null;

      const renderContext = {
        canvasContext: context,
        transform,
        viewport,
      };
      page.render(renderContext);
  });

  return <div className="container element-animate">
     


    <div className="row justify-content-center"  style={{marginTop: -50}}>
      <div className="col-md-8 mb-5">
        <h2>&ldquo; {position.title} &rdquo;</h2>
      </div>
    </div>
    
    <div className="row">
      <div className="col-12 row justify-content-center" style={{marginTop: 0}}>
        <p><img src={`${serviceHost("mcontent")}/api/mcontent/static/catalog/position/images/${position.files.image.fileName}`} alt={position.title} className="img-fluid" /></p>
      </div>
    </div>
    {/* <div className="row justify-content-center">
      <div className="col-md-8 mb-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nulla delectus sit vel magnam, ad voluptatem hic. Maxime ipsam quibusdam eius exercitationem iusto, totam possimus dolore magnam voluptatum illum consequuntur.</p>
      </div>
    </div> */}
     

    <div className="row justify-content-center">
      <div className="col-md-8">

        {position.description ? position.description.split('\n').map((e, i) => <p key={i}>{e}</p>)
        : <></>}

        {/* <p><a href="#" className="btn btn-primary py-3 px-3">Visit Website</a></p> */}
      </div>
    </div>


    <div className="row justify-content-center element-animate">
    <canvas id="the-canvas"></canvas>
    </div>

  </div>
}

fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/position/public/?alias=${URL.parse(window.location).searchParams.get('alias')}`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("position"));
    root.render(<Position position={res} />);
  })