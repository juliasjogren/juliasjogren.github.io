<template>
  <footer class="footer">
    <div class="conLinks">
      <span class="link">{{msg}}</span>
      <a class="link" href="https://github.com/juliasjogren">{{github}}</a>
      <a
        class="link"
        href="https://www.codingame.com/profile/9123357e2d10d9306b15556dc843fbb26109561"
      >{{codingame}}</a>
      <a class="link" href="https://www.linkedin.com/in/julia-sj%C3%B6gren-b4a379148/">{{linkedin}}</a>
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

<style>
.footer {
  background: #0086b3;
  text-align: center;
  bottom: 0;
  position: fixed;
  height: 30px;
  width: 100%;
  color: white;
}
.conLinks {
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  color: white;
  width: 20%;
  text-decoration: none;
}
.link:hover:not(:first-child) {
  text-decoration: underline;
  color: grey;
}
</style>
