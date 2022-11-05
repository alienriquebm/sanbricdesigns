const breakpoints = {
  tablet: '992px',
};

const theme = {
  colors: {
    primary900: '#070F65',
    primary800: '#0D177A',
    primary700: '#142297',
    primary600: '#1D30B5',
    primary500: '#2940D3',
    primary400: '#5A6FE4',
    primary300: '#7C90F1',
    primary200: '#A9B8FA',
    primary100: '#D4DBFC',
    lightGray: '#F0F0F0',
    gray100: '#F9F9FB',
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
