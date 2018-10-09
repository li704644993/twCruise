<template>
    <div class="left-menu-container">
        <ul class="left-nav-menu">
          <li v-for="menu in menuOpts" :key="menu.id" v-bind:class="{'active': menu.select}" @click="selectLeftMenu(menu.title)">
            <span v-bind:class="menu.icon"></span>
            <span class="left-menu-text">
              {{menu.name}}
            </span>
          </li>
        </ul>

        <div class="history-log-container">
          <div class="history-log-title">History</div>
          <ul class="history-log-ul">
            <li class="">
              <span>·</span>
              <div>
                bjstdmngbgr08/Acceptance_test
              </div>
            </li>
            <li class="">
              <span>·</span>
              <div>
                bjstdmngbgr08/Acceptance_test
              </div>
            </li>
            <li class="">
              <span>·</span>
              <div>
                bjstdmngbgr08/Acceptance_test
              </div>
            </li>
            <li class="">
              <span>·</span>
              <div>
                bjstdmngbgr08/Acceptance_test
              </div>
            </li>
            <li class="">
              <span>·</span>
              <div>
                bjstdmngbgr08/Acceptance_test
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
// import { mapGetters, mapState } from 'vuex'
export default {
  name: 'left-menu',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  // data() {
  //   return {
  //     menuOpts: []
  //   }
  // },
  created: function () {
    this.highlightMenu(this.$router.currentRoute.name)
    // for (let i = 0; i < this.menuOpts.length; i++) {
    //   if (this.menuOpts[i].title === this.$router.currentRoute.name) {
    //     this.menuOpts[i].select = true
    //   } else {
    //     this.menuOpts[i].select = false
    //   }
    // }
  },
  methods: {
    highlightMenu (routerName) {
      for (let i = 0; i < this.menuOpts.length; i++) {
        if (this.menuOpts[i].title === routerName) {
          this.menuOpts[i].select = true
        } else {
          this.menuOpts[i].select = false
        }
      }
    },
    // 选择菜单跳转
    selectLeftMenu (router) {
      // 高亮菜单
      this.highlightMenu(router)
      this.$router.push({ path: '/' + router })
    }
  },
  computed: {
    menuOpts () {
      return this.$store.state.user.menuOpts
    }
  }
}
</script>

<style type="text/css" lang="scss">
  @import '@/components/leftMenu/leftMenu.scss';
</style>
