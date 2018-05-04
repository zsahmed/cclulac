<template lang="html">
  <div class="main">

    <div class="landingPage">
      <!-- <div class="landing-page-text-container">
        <span class="landing-page-text">Welcome!</span>
      </div> -->
    </div>

    <hr>

    <div class="events-container">
      <div class="col-md-6 visible-md visible-lg">
        <img src="../assets/lulac-shield.png" class="shield-img">
      </div>
      <div class="col-md-6">
        <h1 class="events-header">Events</h1>

        <div class="event-item">
          <span class="event-text">LULAC Council #4537 Monthly Meeting</span>
          <span class="event-sub-text">March 19, 2018 - Tino’s Too Mexican Restaurant</span>
        </div>

        <div class="event-item">
          <span class="event-text">LULAC Council #4537 Monthly Meeting</span>
          <span class="event-sub-text">February 19, 2018 - Tino’s Too Mexican Restaurant</span>
        </div>

        <div class="event-item">
          <span class="event-text">Scholarship Applications Open</span>
          <span class="event-sub-text">February 1, 2018 - Download here</span>
        </div>

        <div class="event-item">
          <span class="event-text">LULAC Council #4537 Monthly Meeting</span>
          <span class="event-sub-text">March 19, 2018 - Tino’s Too Mexican Restaurant</span>
        </div>
      </div>
    </div>

    <div class="scholarship-container">

        <div class="col-md-6 scholarship-content">
          <h1 class="scholarship-header">Scholarship</h1>

          <p class="scholarship-intro">LULAC Council 4537 proudly provides scholarships to students meeting the following criteria:</p>
          <span class="scholarship-crit">Highschool graduates who attended a public or private school in Collin County.</span>
          <span class="scholarship-crit">Returning college students from Collin County.</span>

          <a href="http://www.cclulac.org/yahoo_site_admin/assets/docs/Scholarship_Application.31152147.pdf"
            class="btn btn-primary dl-btn">Download 2018 Application</a>

        </div>
        <div class="col-md-6">
          <img src="../assets/scholarship-reception-2016.png" class="scholarship-reception-img">
        </div>


    </div>

    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.main{
    font-family: 'Muli';
}

.landingPage {
    background-image: url("../assets/main-landing.jpg");
    background-size: cover;
    width: 100%;
    height: 550px;
    margin: 0px;
  }

.landing-page-text-container {
  position: absolute;
  color: white;
  margin-top: 100px;
  margin-left: 75px;
  background: rgba(0,0,0,0.5);
  border-bottom: 4px solid #a3232a;
  height: 80px;
  width: 450px;
}

.landing-page-text {
  font-size: 20px;
  color: white;
  text-align: left;
}

.events-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #fafafa;
  padding-bottom: 75px;
}

.event-item {
  color: white;
  background: rgba(0,0,0,0.5);
  border-bottom: 3px solid #383838;
  height: 100px;
  width: 75%;
}

.event-text {
  font-size: 20px;
  color: white;
  text-align: left;
  padding-top: 10px;
  padding-left: 5px;
  margin-bottom: 0px;
}

.event-sub-text {
  font-size: 16px;
  color: white;
  text-align: left;
  padding-left: 5px;
  margin-top: 0px;
}

.shield-img {
  max-height: 500px;
  margin: auto;
  display: block;
}

.scholarship-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: white;
  padding-bottom: 75px;
}

.scholarship-content {
  padding-left: 25px;
}

.scholarship-reception-img {
  max-height: 400px;
  margin: auto;
  margin-top: 60px;
  display: block;
}

span {
  display: block;
  margin: 10px;
  text-align: center;
  color: #14466b;
  font-family: 'Muli';
  font-size: 16px;
}

@keyframes line_animation {
   from {
       width: 0%;
   }
   to {
       width:100%;
   }
 }

hr {
  margin: 0 auto 0 auto;
  border-top: 5px solid #34495e;
  animation-name: line_animation;
  animation-duration: 1s;
  animation-timing-function: linear;
}

h1 {
  font-size: 32px;
}

.events-header {
  border-bottom: 4px solid #34495e;
  width: 100px;
}

.scholarship-header {
  /* border-bottom: 4px solid #34495e; */
  width: 173px;
}

.scholarship-intro {
  text-align: left;
  font-size: 20px;
  margin-left: 0px;
  margin-bottom: 25px;
}

.scholarship-crit {
  text-align: left;
  font-size: 18px;
  margin-left: 0px;
  margin-bottom: 15px;
  padding-left: 5px;
  border-left: 4px solid #34495e;
}

.dl-btn {
  margin-top: 200px;
}

@media screen and (max-width: 1200px){
  .event-item {
    color: white;
    background: rgba(0,0,0,0.5);
    border-bottom: 3px solid #383838;
    height: 100px;
    width: 100%;
  }
}
</style>
