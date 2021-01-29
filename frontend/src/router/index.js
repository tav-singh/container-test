import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Posts from '../pages/Post'
import CreatePost from '../pages/CreatePost'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/:id',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/addentry/:userid',
      name: 'CreatePost',
      component: CreatePost
    },
  ]
})
