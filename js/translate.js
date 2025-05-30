// List of available locales
const availableLocales = ['es', 'en'];

// Default locale.
const defaultLanguage = 'es';

// Manually detect users' language, strip languages such as `en-GB` to just `en`.
let language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

// If `?lang=` exists in URL params & is valid, then use that instead.
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get('lang');
if (langFromUrl && availableLocales.includes(langFromUrl)) {
  language = langFromUrl
}

// Set `pageLanguage` only if its available within our locales, otherwise default.
let pageLanguage = defaultLanguage;
if (availableLocales.includes(language)) {
  pageLanguage = language;
}

let animatedText = pageLanguage.match("en") ?  ["Programmer", "Web Developer"] : ["Programador", "Desarrollador Web"];
if(pageLanguage.match("en")) {
  $("#proHover").attr("data-hover", "Projects")
  $("#resHover").attr("data-hover", "Resume")
  $("#abiHover").attr("data-hover", "Abilities")
  $("#othHover").attr("data-hover", "Others")
}

// Locale translations.
const locales = {
  // EN
  en: {
    "output": {
        "text": "Hellow World"
    },
    "navbar": {
      "pro": "Projects",
      "res": "Resume",
      "hab": "Abilities",
      "oth": "Others",
    },
    "hello": "Hi Everyone! I am",
    "about": "About me",
    "CVES": "CV Spanish",
    "CVEN": "CV English",
    "name": "Name",
    "age": "Age",
    "explanation": "I am a person with concerns who has just started his working life, who is looking for a company with which to grow personally and professionally speaking.<br /> What I am most looking for is continuous training and the use of cutting-edge technologies or that I can be given access to study it on my own in order to be able to recycle myself.",
    "projectsSection": "Here we have some projects that I already participated",
    "slider": {
        "btnWeb": "GO TO WEB",
        "months": {
            "jan": "January",
            "feb": "February",
            "apr": "April",
            "may": "May",
            "jun": "June"
        },
        "dataCatalog": {
          "title": "Data Catalog",
          "desc": "Download all Emergencies from last 4 years"
        },
        "casaminium": {
          "title": "Casaminium / Estate Administrators",
          "desc": "Management Estates in Madrid"
        },
        "links": {
          "title": "My Links",
          "desc": "Website where you can make your own Virtual Card of bussiness"
        },
        "maps": {
          "title": "Leaflet JS",
          "desc": "Example usage of Leaflet JS based on GeoJSON data"
        },
        "charts": {
          "title": "Chart JS",
          "desc": "Example usage of Chart JS based on GeoJSON data"
        },
        "gestoClub": {
          "title": "Gestoclubs",
          "desc": "Management of Members Club"
        }
    },
    "btnOtherProj": "See Other Projects",
    "exp": "Experience",
    "edu": "Education",
    "airbusExperience": {
      "rol": "C# .NET Programmer",
      "airbus1":"Developing applications in Blazor from .NET 6 and following versions.",
      "airbus2":"Manintenance of existing applications.",
    },
    "fmExperience": {
      "rol": "C# ASP.NET Programmer",
      "fm1": "Maintenance of the own web application in ASP.NET Framework.",
      "fm2": "Develop and maintenance of web services in .NET 6 and .NET Framework.",
      "fm4": "Develop of new web services and maintenance of existing ones.",
      "fm5": "Usage of ticketing tools as ",
    },
    "orbitalExperience": {
      "rol": "C# .NET Programmer",
      "orbital1": "- Creation of desktop application with WPF and .NET 5",
      "orbital2": "- Worked in agile methodology",
      "orbital3": "- Usage of material design for the application appearance and MVVM as design pattern",
    },
    "gmvExperience": {
      "rol": "C# .NET Programmer",
      "gmv1": "- Develop and maintenance of a project to manage Vessels in Spain defence department using .NET Framework 4.5, Visual Studio 2022 and TFS (Team Foundation Server) as version control.",
      "gmv2": "- Usage of Python and Selenium to do Web Scrapping and obtain information of vessles in other pages to contrast.",
      "gmv3": "- Develop a web page to have a look of all emergencies since the current year to 3 years before.",
    },
    "eduInfo": {
      "daw": "Web Application Developer",
      "enTitle": "English",
      "enDesc": "B2-C1 Level",
      "sqlDesc": "SQL From 0 Course",
      "smrDesc": "Network and Microinformatics System",
      "webDesc": "Full Front technologies course",
      "enCourse": "Basic usage of Python with Django, Numpy, Pandas and Google Cloud",
    },
    "habilities": {
      "title": "Skills",
      "high": "High / Intermidiet",
      "basic": "Basic"
    },
    "interests": {
      "title": "Other Interests",
      "games": "Video Games",
      "basket": "Basketball",
      "seriesFilms": "Series / Films"
    },
    "machine": "VS PC",
    "friend": "VS Friend",
    "score": "Scoreboard",
    "restart": "Restart",
    "back": "Back"
  }
};

// Get all page elements to be translated.
const elements = document.querySelectorAll('[data-i18n]');

// Get JSON object of translations.
const json = locales[pageLanguage];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  if(pageLanguage.match("en")) {
    const key = element.getAttribute('data-i18n');
    let text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);

    // Does this text have any variables? (eg {something})
    const variables = text.match(/{(.*?)}/g);
    if (variables) {

      // Iterate each variable in the text.
      variables.forEach((variable) => {

        // Filter all `data-*` attributes for this element to find the matching key.
        Object.entries(element.dataset).filter(([key, value]) => {
          if (`{${key}}` === variable) {
            try {
              // Attempt to run actual JavaScript code.
              text = text.replace(`${variable}`, new Function(`return (${value})`)());
            } catch (error) {
              // Probably just static text replacement.
              text = text.replace(`${variable}`, value);
            }
          }
        })
      });
    }

    // Regular text replacement for given locale.
    element.innerHTML = text;
  }
});

// Set <html> tag lang attribute.
const htmlElement = document.querySelector('html');
htmlElement.setAttribute('lang', pageLanguage);

