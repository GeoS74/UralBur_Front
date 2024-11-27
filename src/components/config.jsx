const prod = true; 
export default {
  mcontent: {
    back: {
      host: prod ? '' : 'http://localhost',
      port: prod ? 0 : 8080,
    }
  },
}
