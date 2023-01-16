export const resolvePath = (path, locale) => {
  let pathToReturn

  // Try to find the path in paths
  paths.map(p => {
    if (Object.values(p).includes(path)) {
      pathToReturn = p[locale]
    }
  })

  // If the path is not found in paths, try to find substring in paths
  // (for example, yritys/x doesn't match any paths, but if x is stripped out it does. Then just simply find the path
  // and append x at the end)
  if (!pathToReturn) {
    paths.map(p => {
      Object.values(p).forEach(item => {
        if (path.includes(item)) {
          let tmpPath = path.split(item)
          pathToReturn = p[locale] + tmpPath[1]
        }
      })
    })
  }

  // if path is not found, return empty
  return pathToReturn || ""
}

export const resolveActive = (path, navHref) => {
  let active = false
  if (path.includes(navHref)) {
    active = true
  }
  return active
}

// Add any relevant paths here
const paths = [
  { fi: "etusivu/", en: "frontpage/", sv: "startsida/" },
  { fi: "tapahtumat/", en: "events/", sv: "evenemang/" },
  { fi: "harrastukset/", en: "hobbies/", sv: "hobbyer/" },
  { fi: "koulutukset/", en: "educations/", sv: "utbildningar/" },
]