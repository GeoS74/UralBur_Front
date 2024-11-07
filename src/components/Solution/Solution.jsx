import serviceHost from "../libs/service.host.js";
import { elementAnimate } from "../libs/common.js";


function Solution({ info }) {
  React.useEffect(() => {
    elementAnimate('#solution', jQuery);
  })
  if (info.length > 3) {
    shuffle(info)
    info = info.slice(0, 3)
  }

  return info.map((e) => <div key={e.id} className="col-md-6 col-lg-4 element-animate ">
                            <div className="media block-6 d-block text-center">
                              <div className="icon mb-3"><span className={`${e.cssClass} text-primary`}></span></div>
                              <div className="media-body">
                                <h3 className="heading">{e.title}</h3>
                                <p>{e.message}</p>
                              </div>
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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}