import serviceHost from "../libs/service.host.js";
import connector from "../libs/connector.js";
import config from "../config.js";

connector.add("headBannerNote");

function HeadBannerSection({ template }) {
  React.useEffect(() => connector.del("headBannerNote"));

  return <div className="slider-item" style={{"backgroundImage": `url(images/industrial_hero_3.jpg)`}}>
    <div className="container">
      <div className="row slider-text align-items-center justify-content-center">
        <div className="col-md-8 text-center col-sm-12 element-animate pt-5">
          <h1 className="pt-5"><span>{template.title}</span></h1>
          {/* <p className="mb-5 w-75">{template.message}</p> */}
        </div>
      </div>
    </div>
  </div>
}

// function _cut(text, limit) {
//   return (limit && text.length > limit) ? text.substring(0, text.indexOf(".", limit) + 1) : text;
// }

function getAlias(){
  if(config.node == 'dev') {
    return URL.parse(window.location).searchParams.get('alias');
  }
  let f = URL.parse(window.location).pathname.split('/');
  return f[f.length-1].slice(0, -5);
}

fetch(`${serviceHost("mcontent")}/api/mcontent/note/public/${getAlias()}`)
  .then(async response => {
    if(response.status == 404) {
      window.location.href = '404.html';
      return;
    }
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("headBannerNote"));
    root.render(<HeadBannerSection template={res} />);
  })
