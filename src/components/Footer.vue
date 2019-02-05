<template>
  <footer class="footer">
    <div class="conLinks">
      <span class="contact">{{msg}}</span>
      <a class="link1" href="https://github.com/juliasjogren">{{github}}</a>
      <a
        class="link2"
        href="https://www.codingame.com/profile/9123357e2d10d9306b15556dc843fbb26109561"
      >{{codingame}}</a>
      <a class="link3" href="https://www.linkedin.com/in/julia-sj%C3%B6gren-b4a379148/">{{linkedin}}</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Contact:",
      github: "GitHub",
      codingame: "CodinGame",
      linkedin: "LinkedIn"
    };
  }
};
</script>

<style scope>
.footer {
  background: #0086b3;
  text-align: center;
  /* margin-left: 5%; */
  bottom: 0;
  position: fixed;
  height: 30px;
  /* height: 100%; */
  width: 90%;
}
.conLinks {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: darkgrey;
}
</style>
