import Converter from "../../libs/converter.js";
import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";
import config from "../../config.js";

import PositionImage from "../Image/PositionImage.js";

connector.add("Search");

const converter = new Converter();

function Search({ positions }) {
  React.useEffect(() => connector.del("Search"));

  console.log(positions)

  if (!positions.length) {
    return <div className="container">
      <div className="row justify-content-center mb-5 element-animate">
        <div className="col-md-8 text-center">
          <h2 className=" heading mb-4">Поиск не дал результатов</h2>
          <p className="mb-5 lead">Попробуйте уточнить запрос, введите артикул или наименование продукции.</p>
        </div>
      </div>
    </div>
  }

  return <div className="container">

    <div className="row justify-content-center mb-5 element-animate">
      <div className="col-md-8 text-center">
        <h2 className=" heading mb-4">Найдены следующие позиции</h2>
        {/* <p className="mb-5 lead"></p> */}
      </div>
    </div>

    <div className="row">
      <div className="col-md-10">

        {positions.map((e) => <div key={e.id} className="media mb-4 d-md-flex d-block element-animate">
          <a href={getUrl(e.level.alias, e.alias)} className="mr-5"><PositionImage fileName={e.files.image.fileName} title={e.title} /></a>
          <div className="media-body">
            {/* <span className="post-meta">Feb 26th, 2018</span> */}
            <h3 className="mt-2 text-black"><a href={getUrl(e.level.alias, e.alias)}>{e.title}</a></h3>
            {e.description ? <div className="col-md-8"
              dangerouslySetInnerHTML={{ __html: converter.markdownToHTML(_cut(e.description, 250)) }}
            ></div> : <></>}
            <p><a href={getUrl(e.level.alias, e.alias)} className="readmore">Подробнее <span className="ion-android-arrow-dropright-circle"></span></a></p>
          </div>
        </div>)}

      </div>

    </div>
  </div>
}

function _cut(text, limit) {
  return (limit && text.length > limit) ? text.substring(0, text.indexOf(".", limit) + 1) : text;
}

function getUrl(levelAlias, alias) {
  if (config.node == 'dev') {
    return `product-single.html?levelAlias=${levelAlias}&alias=${alias}`;
  }
  return `product-single/${levelAlias}/${alias}.html`
}

fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/position/public/?search=${URL.parse(window.location).searchParams.get('search')}`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("search"));
    root.render(<Search positions={res} />);
  })