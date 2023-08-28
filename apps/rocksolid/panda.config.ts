import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  watch: true,
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
    pinkTheme: '[data-theme=pink] &',
    blueTheme: '[data-theme=blue] &',
  },
  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          grayPalette: {
            25: { value: '{colors.slate.25}' },
            50: { value: '{colors.slate.50}' },
            100: { value: '{colors.slate.100}' },
            200: { value: '{colors.slate.200}' },
            300: { value: '{colors.slate.300}' },
            400: { value: '{colors.slate.400}' },
            500: { value: '{colors.slate.500}' },
            600: { value: '{colors.slate.600}' },
            700: { value: '{colors.slate.700}' },
            800: { value: '{colors.slate.800}' },
            900: { value: '{colors.slate.900}' },
            950: { value: '{colors.slate.950}' },
          },
        },
      },
      semanticTokens: {
        colors: {
          accent: {
            default: { value: { base: '{colors.fuchsia.500}', _dark: '{colors.fuchsia.500}' } },
            emphasized: { value: { base: '{colors.fuchsia.600}', _dark: '{colors.fuchsia.400}' } },
            fg: { value: { base: '{colors.white}', _dark: '{colors.gray-palette.950}' } },
          },
          border: {
            accent: { value: { base: '{colors.fuchsia.500}', _dark: '{colors.fuchsia.500}' } },
          },
        },
        radii: {
          l1: { value: '{radii.2xs}' },
          l2: { value: '{radii.xs}' },
          l3: { value: '{radii.sm}' },
        },
      },
    },
  },
  jsxFramework: 'solid',

  // The output directory for your css system
  outdir: './src/styled-system',
});
