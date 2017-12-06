const csv = require('csvtojson')
const fs= require('fs')
const csvFilePath = './customer-data.csv'
const path = require('path')
var data =[]

csv()
.fromFile(csvFilePath)
.on('json',(csvRow)=>{
    //header=> [header1, header2, header3]
    let chunkOfData=csvRow
    data.push(chunkOfData)

})

.on('done',(error)=>{

    fs.writeFile('./customer-data.json', JSON.stringify(data), function (err) {
        if (err)
            return console.log(err);
        console.log('just check the file');
    });
    console.log('end')
})
