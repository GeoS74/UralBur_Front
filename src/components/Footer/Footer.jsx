import serviceHost from "../libs/service.host.js";
import { loader, shower } from "../libs/common.js";
import SocialMedia from "./SocialMedia/SocialMedia.js";
import Contacts from "./Contacts/Contacts.js";
import FastAccess from "./FastAccess/FastAccess.js";

function Footer({ contacts }) {
  React.useEffect(() => {
    loader(jQuery);
    shower(jQuery);
  });

  return <div className="container">
    <div className="row mb-5">

      {/* компонент с социальными сетями */}
      <SocialMedia />

      {/* компонент с контактами */}
      <Contacts contacts={contacts} />

      {/* компонент со ссылками быстрого доступа */}
      <FastAccess />

      <div className="col-md-3"></div>

    </div>
    <div className="row">
      <div className="col-12 text-md-center text-left">
        <p className="copyright">
          Copyright &copy;
          {new Date().getFullYear()} Все права защищены
        </p>
      </div>
    </div>
  </div>
}

fetch(`${serviceHost("mcontent")}/api/mcontent/contact/public`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("footer"));
    root.render(<Footer contacts={res} />);
  })