const root = ReactDOM.createRoot(document.getElementById("header"));


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand " href="index.html"><img src="images/logo.svg" alt="Logo" width="100px" height="100px"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav pl-md-5 ml-auto">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">Главная</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">О компании</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="projects.html">Продукция</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Сервис</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="services.html">Запчасти</a>
              <a className="dropdown-item" href="services.html">Индивидуальные решения</a>
              <a className="dropdown-item" href="services.html">Обслуживание</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">Блог</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Контакты</a>
          </li>
        </ul>

        <div className="navbar-nav ml-auto">
          <form method="post" className="search-form">
            <span className="icon ion ion-search"></span>
            <input type="text" className="form-control" placeholder="Поиск..."></input>
          </form>
        </div>
        
      </div>
    </div>
  </nav>
  )
}
root.render(/*#__PURE__*/React.createElement(Header, null));
