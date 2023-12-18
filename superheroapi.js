const superheroDiv = document.getElementById("hero");
const superheroButton = document.getElementById("getNewHero");

//  function getHero(){
//  fetch('https://superheroapi.com/api.php/1467598304092995/245').then(response => response.json()).then(json => console.log(json.image.url))};

const SUPER_HEROTOKEN = '1467598304092995';
const BASE_URL = `https://superheroapi.com/api.php/${SUPER_HEROTOKEN}`;
 function getSuperHero(id,name){
     fetch(`${BASE_URL}/${id}`)
     .then(response => response.json())
     .then(json => {
        console.log(json.powerstats)
        const stats =  getStatsHTML(json)
         const name = `<h2>${json.name}<br>Intelligence: ${json.powerstats.intelligence}</h2>`
         superheroDiv.innerHTML = `${name}<img src='${json.image.url}' height=300 width=300/> ${stats}`
 })
 }


// function getSuperHero(id,name){
//     fetch(`${BASE_URL}/${id}`)
//     .then(response => response.json())
//     .then(json => {
//        console.log(json.powerstats)
//         getStatsHTML2(json)
//         const name = `<h2>${json.name}<br>Intelligence: ${json.powerstats.intelligence}</h2>`
//         superheroDiv.innerHTML = `${name}<img src='${json.image.url}' height=300 width=300/> ${stats}`
// })
//}






 const getStatsHTML = (character) => {
     const stats = Object.keys(character.powerstats).map(stat => {
         return `<p>${stat} : ${character.powerstats[stat]}<p/>`
     })
     console.log(stats.join(''))
     return stats.join('')
    }


// }
// function getstatsHTML(character) {
//     const stats = Object.keys(character.powerstats).map(stat => {
//         return `<p>${stat} : ${character.powerstats[stat]}<p/>`
//     })
//     const name = `<h2>${character.name}</h2>`
//         superheroDiv.innerHTML = `${name}<img src='${json.image.url}' height=300 width=300/> ${stats.join('')}`

    // return Object.keys(character.powerstats).map(stat => {
    //     return `<p>${stat} : ${character.powerstats[stat]}<p/>`
    // }).join('')
    //console.log(stats.join(''))
    //return stats.join('')


//}




function getHero(name){
fetch(`${BASE_URL}/search/${name}`).then(response=>response.json()).then(json => {
        const hero = json.results[0];
        const stats2 = getStatsHTML(hero);
        console.log(stats2)
        console.log(hero);
        superheroDiv.innerHTML = `<h2>${hero.name}<h2/><img src='${hero.image.url}' height=300 width=300/> ${stats2}`
    })

}




function randomHero(){
    const noofHeros = 731;
    return Math.floor(Math.random()*731)+1;
}
//getSuperHero(randomHero);
//superheroButton.addEventListener('click' , getSuperHero(randomHero()));

const heroname = document.getElementById("heroName");

//document.getElementById("searchbutton").addEventListener('click' , getHero(heroname.value));





//const img = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg';
//const body = document.querySelector('body').innerHTML += `<img src='${img}' height=200 width=200/>`;
