const hello = (tapioca) => {
    console.log(`Parâmetro ${tapioca} `)
}

for (let i = 1; i < process.argv.length; i++) {
    hello(process.argv[i]);
    
}