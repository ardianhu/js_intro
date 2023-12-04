const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1
const yourName = process.argv[2];// TODO 2
const environment = process.env.NODE_ENV// TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik

}
 
const currentMemoryUsage = process.memoryUsage().heapUsed;// TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// command to use:
// NODE_ENV=development node ./process-object/index.js <Nama Anda>
// and it will return like this:
// Hai, Ardian
// Mode environment: development
// Penggunaan memori dari 3130224 naik ke 3131976