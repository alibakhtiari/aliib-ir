/**
 * Generates a language-specific URL
 * @param {string} path - The path without language prefix
 * @param {string} language - The language code (en, fa, ar)
 * @returns {string} - The language-specific URL
 */
export const getLanguageUrl = (path, language) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.substring(1) : path

  // For default language (English), we might not need a prefix
  if (language === "en") {
    return `/${cleanPath}`
  }

  // For other languages, add the language code as prefix
  return `/${language}/${cleanPath}`
}

/**
 * Updates the browser URL when language changes without page reload
 * @param {string} language - The language code (en, fa, ar)
 */
export const updateBrowserUrlForLanguage = (language) => {
  // Get current path without language prefix
  const currentPath = window.location.pathname
  const pathWithoutLang = currentPath.replace(/^\/(en|fa|ar)\//, "/")

  // Generate new URL with language prefix
  const newUrl = getLanguageUrl(pathWithoutLang, language)

  // Update browser URL without reloading the page
  window.history.pushState({}, "", newUrl)
}
