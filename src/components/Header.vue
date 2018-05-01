<template lang="html">
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Collin County Lulac #4537</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/youth-council" activeClass="active" tag="li"><a>Youth Council</a></router-link>
          <router-link to="/about" activeClass="active" tag="li"><a>About</a></router-link>
        </ul>
        <!-- <ul class="nav navbar-nav navbar-right">
          <li><a href="https://s3.amazonaws.com/zakariya.solutions/resume.pdf">Resume</a></li>
        </ul> -->
      </div>
    </div>
  </nav>
</template>

<script>

export default {
}
</script>

<style scoped>
  .navbar {
    margin-bottom: 0px;
    border-radius: 0px;
  }
</style>
