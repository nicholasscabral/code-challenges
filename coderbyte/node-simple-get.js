const https = require('https');

function parseJsonWithRegex(json) {
  const regex = "\\[(.*?)\\]";
  return json
    .match(regex)[1]
    .replace(new RegExp('"', 'g'), '')
}

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {

  let data = '';
  const token = "4ltzksx165"

  // parse json data here...
  resp.on('data', (d) => {
    data += d
  })

  resp.on('end', () => {
    const parsedData = parseJsonWithRegex(data)

    const hobbies = parsedData.split(',')

    let output = ''
    let outputWithToken = ''

    for (const hobbie of hobbies) {
      output += `${hobbie}, `
    }

    output = output.substring(0, output.length - 2)
    const restOfOutput = output.substring(token.length, output.length)

    for (i = 0; i < token.length; i++) {
      outputWithToken += output[i]
      outputWithToken += token[i]
    }
    outputWithToken += restOfOutput
    
    console.log(outputWithToken)
  })
});
