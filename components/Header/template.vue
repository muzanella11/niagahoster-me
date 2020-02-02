<template>
  <header class="c-header">
    <!-- Begin mini header -->
    <div class="header__mini-header">
      <div class="container-sm">
        <div class="row">
          <div class="col-6" />
          <div class="col-6 mini-header__right-menus">
            <ul class="right-menus">
              <li>
                <a href="javascript:;">
                  <i class="icon"><account-icon /></i> Member area
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="icon"><forum-icon /></i> Live chat
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="icon"><phone-icon /></i> Customer service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End mini header -->

    <!-- Begin main header -->
    <div class="header__main-header">
      <div class="container-sm">
        <div class="row">
          <div class="col-2">
            <a href="javascript:;">
              <img src="" alt="Brand Logo" class="brand-logo">
            </a>
          </div>

          <div class="col-10 main-header__right-menus">
            <ul class="right-menus">
              <li
                v-for="(itemMenu, indexMenu) in listMenu"
                :key="indexMenu"
              >
                <a :href="itemMenu.url">
                  {{ itemMenu.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End main header -->
  </header>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
