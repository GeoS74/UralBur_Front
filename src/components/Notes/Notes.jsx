import Converter from "../libs/converter.js";
import serviceHost from "../libs/service.host.js";
import connector from "../libs/connector.js";
import config from "../config.js";

connector.add("Notes");

const converter = new Converter();

function Notes({ notes }) {
  React.useEffect(() => connector.del("Notes"))

  return notes.map((e, i) => <div key={e.id} className="half d-lg-flex d-block">
    <div className={`image element-animate` + (i % 2 ? " order-2" : "")}
      data-animate-effect="fadeIn"
      style={{ "backgroundImage": `url('${serviceHost("mcontent")}/api/mcontent/static/images/note/${e.image.fileName}')` }}></div>
    <div className="text text-center element-animate">

      <h3 className="mb-4">{e.title}</h3>

      {e.message ? <p className="mb-5"
        dangerouslySetInnerHTML={{ __html: converter.markdownToHTML(_cut(e.message, 250)) }}
      ></p> : <></>}
      {/* <p className="mb-5">{e.message}</p> */}

      <p><a href={getUrl(e.alias)} className="btn btn-primary btn-sm px-3 py-2">Узнать больше</a></p>
    </div>
  </div>)
}

function getUrl(alias){
  if(config.node == 'dev') {
    return `simple-article.html?alias=${alias}`
  }
  return `simple-article/${alias}.html`
}

function _cut(text, limit) {
  return (limit && text.length > limit) ? text.substring(0, text.indexOf(".", limit) + 1) : text;
}

fetch(`${serviceHost("mcontent")}/api/mcontent/note/public/?isPublic=1&limit=2`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("notes"));
    root.render(<Notes notes={res} />);
  })
