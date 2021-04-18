<template>
  <section class="lower-section main-bottom">
    <div class="container container-sm container-md container-lg position-relative">
      <div class="d-flex align-center flex-wrap header-lower-section">
        <h2 class="title-2">Pick your trip</h2>
        <p class="sub-title">
          Our team put together some trips to you to discover, feel free to
          discover each of them.
        </p>
      </div>

      <Tab :tabs="trips" />
      <div class="social-icons at-bottom">
        <div class="share-it">share it</div>

        <a href="#" title="twitter" target="_blank">
          <img src="@/assets/images/twitter.svg" alt="twitter"/>
        </a>

        <a href="#" title="instagram" target="_blank">
          <img
              width="20px"
              src="@/assets/images/instagram.svg"
              alt="instagram"/>
        </a>

        <a href="#" target="_blank" title="facebook">
          <img src="@/assets/images/facebook.svg" alt="facebook"/>
        </a>
      </div>
    </div>
  </section>
</template>
<script>

import trips from '@/assets/trips.json';

export default {
  data: () => ({
    trips
  }),
};
</script>

<style lang="scss" src="./styles.scss" />
