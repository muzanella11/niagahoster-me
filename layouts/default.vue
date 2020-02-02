<template>
  <main
    class="main-layout"
    :class="[entriesSidebarStatus ? 'active' : '']"
  >
    <!-- Begin Header -->
    <niagahoster-header />
    <!-- End Header -->

    <!-- Begin Aside -->
    <niagahoster-aside />
    <!-- End Aside -->

    <!-- Begin Content -->
    <nuxt />
    <!-- End Content -->

    <!-- Begin Footer -->
    <niagahoster-footer />
    <!-- End Footer -->

    <div
      class="overlay"
      :class="[entriesSidebarStatus ? 'active' : '']"
    />
  </main>
</template>

<style lang="scss">
.main-layout {
  position: relative;
  right: 0;
  transition: all 0.5s ease-in-out;

  &.active {
    right: 200px;
  }
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;

  &.active {
    visibility: visible;
  }
}
</style>

<script>
import NiagahosterHeader from '~/components/Header/template'
import NiagahosterAside from '~/components/Aside/template'
import NiagahosterFooter from '~/components/Footer/template'
import MixinsComponentSettings from '~/mixins/componentSettings'

export default {
  components: {
    NiagahosterHeader,
    NiagahosterAside,
    NiagahosterFooter
  },

  mixins: [
    MixinsComponentSettings
  ]
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
