<template>
  <div>
    <ul class="projectList" v-if="showProjectList">
      <router-link
        v-for="project in projectData"
        v-bind:key="project.id"
        :to="{ name: 'projects', params: {id:project.id}}"
        tag="li"
      >{{project.name}}</router-link>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
</style>