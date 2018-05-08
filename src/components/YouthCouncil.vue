<template lang="html">
  <div class="yc">

    <div class="landingPage"></div>
    <hr class="landing-page-divide">

    <div class="yc-container">
      <div class="col-md-6">
        <h1 class="yc-header">Youth Council</h1>
        <p class="yc-text">
          Founded in 1996, the Collin County LULAC Youth Council #298 is one of the oldest Youth Councils in the United states and Puerto Rico.
          Since 1996, the Youth Council has had a 100% on-time high school graduation rate among its members. Members of the Collin County LULAC Youth
          Council come from various public and private schools in Collin County.
        </p>
        <p class="yc-text">
          Annually, Youth members attend District, State & National Youth Conventions. At these conventions, they are provided an opportunity to network
          with students from across the country. Members attend workshops on topics including Higher Education, Immigration, Voter Outreach and Health.
        </p>
        <p class="yc-text">
          Annual Membership Dues are $15. Acceptable forms of payment include cash or money order. Students can pay their dues in person at one of the
          Youth Council Meetings.
        </p>
        <p class="yc-text">
          Youth Council meetings are held every two weeks. For additional
          information about the meetings, please send an email to cclulac@yahoo.com.
        </p>
        <p class="yc-text">
          If you are a member, please visit the Youth Members Facebook page for specifics.
        </p>
      </div>

      <div class="col-md-6">
        <div class="yc-18"></div>
      </div>

    </div>

    <div class="comm-serv-container">
      <h1 class="comm-serv-header">Community Service is Our First Priority</h1>

      <div class="col-md-12">
        <div class="col-md-4">
          <img src="../assets/yc/comm-serv-1.jpg" class="comm-serv-row-imgs">
        </div>
        <div class="col-md-4">
          <img src="../assets/yc/comm-serv-2.jpg" class="comm-serv-row-imgs">
        </div>
        <div class="col-md-4">
          <img src="../assets/yc/comm-serv-3.jpg" class="comm-serv-row-imgs">
        </div>
      </div>

      <div class="col-md-6">
        <h3 class="comm-serv-sub-header">Youth Council Volunteer and Service Opportunities</h3>

        <div class="comm-serv-item">
          <span class="comm-serv-text">Cena en el Barrio</span>
          <span class="comm-serv-sub-text">Providing holiday meals to low income families</span>
        </div>
        <div class="comm-serv-item">
          <span class="comm-serv-text">Keep Plano Beautiful</span>
          <span class="comm-serv-sub-text">Park clean-ups</span>
        </div>
        <div class="comm-serv-item">
          <span class="comm-serv-text">Meals on Wheels</span>
          <span class="comm-serv-sub-text">Collin County Harvest Boxes</span>
        </div>
        <div class="comm-serv-item">
          <span class="comm-serv-text">Plano ISD Parent Teacher Association</span>
          <span class="comm-serv-sub-text">Meeting and registration day translators</span>
        </div>
        <div class="comm-serv-item">
          <span class="comm-serv-text">Plano ISD</span>
          <span class="comm-serv-sub-text">Craft nights</span>
        </div>
        <div class="comm-serv-item">
          <span class="comm-serv-text">Plano ISD</span>
          <span class="comm-serv-sub-text">International nights</span>
        </div>
        <div class="comm-serv-item">
          <span class="comm-serv-text">Plano ISD</span>
          <span class="comm-serv-sub-text">Summer Science camp</span>
        </div>
      </div>

      <div class="col-md-6 car-wash-container">
        <img src="../assets/yc/car-wash.jpg" class="car-wash-img">
      </div>

    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.yc {
  font-family: 'Muli';
}

.landingPage {
    background-image: url("../assets/yc/yc-landing.png");
    background-size: cover;
    width: 100%;
    height: 550px;
    margin: 0px;
}

@keyframes line_animation {
   from {
       width: 0%;
   }
   to {
       width:100%;
   }
 }

.landing-page-divide {
  margin: 0 auto 0 auto;
  border-top: 5px solid #34495e;
  animation-name: line_animation;
  animation-duration: 1s;
  animation-timing-function: linear;
}

.yc-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f6f6f6;
}

.yc-header {
  margin-left: 15px;
  margin-top: 25px;
}

.yc-text {
  margin-left: 15px;
  margin-top: 25px;
}

.yc-18 {
  background-image: url("../assets/yc/yc-18.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 500px;
  margin: 50px auto 50px auto;
}

.comm-serv-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #34495e;
  color: white;
}

.comm-serv-header {
  margin: 50px auto 50px auto;
  text-align: center;
}

.comm-serv-row-imgs {
  max-height: 330px;
  width: 500px;
  margin-bottom: 50px;
}

.comm-serv-sub-header {
  margin-left: 15px;
  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 3px solid #141d25;
  width: 70%;
}

.comm-serv-item {
  color: white;
  background: rgba(0,0,0,0.5);
  border-bottom: 3px solid #5e4934;
  height: 90px;
  width: 70%;
  margin: 15px auto 15px 15px;
}

.comm-serv-text {
  font-size: 24px;
  color: white;
  text-align: left;
  padding-top: 12px;
  padding-left: 15px;
  margin-bottom: 0px;
  display: block;
}

.comm-serv-sub-text {
  font-size: 18px;
  color: white;
  text-align: left;
  padding-left: 15px;
  padding-bottom: 15px;
  margin-top: 0px;
}

.car-wash-container {
  vertical-align: middle;
  text-align: center;
  display: table-cell;
}

.car-wash-img {
  margin-top: 50px;
  margin-bottom: 50px;
  max-height: 800px;
}
</style>
