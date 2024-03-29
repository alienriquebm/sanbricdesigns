const breakpoints = {
  tablet: '992px',
};

const theme = {
  colors: {
    primary900: '#121506',
    primary800: '#374011',
    primary700: '#65751F',
    primary600: '#8A9F2B',
    primary500: '#B8D439',
    primary400: '#CADF6B',
    primary300: '#D8E792',
    primary200: '#EAF2C4',
    primary100: '#F8FBEB',
    lightGray: '#F0F0F0',
    gray50: '#f8f9fa',
    gray100: '#F9F9FB',
    gray200: '#f2f2f2',
    gray400: '#82868C',
  },
  fontSize: {
    size10: '10px',
    size12: '12px',
    size14: '14px',
    size16: '16px',
    size18: '18px',
    size20: '20px',
    size22: '22px',
    size24: '24px',
    size28: '28px',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  lineHeights: ['16px'],
  breakpoints,
  device: {
    tablet: `(min-width: ${breakpoints.tablet})`,
  },
  transition: {
    default: 'all ease 0.2s',
  },
  shadows: {
    default: '0px 4px 23px rgba(0, 0, 0, 0.12)',
  },
};

export default theme;
