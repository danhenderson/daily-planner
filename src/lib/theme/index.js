// Colors
export const colors = {
  standard: {
    background: '#fff',
    foreground: '#555'
  },
  shade: {
    background: '#f6f6f6',
    foreground: '#555'
  },
  reverse: {
    background: '#555',
    foreground: '#eee'
  },
  danger: {
    background: '#f58f92',
    foreground: '#fff'
  },
  success: {
    background: '#96d800',
    foreground: '#fff'
  }
}

export const getColor = (color, style = 'default') => (
  colors[color][style]
)

// Fonts
export const fonts = {
  head: {
    family: 'Lato, Helvetica, Arial, sans-serif',
    weight: 600
  },
  body: {
    family: 'Lato, Helvetica, Arial, sans-serif',
    weight: 300
  }
}

export const getFontStyles = (font = 'body') => ({
  fontFamily: fonts[font].family,
  fontWeight: fonts[font].weight || 400,
  textTransform: fonts[font].trasform || 'none',
  lineHeight: 1.5
})

// Sizes
export const sizes = {
  xs: '0.64rem',
  sm: '0.8rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.563rem',
  xxl: '1.953rem',
  xxxl: '2.441rem'
}

export const getSize = (size = 'md') => (
  sizes[size]
)

// Spacing
export const rhythm = (size, unit = 'rem') => (
  `${size * 1.5}rem`
)

// Transitions
export const transitions = {
  ease: 'all ease-in-out 250ms'
}
