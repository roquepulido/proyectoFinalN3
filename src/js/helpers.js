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
    case "Clouds":
      return "./img/HeavyCloud.png";
    case "Clear":
      return "./img/Clear.png";
    case "Snow":
      return "./img/Snow.png";
    case "Rain":
      return "./img/.png";
    case "Drizzle":
      return "./img/.png";
    case "Thunderstorm":
      return "./img/.png";
    case "Clouds":
      return "./img/.png";
  }
}
