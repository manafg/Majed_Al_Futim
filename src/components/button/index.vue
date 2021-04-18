<template>
  <button class="blob-btn" v-bind="resetPros" v-on="$listeners">
    {{ title }}
    <span class="blob-btn__inner">
      <span class="blob-btn__blobs">
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    resetPros() {
      return {...this.$attrs}
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" />
