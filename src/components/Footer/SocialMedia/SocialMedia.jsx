function SocialMedia() {
  return <>
    <h3>О промышленной</h3>
    <p className="mb-5">Мы всегда готовы развиваться и идти в ногу со временем. Выбирая нас вы выбираете качество.</p>
    <ul className="list-unstyled footer-link d-flex footer-social">
      <li><a href="#" className="p-2"><span className="fa fa-twitter"></span></a></li>
      <li><a href="#" className="p-2"><span className="fa fa-facebook"></span></a></li>
      <li><a href="#" className="p-2"><span className="fa fa-linkedin"></span></a></li>
      <li><a href="#" className="p-2"><span className="fa fa-instagram"></span></a></li>
    </ul>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("socialMedia"));
root.render(<SocialMedia />);