function FastAccess() {
  return <>
    <h3>Быстрый доступ</h3>
    <ul className="list-unstyled footer-link">
      <li><a href="#">О компании</a></li>
      <li><a href="#">Каталог</a></li>
      <li><a href="#">Сервис</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("fastAccess"));
root.render(<FastAccess />);