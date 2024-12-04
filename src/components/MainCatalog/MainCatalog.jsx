import connector from "../libs/connector.js";

connector.add("MainCatalog");

function MainCatalog() {
  React.useEffect(() => connector.del("MainCatalog"));

  return <>
    <div className="container">
      <div className="row justify-content-center mb-5 element-animate">
        <div className="col-md-8 text-center">
          <h2 className=" heading mb-4">Продукция</h2>
          <p className="mb-5 lead">Мы поставляем качественную и востребованную всеми компаниями продукцию</p>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Супер буры</h3>
            <span className="ion-plus icon"></span>
            <img src="images/industrial_img_1.jpg" alt="Free template by Free-Template.co" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Бур 3000</h3>
            <span className="ion-plus icon"></span>
            <img src="images/industrial_img_2.jpg" alt="Free template by Free-Template.co" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Мега бурилка</h3>
            <span className="ion-plus icon"></span>
            <img src="images/industrial_img_3.jpg" alt="Free template by Free-Template.co" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Пробивной бур</h3>
            <span className="ion-plus icon"></span>
            <img src="images/industrial_img_4.jpg" alt="Free template by Free-Template.co" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Бур как бур</h3>
            <span className="ion-plus icon"></span>
            <img src="images/industrial_img_5.jpg" alt="Free template by Free-Template.co" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4 element-animate">
          <a href="project-single.html" className="link-thumbnail">
            <h3>Бурильная камера</h3>
            <span className="ion-plus icon"></span>
            <img src="images/industrial_img_6.jpg" alt="Free template by Free-Template.co" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>



  </>
}

const root = ReactDOM.createRoot(document.getElementById("mainCatalog"));
root.render(<MainCatalog />);
