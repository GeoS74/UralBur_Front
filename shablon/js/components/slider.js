const root = ReactDOM.createRoot(document.getElementById("slider"));
const useState = React.useState;
const useEffect = React.useEffect;
function Slides() {
  const [slides, setSlides] = useState(Array);
  useEffect(() => {
    fetch('http://localhost:8080/api/mcontent/slider/public/search').then(res => res.json()).then(data => setSlides(data));
  }, []);
  const startSlide = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "slider-item",
    style: {
      backgroundImage: `url(images/start_fon.jpg)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row slider-text align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-7 text-center col-sm-12 element-animate"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("span", null, "\u041C\u044B \u043F\u0435\u0440\u0432\u044B\u0435 \u0432\u043E \u0432\u0441\u0435\u043C")))))));
  const listSlide = /*#__PURE__*/React.createElement(React.Fragment, null, slides.map(slide => /*#__PURE__*/React.createElement("div", {
    key: slide.id,
    className: "slider-item",
    style: {
      backgroundImage: `url(http://localhost:8080/api/mcontent/static/images/slider/${slide.image.fileName})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row slider-text align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-7 text-center col-sm-12 element-animate"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("span", null, slide.title)), /*#__PURE__*/React.createElement("p", {
    className: "mb-5 w-75"
  }, slide.message)))))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, slides.length !== 0 ? listSlide : startSlide);
}
;
root.render(/*#__PURE__*/React.createElement(Slides, null));
