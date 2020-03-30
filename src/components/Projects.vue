<template>
  <div class="projects">
    <div class="projectsinformation">
      <div class="title">
        <h2>{{activeProject.name}}</h2>
      </div>
      <div class="textArea">{{activeProject.content}}</div>
      <div class="picture-wrap">
        <img class="picture" v-bind:src="activeProject.picture" />
      </div>
      <a class="projectLink" v-bind:href="activeProject.link">{{activeProject.link}}</a>
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
      projectsintro: ""
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
  height: 100%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.projectsinformation {
  margin-top: 2%;
}
.title {
  text-align: center;
  margin-bottom: 2%;
}

.picture-wrap {
  height: 100%;
}

.picture {
  margin-top: 2%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  border: 10px solid rgb(44, 44, 44);
  border-radius: 17%;
}
.projectLink {
  display: block;
  margin: auto;
  margin-bottom: 3%;
  margin-top: 3%;
  text-align: center;
  color: black;
}

.projectLink:hover {
  color: #0086b3;
}
</style>
