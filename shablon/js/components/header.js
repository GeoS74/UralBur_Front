const root = ReactDOM.createRoot(document.getElementById("header"));
function Header() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand ",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/logo.svg",
    alt: "Logo",
    width: "100px",
    height: "100px"
  })), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarsExample05",
    "aria-controls": "navbarsExample05",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarsExample05"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav pl-md-5 ml-auto"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link active",
    href: "index.html"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "about.html"
  }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "projects.html"
  }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "services.html",
    id: "dropdown04",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "\u0421\u0435\u0440\u0432\u0438\u0441"), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdown04"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "services.html"
  }, "\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "services.html"
  }, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "services.html"
  }, "\u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435"))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "blog.html"
  }, "\u0411\u043B\u043E\u0433")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "contact.html"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), /*#__PURE__*/React.createElement("div", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/React.createElement("form", {
    method: "post",
    className: "search-form"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon ion ion-search"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\u041F\u043E\u0438\u0441\u043A..."
  }))))));
}
root.render(/*#__PURE__*/React.createElement(Header, null));
