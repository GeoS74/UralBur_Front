import config from "../config.js"

export default function serviceHost(name) {
  switch (name) {
    case "mcontent":
      return _makeURL(config.mcontent.back.host, config.mcontent.back.port);
  }
}

function _makeURL(host, port) {
  return `${host || ''}${port ? ':' : ''}${port || ''}`
}