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
    default:
      return "./img/LightCloud.png";
  }
}

const isoCountries = {
  paises: [
    {
      código: 4,
      "alfa-3": "AFG",
      "alfa-2": "AF",
      nombre: "Afganistán",
    },
    {
      código: 8,
      "alfa-3": "ALB",
      "alfa-2": "AL",
      nombre: "Albania",
    },
    {
      código: 10,
      "alfa-3": "ATA",
      "alfa-2": "AQ",
      nombre: "Antártida",
    },
    {
      código: 12,
      "alfa-3": "DZA",
      "alfa-2": "DZ",
      nombre: "Argelia",
    },
    {
      código: 16,
      "alfa-3": "ASM",
      "alfa-2": "AS",
      nombre: "Samoa americana",
    },
    {
      código: 20,
      "alfa-3": "AND",
      "alfa-2": "AD",
      nombre: "Andorra",
    },
    {
      código: 24,
      "alfa-3": "AGO",
      "alfa-2": "AO",
      nombre: "Angola",
    },
    {
      código: 28,
      "alfa-3": "ATG",
      "alfa-2": "AG",
      nombre: "Antigua y Barbuda",
    },
    {
      código: 31,
      "alfa-3": "AZE",
      "alfa-2": "AZ",
      nombre: "Azerbaiyán",
    },
    {
      código: 32,
      "alfa-3": "ARG",
      "alfa-2": "AR",
      nombre: "Argentina",
    },
    {
      código: 36,
      "alfa-3": "AUS",
      "alfa-2": "AU",
      nombre: "Australia",
    },
    {
      código: 40,
      "alfa-3": "AUT",
      "alfa-2": "AT",
      nombre: "Austria",
    },
    {
      código: 44,
      "alfa-3": "BHS",
      "alfa-2": "BS",
      nombre: "Bahamas",
    },
    {
      código: 48,
      "alfa-3": "BHR",
      "alfa-2": "BH",
      nombre: "Bahrein",
    },
    {
      código: 50,
      "alfa-3": "BGD",
      "alfa-2": "BD",
      nombre: "Bangladesh",
    },
    {
      código: 51,
      "alfa-3": "ARM",
      "alfa-2": "AM",
      nombre: "Armenia",
    },
    {
      código: 52,
      "alfa-3": "BRB",
      "alfa-2": "BB",
      nombre: "Barbados",
    },
    {
      código: 56,
      "alfa-3": "BEL",
      "alfa-2": "BE",
      nombre: "Bélgica",
    },
    {
      código: 60,
      "alfa-3": "BMU",
      "alfa-2": "BM",
      nombre: "Bermudas",
    },
    {
      código: 64,
      "alfa-3": "BTN",
      "alfa-2": "BT",
      nombre: "Bhután",
    },
    {
      código: 68,
      "alfa-3": "BOL",
      "alfa-2": "BO",
      nombre: "Bolivia",
    },
    {
      código: 70,
      "alfa-3": "BIH",
      "alfa-2": "BA",
      nombre: "Bosnia-Herzegovina",
    },
    {
      código: 72,
      "alfa-3": "BWA",
      "alfa-2": "BW",
      nombre: "Botswana",
    },
    {
      código: 74,
      "alfa-3": "BVT",
      "alfa-2": "BV",
      nombre: "Bouvet, Isla",
    },
    {
      código: 76,
      "alfa-3": "BRA",
      "alfa-2": "BR",
      nombre: "Brasil",
    },
    {
      código: 84,
      "alfa-3": "BLZ",
      "alfa-2": "BZ",
      nombre: "Belice",
    },
    {
      código: 86,
      "alfa-3": "IOT",
      "alfa-2": "IO",
      nombre: "Océano Índico, Territorio británico del",
    },
    {
      código: 90,
      "alfa-3": "SLB",
      "alfa-2": "SB",
      nombre: "Salomón, Islas",
    },
    {
      código: 92,
      "alfa-3": "VGB",
      "alfa-2": "VG",
      nombre: "Vírgenes británicas, Islas",
    },
    {
      código: 96,
      "alfa-3": "BRN",
      "alfa-2": "BN",
      nombre: "Brunei Darussalam",
    },
    {
      código: 100,
      "alfa-3": "BGR",
      "alfa-2": "BG",
      nombre: "Bulgaria",
    },
    {
      código: 104,
      "alfa-3": "MMR",
      "alfa-2": "MM",
      nombre: "Myanmar",
    },
    {
      código: 108,
      "alfa-3": "BDI",
      "alfa-2": "BI",
      nombre: "Burundi",
    },
    {
      código: 112,
      "alfa-3": "BLR",
      "alfa-2": "BY",
      nombre: "Belarus",
    },
    {
      código: 116,
      "alfa-3": "KHM",
      "alfa-2": "KH",
      nombre: "Camboya",
    },
    {
      código: 120,
      "alfa-3": "CMR",
      "alfa-2": "CM",
      nombre: "Camerún",
    },
    {
      código: 124,
      "alfa-3": "CAN",
      "alfa-2": "CA",
      nombre: "Canadá",
    },
    {
      código: 132,
      "alfa-3": "CPV",
      "alfa-2": "CV",
      nombre: "Cabo Verde",
    },
    {
      código: 136,
      "alfa-3": "CYM",
      "alfa-2": "KY",
      nombre: "Caimán, Islas",
    },
    {
      código: 140,
      "alfa-3": "CAF",
      "alfa-2": "CF",
      nombre: "Centroafricana, República",
    },
    {
      código: 144,
      "alfa-3": "LKA",
      "alfa-2": "LK",
      nombre: "Sri Lanka",
    },
    {
      código: 148,
      "alfa-3": "TCD",
      "alfa-2": "TD",
      nombre: "Chad",
    },
    {
      código: 152,
      "alfa-3": "CHL",
      "alfa-2": "CL",
      nombre: "Chile",
    },
    {
      código: 156,
      "alfa-3": "CHN",
      "alfa-2": "CN",
      nombre: "China",
    },
    {
      código: 158,
      "alfa-3": "TWN",
      "alfa-2": "TW",
      nombre: "Taiwan, Provincia de China",
    },
    {
      código: 162,
      "alfa-3": "CXR",
      "alfa-2": "CX",
      nombre: "Christmas, isla",
    },
    {
      código: 166,
      "alfa-3": "CCK",
      "alfa-2": "CC",
      nombre: "Cocos (Keeling), islas",
    },
    {
      código: 170,
      "alfa-3": "COL",
      "alfa-2": "CO",
      nombre: "Colombia",
    },
    {
      código: 174,
      "alfa-3": "COM",
      "alfa-2": "KM",
      nombre: "Comores",
    },
    {
      código: 175,
      "alfa-3": "MYT",
      "alfa-2": "YT",
      nombre: "Mayotte",
    },
    {
      código: 178,
      "alfa-3": "COG",
      "alfa-2": "CG",
      nombre: "Congo",
    },
    {
      código: 180,
      "alfa-3": "COD",
      "alfa-2": "CD",
      nombre: "Congo, República democrática del",
    },
    {
      código: 184,
      "alfa-3": "COK",
      "alfa-2": "CK",
      nombre: "Cook, Islas",
    },
    {
      código: 188,
      "alfa-3": "CRI",
      "alfa-2": "CR",
      nombre: "Costa Rica",
    },
    {
      código: 191,
      "alfa-3": "HRV",
      "alfa-2": "HR",
      nombre: "Croacia",
    },
    {
      código: 192,
      "alfa-3": "CUB",
      "alfa-2": "CU",
      nombre: "Cuba",
    },
    {
      código: 196,
      "alfa-3": "CYP",
      "alfa-2": "CY",
      nombre: "Chipre",
    },
    {
      código: 203,
      "alfa-3": "CZE",
      "alfa-2": "CZ",
      nombre: "República Checa",
    },
    {
      código: 204,
      "alfa-3": "BEN",
      "alfa-2": "BJ",
      nombre: "Benín",
    },
    {
      código: 208,
      "alfa-3": "DNK",
      "alfa-2": "DK",
      nombre: "Dinamarca",
    },
    {
      código: 212,
      "alfa-3": "DMA",
      "alfa-2": "DM",
      nombre: "Dominica",
    },
    {
      código: 214,
      "alfa-3": "DOM",
      "alfa-2": "DO",
      nombre: "República Dominicana",
    },
    {
      código: 218,
      "alfa-3": "ECU",
      "alfa-2": "EC",
      nombre: "Ecuador",
    },
    {
      código: 222,
      "alfa-3": "SLV",
      "alfa-2": "SV",
      nombre: "El Salvador",
    },
    {
      código: 226,
      "alfa-3": "GNQ",
      "alfa-2": "GQ",
      nombre: "Guinea ecuatorial",
    },
    {
      código: 231,
      "alfa-3": "ETH",
      "alfa-2": "ET",
      nombre: "Etiopía",
    },
    {
      código: 232,
      "alfa-3": "ERI",
      "alfa-2": "ER",
      nombre: "Eritrea",
    },
    {
      código: 233,
      "alfa-3": "EST",
      "alfa-2": "EE",
      nombre: "Estonia",
    },
    {
      código: 234,
      "alfa-3": "FRO",
      "alfa-2": "FO",
      nombre: "Feroe, Islas",
    },
    {
      código: 238,
      "alfa-3": "FLK",
      "alfa-2": "FK",
      nombre: "Falkland (Malvinas), Islas",
    },
    {
      código: 239,
      "alfa-3": "SGS",
      "alfa-2": "GS",
      nombre: "Georgia del Sur e Islas Sandwich del Sur",
    },
    {
      código: 242,
      "alfa-3": "FJI",
      "alfa-2": "FJ",
      nombre: "Fiji",
    },
    {
      código: 246,
      "alfa-3": "FIN",
      "alfa-2": "FI",
      nombre: "Finlandia",
    },
    {
      código: 248,
      "alfa-3": "ALA",
      "alfa-2": "AX",
      nombre: "Åland, Islas",
    },
    {
      código: 250,
      "alfa-3": "FRA",
      "alfa-2": "FR",
      nombre: "Francia",
    },
    {
      código: 254,
      "alfa-3": "GUF",
      "alfa-2": "GF",
      nombre: "Guyana francesa",
    },
    {
      código: 258,
      "alfa-3": "PYF",
      "alfa-2": "PF",
      nombre: "Polinesia francesa",
    },
    {
      código: 260,
      "alfa-3": "ATF",
      "alfa-2": "TF",
      nombre: "Territorios Australes franceses",
    },
    {
      código: 262,
      "alfa-3": "DJI",
      "alfa-2": "DJ",
      nombre: "Djibouti",
    },
    {
      código: 266,
      "alfa-3": "GAB",
      "alfa-2": "GA",
      nombre: "Gabón",
    },
    {
      código: 268,
      "alfa-3": "GEO",
      "alfa-2": "GE",
      nombre: "Georgia",
    },
    {
      código: 270,
      "alfa-3": "GMB",
      "alfa-2": "GM",
      nombre: "Gambia",
    },
    {
      código: 275,
      "alfa-3": "PSE",
      "alfa-2": "PS",
      nombre: "Palestina, Territorio ocupado de",
    },
    {
      código: 276,
      "alfa-3": "DEU",
      "alfa-2": "DE",
      nombre: "Alemania",
    },
    {
      código: 288,
      "alfa-3": "GHA",
      "alfa-2": "GH",
      nombre: "Ghana",
    },
    {
      código: 292,
      "alfa-3": "GIB",
      "alfa-2": "GI",
      nombre: "Gibraltar",
    },
    {
      código: 296,
      "alfa-3": "KIR",
      "alfa-2": "KI",
      nombre: "Kiribati",
    },
    {
      código: 300,
      "alfa-3": "GRC",
      "alfa-2": "GR",
      nombre: "Grecia",
    },
    {
      código: 304,
      "alfa-3": "GRL",
      "alfa-2": "GL",
      nombre: "Groenlandia",
    },
    {
      código: 308,
      "alfa-3": "GRD",
      "alfa-2": "GD",
      nombre: "Granada",
    },
    {
      código: 312,
      "alfa-3": "GLP",
      "alfa-2": "GP",
      nombre: "Guadalupe",
    },
    {
      código: 316,
      "alfa-3": "GUM",
      "alfa-2": "GU",
      nombre: "Guam",
    },
    {
      código: 320,
      "alfa-3": "GTM",
      "alfa-2": "GT",
      nombre: "Guatemala",
    },
    {
      código: 324,
      "alfa-3": "GIN",
      "alfa-2": "GN",
      nombre: "Guinea",
    },
    {
      código: 328,
      "alfa-3": "GUY",
      "alfa-2": "GY",
      nombre: "Guayana",
    },
    {
      código: 332,
      "alfa-3": "HTI",
      "alfa-2": "HT",
      nombre: "Haití",
    },
    {
      código: 334,
      "alfa-3": "HMD",
      "alfa-2": "HM",
      nombre: "Heard y McDonald, Islas",
    },
    {
      código: 336,
      "alfa-3": "VAT",
      "alfa-2": "VA",
      nombre: "Santa Sede (Estado de la Ciudad del Vaticano)",
    },
    {
      código: 340,
      "alfa-3": "HND",
      "alfa-2": "HN",
      nombre: "Honduras",
    },
    {
      código: 344,
      "alfa-3": "HKG",
      "alfa-2": "HK",
      nombre: "Hong-Kong",
    },
    {
      código: 348,
      "alfa-3": "HUN",
      "alfa-2": "HU",
      nombre: "Hungría",
    },
    {
      código: 352,
      "alfa-3": "ISL",
      "alfa-2": "IS",
      nombre: "Islandia",
    },
    {
      código: 356,
      "alfa-3": "IND",
      "alfa-2": "IN",
      nombre: "India",
    },
    {
      código: 360,
      "alfa-3": "IDN",
      "alfa-2": "ID",
      nombre: "Indonesia",
    },
    {
      código: 364,
      "alfa-3": "IRN",
      "alfa-2": "IR",
      nombre: "Irán, República islámica de",
    },
    {
      código: 368,
      "alfa-3": "IRQ",
      "alfa-2": "IQ",
      nombre: "Iraq",
    },
    {
      código: 372,
      "alfa-3": "IRL",
      "alfa-2": "IE",
      nombre: "Irlanda",
    },
    {
      código: 376,
      "alfa-3": "ISR",
      "alfa-2": "IL",
      nombre: "Israel",
    },
    {
      código: 380,
      "alfa-3": "ITA",
      "alfa-2": "IT",
      nombre: "Italia",
    },
    {
      código: 384,
      "alfa-3": "CIV",
      "alfa-2": "CI",
      nombre: "Costa de Marfil",
    },
    {
      código: 388,
      "alfa-3": "JAM",
      "alfa-2": "JM",
      nombre: "Jamaica",
    },
    {
      código: 392,
      "alfa-3": "JPN",
      "alfa-2": "JP",
      nombre: "Japón",
    },
    {
      código: 398,
      "alfa-3": "KAZ",
      "alfa-2": "KZ",
      nombre: "Kazajstán",
    },
    {
      código: 400,
      "alfa-3": "JOR",
      "alfa-2": "JO",
      nombre: "Jordania",
    },
    {
      código: 404,
      "alfa-3": "KEN",
      "alfa-2": "KE",
      nombre: "Kenia",
    },
    {
      código: 408,
      "alfa-3": "PRK",
      "alfa-2": "KP",
      nombre: "Corea, República popular democrática de",
    },
    {
      código: 410,
      "alfa-3": "KOR",
      "alfa-2": "KR",
      nombre: "Corea, República de",
    },
    {
      código: 414,
      "alfa-3": "KWT",
      "alfa-2": "KW",
      nombre: "Kuwait",
    },
    {
      código: 417,
      "alfa-3": "KGZ",
      "alfa-2": "KG",
      nombre: "Kirguistán",
    },
    {
      código: 418,
      "alfa-3": "LAO",
      "alfa-2": "LA",
      nombre: "Laos, República democrática popular de",
    },
    {
      código: 422,
      "alfa-3": "LBN",
      "alfa-2": "LB",
      nombre: "Líbano",
    },
    {
      código: 426,
      "alfa-3": "LSO",
      "alfa-2": "LS",
      nombre: "Lesotho",
    },
    {
      código: 428,
      "alfa-3": "LVA",
      "alfa-2": "LV",
      nombre: "Letonia",
    },
    {
      código: 430,
      "alfa-3": "LBR",
      "alfa-2": "LR",
      nombre: "Liberia",
    },
    {
      código: 434,
      "alfa-3": "LBY",
      "alfa-2": "LY",
      nombre: "Libia, Jamahiriya árabe",
    },
    {
      código: 438,
      "alfa-3": "LIE",
      "alfa-2": "LI",
      nombre: "Liechtenstein",
    },
    {
      código: 440,
      "alfa-3": "LTU",
      "alfa-2": "LT",
      nombre: "Lituania",
    },
    {
      código: 442,
      "alfa-3": "LUX",
      "alfa-2": "LU",
      nombre: "Luxemburgo",
    },
    {
      código: 446,
      "alfa-3": "MAC",
      "alfa-2": "MO",
      nombre: "Macao",
    },
    {
      código: 450,
      "alfa-3": "MDG",
      "alfa-2": "MG",
      nombre: "Madagascar",
    },
    {
      código: 454,
      "alfa-3": "MWI",
      "alfa-2": "MW",
      nombre: "Malawi",
    },
    {
      código: 458,
      "alfa-3": "MYS",
      "alfa-2": "MY",
      nombre: "Malasia",
    },
    {
      código: 462,
      "alfa-3": "MDV",
      "alfa-2": "MV",
      nombre: "Maldivas",
    },
    {
      código: 466,
      "alfa-3": "MLI",
      "alfa-2": "ML",
      nombre: "Mali",
    },
    {
      código: 470,
      "alfa-3": "MLT",
      "alfa-2": "MT",
      nombre: "Malta",
    },
    {
      código: 474,
      "alfa-3": "MTQ",
      "alfa-2": "MQ",
      nombre: "Martinica",
    },
    {
      código: 478,
      "alfa-3": "MRT",
      "alfa-2": "MR",
      nombre: "Mauritania",
    },
    {
      código: 480,
      "alfa-3": "MUS",
      "alfa-2": "MU",
      nombre: "Mauricio",
    },
    {
      código: 484,
      "alfa-3": "MEX",
      "alfa-2": "MX",
      nombre: "México",
    },
    {
      código: 492,
      "alfa-3": "MCO",
      "alfa-2": "MC",
      nombre: "Mónaco",
    },
    {
      código: 496,
      "alfa-3": "MNG",
      "alfa-2": "MN",
      nombre: "Mongolia",
    },
    {
      código: 498,
      "alfa-3": "MDA",
      "alfa-2": "MD",
      nombre: "Moldavia, República de Moldova",
    },
    {
      código: 499,
      "alfa-3": "MNE",
      "alfa-2": "ME",
      nombre: "Montenegro",
    },
    {
      código: 500,
      "alfa-3": "MSR",
      "alfa-2": "MS",
      nombre: "Montserrat",
    },
    {
      código: 504,
      "alfa-3": "MAR",
      "alfa-2": "MA",
      nombre: "Marruecos",
    },
    {
      código: 508,
      "alfa-3": "MOZ",
      "alfa-2": "MZ",
      nombre: "Mozambique",
    },
    {
      código: 512,
      "alfa-3": "OMN",
      "alfa-2": "OM",
      nombre: "Omán",
    },
    {
      código: 516,
      "alfa-3": "NAM",
      "alfa-2": "NA",
      nombre: "Namibia",
    },
    {
      código: 520,
      "alfa-3": "NRU",
      "alfa-2": "NR",
      nombre: "Nauru",
    },
    {
      código: 524,
      "alfa-3": "NPL",
      "alfa-2": "NP",
      nombre: "Nepal",
    },
    {
      código: 528,
      "alfa-3": "NLD",
      "alfa-2": "NL",
      nombre: "Países Bajos",
    },
    {
      código: 531,
      "alfa-3": "CUW",
      "alfa-2": "CW",
      nombre: "Curazao",
    },
    {
      código: 533,
      "alfa-3": "ABW",
      "alfa-2": "AW",
      nombre: "Aruba",
    },
    {
      código: 534,
      "alfa-3": "SXM",
      "alfa-2": "SX",
      nombre: "San Martín (parte holandesa)",
    },
    {
      código: 535,
      "alfa-3": "BES",
      "alfa-2": "BQ",
      nombre: "Bonaire, San Eustaquio y Saba",
    },
    {
      código: 540,
      "alfa-3": "NCL",
      "alfa-2": "NC",
      nombre: "Nueva Caledonia",
    },
    {
      código: 548,
      "alfa-3": "VUT",
      "alfa-2": "VU",
      nombre: "Vanuatu",
    },
    {
      código: 554,
      "alfa-3": "NZL",
      "alfa-2": "NZ",
      nombre: "Nueva Zelanda",
    },
    {
      código: 558,
      "alfa-3": "NIC",
      "alfa-2": "NI",
      nombre: "Nicaragua",
    },
    {
      código: 562,
      "alfa-3": "NER",
      "alfa-2": "NE",
      nombre: "Níger",
    },
    {
      código: 566,
      "alfa-3": "NGA",
      "alfa-2": "NG",
      nombre: "Nigeria",
    },
    {
      código: 570,
      "alfa-3": "NIU",
      "alfa-2": "NU",
      nombre: "Niué",
    },
    {
      código: 574,
      "alfa-3": "NFK",
      "alfa-2": "NF",
      nombre: "Norfolk, Isla",
    },
    {
      código: 578,
      "alfa-3": "NOR",
      "alfa-2": "NO",
      nombre: "Noruega",
    },
    {
      código: 580,
      "alfa-3": "MNP",
      "alfa-2": "MP",
      nombre: "Marianas del Norte, Islas",
    },
    {
      código: 581,
      "alfa-3": "UMI",
      "alfa-2": "UM",
      nombre: "Ultramarinas de los Estados Unidos, Islas",
    },
    {
      código: 583,
      "alfa-3": "FSM",
      "alfa-2": "FM",
      nombre: "Micronesia, Estados federados de",
    },
    {
      código: 584,
      "alfa-3": "MHL",
      "alfa-2": "MH",
      nombre: "Marshall, Islas",
    },
    {
      código: 585,
      "alfa-3": "PLW",
      "alfa-2": "PW",
      nombre: "Palau",
    },
    {
      código: 586,
      "alfa-3": "PAK",
      "alfa-2": "PK",
      nombre: "Pakistán",
    },
    {
      código: 591,
      "alfa-3": "PAN",
      "alfa-2": "PA",
      nombre: "Panamá",
    },
    {
      código: 598,
      "alfa-3": "PNG",
      "alfa-2": "PG",
      nombre: "Papúa Nueva Guinea",
    },
    {
      código: 600,
      "alfa-3": "PRY",
      "alfa-2": "PY",
      nombre: "Paraguay",
    },
    {
      código: 604,
      "alfa-3": "PER",
      "alfa-2": "PE",
      nombre: "Perú",
    },
    {
      código: 608,
      "alfa-3": "PHL",
      "alfa-2": "PH",
      nombre: "Filipinas",
    },
    {
      código: 612,
      "alfa-3": "PCN",
      "alfa-2": "PN",
      nombre: "Pitcairn",
    },
    {
      código: 616,
      "alfa-3": "POL",
      "alfa-2": "PL",
      nombre: "Polonia",
    },
    {
      código: 620,
      "alfa-3": "PRT",
      "alfa-2": "PT",
      nombre: "Portugal",
    },
    {
      código: 624,
      "alfa-3": "GNB",
      "alfa-2": "GW",
      nombre: "Guinea-Bissau",
    },
    {
      código: 626,
      "alfa-3": "TLS",
      "alfa-2": "TL",
      nombre: "Timor oriental",
    },
    {
      código: 630,
      "alfa-3": "PRI",
      "alfa-2": "PR",
      nombre: "Puerto Rico",
    },
    {
      código: 634,
      "alfa-3": "QAT",
      "alfa-2": "QA",
      nombre: "Qatar",
    },
    {
      código: 638,
      "alfa-3": "REU",
      "alfa-2": "RE",
      nombre: "Reunión",
    },
    {
      código: 642,
      "alfa-3": "ROU",
      "alfa-2": "RO",
      nombre: "Rumanía",
    },
    {
      código: 643,
      "alfa-3": "RUS",
      "alfa-2": "RU",
      nombre: "Federación Rusa",
    },
    {
      código: 646,
      "alfa-3": "RWA",
      "alfa-2": "RW",
      nombre: "Ruanda",
    },
    {
      código: 652,
      "alfa-3": "BLM",
      "alfa-2": "BL",
      nombre: "San Bartolomé",
    },
    {
      código: 654,
      "alfa-3": "SHN",
      "alfa-2": "SH",
      nombre: "Santa Helena",
    },
    {
      código: 659,
      "alfa-3": "KNA",
      "alfa-2": "KN",
      nombre: "San Cristóbal y Nieves",
    },
    {
      código: 660,
      "alfa-3": "AIA",
      "alfa-2": "AI",
      nombre: "Anguila",
    },
    {
      código: 662,
      "alfa-3": "LCA",
      "alfa-2": "LC",
      nombre: "Santa Lucía",
    },
    {
      código: 663,
      "alfa-3": "MAF",
      "alfa-2": "MF",
      nombre: "San Martín (parte francesa)",
    },
    {
      código: 666,
      "alfa-3": "SPM",
      "alfa-2": "PM",
      nombre: "San Pedro y Miquelón",
    },
    {
      código: 670,
      "alfa-3": "VCT",
      "alfa-2": "VC",
      nombre: "San Vicente y Granadinas",
    },
    {
      código: 674,
      "alfa-3": "SMR",
      "alfa-2": "SM",
      nombre: "San Marino",
    },
    {
      código: 678,
      "alfa-3": "STP",
      "alfa-2": "ST",
      nombre: "Santo Tomé y Príncipe",
    },
    {
      código: 682,
      "alfa-3": "SAU",
      "alfa-2": "SA",
      nombre: "Arabia Saudí",
    },
    {
      código: 686,
      "alfa-3": "SEN",
      "alfa-2": "SN",
      nombre: "Senegal",
    },
    {
      código: 688,
      "alfa-3": "SRB",
      "alfa-2": "RS",
      nombre: "Serbia",
    },
    {
      código: 690,
      "alfa-3": "SYC",
      "alfa-2": "SC",
      nombre: "Seychelles",
    },
    {
      código: 694,
      "alfa-3": "SLE",
      "alfa-2": "SL",
      nombre: "Sierra Leona",
    },
    {
      código: 702,
      "alfa-3": "SGP",
      "alfa-2": "SG",
      nombre: "Singapur",
    },
    {
      código: 703,
      "alfa-3": "SVK",
      "alfa-2": "SK",
      nombre: "Eslovaquia",
    },
    {
      código: 704,
      "alfa-3": "VNM",
      "alfa-2": "VN",
      nombre: "Vietnam",
    },
    {
      código: 705,
      "alfa-3": "SVN",
      "alfa-2": "SI",
      nombre: "Eslovenia",
    },
    {
      código: 706,
      "alfa-3": "SOM",
      "alfa-2": "SO",
      nombre: "Somalia",
    },
    {
      código: 710,
      "alfa-3": "ZAF",
      "alfa-2": "ZA",
      nombre: "Sudáfrica",
    },
    {
      código: 716,
      "alfa-3": "ZWE",
      "alfa-2": "ZW",
      nombre: "Zimbabwe",
    },
    {
      código: 724,
      "alfa-3": "ESP",
      "alfa-2": "ES",
      nombre: "España",
    },
    {
      código: 728,
      "alfa-3": "SSD",
      "alfa-2": "SS",
      nombre: "Sudán del Sur",
    },
    {
      código: 729,
      "alfa-3": "SDN",
      "alfa-2": "SD",
      nombre: "Sudán",
    },
    {
      código: 732,
      "alfa-3": "ESH",
      "alfa-2": "EH",
      nombre: "Sahara occidental",
    },
    {
      código: 740,
      "alfa-3": "SUR",
      "alfa-2": "SR",
      nombre: "Suriname",
    },
    {
      código: 744,
      "alfa-3": "SJM",
      "alfa-2": "SJ",
      nombre: "Svalbard e isla Jan Mayen",
    },
    {
      código: 748,
      "alfa-3": "SWZ",
      "alfa-2": "SZ",
      nombre: "Swazilandia",
    },
    {
      código: 752,
      "alfa-3": "SWE",
      "alfa-2": "SE",
      nombre: "Suecia",
    },
    {
      código: 756,
      "alfa-3": "CHE",
      "alfa-2": "CH",
      nombre: "Suiza",
    },
    {
      código: 760,
      "alfa-3": "SYR",
      "alfa-2": "SY",
      nombre: "Siria, República árabe",
    },
    {
      código: 762,
      "alfa-3": "TJK",
      "alfa-2": "TJ",
      nombre: "Tayikistán",
    },
    {
      código: 764,
      "alfa-3": "THA",
      "alfa-2": "TH",
      nombre: "Tailandia",
    },
    {
      código: 768,
      "alfa-3": "TGO",
      "alfa-2": "TG",
      nombre: "Togo",
    },
    {
      código: 772,
      "alfa-3": "TKL",
      "alfa-2": "TK",
      nombre: "Tokelau",
    },
    {
      código: 776,
      "alfa-3": "TON",
      "alfa-2": "TO",
      nombre: "Tonga",
    },
    {
      código: 780,
      "alfa-3": "TTO",
      "alfa-2": "TT",
      nombre: "Trinidad y Tobago",
    },
    {
      código: 784,
      "alfa-3": "ARE",
      "alfa-2": "AE",
      nombre: "Emiratos árabes unidos",
    },
    {
      código: 788,
      "alfa-3": "TUN",
      "alfa-2": "TN",
      nombre: "Túnez",
    },
    {
      código: 792,
      "alfa-3": "TUR",
      "alfa-2": "TR",
      nombre: "Turquía",
    },
    {
      código: 795,
      "alfa-3": "TKM",
      "alfa-2": "TM",
      nombre: "Turkmenistán",
    },
    {
      código: 796,
      "alfa-3": "TCA",
      "alfa-2": "TC",
      nombre: "Turcos y Caicos, Islas",
    },
    {
      código: 798,
      "alfa-3": "TUV",
      "alfa-2": "TV",
      nombre: "Tuvalu",
    },
    {
      código: 800,
      "alfa-3": "UGA",
      "alfa-2": "UG",
      nombre: "Uganda",
    },
    {
      código: 804,
      "alfa-3": "UKR",
      "alfa-2": "UA",
      nombre: "Ucrania",
    },
    {
      código: 807,
      "alfa-3": "MKD",
      "alfa-2": "MK",
      nombre: "Macedonia, antigua república yugoslava de",
    },
    {
      código: 818,
      "alfa-3": "EGY",
      "alfa-2": "EG",
      nombre: "Egipto",
    },
    {
      código: 826,
      "alfa-3": "GBR",
      "alfa-2": "GB",
      nombre: "Reino Unido",
    },
    {
      código: 831,
      "alfa-3": "GGY",
      "alfa-2": "GG",
      nombre: "Guernsey",
    },
    {
      código: 832,
      "alfa-3": "JEY",
      "alfa-2": "JE",
      nombre: "Jersey",
    },
    {
      código: 833,
      "alfa-3": "IMN",
      "alfa-2": "IM",
      nombre: "Man, Isla de",
    },
    {
      código: 834,
      "alfa-3": "TZA",
      "alfa-2": "TZ",
      nombre: "Tanzania, República unida de",
    },
    {
      código: 840,
      "alfa-3": "USA",
      "alfa-2": "US",
      nombre: "Estados Unidos",
    },
    {
      código: 850,
      "alfa-3": "VIR",
      "alfa-2": "VI",
      nombre: "Vírgenes (USA), Islas",
    },
    {
      código: 854,
      "alfa-3": "BFA",
      "alfa-2": "BF",
      nombre: "Burkina Faso",
    },
    {
      código: 858,
      "alfa-3": "URY",
      "alfa-2": "UY",
      nombre: "Uruguay",
    },
    {
      código: 860,
      "alfa-3": "UZB",
      "alfa-2": "UZ",
      nombre: "Uzbekistán",
    },
    {
      código: 862,
      "alfa-3": "VEN",
      "alfa-2": "VE",
      nombre: "Venezuela",
    },
    {
      código: 876,
      "alfa-3": "WLF",
      "alfa-2": "WF",
      nombre: "Wallis y Futuna",
    },
    {
      código: 882,
      "alfa-3": "WSM",
      "alfa-2": "WS",
      nombre: "Samoa",
    },
    {
      código: 887,
      "alfa-3": "YEM",
      "alfa-2": "YE",
      nombre: "Yemen",
    },
    {
      código: 894,
      "alfa-3": "ZMB",
      "alfa-2": "ZM",
      nombre: "Zambia",
    },
  ],
};
export function isoToCountry(code) {
  const ISO = isoCountries.paises.find((pais) => {
    return pais["alfa-2"] == code;
  });
  return ISO.nombre;
}
