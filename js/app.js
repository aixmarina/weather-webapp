import * as images from './images.js'

const msg = document.querySelector(".msg")
const form = document.querySelector(".search-bar form");
const list = document.querySelector("ul.cities")
const listItems = document.querySelectorAll(".ajax-section .city")
const listItemsArray = Array.from(listItems)
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}`

form.addEventListener("submit", e => {
    e.preventDefault(); // stop the form from submitting, hence prevent reloading the page
    const inputVal = e.target.city.value; // grab de the value which is contained in the search field
    getWeather(inputVal)
    msg.textContent = "";
    form.reset();
})

async function getWeather(city) {
    const query = `${url}&q=${city}&units=metric`
    // console.log("query", query)
    let data
    try {
        const response = await fetch(query)
        data = await response.json()
        console.log(data, "data")
        const { main, name, weather } = data // data.main, data.name, data.weather
        // const icon = `./icons/${weather[0]["icon"]}.svg`
        const logo = `${images[`icon${weather[0]['icon']}`]}`
        const li = document.createElement("li")
        li.classList.add("city")
        const markup = `
            <div class="card-city">
            <h2 class="city-name" data-name="${name}">
            <span>${name}</span>
            </h2>
            <div class="card-info">
            <span class="city-temp">${Math.round(main.temp)}<sup>°</sup>C</span>
            <figure>
            <img class="city-icon" src=${logo} alt=${weather[0]["main"]}>
            </figure>
            </div>
            <figcaption>${weather[0]["description"]}</figcaption>
            </div>`
        li.innerHTML = markup
        list.appendChild(li)

    } catch (error) {
        console.log(error)
        msg.textContent = "Please search for a valid city :("
    }
}

// async function checkCity() {
//     if (listItemsArray.length > 0) {
//         const filteredArray = listItemsArray.filter(el => {
//             let content = ""
//             if (inputVal.includes(",")) {
//                 if (inputVal.split(",")[1].length > 2) {
//                     inputVal = inputVal.split(",")[0]
//                     content = el.query(".city-name span").textContent.toLowerCase()
//                 } else {
//                     content = el.querySelector(".city-name").dataset.name.toLowerCase()
//                 }
//             } else {
//                 content = el.query(".city-name span").textContent.toLowerCase()
//             }
//             return content == inputVal.toLowerCase()
//         })

//         if (filteredArray.length > 0) {
//             msg.textContent = `You already know the weather for ${filteredArray[0].querySelector(".city-name span").textContent} ...otherwise be more specific by providing the country code as well :)`;
//             // form.reset();
//             return;
//         }
//     }
// }

