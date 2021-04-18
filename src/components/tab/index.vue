<template>
  <div>
    <div class="tabs">
      <ul class="d-flex">
        <li
            v-for="(tab, index) in tabs"
            v-bind:key="tab.id"
            :class="{ 'is-active': show === index }"
        >
          <a @click.prevent="show = index">{{ tab.tripTitle }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <transition-group
          name="fade-up"
          target="div"
          appear
          @click.native="
          handleOnNavigate($event);
        "
      >
        <div
            v-for="(tab, indexTab) in tabs"
            v-if="show === indexTab"
            :key="`slider-component-${indexTab}`"
        >
          <SideBar :sliderContent="tab.slider" :tabDescSec="tab.tripDescription" :tripTitle="tab.tripTitle"/>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import {SideBar} from "@/components";

export default {
  name: "Tab",

  props: {
    tabs: {}
  },

  components: {
    SideBar,
  },

  data() {
    return {
      show: 0,
    };
  },

  methods: {
    /**
     * Navigate Method
     * @param e
     * @return {void}
     */
    handleOnNavigate(e) {
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    }
  }
};
</script>
