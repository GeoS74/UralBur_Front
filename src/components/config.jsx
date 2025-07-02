const prod = true; 
export default {
  node: prod ? 'prod' : 'dev',
  mcontent: {
    back: {
      host: prod ? '' : 'http://localhost',
      port: prod ? 0 : 3020,
    }
  },
}
