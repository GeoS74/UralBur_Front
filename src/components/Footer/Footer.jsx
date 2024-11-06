import serviceHost from "../libs/service.host.js";

function Footer({ contentinfo }) {
  return (<>
    <div className="col-md-4 mb-5">
        <h3>About The Industrial</h3>
        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. .</p>
        <ul className="list-unstyled footer-link d-flex footer-social">
            <li><a href="#" className="p-2"><span className="fa fa-twitter"></span></a></li>
            <li><a href="#" className="p-2"><span className="fa fa-facebook"></span></a></li>
            <li><a href="#" className="p-2"><span className="fa fa-linkedin"></span></a></li>
            <li><a href="#" className="p-2"><span className="fa fa-instagram"></span></a></li>
        </ul>
    </div>
    <div className="col-md-5 mb-5 pl-md-5">
        <h3>Contact Info</h3>
        <ul className="list-unstyled footer-link">
            <li className="d-block">
            <span className="d-block">{contentinfo[0].title}:</span>
            <span >{contentinfo[0].value}</span></li>
            <li className="d-block"><span className="d-block">{contentinfo[1].title}:</span><span >{contentinfo[1].value}</span></li>
            <li className="d-block"><span className="d-block">{contentinfo[2].title}:</span><span >{contentinfo[2].value}</span></li>
        </ul>
    </div>
    <div className="col-md-3 mb-5">
        <h3>Quick Links</h3>
        <ul className="list-unstyled footer-link">
            <li><a href="#">About</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Disclaimers</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div className="col-md-3"></div>
  </>)
}


fetch(`${serviceHost("mcontent")}/api/mcontent/contact/public`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("contentinfo"));
    root.render(<Footer contentinfo={res} />);
  })