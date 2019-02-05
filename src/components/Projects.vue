<template>
  <div class="projects">
    <div class="projectsintro">{{projectsintro}}</div>
    <div class="projectsinformation">
      <div class="title">
        <h2>{{activeProject.name}}</h2>
      </div>
      <div class="textArea">{{activeProject.content}}</div>
      <img class="picture" v-bind:src="activeProject.picture">
      <a class="projectLink" v-bind:href="activeProject.link">Visit page</a>
    </div>
  </div>
</template>

<script>
import projectData from "../../src/projectData";

export default {
  name: "Projects",
  //state
  data() {
    return {
      projectsintro:
        "Both during my studies and in my free time i have been involved with various projects. Most of my projects are still under development but below you have a oppertunity to take a look at some of my projects"
    };
  },
  props: ["id"],
  computed: {
    activeProject: function(self) {
      const { id } = self.$route.params;
      // console.log("HELLO?", self.$route.params.id, projectData.length);
      const project = projectData.find(function(project) {
        return Number(project.id) === Number(id);
      });
      console.log("found", project);
      return project;
    }
  }
};
</script>

<style scoped>
.projects {
  width: 90%;
  margin-top: 2%;
  margin-left: 5%;
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  grid-template-columns: 80% 20%;
}

.projectsintro {
  margin-top: 2%;
  margin-bottom: 2%;
  grid-column-start: 1;
}
.projectsinformation {
  margin-top: 2%;
  grid-column-start: 1;
}
.title {
  text-align: center;
  margin-bottom: 2%;
  grid-column-start: 1;
}
.picture {
  margin-top: 2%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  grid-column-start: 1;
}
.projectLink {
  display: block;
  margin: auto;
  width: 20%;
  margin-bottom: 3%;
  margin-top: 3%;
  text-align: center;
  grid-column-start: 1;
}
</style>
