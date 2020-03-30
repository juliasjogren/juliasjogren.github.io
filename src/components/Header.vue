<template>
  <div class="header">
    <div class="headerText">
      <h1>{{maker}}</h1>
      <h4>{{welcome}}</h4>
    </div>
    <div class="buttons">
      <router-link class="routerButton" to="/">Home</router-link>
      <router-link class="routerButton" to="/About">About</router-link>
      <div class="routerButton" @mouseover="showProjectList = true">
        Projects
        <ul
          class="projectList"
          v-if="showProjectList"
          @mouseleave="showProjectList = !showProjectList"
        >
          <router-link
            v-for="project in projectData"
            v-bind:key="project.id"
            :to="{ name: 'projects', params: {id:project.id}}"
            tag="li"
            class="projectLink"
          >{{project.name}}</router-link>
        </ul>
      </div>
    </div>
    <img class="picture" src="../assets/CV-bild.jpg" />
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
  width: 100%;
  max-height: 90px;
  text-align: center;
  display: grid;
  justify-content: center;
  grid-template-rows: 70% 30%;
  grid-template-columns: 85% 15%;
}

.headerText {
  grid-row-start: 1;
  font-family: serif;
  color: rgb(228, 224, 224);
}

.picture {
  border: black 3px solid;
  width: 100%;
  justify-self: end;
  z-index: 1;
  grid-row-start: 1;
  grid-column-start: 2;
}
.buttons {
  grid-row-start: 2;
  background-color: rgb(146, 142, 142);
  display: flex;
}

.routerButton {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: serif;
  cursor: pointer;
  text-decoration: none;
  color: rgb(236, 232, 232);
}

.routerButton:hover {
  background-color: rgb(158, 151, 151);
  font-size: 17px;
}
.projectList {
  cursor: initial;
  list-style: none;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgb(158, 151, 151);
  display: flex;
  flex-direction: column;
  padding: 8px 4px;
}

.projectLink {
  cursor: pointer;
  padding: 2%;
  background-color: rgb(158, 151, 151);
  border: 5px double grey;
}
.projectLink:not(:last-child) {
  margin-bottom: 8px;
}

.projectLink:hover {
  background-color: #0086b3;
  /* border: 4px double grey; */
}
</style>

