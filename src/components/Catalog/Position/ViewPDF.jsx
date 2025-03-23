import serviceHost from "../../libs/service.host.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf/pdf.worker.js'
// '../../node_modules/pdfjs-dist/build/pdf.worker.mjs';

export default function ViewPDF({ fileName }) {
  const loadingTask = pdfjsLib.getDocument(`${serviceHost("mcontent")}/api/mcontent/static/catalog/position/pdf/${fileName}`);

  loadingTask.promise.then(pdf => {
    const pages = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      pages.push(pdf.getPage(i))
    }

    return Promise.all(pages);
  })
    .then(pages => {

      for (let page of pages) {
        const scale = 0.5;
        const viewport = page.getViewport({ scale });
        const outputScale = window.devicePixelRatio || 1;
        const canvas = document.createElement("canvas");
        document.getElementById("viewer").append(canvas)
        const context = canvas.getContext("2d");

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        const transform = outputScale !== 1
          ? [outputScale, 0, 0, outputScale, 0, 0]
          : null;

        const renderContext = {
          canvasContext: context,
          transform,
          viewport,
        };
        page.render(renderContext);
      }
    });



  return <div className="row justify-content-center element-animate" id="viewer"></div>
}

