<template>
  <div class="header">
    <div class="headerText">
      <h1>{{maker}}</h1>
      <h4>{{welcome}}</h4>
    </div>
    <img class="pic" src="../assets/CV-bild.jpg">
    <div class="buttons">
      <router-link class="routerButton" to="/">Home</router-link>
      <router-link class="routerButton" to="/About">About</router-link>
      <div class="routerButton" v-on:click="showProjectList = !showProjectList">Projects
        <ul class="projectList" v-if="showProjectList">
          <router-link
            v-for="project in projectData"
            v-bind:key="project.id"
            :to="{ name: 'projects', params: {id:project.id}}"
            tag="li"
          >{{project.name}}</router-link>
        </ul>
      </div>

      <!-- <router-link class="button" to="/Projects">Projects</router-link> -->
    </div>
  </div>
</template>

<script>
import projectData from "../../src/projectData";

export default {
  name: "Header",
  data() {
    return {
      maker: "Julia Sjögren",
      welcome: "Welcome to my website",
      showProjectList: false,
      projectData
    };
  },
  methods: {
    projectClick: function(project) {
      console.log(project);
    }
  }
};
</script>

<style scoped>
.header {
  background: #0086b3;
  width: 90%;
  height: 100%;
  margin-left: 5%;
  text-align: center;
  /* border: palevioletred; */
  display: grid;
  grid-template-rows: 60% 40%;
  grid-template-columns: 80% 20%;
}
h1 {
  margin: 0;
}
h4 {
  margin: 0;
}
.pic {
  border: black 3px solid;
  width: 80%;
  margin-top: 5%;
  z-index: 1;
  grid-column-start: 2;
}
.buttons {
  background: grey;
  display: grid;
  padding: 10px;
  grid-row-start: 2;
  grid-template-columns: 33% 33% 33%;
  justify-content: space-evenly;
}

.routerButton {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  grid-row-start: 1;
  color: black;
  border-left: 2px transparent solid;
  border-right: 2px transparent solid;
}

.routerButton:hover {
  border-left: 2px black solid;
  border-right: 2px black solid;
}
.projectList {
  cursor: initial;
  list-style: none;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  background-color: grey;
}

.projectList > li {
  cursor: pointer;
  margin: 0.25rem 0;
  padding: 0.5rem 1rem;
  border-top: 1px solid black;
}
</style>

