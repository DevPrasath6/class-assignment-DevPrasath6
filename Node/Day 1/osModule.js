const os = require('os');

console.log('====== Operating System Info ======');

console.log('Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('CPU Cores:', os.cpus().length);
console.log('Uptime (seconds):', os.uptime());
console.log('Hostname:', os.hostname());
console.log('User Info:', os.userInfo());

console.log("====== Uptime Conversion ======");
const uptimeInSeconds = os.uptime();
const uptimeInMinutes = Math.floor(uptimeInSeconds / 60);
const uptimeInHours = Math.floor(uptimeInMinutes / 60);
console.log("Uptime in minutes : ",uptimeInMinutes," minutes");
console.log("Uptime in hours : ",uptimeInHours," hours");

console.log("Convert the memory from bytes to kilobytes and gigabytes");
const totalMemoryInBytes = os.totalmem();
const freeMemoryInBytes = os.freemem();
const totalMemoryInKilobytes = (totalMemoryInBytes / 1024).toFixed(2);
const freeMemoryInKilobytes = (freeMemoryInBytes / 1024).toFixed(2);
const totalMemoryInGigabytes = (totalMemoryInBytes / (1024 ** 3)).toFixed(2);
const freeMemoryInGigabytes = (freeMemoryInBytes / (1024 ** 3)).toFixed(2);
console.log(`Total Memory: ${totalMemoryInBytes} bytes (${totalMemoryInKilobytes} KB, ${totalMemoryInGigabytes} GB)`);
console.log(`Free Memory: ${freeMemoryInBytes} bytes (${freeMemoryInKilobytes} KB, ${freeMemoryInGigabytes} GB)`);
