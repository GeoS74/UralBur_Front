import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";

connector.add("HeadBannerSearch");

function HeadBannerSearch() {
  React.useEffect(() => connector.del("HeadBannerSearch"));

  return <div className="slider-item" style={{ "backgroundImage": `url(images/industrial_hero_3.jpg)` }}>
    <div className="container">
      <div className="row slider-text align-items-center justify-content-center">
        <div className="col-md-8 text-center col-sm-12 element-animate pt-5">
          <h1 className="pt-5"><span>Поиск</span></h1>
          <p className="mb-5 w-75">запрос: {`${URL.parse(window.location).searchParams.get('search')}`}</p>
        </div>
      </div>
    </div>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("headBannerSearch"));
root.render(<HeadBannerSearch />);

// fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/level/public/${URL.parse(window.location).searchParams.get('levelAlias')}`)
//   .then(async response => {
//     const res = await response.json();
//     return res;
//   })
//   .then(res => {
//     const root = ReactDOM.createRoot(document.getElementById("headBannerSearch"));
//     root.render(<HeadBannerSearch template={res} />);
//   })
