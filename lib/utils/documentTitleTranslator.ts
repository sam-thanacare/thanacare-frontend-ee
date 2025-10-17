/**
 * Document Title Translator Utility
 *
 * This utility provides translation functions for document titles from backend
 * to user-friendly display names. This is purely cosmetic and does not modify
 * backend data - all API calls continue to use the original backend titles.
 */

/**
 * Translates document titles from backend format to display format
 * @param title - The original document title from the backend
 * @returns The translated title for display, or original title if no translation exists
 */
export function translateDocumentTitle(title: string): string {
  const titleMappings: Record<string, string> = {
    'Dementia Values & Priorities Tool': 'Empowered Endings Tool',
  };

  return titleMappings[title] || title;
}

/**
 * Translates document titles in the reverse direction (display to backend)
 * This is useful if we need to map display names back to backend format
 * @param displayTitle - The display title
 * @returns The original backend title, or display title if no reverse mapping exists
 */
export function translateDisplayTitleToBackend(displayTitle: string): string {
  const reverseMappings: Record<string, string> = {
    'Empowered Endings Tool': 'Dementia Values & Priorities Tool',
  };

  return reverseMappings[displayTitle] || displayTitle;
}
