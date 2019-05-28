<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        googleoptimize
      </h1>
      <div v-if="$exp.name === 'newlogo'">
        active: {{ $exp.$activeVariants }} - variantIndexes:
        {{ $exp.$variantIndexes }}
        EXPERIMENT IS RUNNING!!!!!
      </div>
      <h2 class="subtitle">
        testing google optimize ab testing
      </h2>
    </div>

    <div class="container">
      <h2>It Works!</h2>
      <h3>Variants:</h3>
      <table>
        <tbody>
          <tr v-for="(variant, index) in $exp.variants">
            <td>{{ index + 1 }}</td>
            <td>{{ variant.weight }}</td>
          </tr>
        </tbody>
      </table>
      <h3>Active Variants:</h3>
      <table>
        <tbody>
          <tr v-for="(variant, index) in $exp.$activeVariants">
            <td>{{ index + 1 }}</td>
            <td>{{ variant.weight }}</td>
          </tr>
        </tbody>
      </table>

      <h3>Experiment Index:</h3>
      <div>
        {{ $exp.$experimentIndex }}
      </div>
      <h3>Experiment ID:</h3>
      <div>
        {{ $exp.experimentID }}
      </div>
      <h3>Max Age:</h3>
      <div>
        {{ $exp.maxAge }}
      </div>
      <h3>Name:</h3>
      <div>
        {{ $exp.name }}
      </div>
      <h3>Sections:</h3>
      <div>
        {{ $exp.sections }}
      </div>
      <div class="button-container">
        <button @click="wheelOfFortune">Click Here To Test Your Luck!</button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      variantHeadings: ['Row', 'Weight'],
      classNameHeadings: ['Row', 'Class Name']
    }
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
