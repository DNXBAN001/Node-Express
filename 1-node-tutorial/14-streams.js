const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./utils/big.txt', {
  highWaterMark: 90000, //control the amount of chunks, specifies the buffer size changing it from the default value
  encoding: "utf8" //encoding
})

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
