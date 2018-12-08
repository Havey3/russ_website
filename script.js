var russObject = {
    firstName: "Russel",
    lastName: "Miller",
    favoriteFoods: ["Steak", "Sushi"],
    firstJob: "Paper boy",
    dreamJob: "Fighter pilot",
    greatestFear: "Heights",
    homeTown: "Pee Ridge Huntington,Wv USA",
    secretTalents: ["Snowboarding", "Video games"],
    wouldSkyDive: true,
    petInfo: {
        type: "Dog",
        name: "Bella"
    }
}

var htmlString = `
    <h1 class = "name">${russObject.firstName} ${russObject.lastName}</h1>
    <p class = "dream_job">${russObject.dreamJob}</p>
    <p class = "greatest_fear">${russObject.greatestFear}</p>
    <p class = "home_town">${russObject.homeTown}</p>
    <p class = "secret_talents">Russ's secret talents are: ${russObject.secretTalents[0]} ${russObject.secretTalents[1]}</p>
    <p class = "skydive">${russObject.wouldSkyDive}</p>
    <p class = "pet_sentence">Russ has a  ${russObject.petInfo.type}  whos name is  ${russObject.petInfo.name}</p>
`

document.querySelector("#personal-website").innerHTML = htmlString;