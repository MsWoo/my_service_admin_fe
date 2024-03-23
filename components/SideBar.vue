<script setup>
const props = defineProps({
  menuData: {
    type: Array,
    default: () => [],
    require: false
  }
})
const route = useRoute();

const btnSubMenu = e => {
  const targetBtn = e.currentTarget;
  const btnExpanded = targetBtn.getAttribute('aria-expanded');
  const isBtnExpanded = /true/i.test(btnExpanded);
  targetBtn.setAttribute('aria-expanded', !isBtnExpanded);
};

</script>

<template>
  <div class="h-screen w-72 border-r-2">
    <ul>
      <li
          v-for="menu in props.menuData"
          :key="menu.idx"
          :class="{
            on: menu?.children
              ? menu.children.some(
                  subMenu => subMenu.link === route.fullPath
                )
              : menu.link === route.fullPath
          }"
          class="hover:text-gray-800 hover:bg-gray-100 flex flex-col items-start p-4 transition-colors duration-200 text-gray-600 border-b-2"
      >
        <template v-if="menu.children">
          <button
              type="button"
              class="btn_menu"
              :aria-expanded="
                menu.children.some(
                  subMenu => subMenu.link === route.fullPath
                )
              "
              @click="btnSubMenu"
          >
            {{ menu.title }}
          </button>
          <ul class="list_submenu w-full">
            <li
                v-for="subMenu in menu.children"
                :key="subMenu.idx"
                :class="{
                  on: subMenu.link === route.fullPath
                }"
                class="text-xs pt-2 hover:underline flex flex-col items-start transition-colors duration-200 text-gray-600"
            >
              <a
                  :href="subMenu.link"
                  class="link_submenu"
              >{{ subMenu.title }}
              </a>
            </li>
          </ul>
        </template>
        <a
            v-else
            :href="menu.link"
            class="link_menu"
        >
          {{ menu.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.btn_menu {
  &[aria-expanded='true'] {
    & + .list_submenu {
      display: block;

      .link_submenu {
        display: block;
        position: relative;
        font-size: 12px;
        line-height: 20px;
      }


      .on .link_submenu {
        text-decoration: underline;
      }

    }
  }
}

.on .btn_menu {
  font-weight: 700;
}

.btn_menu:hover,
.link_menu:hover {
  text-decoration: underline;
}

.on .link_menu {
  font-weight: 700;
}

.list_submenu {
  display: none;
}
</style>