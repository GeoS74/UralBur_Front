import serviceHost from "../../libs/service.host.js";

// если у раздела каталога нет картинки, то узел <img> все равно должен быть отрендерен
// иначе ломается шаблон
export default function LevelImage({fileName, title}) {
  const source = fileName ? `${serviceHost("mcontent")}/api/mcontent/static/catalog/level/images/${fileName}` : "";
  return <img src={source} alt={title} className="img-fluid"/>
}