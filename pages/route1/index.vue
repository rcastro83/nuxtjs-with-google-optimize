<template>
  <section class="container">
    <div>
      <logo />
      <div v-if="shouldRunContentTest">
        <img
          v-if="Number($exp.$variantIndexes[0]) === 0"
          src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn"
        />
        <img
          v-if="Number($exp.$variantIndexes[0]) === 1"
          src="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
        />
        <img
          v-if="Number($exp.$variantIndexes[0]) === 2"
          src="https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg"
        />
      </div>
      <h1 class="title">
        googleoptimize (route 1)
      </h1>
      <h2 class="subtitle">
        testing google optimize ab testing
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    shouldRunContentTest() {
      return (
        this.$exp.isEligible({ route: this.$nuxt.$route }) &&
        this.$exp.name === 'image'
      )
    }
  },
  mounted() {
    console.log('$exp', this.$exp)
    console.log('path', this.$nuxt.$route.path)
    console.log(
      'isEligible',
      this.$exp.isEligible({ route: this.$nuxt.$route })
    )
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
