<template>
  <div class="app">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
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
}

.app {
  color: #2c3e50;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

body {
  width: 100%;
  height: 100%;
  background-color: rgb(205, 206, 201);
}
.content {
  /* overflow: hidden; */
  padding: 0 8%;
  position: relative;
  justify-self: start;
  width: 85%;
}
</style>
