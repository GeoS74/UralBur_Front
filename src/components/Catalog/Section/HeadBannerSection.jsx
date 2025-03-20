import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";

connector.add("HeadBannerSection");

function HeadBannerSection({ template }) {
  React.useEffect(() => connector.del("HeadBannerSection"));

  return <div className="slider-item" style={{"backgroundImage": `url(images/industrial_hero_3.jpg)`}}>
    <div className="container">
      <div className="row slider-text align-items-center justify-content-center">
        <div className="col-md-8 text-center col-sm-12 element-animate pt-5">
          <h1 className="pt-5"><span>{template.title}</span></h1>
          {/* <p className="mb-5 w-75">{template.description}</p> */}
        </div>
      </div>
    </div>
  </div>
}

fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/level/public/${URL.parse(window.location).searchParams.get('id')}`)
  .then(async response => {
    if (response.ok) {
      const res = await response.json();
      return res;
    }
    location.href="products.html"
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("headBannerSection"));
    root.render(<HeadBannerSection template={res} />);
  })
