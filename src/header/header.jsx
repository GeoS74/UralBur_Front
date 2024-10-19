(() => {
    const root = ReactDOM.createRoot(document.getElementById("header"));


    function Header() {
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand " href="index.html"><img src="images/logo.svg" alt="Logo" width="60px" height="60px"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav pl-md-5 ml-auto">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">О компании</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="projects.html">Продукция</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Сервис</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="services.html">Запчасти</a>
                  <a class="dropdown-item" href="services.html">Индивидуальные решения</a>
                  <a class="dropdown-item" href="services.html">Обслуживание</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Блог</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Контакты</a>
              </li>
            </ul>

            <div class="navbar-nav ml-auto">
              <form method="post" class="search-form">
                <span class="icon ion ion-search"></span>
                <input type="text" class="form-control" placeholder="Поиск..."></input>
              </form>
            </div>
            
          </div>
        </div>
      </nav>
      )
    }
    root.render(/*#__PURE__*/React.createElement(Header, null));
  })();