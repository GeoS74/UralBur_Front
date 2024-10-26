const prod = true; 
export default {
  mcontent: {
    back: {
      host: prod ? '' : 'http://192.168.0.121',
      port: prod ? 0 : 3020,
    }
  },
}
