const { writeFileSync } = require('fs')
for (let i = 0; i < 100000; i++) {
  writeFileSync('./utils/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
