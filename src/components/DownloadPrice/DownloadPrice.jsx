import serviceHost from "../libs/service.host.js";

function DownloadPrice({ price }) {
  return <a href={`${serviceHost("mcontent")}/api/mcontent/static/price/${price.fileName}`} className="btn btn-outline-white px-4 py-3">Скачать прайс</a>
}

fetch(`${serviceHost("mcontent")}/api/mcontent/price/public`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("downloadPrice"));
    root.render(<DownloadPrice price={res} />);
  })
