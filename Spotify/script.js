console.log("Hello World!")

async function main(){
let a = await fetch("E:\previous files\kirtan-20241215T162424Z-001\kirtan")
let response = await a.text();
console.log(response)
}
main();