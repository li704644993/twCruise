<template>
  <div class="">
    <input type="text" v-model="loginForm.username">
    <input type="password" v-model="loginForm.password">
    <button @click="loginIn">登录</button>
  </div>
</template>

<script>
export default {
  name: 'help',
  data() {
    return {
      loginForm: {
        username: 'wangmingdong',
        password: '123456'
      }
    }
  },

  methods: {
    loginIn () {
      console.log('login')
      this.$store.dispatch('Login', this.loginForm).then((data) => {
        this.$router.push({ path: '/' })
      }).catch(() => {
        this.loading = false
      })
    }
  },

  components: {
  }
}
</script>
