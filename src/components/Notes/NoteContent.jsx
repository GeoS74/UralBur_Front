import Converter from "../libs/converter.js";
import serviceHost from "../libs/service.host.js";
import connector from "../libs/connector.js";
import config from "../config.js";

import NoteImage from "./NoteImage.js";

connector.add("NoteContent");

const converter = new Converter();

function NoteContent({ note }) {
  React.useEffect(() => connector.del("NoteContent"));

  return <div class="container">
    <div className="row">
      <div className="col-12" style={{ marginTop: -150 }}>
        <p><NoteImage fileName={note.image.fileName} title={note.title} /></p>
      </div>
    </div>

     <div className="row justify-content-center" style={{ marginTop: 0 }}>
      <div className="col-md-8 mb-5">
        <h2 style={{ textAlign: "center" }}>&ldquo;{note.title}&rdquo;</h2>
      </div>
    </div>

    <div className="row justify-content-center">
      {note.message ? <div className="col-md-8"
        dangerouslySetInnerHTML={{ __html: converter.markdownToHTML(note.message) }}
      ></div> : <></>}

    </div>

  </div>
}

function getAlias() {
  if (config.node == 'dev') {
    return URL.parse(window.location).searchParams.get('alias');
  }
  let f = URL.parse(window.location).pathname.split('/');
  return f[f.length - 1].slice(0, -5);
}

fetch(`${serviceHost("mcontent")}/api/mcontent/note/public/${getAlias()}`)
  .then(async response => {
    if (response.status == 404) {
      window.location.href = '404.html';
      return;
    }
    const res = await response.json();
    return res;
  })
  .then(res => {
    document.title = `УралБурПроект: ${res.title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', `Информация об УралБурПроект: ${res.title}`);
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("noteContent"));
    root.render(<NoteContent note={res} />);
  })