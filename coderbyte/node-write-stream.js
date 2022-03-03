const https = require('https');
const fs = require('fs')
const crypto = require('crypto')

function parseJsonWithRegex(json) {
  return json
    .replace(new RegExp(', age', 'g'), '')
    .replace(new RegExp('key=', 'g'), '')
    .split(',')
    .map(x => x.replace(' ', ''))
    .filter(tuple => {
      const [,age] = tuple.split('=')
      return age == 32
    })
}

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';
  const token = "4ltzksx165"

  // parse json data here...
  
  resp.on('data', (x) => data += [x])
  resp.on('end', () => {
    const parsedData = parseJsonWithRegex(data)
    // console.log(parsedData)

    parsedData.forEach(tuple => {
      const [keyValue,] = tuple.split('=')
      fs.appendFileSync('output.txt', `${keyValue}\n`)
    })

    const file = fs.readFileSync('output.txt')
    const hashSum = crypto.createHash('sha1');
    hashSum.update(file);

    const hash = hashSum.digest('hex');
    const restOfFileHash = hash.substring(token.length, hash.length)

    let outputWithToken = ''
    for(i = 0;i < token.length;i++) {
      outputWithToken += hash[i]  
      outputWithToken += token[i]
    }
    outputWithToken += restOfFileHash
    console.log(outputWithToken)
  })
});
