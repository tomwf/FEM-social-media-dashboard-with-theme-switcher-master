const theme = {
  colors: {
    limeGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',
    facebook: 'hsl(208, 92%, 53%)',
    twitter: 'hsl(203, 89%, 53%)',
    instagram: 'linearGradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    youtube: 'hsl(348, 97%, 39%)',
    toggleDark: 'linearGradient(hsl(209, 78%, 56%), hsl(146, 68%, 55%))',
    toggleLight: 'hsl(230, 22%, 74%)',
    veryDarkBlueBg: 'hsl(230, 17%, 14%)',
    veryDarkBlueTopBgPattern: 'hsl(232, 19%, 15%)',
    darkDesaturatedBlueCardbg: 'hsl(228, 28%, 20%)',
    desaturatedBlueText: 'hsl(228, 34%, 66%)',
    whiteText: 'hsl(0, 0%, 100%)',
    whiteBg: 'hsl(0, 0%, 100%)',
    veryPaleBlueTopBgPattern: 'hsl(225, 100%, 98%)',
    lightGrayishBlueCardBg: 'hsl(227, 47%, 96%)',
    darkGrayishBlueText: 'hsl(228, 12%, 44%)',
    veryDarkBlueText: 'hsl(230, 17%, 14%)',
  },
  toRgb(inputColor) {
    const converter = (h, s, l) => {
      s /= 100;
      l /= 100;
      const k = n => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
    }

    let hslString = this.colors[inputColor]
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
}

export default theme
