# UralBur_Front

npm run build

@babel/cli
@babel/preset-react

npx babel --presets @babel/preset-react ./src/component.jsx -o ./build/component.js


все компоненты надо оборорачивать в (() => {})();
например 
(() => {
  const root = ReactDOM.createRoot(document.getElementById("menu"));
  const useState = React.useState;
  function Foo() {
    const [count, setCount] = useState(0);
    return /*#__PURE__*/React.createElement("h1", {
      onClick: () => setCount(count + 1)
    }, "hello ", count);
  }
  root.render(/*#__PURE__*/React.createElement(Foo, null));
})();
