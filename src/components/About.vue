<template>
  <div class="about">
    <div class="textArea">{{intro}}</div>
    <h3 class="headline">Education</h3>
    <div class="textArea">{{education}}</div>
    <h3 class="headline">Work experience</h3>
    <div class="textArea">{{workexp}}</div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      intro:
        "I begun learning programming while I studied a bachelor in informatics at Lunds university. During my education I learned Java, C#, SQL, HTML, CSS and JavaScript. Programming is something I have gotten really intrested in and on my free time I try to learn as much as I can. the most mention worthy project im involved in on my freetime is PJ's Studio were me and a friend develop various projects and games. Since games is a interest of mine I have been learning programming by making games.",
      education:
        "In high school I studied social sience and specialized in economics. At Lunds University I studied an bachelor in informatics although I have a few points left before I recieve my degree. During my studies I learned the programming languages Java, C#, SQL and Javascript. I learned about modelling by using UML and about database notations like Crowfoot and Chen. The informatics programme had a wide focus group and from a system perspective I learned about systems design, economics and organizations. I learned about the value of the system in an oganization and how to make and use to promote different parts of an ogranization.",
      workexp:
        "After High school and before I started my studies at Lunds University I worked in a second-hand bookshop as a saleswoman and in 2014 I had a summer job at Qlear AB where I worked with input and structuring data in their CRM tool Sugar. in my last year of studies I worked as an lab assistent where I helped the prevous grades with their programming assignments."
    };
  }
};
</script>

<style scoped>
.about {
  margin-left: 5%;
  margin-top: 2%;
  width: 70%;
}
.headline {
  margin-left: 10%;
  margin-bottom: 5px;
  height: 5%;
}
.textArea {
  line-height: 22px;
  margin-left: 10%;
  margin-bottom: 3%;
}
</style>