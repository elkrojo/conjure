// Images for rotation
var bgImages = ['hifi_01.jpeg', 'ttable_bw_01.jpg', 'ttable_bw_green_01.jpeg', 'ttable_bw_red_01.jpeg',
                'vinyl_grooves_01.jpg', 'vinyl_stack_01.jpeg', 'vinyl_stack_02.jpg']

// var bgRandNum = Math.floor((Math.random() * bgImages.length));

var d = new Date();
var t = d.getTime();
var days = Math.floor(t / (1000 * 60 * 60 * 24));

// Select image per day
var rotator = days % bgImages.length;


const countryListAlpha2 = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan (Province of China)",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};

$(document).ready(function() {
    $('body').css({'background-image': 'url(static/images/background/' + bgImages[rotator] + ')'});

    $('#add_genre_name, #edit_genre_name').change(function() {
        var val = $(this).val();
        if (val == "rock") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='pop_rock'>Pop Rock</option>
                                                            <option value='alt_rock'>Alternative Rock</option>
                                                            <option value='indie_rock'>Indie Rock</option>
                                                            <option value='punk'>Punk</option>
                                                            <option value='classic_rock'>Classic Rock</option>
                                                            <option value='hard_rock'>Hard Rock</option>
                                                            <option value='rock_roll'>Rock & Roll</option>
                                                            <option value='folk_rock'>Folk Rock</option>
                                                            <option value='psych_rock'>Psychedelic Rock</option>
                                                            <option value='prog_rock'>Prog Rock</option>`);
        }
        else if (val == "electronic") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='house'>House</option>
                                                            <option value='synth_pop'>Synth-Pop</option>
                                                            <option value='techno'>Techno</option>
                                                            <option value='disco'>Disco</option>
                                                            <option value='electro'>Electro</option>
                                                            <option value='italo_disco'>Italo-Disco</option>
                                                            <option value='experimental'>Experimental</option>
                                                            <option value='ambient'>Ambient</option>
                                                            <option value='acid'>Acid</option>
                                                            <option value='deep_house'>Deep House</option>`);
        }
        else if (val == "pop") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='pop_rock'>Pop Rock</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='synth_pop'>Synth-Pop</option>
                                                            <option value='chanson'>Chanson</option>
                                                            <option value='schlager'>Schlager</option>
                                                            <option value='disco'>Disco</option>
                                                            <option value='europop'>Europop</option>
                                                            <option value='soft_rock'>Soft Rock</option>
                                                            <option value='easy_listening'>Easy Listening</option>`);
        }
        else if (val == "funk_soul") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='soul'>Soul</option>
                                                            <option value='disco'>Disco</option>
                                                            <option value='funk'>Funk</option>
                                                            <option value='rhythm_blues'>Rhythm & Blues</option>
                                                            <option value='pop_rock'>Pop Rock</option>
                                                            <option value='synth_pop'>Synth Pop</option>
                                                            <option value='jazz_funk'>Jazz-Funk</option>
                                                            <option value='rnb_swing'>RnB / Swing</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='vocal'>Vocal</option>`);
        }
        else if (val == "jazz") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='easy_listening'>Easy Listening</option>
                                                            <option value='contemp_jazz'>Contemporary Jazz</option>
                                                            <option value='big_band'>Big Band</option>
                                                            <option value='swing'>Swing</option>
                                                            <option value='jazz_funk'>Jazz-Funk</option>
                                                            <option value='fusion'>Fusion</option>
                                                            <option value='soul_jazz'>Soul-Jazz</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='jazz_rock'>Jazz-Rock</option>
                                                            <option value='bop'>Bop</option>`);
        }
        else if (val == "folk_world_country") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='country'>Country</option>
                                                            <option value='folk'>Folk</option>
                                                            <option value='folk_rock'>Folk Rock</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='country_rock'>Country Rock</option>
                                                            <option value='african'>African</option>
                                                            <option value='pop_rock'>Pop Rock</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='acoustic'>Acoustic</option>
                                                            <option value='laiko'>Laiko</option>`);
        }
        else if (val == "hip_hop") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='rnb_swing'>RnB / Swing</option>
                                                            <option value='pop_rap'>Pop Rap</option>
                                                            <option value='house'>House</option>
                                                            <option value='gangsta'>Gangsta</option>
                                                            <option value='electro'>Electro</option>
                                                            <option value='conscious'>Conscious</option>
                                                            <option value='hip_hop'>Hip Hop</option>
                                                            <option value='downtempo'>Downtempo</option>
                                                            <option value='soul'>Soul</option>
                                                            <option value='synth_pop'>Synth-Pop</option>`);
        }
        else if (val == "classical") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='romantic'>Romantic</option>
                                                            <option value='classical'>Classical</option>
                                                            <option value='baroque'>Baroque</option>
                                                            <option value='modern'>Modern</option>
                                                            <option value='contemporary'>Contemporary</option>
                                                            <option value='opera'>Opera</option>
                                                            <option value='soundtrack'>Soundtrack</option>
                                                            <option value='easy_listening'>Easy Listening</option>
                                                            <option value='neo_classical'>Neo-Classical</option>
                                                            <option value='modern_classical'>Modern Classical</option>`);
        }
        else if (val == "stage_screen") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='soundtrack'>Soundtrack</option>
                                                            <option value='score'>Score</option>
                                                            <option value='theme'>Theme</option>
                                                            <option value='musical'>Musical</option>
                                                            <option value='pop_rock'>Pop Rock</option>
                                                            <option value='easy_listening'>Easy Listening</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='synth_pop'>Synth-Pop</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='disco'>Disco</option>`);
        }
        else if (val == "reggae") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='dancehall'>Dancehall</option>
                                                            <option value='reggae'>Reggae</option>
                                                            <option value='dub'>Dub</option>
                                                            <option value='roots_reggae'>Roots Reggae</option>
                                                            <option value='reggae_pop'>Reggae-Pop</option>
                                                            <option value='ska'>Ska</option>
                                                            <option value='lovers_rock'>Lovers Rock</option>
                                                            <option value='rocksteady'>Rocksteady</option>
                                                            <option value='ragga'>Ragga</option>
                                                            <option value='calypso'>Calypso</option>`);
        }
        else if (val == "latin") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='salsa'>Salsa</option>
                                                            <option value='mpb'>MPB</option>
                                                            <option value='samba'>Samba</option>
                                                            <option value='latin_jazz'>Latin Jazz</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='easy_listening'>Easy Listening</option>
                                                            <option value='bolero'>Bolero</option>
                                                            <option value='flamenco'>Flamenco</option>
                                                            <option value='bossanova'>Bossanova</option>
                                                            <option value='vocal'>Vocal</option>`);
        }
        else if (val == "blues") {
            $('#add_genre_style, #edit_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='blues_rock'>Blues Rock</option>
                                                            <option value='rhythm_blues'>Rhythm & Blues</option>
                                                            <option value='rock_roll'>Rock & Roll</option>
                                                            <option value='electric_blues'>Electric Blues</option>
                                                            <option value='soul'>Soul</option>
                                                            <option value='country_blues'>Country Blues</option>
                                                            <option value='chicago_blues'>Chicago Blues</option>
                                                            <option value='pop_rock'>Pop Rock</option>
                                                            <option value='classic_rock'>Classic Rock</option>
                                                            <option value='psych_rock'>Psychedelic Rock</option>`);
        }
    });

    for (let c in countryListAlpha2) {
        $('#add_country').append($('<option />').val(c).html(countryListAlpha2[c]));
    }

    for (let b=50; b<=200; b+=5) {
        $('#add_bpm').append($('<option />').val(b).html(b));
    }
})
