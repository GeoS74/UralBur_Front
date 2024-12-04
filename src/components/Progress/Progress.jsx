import serviceHost from "../libs/service.host.js";

function Progress({ progress }) {
  return <div className="container">
    <div className="row">
      {progress.map((e) => <div key={e.id} className="col-md-6 col-lg-4 element-animate ">
        <div className="media block-6 d-block text-center">
          <div className="icon mb-3"><span className={`${e.cssClass} text-primary`}></span></div>
          <div className="media-body">
            <h3 className="heading">{e.title}</h3>
            <p>{e.message}</p>
          </div>
        </div>
      </div>)}
    </div>
  </div>
}

fetch(`${serviceHost("mcontent")}/api/mcontent/progress/public/?isPublic=1`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("progress"));
    root.render(<Progress progress={res} />);
  })
