<template>
  <div class="SinglePost">
    <div v-for="item in sPost">
      <h1 class="sPost_title">{{ item.title.rendered }} - <h5 class="sPost_date">{{ item.date }}</h5></h1>

      <hr>
      <span v-html="item.content.rendered"></span>
      <hr>
      {{ item.tags }}
      <hr>
      {{ item.author }}

    </div>
  </div>
</template>

<script>
    import axios from 'axios';

export default {
  name: 'SinglePost',
  data () {
    return {
      sPost: []
    }
  },
  beforeMount() {
        var id = this.$route.params.slug;
        axios.all([
          axios.get('http://localhost:8081/wp-json/wp/v2/posts',{
            params: {
              slug: this.$route.params.slug
            }
          })
        ]).then(([{ data: singlePost }]) => {
          this.sPost = singlePost;
        });
      }
}
</script>

<style lang="stylus">
@import '../styles/___aboutPage.styl'
</style>
