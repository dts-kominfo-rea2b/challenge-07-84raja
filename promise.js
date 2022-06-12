const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (feel) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const arrayIXXVGC = [...theaterIXX, ...theaterVGC];

    return arrayIXXVGC.filter((film) => film.hasil === feel).length || 0;
  } catch (error) {
    return console.log(error);
  }
};
module.exports = {
  promiseOutput,
};
