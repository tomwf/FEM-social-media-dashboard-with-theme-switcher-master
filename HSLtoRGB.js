const hslToRgb = (hslString) => {
  const converter = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
  }

  const hslPattern = /hsl\([0-9,%\s]+\)/
  while (hslPattern.test(hslString)) {
    const hslMatch = hslString.match(hslPattern)[0]
    const hsl = [...hslMatch.matchAll(/\d+/g)].map(item => item[0])
    const rgb = converter(...hsl)
    const rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

    hslString = hslString.replace(hslPattern, rgbString)
  }
  return hslString
}

const converter = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
}

const replaceAll = (hslString) => {
  const hslPattern = /hsl\([0-9,%\s]+\)/
  while (hslPattern.test(hslString)) {
    const hslMatch = hslString.match(hslPattern)[0]
    const hsl = [...hslMatch.matchAll(/\d+/g)].map(item => item[0])
    const rgb = converter(...hsl)
    const rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

    hslString = hslString.replace(hslPattern, rgbString)
  }
  return hslString
}
hslString = 'linearGradient(hsl(209, 78%, 56%), hsl(146, 68%, 55%))'
//console.log(replaceAll(hslString))
console.log(hslToRgb(hslString))
