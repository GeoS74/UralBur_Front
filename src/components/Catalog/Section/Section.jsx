import serviceHost from "../../libs/service.host.js";
import connector from "../../libs/connector.js";

connector.add("Section");

function Section({ positions }) {
  React.useEffect(() => connector.del("Section"));

  console.log(positions);

  return <div className="container">

    {/* <div className="row justify-content-center mb-5 element-animate">
    <div className="col-md-8 text-center">
      <h2 className=" heading mb-4">Blog Posts</h2>
      <p className="mb-5 lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
  </div> */}

    <div className="row">
      <div className="col-md-10">

        {positions.map((e) => <div key={e.id} className="media mb-4 d-md-flex d-block element-animate">
          <a href={`product-single.html?id=${e.id}`} className="mr-5"><img src={`${serviceHost("mcontent")}/api/mcontent/static/catalog/position/images/${e.files.image.fileName}`} alt={e.title} className="img-fluid"/></a>
          <div className="media-body">
            {/* <span className="post-meta">Feb 26th, 2018</span> */}
            <h3 className="mt-2 text-black"><a href={`product-single.html?id=${e.id}`}>{e.title}</a></h3>
            <p>{e.description}</p>
            <p><a href={`product-single.html?id=${e.id}`} className="readmore">Подробнее <span className="ion-android-arrow-dropright-circle"></span></a></p>
          </div>
        </div>)}
      </div>

    </div>
  </div>
}

fetch(`${serviceHost("mcontent")}/api/mcontent/catalog/position/public/?level=${URL.parse(window.location).searchParams.get('id')}`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("sectionPosition"));
    root.render(<Section positions={res} />);
  })