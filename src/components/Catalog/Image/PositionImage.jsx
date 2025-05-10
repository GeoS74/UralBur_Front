import serviceHost from "../../libs/service.host.js";

export default function PositionImage({ fileName, title }) {
  return fileName ? <img
    src={`${serviceHost("mcontent")}/api/mcontent/static/catalog/position/images/${fileName}`}
    alt={title}
    className="img-fluid" /> : <></>
}