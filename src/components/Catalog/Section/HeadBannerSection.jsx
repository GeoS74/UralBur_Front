import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";
import config from "../../config.js";

connector.add("HeadBannerSection");

function HeadBannerSection({ template }) {
  React.useEffect(() => connector.del("HeadBannerSection"));

  return <div className="slider-item" style={{ "backgroundImage": `url(images/industrial_hero_3.jpg)` }}>
    <div className="container">
      <div className="row slider-text align-items-center justify-content-center">
        <div className="col-md-8 text-center col-sm-12 element-animate pt-5">
          <h1 className="pt-5"><span>{template.title}</span></h1>
          <p className="mb-5 w-75">{template.description}</p>
        </div>
      </div>
    </div>
  </div>
}

function getLevelAlias() {
  if (config.node == 'dev') {
    return URL.parse(window.location).searchParams.get('levelAlias');
  }
  let f = URL.parse(window.location).pathname.split('/');
  return f[f.length - 1].slice(0, -5);
}

Promise.resolve()
  .then(_ => {
    if (document.getElementById("headBannerSection").innerHTML) {
      connector.del("HeadBannerSection");
      throw 1;
    }
  })
  .then(_ => fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/level/public/${getLevelAlias()}`))
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    document.title = res.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', `${res.title} от компании УралБурПроект`);
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("headBannerSection"));
    root.render(<HeadBannerSection template={res} />);
  })
  .catch(error => {
    if (error instanceof Error) console.log(error.message);
  });
