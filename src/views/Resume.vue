<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<template>
  <div class="resume">
    <h1>MORE ABOUT ME.</h1>
    <br /><br /><br /><br />
    <h2>Work Experience</h2>
    <p>
      Lyvo, Software Engineering Fellow <br />
      June 2020 - Present San Francisco, CA <br />
      Learning front-end, back-end, mobile application, and web application
      development with Vue.js, React.js, HTML, CSS, JavaScript, React Native,
      Firebase, and Google Cloud <br />Solving Leet code problems
      <br />Participating in Resume workshops and mock interviews
      <br />
      <br />
      Techtonica, Computer Science Intern <br />
      June 2019 - Present San Francisco, CA <br />
      Automating emails with Java and upgrading website to Python3 on Linux
      <br />
      Updating website using HTML, CSS, Python, and GitHub
      <br /><br /><br />
      <a
        href="https://drive.google.com/file/d/16Tr1XoqyiujUGFL5EGE6xx61Zh13ydWb/view?usp=sharing"
        target="_blank"
        >Full Resume Here</a
      >
    </p>
    <router-view />
  </div>
</template>

<style scoped>
h1 {
  font-size: 180px;
}
h2 {
  background-color: white;
  color: black;
  position: relative;
  left: 100px;
  bottom: -200px;
  font-size: 30px;
  text-decoration: underline;
}
p {
  color: black;
  background-color: white;
  padding: 200px 100px;
  font-size: 20px;
}
a:link {
  color: black;
  background-color: transparent;
  text-decoration: underline;
  padding: 0px;
}
a:visited {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: black;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
</style>
