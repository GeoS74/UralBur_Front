import serviceHost from "../libs/service.host.js";

function Solution({ solutions }) {
  return solutions.map((e) => <div key={e.id} className="feature-1 d-md-flex">
    <div className="align-self-center">
      <span className={`ion ${e.cssClass} display-4 text-primary`}></span>
      <h3>{e.title}</h3>
      <p>{e.message}</p>
    </div>
  </div>)
}

fetch(`${serviceHost("mcontent")}/api/mcontent/solution/public/search`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const rootLeft = ReactDOM.createRoot(document.getElementById("leftSolution"));
    rootLeft.render(<Solution solutions={res.slice(0, 2)} />);

    const rootRight = ReactDOM.createRoot(document.getElementById("rightSolution"));
    rootRight.render(<Solution solutions={res.slice(2)} />);
  })
