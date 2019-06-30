<template>
  <div class="container">
    <div class='PostList'>

    <div v-for="post in posts">
    <router-link :to="{path: '/' + post.slug, params: { slug: post.slug }}">
        <span v-html="post.title.rendered"></span>
    </router-link>

        Post ID: {{ post.id }} - Date Published: {{ post.date}}
</div>

    </div>
  </div>
</template>

<script>
    import axios from 'axios';

export default {
  name: 'PostList',
  data () {
    return {
      posts: []
    }
  },
  beforeMount() {
        axios.all([
          axios.get('http://localhost:8081/wp-json/wp/v2/posts')
        ]).then(([{ data: meData }]) => {
          this.posts = meData;
        });
      }
}
</script>

<style lang="stylus">
@import '../styles/___homePage.styl'
</style>
