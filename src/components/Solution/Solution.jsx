import serviceHost from "../libs/service.host.js";

function Solution({ info }) {
    return info.map((e) => <div key={e.id} className="feature-1 d-md-flex">
                              <div className="align-self-center">
                                <span className={`ion ${e.cssClass} display-4 text-primary`}></span>
                                <h3>{`${e.title}`}</h3>
                                <p>{`${e.message}`}</p>
                              </div>
                           </div>)
}


fetch(`${serviceHost("mcontent")}/api/mcontent/solution/public/search`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("solution"));
    root.render(<Solution info={res} />);
  })