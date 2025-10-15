/**
 * Empowered Endings Brand Color Configuration
 * Based on the official brand color palette
 */

export const brandColors = {
  // Primary Colors
  empoweredTeal: '#00A9B5',
  empoweredGold: '#F5A623',
  pureWhite: '#FFFFFF',

  // Secondary Colors
  darkNavy: '#1A1A1A',
  lightTeal: '#4DC4CF',
  slate: '#6B7280',
  stone: '#9CA3AF',
} as const;

export const colorPalette = {
  // Primary brand colors
  primary: {
    teal: brandColors.empoweredTeal,
    gold: brandColors.empoweredGold,
    white: brandColors.pureWhite,
  },

  // Secondary brand colors
  secondary: {
    darkNavy: brandColors.darkNavy,
    lightTeal: brandColors.lightTeal,
    slate: brandColors.slate,
    stone: brandColors.stone,
  },

  // Semantic color mappings
  semantic: {
    // Light theme
    light: {
      background: brandColors.pureWhite,
      foreground: brandColors.darkNavy,
      primary: brandColors.empoweredTeal,
      secondary: brandColors.stone,
      accent: brandColors.empoweredGold,
      muted: '#F8F9FA',
      border: brandColors.stone,
      card: brandColors.pureWhite,
    },

    // Dark theme
    dark: {
      background: brandColors.darkNavy,
      foreground: brandColors.pureWhite,
      primary: brandColors.empoweredGold,
      secondary: brandColors.lightTeal,
      accent: brandColors.empoweredTeal,
      muted: '#374151',
      border: brandColors.lightTeal,
      card: '#2D3748',
    },
  },
} as const;

// Tailwind CSS color classes
export const tailwindColors = {
  'empowered-teal': brandColors.empoweredTeal,
  'empowered-gold': brandColors.empoweredGold,
  'pure-white': brandColors.pureWhite,
  'dark-navy': brandColors.darkNavy,
  'light-teal': brandColors.lightTeal,
  slate: brandColors.slate,
  stone: brandColors.stone,
} as const;

// RGB values for programmatic use
export const colorRGB = {
  empoweredTeal: { r: 0, g: 169, b: 181 },
  empoweredGold: { r: 245, g: 166, b: 35 },
  pureWhite: { r: 255, g: 255, b: 255 },
  darkNavy: { r: 26, g: 26, b: 26 },
  lightTeal: { r: 77, g: 196, b: 207 },
  slate: { r: 107, g: 114, b: 128 },
  stone: { r: 156, g: 163, b: 175 },
} as const;

// CMYK values for print/design use
export const colorCMYK = {
  empoweredTeal: { c: 100, m: 0, y: 0, k: 29 },
  empoweredGold: { c: 0, m: 32, y: 86, k: 4 },
  pureWhite: { c: 0, m: 0, y: 0, k: 0 },
  darkNavy: { c: 0, m: 0, y: 0, k: 90 },
  lightTeal: { c: 63, m: 0, y: 0, k: 19 },
  slate: { c: 0, m: 0, y: 0, k: 55 },
  stone: { c: 0, m: 0, y: 0, k: 32 },
} as const;

export type BrandColor = keyof typeof brandColors;
export type ColorPalette = typeof colorPalette;
export type TailwindColor = keyof typeof tailwindColors;
