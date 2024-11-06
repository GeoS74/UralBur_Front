import serviceHost from "../libs/service.host.js";

const page = window.location.pathname.split("/").pop().slice(0, -5) || 'index';

function Header({ pageInfo }) {
  React.useEffect(() => _animate(jQuery));

  const titleStr =  pageInfo.title !== '' ? pageInfo.title : 'Урал-Бур';
  const description = pageInfo.description !== '' ? pageInfo.description : 'Создаем машины для вас';
  
  document.title = titleStr;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand " href="index.html"><img src="images/logo.svg" alt="ural-bur" width="100px" height="100px" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav pl-md-5 ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">О компании</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Продукция</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="index.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Сервис</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <a className="dropdown-item" href="index.html">Запчасти</a>
                <a className="dropdown-item" href="index.html">Индивидуальные решения</a>
                <a className="dropdown-item" href="index.html">Обслуживание</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Контакты</a>
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

function _animate($) {
  $('nav .dropdown').hover(function () {
    const $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    const $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });

  $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
  });


  // $('#dropdown04').on('show.bs.dropdown', function () {
  //   console.log('show');
  // });
}

fetch(`${serviceHost("mcontent")}/api/mcontent/template/public/${page}`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {    
    const root = ReactDOM.createRoot(document.getElementById("header"));
    root.render(<Header pageInfo={res}/>);
  });

