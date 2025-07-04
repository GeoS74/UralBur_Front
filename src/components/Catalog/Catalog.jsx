import serviceHost from "../libs/service.host.js";
import connector from "../libs/connector.js";
import config from "../config.js";

import LevelImage from "./Image/LevelImage.js";

connector.add("Catalog");

function Catalog({ levels }) {
  React.useEffect(() => connector.del("Catalog"));

  return <>
    <div className="container">
      <div className="row justify-content-center mb-5 element-animate">
        <div className="col-md-8 text-center">
          <h2 className=" heading mb-4">Продукция</h2>
          <p className="mb-5 lead">Мы поставляем качественную и востребованную продукцию.<br />Достигайте большего с профессиональным оборудованием!</p>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row no-gutters">

        {levels.map((e) => <div key={e.id} className="col-md-4 element-animate">
          <a href={getUrl(e.alias)} className="link-thumbnail">
            <h3>{e.title}</h3>
            <span className="ion-plus icon"></span>
            <LevelImage fileName={e.image.fileName} title={e.title} />
          </a>
        </div>)}

      </div>
    </div>
  </>
}

function getUrl(levelAlias) {
  if (config.node == 'dev') {
    return `section.html?levelAlias=${levelAlias}`
  }
  return `section/${levelAlias}.html`
}

Promise.resolve()
  .then(_ => {
    if (document.getElementById("catalog").innerHTML) {
      connector.del("Catalog");
      throw 1;
    }
  })
  .then(_ => fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/level/public`))
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("catalog"));
    root.render(<Catalog levels={res} />);
  })
  .catch(error => {
    if (error instanceof Error) console.log(error.message);
  });