<template>
  <div class="create-post-container">
    <h1>Add A User</h1>
    <div class="editor">
      <!-- <input v-model="title" placeholder="Title">
      <input v-model="author" placeholder="Author"> -->
      <input v-model="username" placeholder="username">
      <input type="password" v-model="password" placeholder="password">
      <input v-model="name" placeholder="name">
      <input v-model="email" placeholder="email">
      <br>
      <!-- <wysiwyg v-model="content"  /> -->
    </div>
    <button class="pure-material-button-contained" @click="post">Post</button>
    <!-- <span v-html="content"></span> -->
  </div>
</template>

<script>

export default {
  name: 'CreatePost',
  data () {
    return {
      title: null,
      author: null,
      content: null,
    }
  },
  methods: {
    post() {
      let locPosts = JSON.parse(localStorage.getItem('posts'))

      let newPost = {
        id: locPosts.length+1,
        // title: this.title,
        // author: this.author,
        // content: this.content,
        username: this.username,
        password: this.password,
        name: this.name,
        email: this.email
      }
      
      locPosts.push(newPost)
      
      const data = JSON.stringify(locPosts)
      window.localStorage.setItem('posts', data)
      this.$router.push({name: 'Home'})
    },
    navigate() {
      console.log("navigating")
      this.$router.push({name: 'Posts'})
    }
  }
}
</script>

<style scoped>
.create-post-container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.editor {
  margin: 80px 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
}
.editor > input {
  /* border: none; */
  margin: 5px;
}
</style>