
                        
                        // let file = "./file.txt"
                        // async function readFile (file){
                            //     const data = await fs.readFile(file)
                            //     const dataToString = data.toString()
                            //     console.log(dataToString)
                            // }
                            
                            // async function writeFile (file,content){
                                //     await fs.writeFile(file,content, {flag: 'a+'})
                                // }
                                // const content = `\n prodotto : ${arguments[0]} quantity:${arguments[1]}`
                                
                                // async function writeAndRead(){
                                    //     await writeFile(file,content)
                                    //     await readFile(file)
                                    // }
                                    // writeAndRead()
const fs = require('fs').promises;
const arguments = process.argv.slice(2);
const data = require('./data.json')
data.list.push({
    prodotto: arguments[0],
    quantità: arguments[1]
})


const htmlList = data.list.map((element)=> `<li>${element.prodotto} ${element.quantità}</li>`)
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${htmlList}
</body>
</html>`

    async function printToHtml(){
        const newData = JSON.stringify(data)
        await fs.writeFile('./data.json', newData)
        await fs.writeFile('./index.html', htmlContent)
    }
    printToHtml()
console.log(data)