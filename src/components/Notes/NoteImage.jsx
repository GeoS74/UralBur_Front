import serviceHost from "../libs/service.host.js";

export default function NoteImage({ fileName, title }) {
  return fileName ? <img
    src={`${serviceHost("mcontent")}/api/mcontent/static/images/note/${fileName}`}
    alt={title}
    className="img-fluid" /> : <></>
}