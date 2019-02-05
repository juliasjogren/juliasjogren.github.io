<template>
  <div class="home">
    <div class="introText">{{ msg }}</div>
    <div class="news">{{news}}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg:
        "I have made this website using html, css, JavaScript Vue.js, as a way to showcase some of my projects and to share information about me. Please visit the different tabs and learn more about me and explore some of my projects. I am passionate about programming and eager to learn more and develop my cosing skills. I will keep this page up to date with my latest projects ",
      news: "News:"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 75%;
  display: grid;
  margin-top: 2%;
  grid-template-rows: 7rem 7rem;
}
.introText {
  line-height: 22px;
  margin-left: 10%;
  margin-bottom: 3%;
}
.news {
  width: 80%;
  margin-left: 12%;
  grid-row-start: 2;
  padding: 1%;
  border: 2px rgb(104, 102, 102) solid;
}
</style>
