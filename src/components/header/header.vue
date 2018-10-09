<template>
    <div class="tw-header">
        <div class="header-left-container"></div>
        <div class="header-center-container">
          <img class="header-logo-img" src="@/assets/logo/logo.svg"/>
        </div>
        <div class="header-right-container">
          <div class="header-user-container">
            <img class="header-user-img" src="@/assets/common/user.jpeg"/>
          </div>
          <!--
          <span class="header-logo-dropdown icon-angle-down"></span>
          -->
          <div class="header-logo-dropdown-list"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'tw-header',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>
<style type="text/css" lang="scss">
  @import '@/components/header/header.scss';
</style>
