const fs = require("fs");
const axios = require("axios");

const events = async () => {
  await axios
    .get(
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=332&apikey=4q59AYKkZGvG3Z3OzLdf9ehH5J3pprVk"
    )
    .then((response) => {
      let events = response.data._embedded.events;
      let eventData = [];
      let newEvents = events.map((event) => {
        let venues = event._embedded.venues[0];
        let name = event.name;
        let id = event.id;
        let city = venues.city.name;
        let state = venues.state.name;
        let image = event.images[0].url;
        let url = event.url;
        let date = event.dates.start.localDate;
        let venue = venues.name;
        let instagram = "https://www.instagram.com";
        let twitter = "https://twitter.com";
        eventData.push({
          name,
          id,
          city,
          state,
          image,
          url,
          date,
          venue,
          instagram,
          twitter,
        });
        fs.writeFileSync("./events.json", JSON.stringify(eventData));

        console.log(eventData);
      });
    });
};

events();
