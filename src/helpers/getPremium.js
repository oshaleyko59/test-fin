
function check(element) {
  return element.toLowerCase().includes('premium');
}

export default function getPremium(arrToCheck) {

  const found = arrToCheck.find(element => check(element));
  return {isPremium: !!found, feature: found}
}
