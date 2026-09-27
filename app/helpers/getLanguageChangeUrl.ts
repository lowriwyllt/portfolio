const urlMapEnglishToWelsh = {
  "/en/home": "/cy/adra",
  "/en/codingprojects": "/cy/prosiectaucodio",
  "/en/experience": "/cy/profiad",
  "/en/travel": "/cy/trafeilio",
};

const getLanguageChangeUrl = (
  currentLang: "en" | "cy",
  currentPath: string
): string => {
  if (currentLang === "en") {
    if (currentPath.startsWith("/en/travel/")) {
      return currentPath.replace("/en/travel/", "/cy/trafeilio/");
    }

    return (
      urlMapEnglishToWelsh[currentPath as keyof typeof urlMapEnglishToWelsh] ||
      "/cy/adra"
    );
  } else {
    if (currentPath.startsWith("/cy/trafeilio/")) {
      return currentPath.replace("/cy/trafeilio/", "/en/travel/");
    }

    const urlMapWelshToEnglish = Object.fromEntries(
      Object.entries(urlMapEnglishToWelsh).map(([en, cy]) => [cy, en])
    );
    return urlMapWelshToEnglish[currentPath] || "/en/home";
  }
};

export default getLanguageChangeUrl;
