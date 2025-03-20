import serviceHost from "../libs/service.host.js";
import connector from "../libs/connector.js";

connector.add("Catalog");

function Catalog({ levels }) {
  React.useEffect(() => connector.del("Catalog"));

  return <>
    <div className="container">
      <div className="row justify-content-center mb-5 element-animate">
        <div className="col-md-8 text-center">
          <h2 className=" heading mb-4">Каталог</h2>
          <p className="mb-5 lead">Мы поставляем качественную и востребованную всеми компаниями продукцию</p>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row no-gutters">

        {levels.map((e) => <div key={e.id} className="col-md-4 element-animate">
          <a href={`section.html?id=${e.id}`} className="link-thumbnail">
            <h3>{e.title}</h3>
            <span className="ion-plus icon"></span>
            <img src={`${serviceHost("mcontent")}/api/mcontent/static/catalog/level/images/${e.image.fileName}`} alt={e.title} className="img-fluid" />
          </a>
        </div>)}

      </div>
    </div>
  </>
}

fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/level/public`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("catalog"));
    root.render(<Catalog levels={res} />);
  })