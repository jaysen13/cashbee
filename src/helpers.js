function getImage(imgString = "") {
    if (!imgString || !imgString.length) return "";
    return new URL(`./assets/${imgString}`, import.meta.url).href;
}

function convertToCurrency(number = 0, opt = { locale: "en-PH", options: { style: 'currency', currency: "PHP" } }) {
    if (typeof number !== "number") throw `${number} is not type of number`;
    return new Intl.NumberFormat(opt.locale, opt.options).format(number);
}

export { getImage, convertToCurrency };