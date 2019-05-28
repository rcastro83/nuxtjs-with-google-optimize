export default {
  name: 'image',

  // Google optimize experiment id
  experimentID: 'wXIqINftRTGdpeNqY1LIKw',

  isEligible: ({ route }) => route.path === '/route1/',

  // Implemented variants and their weights
  variants: [
    { weight: 1 }, // <-- Control
    { weight: 1 }, // <-- Variation 1
    { weight: 2 } // <-- Variation 2
  ]
}
