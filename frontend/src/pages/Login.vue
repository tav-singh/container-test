<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  methods: {
    navigate() {
      console.log("navigating")
      this.$router.push({name: 'Posts'})
    }
  }
}
</script>