import { loader, elementAnimate } from "../libs/common.js";

function MainCatalog({ slides }) {
  React.useEffect(() => {
    elementAnimate('#mainCatalogViewer', jQuery);
  })

  return <>
    <div className="col-md-4 element-animate">
      <a href="project-single.html" className="link-thumbnail">
        <h3>Супер буры</h3>
        <span className="ion-plus icon"></span>
        <img src="images/industrial_img_1.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
      </a>
    </div>
    <div className="col-md-4 element-animate">
      <a href="project-single.html" className="link-thumbnail">
        <h3>Бур 3000</h3>
        <span className="ion-plus icon"></span>
        <img src="images/industrial_img_2.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
      </a>
    </div>
    <div className="col-md-4 element-animate">
      <a href="project-single.html" className="link-thumbnail">
        <h3>Мега бурилка</h3>
        <span className="ion-plus icon"></span>
        <img src="images/industrial_img_3.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
      </a>
    </div>
    <div className="col-md-4 element-animate">
      <a href="project-single.html" className="link-thumbnail">
        <h3>Пробивной бур</h3>
        <span className="ion-plus icon"></span>
        <img src="images/industrial_img_4.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
      </a>
    </div>
    <div className="col-md-4 element-animate">
      <a href="project-single.html" className="link-thumbnail">
        <h3>Бур как бур</h3>
        <span className="ion-plus icon"></span>
        <img src="images/industrial_img_5.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
      </a>
    </div>
    <div className="col-md-4 element-animate">
      <a href="project-single.html" className="link-thumbnail">
        <h3>Бурильная камера</h3>
        <span className="ion-plus icon"></span>
        <img src="images/industrial_img_6.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
      </a>
    </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("mainCatalog"));
root.render(<MainCatalog />);
