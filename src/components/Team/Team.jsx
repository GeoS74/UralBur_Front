import serviceHost from "../libs/service.host.js";

function Team({ team }) {

  return <div class="container">
    <div class="row justify-content-center mb-5 element-animate">
      <div class="col-md-8 text-center">
        <h2 class="heading mb-4">Наша команда</h2>
        <p class="mb-5 lead">Сотрудники самые опытные и крутые</p>
      </div>
    </div>

    <div class="row">
      <Items team={team} />
    </div>
  </div>
}

function Items({ team }) {
  return team.map((e) => <div key={e.id} className="col-lg-3">
    <div className="media d-block media-custom text-center">
      <a href="#"><img src={`${serviceHost("mcontent")}/api/mcontent/static/images/team/${e.photo.fileName}`} alt={e.name} className="img-fluid" /></a>
      <div className="media-body">
        <h3 className="mt-0 text-black">{e.name}</h3>
      </div>
    </div>
  </div>)
}

fetch(`${serviceHost("mcontent")}/api/mcontent/team/public/?isPublic=1`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("team"));
    root.render(<Team team={res} />);
  })
