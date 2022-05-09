import fs from "fs"

const dir = process.argv[2]
const arquive = process.argv[3]
const content = process.argv.map((item, index) => {
    if(index >=4) {
        return item;
    }
});
// if(!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
//     console.log(`Diretório: ${dir} crido com sucesso `)
// }

fs.writeFile( `${dir}/${arquive} `,  content.join(' ') , (err)=> {
    if(err){
        throw err;
    }
    console.log("uhul foi")
});