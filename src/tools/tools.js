export const NumberPadding = (num) => {
  let str = "" + num;
  while (str.length < 4) {
    str = "0" + str;
  }
  return str;
};

export const Capitalize = (str) => {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

export const MeterToFeetConverter = (num) => {
  const convertedNum = num * 3.280084;
  return convertedNum.toFixed(1);
};

export const KilogramToPoundConverter = (num) => {
  const convertedNum = num * 2.20462;
  return convertedNum.toFixed(1);
};

export const Nidoran = (str) => {
  switch (str) {
    case "nidoran-f":
      return "nidoran ♀";
    case "nidoran-m":
      return "nidoran ♂";
    default:
      return str;
  }
};

export const statStringConverter = (str) => {
  switch (str) {
    case "special-attack":
      return "Sp. Atk";
    case "special-defense":
      return "Sp. Def";
    default:
      return str;
  }
};

export const UrlRemover = (str) => {
  return str
    .replace(/\//g, "")
    .replace("https:pokeapi.coapiv2pokemon-species", "");
};

export const MinEv = (num) => {
  return Math.floor(num * 2 + 5 - (num * 2 + 5) * 0.1);
};

export const MaxEv = (num) => {
  return Math.floor((num * 2 + 99) * 1.1);
};

export const MinHP = (num) => {
  return Math.floor(num * 2 + 110);
};

export const MaxHP = (num) => {
  return num * 2 + 204;
};

export default {
  NumberPadding,
  Capitalize,
  KilogramToPoundConverter,
  MeterToFeetConverter,
  Nidoran,
  UrlRemover,
  MinEv,
  MaxEv,
  MinHP,
  MaxHP,
  statStringConverter,
};
