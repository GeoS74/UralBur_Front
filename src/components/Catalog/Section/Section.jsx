import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";
import config from "../../config.js";

import PositionImage from "../Image/PositionImage.js";

connector.add("Section");

function Section({ positions }) {
  React.useEffect(() => connector.del("Section"));

  return <div className="container">

    {/* <div className="row justify-content-center mb-5 element-animate">
    <div className="col-md-8 text-center">
      <h2 className=" heading mb-4">Blog Posts</h2>
      <p className="mb-5 lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
  </div> */}

    <div className="row">
      <div className="col-md-10">

        {positions.map((e) => <div key={e.id} className="media mb-4 d-md-flex d-block element-animate">
          <a href={getUrl(e.level.alias, e.alias)} className="mr-5"><PositionImage fileName={e.files.image.fileName} title={e.title}/></a>
          <div className="media-body">
            {/* <span className="post-meta">Feb 26th, 2018</span> */}
            <h3 className="mt-2 text-black"><a href={getUrl(e.level.alias, e.alias)}>{e.title}</a></h3>
            <p>{e.description}</p>
            <p><a href={getUrl(e.level.alias, e.alias)} className="readmore">Подробнее <span className="ion-android-arrow-dropright-circle"></span></a></p>
          </div>
        </div>)}
      </div>

    </div>
  </div>
}

function getUrl(levelAlias, alias){
  if(config.node == 'dev') {
    return `product-single.html?levelAlias=${levelAlias}&alias=${alias}`
  }
  return `product-single/${levelAlias}/${alias}.html`
}

function getLevelAlias(){
  if(config.node == 'dev') {
    return URL.parse(window.location).searchParams.get('levelAlias');
  }
  let f = URL.parse(window.location).pathname.split('/');
  return f[f.length-1].slice(0, -5);
}

fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/position/public/?levelAlias=${getLevelAlias()}`)
  .then(async response => {
    const res = await response.json();

    // в случае если создан раздел, но в нём нет позиций, сервер вернёт код 200 и пустой массив
    // эта ситуация обрабатывается как ошибка 404
    if(!res.length) {
      window.location.href = '404.html';
      return;
    }

    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("sectionPosition"));
    root.render(<Section positions={res} />);
  })