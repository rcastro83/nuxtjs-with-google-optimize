<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        googleoptimize
      </h1>
      <div v-if="$exp.name === 'newlogo'">
        <control-content v-if="Number($exp.$variantIndexes[0]) === 0" />
        <variation1-content v-if="Number($exp.$variantIndexes[0]) === 1" />
        <variation2-content v-if="Number($exp.$variantIndexes[0]) === 2" />
      </div>
      <h2 class="subtitle">
        testing google optimize ab testing
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ControlContent from '~/components/ControlContent.vue'
import Variation1Content from '~/components/Variation1Content.vue'
import Variation2Content from '~/components/Variation2Content.vue'

export default {
  components: {
    Logo,
    ControlContent,
    Variation1Content,
    Variation2Content
  },
  data() {
    return {
      variantHeadings: ['Row', 'Weight'],
      classNameHeadings: ['Row', 'Class Name']
    }
  },
  mounted() {
    console.log('$exp', this.$exp)
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
