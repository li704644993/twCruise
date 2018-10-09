<template>
  <div class="main">
    <tw-header></tw-header>
    <div class="flex main-container">
      <left-menu></left-menu>
      <div class="content-container">
        <transition  name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import twHeader from '@/components/header/header'
import leftMenu from '@/components/leftMenu/leftMenu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  created () {
    this.$router.push({ path: '/dashboard' })
  },

  components: {
    twHeader,
    leftMenu
  }
}
</script>
