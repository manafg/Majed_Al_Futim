<template>
  <div class="slider">

    <div class="right-section">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="trip-title">
        {{ tripTitle }}
      </div>
      <div class="trip-desc">
        <div>{{ tabDesc }}</div>
        <div>{{ tabDescSec }}</div>
      </div>

      <Button title="SEE OUR LATEST OFFER"/>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sliderContent", "tripTitle", "tabDesc", "tabDescSec"],
  data() {
    return {
      show: 0,
      active: 0,
    };
  },

};
</script>

<style src="./styles.scss" lang="scss"/>
