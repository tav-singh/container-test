<template>
  <div>
    <h1>{{this.post.title}}</h1>
    <p>{{this.post.author}}</p>
    <div class="content">
      <div>
        <p>{{this.post.content}}</p>
      </div>
    </div>
    <button @click="navigate">home  </button>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      post: {}
    }
  },
  mounted() {
    let json = JSON.parse(localStorage.getItem('posts'))
    this.post =  json.find((i)=> i.id == this.$route.params.id)
    console.log(this.post)
  },
  methods: {
    navigate() {
      console.log("navigating")
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.content > div {
  max-width: 70%;
}
</style>