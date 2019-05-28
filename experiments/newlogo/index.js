export default {
  name: 'newlogo',

  // Google optimize experiment id
  experimentID: '-xC_BXptT66KNItn8MuoEg',

  isEligible: ({ route }) => route.path === '/',

  // Implemented variants and their weights
  variants: [
    { weight: 1 }, // <-- Control
    { weight: 1 }, // <-- Variation 1
    { weight: 1 } // <-- Variation 2
  ]
}
