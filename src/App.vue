
<template>
  <div class="app">
    <Header/>
    <main class="content">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* overflow: scroll; */
}

.app {
  /* height: 100%; */
  overflow: visible;
  color: #2c3e50;
  display: grid;
  /* grid-template-rows: 20% 75% 5%; */
  grid-template-rows: 8rem 2fr 2rem;
  position: relative;
}

body {
  /* overflow: hidden; */
  position: absolute;
  background-color: rgb(205, 206, 201);
  width: 90%;
  /* height: 100%; */
  margin-left: 5%;
}

.content {
  overflow: auto;
}
</style>
