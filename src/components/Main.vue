<template lang="html">
  <div class="main">

    <div class="landingPage"></div>

    <hr class="landing-page-divide">

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

    <div class="faq-container">
      <div class="col-md-6">
        <img src="../assets/scholarship1.jpg" class="scholarship-reception-img">
      </div>
      <div class="col-md-6">
        <h1 class="faq-header">Scholarship FAQ</h1>

        <div class="faq-q-item">
          <span class="faq-text">Can I apply if I attend a university outside of Collin County?</span>
        </div>
        <div class="faq-a-item first-faq">
          <span class="faq-text">You may apply as long as you are from Collin County.</span>
        </div>

        <div class="faq-q-item">
          <span class="faq-text">I am graduating from a HS in Tarrant County. Can I apply for your scholarship?</span>
        </div>
        <div class="faq-a-item">
          <span class="faq-text">
            No. You are not eligible for our scholarship based on the location of your HS.
            You can search for a LULAC Council in your area that provides scholarships by visiting LNESC.org.
          </span>
        </div>

      </div>
    </div>

    <div class="membership-container">

        <div class="col-md-6 membership-content">
          <h1 class="membership-header">Membership</h1>

          <div class="faq-q-item">
            <span class="faq-text">
              Subscription to the LULAC News
            </span>
          </div>
          <div class="faq-q-item">
            <span class="faq-text">
              Invitation to attend national and local events including our annual convention and exposition and training institutes at discounted member rate
            </span>
          </div>
          <div class="faq-q-item">
            <span class="faq-text">
              Periodic updates on legislative issues and social affairs
            </span>
          </div>
          <div class="faq-q-item">
            <span class="faq-text">
              A strong and influential national voice supported by thousands of other LULAC members across the U.S. & Puerto Rico
            </span>
          </div>
          <div class="faq-q-item">
            <span class="faq-text">
              The opportunity of participating more fully in your community through volunteer activities and local council events
            </span>
          </div>

          <div class="dues">
            <h3 class="dues-header">Dues</h3>
            <div class="col-md-12 no-left-pad">
              <p class="dues-p">Dues are payable by check or money order to: Collin County Lulac 4573</p>
              <p class="dues-p">
                Annual Lulac 4573 dues are $30 per person or $50 per couples. Dues can be paid in person at our monthly meetings
                or mailed to:
              </p>
            </div>

            <div class="col-md-12 no-left-pad">
              <div class="dues-address">
                <p class="address-line">CC LULAC #4537 <br>c/o Lolly Flores <br>P.O. Box 861125 <br>Plano, TX 75086 </p>
              </div>
            </div>

            <p class="dues-p col-md-12 no-left-pad">Please include your contact information ( phone / email )</p>
          </div>


        </div>

        <div class="col-md-6">

          <div class="col-md-12">
            <img src="../assets/membership2.jpg" class="membership-img-top">
          </div>

          <div class="col-md-12">
            <img src="../assets/membership3.jpg" class="membership-img-bottom">
          </div>

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
  margin-top: 70px;
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

.landing-page-divide {
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

.faq-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #fafafa;
  padding-bottom: 75px;
}

.faq-q-item {
  color: white;
  background: rgba(0,0,0,0.5);
  border-left: 3px solid #383838;
  width: 75%;
}

.faq-text {
  font-size: 18px;
  color: white;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 5px;
  margin-bottom: 0px;
}

.faq-a-item {
  color: white;
  background: #5F9F9F;
  border-left: 3px solid #2F4F4F;
  width: 75%;
}

.first-faq {
  margin-bottom: 85px;
}

.faq-header {
  margin-bottom: 25px;
}

.membership-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #34495e;
  color: white;
  padding-bottom: 75px;
}

.membership-content {
  padding-left: 25px;
}

.membership-header {
  margin-bottom: 25px;
}

.membership-img-top {
  max-height: 450px;
  margin: auto;
  margin-top: 78px;
}

.membership-img-bottom {
  max-height: 450px;
  margin: auto;
  margin-top: 100px;
}

.dues {
  width: 75%;
}

.dues-header {
  margin-top: 100px;
  margin-bottom: 25px;
}

.dues-p {
  font-size: 16px;
}

.address-line {
  padding: 15px 10px 15px 10px;
}

.dues-address {
  background: rgba(0,0,0,0.5);
  width: 40%;
  margin: 25px auto 35px auto;
}

.no-left-pad {
  padding-left: 0;
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
