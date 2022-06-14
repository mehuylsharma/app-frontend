const colors = {
  primary: '#FBD062',
  primaryHover: '#FAC73F',
  primaryContrast: '#fff',
  primaryVisited: '#FAC73F',

  accent: '#27272e',
  accentContrast: '#fff',
  accentContrastSecondary: 'rgba(255, 255, 255, 0.6)',
  accentDarken: 'rgba(0, 0, 0, .2)',
  accentControlBg: 'rgba(0, 0, 0, .1)',
  accentBorder: 'rgba(255, 255, 255, 0.2)',
  accentBorderHover: 'rgba(255, 255, 255, 0.3)',

  error: '#e14d4d',
  errorHover: '#d44c4d',
  errorContrast: '#fff',

  warning: '#ffac2f',
  warningHover: '#f0a431',
  warningContrast: '#fff',

  success: '#53BA95',
  successHover: '#5dae5e',
  successContrast: '#fff',
} as const

export default { colors }