import serviceHost from "../../libs/service.host.js";
import { loader, shower } from "../../libs/common.js";

export default function Contacts({ contacts }) {
  React.useEffect(() => {
    loader(jQuery);
    shower(jQuery);
  });

  return <>
    <h3>Контакты</h3>
    <ul className="list-unstyled footer-link">

      {contacts.map((e, i) => <li key={i} className="d-block">
        <span className="d-block">{_getTitle(e.alias)}:</span>
        <span>{e.value}</span>
      </li>)}
      
    </ul>
  </>
}

function _getTitle(v) {
  switch (v) {
    case "address":
      return "Адрес";
    case "telephone":
      return "Телефон";
    case "email":
      return "Email";
  }
}

fetch(`${serviceHost("mcontent")}/api/mcontent/contact/public`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("contacts"));
    root.render(<Contacts contacts={res} />);
  })
