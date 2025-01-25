console.log("Hello World!")

async function main(){
let a = await fetch("C:/Users/admn/Desktop/Challenges/Spotify/songs/")
let response = await a.text();
console.log(response)
}
main();