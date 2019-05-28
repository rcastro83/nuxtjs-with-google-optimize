export default {
  name: 'image',

  // Google optimize experiment id
  experimentID: '1dZJNHLTQmyj5uLZI5kf0A',

  isEligible: ({ route }) => route.path === '/route1/',

  // Implemented variants and their weights
  variants: [
    { weight: 1 }, // <-- Control
    { weight: 1 } // <-- Variation 1
  ]
}
