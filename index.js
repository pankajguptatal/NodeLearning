const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(`${habitablePlanets.length} habitable planets found!`);
    console.log(habitablePlanets.map((planet)=>{
        return `Habitable planet Name : ${planet['kepoi_name']}`;
    }))
    console.log("done");
  });

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
