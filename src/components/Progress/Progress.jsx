import serviceHost from "../libs/service.host.js";

const defaulClass = ['ion-android-alarm-clock', 'ion-android-calendar', 'ion-android-car', 'ion-android-call']
const defaulTitle = ['Время важно для нас', 'Мы создаем историю каждый день', 'Создаем уникальные решения', 'Всегда на связи']
const defaulMessage = ['Вы еще думаете, а мы уже сделали', 
                      'На рынке более 10 лет', 
                      'Наши машины работают по всему миру', 
                      'Наши клиенты возвращаются еще']

function Progress({ info }) {
  if (info.length > 4) {
    shuffle(info)
    info = info.slice(0, 4)
  } else if (info.length < 4) {
    let i = info.length
    while(i < 4) {
      const tempObject = {cssClass: defaulClass[i], title: defaulTitle[i], message: defaulMessage[i]}
      info.push(tempObject)
      i++
    }
  }
  return (<>
    <div className="col-lg-4 order-lg-2">
      <div className="scaling-image h-100">
        <div className="frame h-100">
          <div className="feature-img-bg h-100" style={{"backgroundImage": "url('images/industrial_feature_1.jpg')"}}>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1" >
      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[0].cssClass} display-4 text-primary`}></span>
          <h3>{info[0].title}</h3>
          <p>{info[0].message}</p>
        </div>
      </div>

      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[1].cssClass} display-4 text-primary`}></span>
          <h3>{info[1].title}</h3>
          <p>{info[1].message}</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3" >
      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[2].cssClass} display-4 text-primary`}></span>
          <h3>{info[2].title}</h3>
          <p>{info[2].message}</p>
        </div>
      </div>

      <div className="feature-1 d-md-flex">
        <div className="align-self-center">
          <span className={`ion ${info[3].cssClass} display-4 text-primary`}></span>
          <h3>{info[3].title}</h3>
          <p>{info[3].message}</p>
        </div>
      </div>
    </div>
  </>)
}


fetch(`${serviceHost("mcontent")}/api/mcontent/progress/public/search`)
  .then(async response => {
    const res = await response.json();
    return res;
  })
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById("progress"));
    root.render(<Progress info={res} />);
  })

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
