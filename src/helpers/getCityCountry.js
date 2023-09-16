export default function getCityCountry(adrstr) {
  const [, city, country] = adrstr.split(',');
  return { city, country };
}
