import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";
import config from "../../config.js";

import PositionImage from "../Image/PositionImage.js";

import ViewPDF from "./ViewPDF.js";

connector.add("Position");

function Position({ position }) {
  React.useEffect(() => connector.del("Position"));

  return <div className="container element-animate">

    <div className="row justify-content-center" style={{ marginTop: -50 }}>
      <div className="col-md-8 mb-5">
        <h2>&ldquo;{position.title}&rdquo;</h2>
      </div>
    </div>

    <div className="row">
      <div className="col-12 row justify-content-center" style={{ marginTop: 0 }}>
        <p><PositionImage fileName={position.files.image.fileName} title={position.title} /></p>
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

    <ViewPDF fileName={position.files.pdf.fileName} title={position.title}/>

  </div>
}

function getAlias(){
  if(config.node == 'dev') {
    return URL.parse(window.location).searchParams.get('alias');
  }
  let f = URL.parse(window.location).pathname.split('/');
  return f[f.length-1].slice(0, -5);
}

fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/position/public/?alias=${getAlias()}`)
  .then(async response => {
    if(response.status == 404) {
      window.location.href = '404.html';
      return;
    }
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("position"));
    root.render(<Position position={res} />);
  })