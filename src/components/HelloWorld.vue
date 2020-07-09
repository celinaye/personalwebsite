<template>
  <div id="menu">
    <div class="home">
      <div class="menu">
        <div class="menu-item">
          <div class="menu-text">
            <div class="menu-right">
              <router-link to="/">Home</router-link>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-text">
            <div class="menu-right">
              <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-text">
            <div class="menu-right">
              <router-link to="/highschool">High School</router-link>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-text">
            <div class="menu-right">
              <router-link to="/art">Art</router-link>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-text">
            <div class="menu-right">
              <router-link to="/resume">Resume</router-link>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-text">
            <div class="menu-right">
              <router-link to="/contact">Contact</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  height: 60px;
  color: white;
}
.menu-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.menu-text {
  font-size: 15px;
  color: #0a0a0a;
  cursor: pointer;
  padding: 10px;
  border-bottom: 2px solid white;
  width: justify;
  color: white;
  float: right;
}
.menu-text:hover {
  border-bottom: 2px solid black;
  color: black;
}
a:link {
  color: white;
  background-color: transparent;
  text-decoration: none;
  padding: 10px;
}
a:visited {
  color: white;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: black;
  background-color: transparent;
  text-decoration: none;
  border-bottom: 2px solid black;
}

a:active {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
</style>
