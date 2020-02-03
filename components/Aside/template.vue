<template>
  <aside
    class="c-aside"
    :class="[entriesSidebarStatus ? 'active' : '']"
  >
    <div class="aside__wrapper-content">
      <div class="wrapper-content__close-button">
        <button
          type="button"
          class="close"
          aria-label="Close"
          @click="toggleSidebar"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="wrapper-content__list-menus">
        <ul class="list-menus">
          <li
            v-for="(itemMenu, indexMenu) in entriesHeaderMenus"
            :key="indexMenu"
          >
            <a :href="itemMenu.url">
              {{ itemMenu.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
