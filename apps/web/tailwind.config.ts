import type { Config } from 'tailwindcss';

import { colors } from './styles/colors';

const tailwindConfig = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{md,mdx}',
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        'space-grotesk': ['Space Grotesk', 'monospace'],
        mono: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace'
        ]
      },
      borderRadius: {
        none: '0',
        xs: '7px',
        sm: '9px',
        md: '12px',
        DEFAULT: '14px',
        lg: '14px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '32px',
        squared: '33%',
        rounded: '50%',
        full: '9999px'
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        background: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#000000'
        },
        foreground: {
          light: '#11181C',
          DEFAULT: '#11181C',
          dark: '#ECEDEE'
        },
        border: {
          light: '#00000026',
          DEFAULT: '#00000026',
          dark: '#ffffff26'
        },
        neutral: {
          ...colors.neutral,
          DEFAULT: colors.neutral[500]
        },
        primary: {
          light: colors.blue[200],
          DEFAULT: colors.blue[500],
          dark: colors.blue[500]
        },
        secondary: {
          light: colors.purple[200],
          DEFAULT: colors.purple[500],
          dark: colors.purple[400]
        },
        success: {
          light: colors.green[200],
          DEFAULT: colors.green[500],
          dark: colors.green[500]
        },
        warning: {
          light: colors.yellow[400],
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[700]
        },
        error: {
          light: colors.red[200],
          DEFAULT: colors.red[500],
          dark: colors.red[500]
        },
        red: {
          ...colors.red,
          DEFAULT: colors.red[500]
        },
        yellow: {
          ...colors.yellow,
          DEFAULT: colors.yellow[500]
        },
        green: {
          ...colors.green,
          DEFAULT: colors.green[500]
        },
        blue: {
          ...colors.blue,
          DEFAULT: colors.blue[500]
        },
        purple: {
          ...colors.purple,
          DEFAULT: colors.purple[500]
        },
        pink: {
          ...colors.pink,
          DEFAULT: colors.pink[500]
        }
      },
      animation: {
        appear: 'appear 0.5s ease forwards'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;

export default tailwindConfig;
