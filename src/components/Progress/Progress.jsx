import serviceHost from "../libs/service.host.js";

function Progress({ info }) {
  if (info.length > 4) {
    shuffle(info)
    info = info.slice(0, 4)
  }
  
  return (<>
    <div className="col-lg-4 order-lg-2">
      <div className="scaling-image h-100">
        <div className="frame h-100">
          <div className="feature-img-bg h-100" style={{"backgroundImage": "url('images/industrial_feature_1.jpg')"}}>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1" >
      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[0].cssClass} display-4 text-primary`}></span>
          <h3>{info[0].title}</h3>
          <p>{info[0].message}</p>
        </div>
      </div>

      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[1].cssClass} display-4 text-primary`}></span>
          <h3>{info[1].title}</h3>
          <p>{info[1].message}</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3" >
      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[2].cssClass} display-4 text-primary`}></span>
          <h3>{info[2].title}</h3>
          <p>{info[2].message}</p>
        </div>
      </div>

      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[3].cssClass} display-4 text-primary`}></span>
          <h3>{info[3].title}</h3>
          <p>{info[3].message}</p>
        </div>
      </div>
    </div>
  </>)
}


fetch(`${serviceHost("mcontent")}/api/mcontent/progress/public/search`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("progress"));
    root.render(<Progress info={res} />);
  })

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
