export function wdToLetters(deg) {
  if (deg > 348 || deg <= 11) return "N";

  if (deg > 11 && deg <= 33) return "NNE";

  if (deg > 33 && deg <= 56) return "NE";

  if (deg > 56 && deg <= 78) return "ENE";

  if (deg > 78 && deg <= 101) return "E";

  if (deg > 101 && deg <= 123) return "ESE";

  if (deg > 123 && deg <= 146) return "SE";

  if (deg > 146 && deg <= 168) return "SSE";

  if (deg > 168 && deg <= 191) return "S";

  if (deg > 191 && deg <= 213) return "SSW";

  if (deg > 213 && deg <= 236) return "SW";

  if (deg > 236 && deg <= 258) return "WSW";

  if (deg > 258 && deg <= 281) return "W";

  if (deg > 281 && deg <= 303) return "WNW";

  if (deg > 303 && deg <= 326) return "NW";

  if (deg > 326 && deg <= 348) return "NNW";
}

export function getUrlWeather(weather) {
  switch (weather) {
    case 800:
      return "./img/Clear.png";
    case 801:
    case 802:
      return "./img/LightCloud.png";
    case 803:
    case 804:
      return "./img/HeavyCloud.png";
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 231:
      return "./img/Thunderstorm.png";

    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return "./img/Shower.png";

    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      return "./img/LightRain.png";
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      return "./img/HeavyRain.png";

    case 600:
    case 601:
    case 602:
      return "./img/Snow.png";
    case 611:
    case 612:
    case 613:
    case 615:
      return "./img/Sleet.png";
    case 616:
    case 620:
      return "./img/Hail.png";
    case 621:
    case 622:
    // default:
    //   return "./img/LightCloud.png";
  }
}
