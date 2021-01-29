<template>
  <div>
    <h1>Blog</h1>
    <div>
      <button class="pure-material-button-contained" @click="addEntry">Add entry</button>
    </div>
    <div class="posts-container">
      <div class="posts" v-for="post in posts" :key="post.title" @click="navigatePost(post.id)">
        <h4>{{ post.title }}</h4>
        <div class="post-content">
          <span v-html="post.content"></span>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
var json = require('../dummy.json');
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: [],
      userid: 123
    }
  },
  mounted() {
    // localStorage.clear()
    const locPosts = localStorage.getItem('posts');
    console.log(`local posts`, locPosts)
    if (locPosts) {
      this.posts = JSON.parse(window.localStorage.getItem('posts'))
    } else {
      this.posts = json
      this.saveFile()
    }
  },
  methods: {
    saveFile() {
      const data = JSON.stringify(this.posts)
      window.localStorage.setItem('posts', data);
      console.log(JSON.parse(window.localStorage.getItem('posts')))
    },
    navigate() {
      console.log("navigating")
      // this.$router.push({path: `/posts/`})
    },
    navigatePost(id) {
      console.log(id)
      this.$router.push({path: `/posts/${id}`})
    },
    addEntry() {
      this.$router.push({path: `/addentry/${this.userid}`})
    }
  }
}
</script>

<style scoped>
.posts-container {
  width: 100%;
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items: center;
}
.posts {
  width: 800px;
  margin: 10px 0 10px 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding: 14px 80px 18px 36px;
}
.post-content {
  /* padding: 20px; */
  max-width: 700px;
  margin: 10px auto;
}

.post-content > span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

