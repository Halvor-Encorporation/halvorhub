const navigationPageUrl = "navigation";
const coursesPageUrl = "courses?c=";
const pageStructure = {

    'games': {
      title: "Spill",
      pages: [
        {"title": "Crime 💀", "path": "crime"},
        {"title": "100 Spørsmål🍸🍻", "path": "questions"},
        {"title": "Spin the Wheel🎡", "path": "spinwheel"},
        {"title": "Sveinung's Lek", "path": "sveinung"},
        {"title": "Roulette", "path": "roulette"},
        {"title": "This or That", "path": "thisorthat"},
      ]
    },
    'courses': {
      title: "Kurs",
      pages: [
        {"title": "Dragekurs", "path": coursesPageUrl + "drage"},
        {"title": "Surfekurs", "path": coursesPageUrl + "surf"},
        {"title": "Fektekurs", "path": coursesPageUrl + "fekte"},
      ]
    }
  }


const NavbarInfo = [];


for (const sectionKey in pageStructure) {
    const section = pageStructure[sectionKey];
    const sectionUrl = navigationPageUrl + "?section=" + sectionKey;
    NavbarInfo.push({link: sectionUrl, name: section.title});
  }


export {NavbarInfo,pageStructure};
