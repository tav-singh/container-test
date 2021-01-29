<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Register',
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