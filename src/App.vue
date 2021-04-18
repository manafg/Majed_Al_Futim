<template>
  <div id="app">
    <Header @OpenSidebar="OpenSidebar"/>
    <Body/>
    <Nav @OpenSidebar="OpenSidebar" :sidebarOpened="isSidebarOpened">
      <SideBar/>
      <ul class="sidebar-panel-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Nav>
  </div>
</template>
<script>

import {SideBar, Header, Body, Nav} from "@/components";

export default {
  name: "App",

  data: () => ({
    isSidebarOpened: false,
  }),

  components: {Header, Body, SideBar, Nav},

  methods: {
    OpenSidebar() {
      this.isSidebarOpened = !this.isSidebarOpened;
    },
  },
};
</script>

<style lang="scss" src="./assets/scss/shared.scss"/>
