import serviceHost from "../libs/service.host.js";
import connector from "../libs/connector.js";

connector.add("headBanner404");

function HeadBanner() {
  React.useEffect(() => connector.del("headBanner404"));

  return <div className="slider-item" style={{"backgroundImage": `url(images/industrial_hero_3.jpg)`}}>
    <div className="container">
      <div className="row slider-text align-items-center justify-content-center">
        <div className="col-md-8 text-center col-sm-12 element-animate pt-5">
          <h1 className="pt-5"><span>404: страница не найдена</span></h1>
          <p className="mb-5 w-75">вы запросили не существующую страницу</p>
        </div>
      </div>
    </div>

  </div>
}

const root = ReactDOM.createRoot(document.getElementById("headBanner404"));
root.render(<HeadBanner />);
