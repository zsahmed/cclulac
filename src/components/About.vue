<template lang="html">
  <div class="about">
    <div class="landingPage">

    </div>

    <div class="banner-container">
      <h1 class="banner-header">CELEBRATING 25 YEARS</h1>
      <h3 class="banner-sub-header">Serving Collin County Since 1993</h3>
    </div>

    <div class="about-us-container">
      <div class="col-md-8">
        <h1 class="about-us-header">About Collin County LULAC</h1>
        <p class="about-us-text">
          Chartered in 1993, Collin County LULAC Council #4537 members take pride in raising funds for local scholarships through the LULAC Council
          #4537 Scholarship Fund. We invest in Collin County! Our members are local educators, small business owners, veterans, health care providers,
          employees of major corporations and retirees. We are all volunteers. Collin County LULAC does not have a paid staff.
        </p>
        <p class="about-us-text">
          In 1996, the Collin County LULAC Youth Council #298 was chartered under the supervision of Collin County LULAC Council #4537. Since its
          inception, the Youth Council has maintained a 100% on time high school graduation rate. Most members come from various high schools in Collin
          County. Some members are students in schools outside of Collin County. Visit the Youth Council tab at the top of the page to learn more about
          becoming a member. Membership is always open to both the Adult and Youth Councils.
        </p>
        <h1 class="mission-statement-header">Mission Statement</h1>
        <p class="mission-statement-text">
           The mission of the League of United Latin American Citizens is to advance the economic condition, educational attainment,
           health and civil rights of the Hispanic population in the United States.
        </p>
      </div>
      <div class="col-md-4 about-us-img">
        <img src="../assets/about/membership.jpg">
      </div>

    </div>

    <div class="leadership-container">
      <h1 class="leadership-header">Leadership Team</h1>

      <div class="col-md-6">
        <div class="leadership-item">
          <span class="leadership-text">Coty Rodriguez</span>
          <span class="leadership-sub-text">President</span>
        </div>
        <div class="leadership-item">
          <span class="leadership-text">Adrian Rodriguez</span>
          <span class="leadership-sub-text">Vice President</span>
        </div>
        <div class="leadership-item">
          <span class="leadership-text">Shannon Rodriguez Anderson</span>
          <span class="leadership-sub-text">Vice President for Youth</span>
        </div>
        <div class="leadership-item">
          <span class="leadership-text">Sondra Ford</span>
          <span class="leadership-sub-text">Vice President for Women</span>
        </div>
      </div>

      <div class="col-md-6">
        <div class="leadership-item">
          <span class="leadership-text">Lolly Flores</span>
          <span class="leadership-sub-text">Treaurer</span>
        </div>
        <div class="leadership-item">
          <span class="leadership-text">Mary Alice Garza</span>
          <span class="leadership-sub-text">Secretary</span>
        </div>
        <div class="leadership-item">
          <span class="leadership-text">Mike Flores</span>
          <span class="leadership-sub-text">Sgt. At Arms</span>
        </div>
      </div>

    </div>

    <div class="history-container">
      <div class="col-md-8">
        <h1 class="history-header">History</h1>

        <div class="one-for-all">
          <h4 class="history-sub-title">All For One And One For All</h4>
          <p class="history-text">
            The League of United Latin American Citizens (LULAC), founded in 1929, is the oldest and most widely respected Hispanic civil rights
            organization in the United States of America. LULAC was created at a time in our country’s history when Hispanics were denied basic civil
            and human rights, despite contributions to American society. The founders of LULAC created an organization that empowers its members to
            create and develop opportunities where they are needed most.
          </p>
        </div>

        <div class="formation">
          <h4 class="history-sub-title">Formation of LULAC</h4>
          <p class="history-text">
            In 1945, a California LULAC Council successfully sued to integrate the Orange County School System, which had been segregated on the grounds
            that Mexican children were “more poorly clothed and mentally inferior to white children.” Additionally, in 1954, LULAC brought another landmark
            case, Hernandez vs. the State of Texas, to protest the fact that a Mexican American had never been called to jury duty in the state of Texas.
            The Supreme Court ruled this exclusion unconstitutional.
          </p>
          <p class="history-text">
            Since then, LULAC has fought for full access to the political process and equal educational opportunity for all Hispanics. LULAC’s continues to
            play an active role in these efforts. LULAC councils across the United States hold voter registration drives, citizenship awareness sessions,
            sponsor health fairs and tutorial programs, and raise scholarship money for the LULAC National Scholarship Fund. This fund, in conjunction with
            LNESC (LULAC National Educational Service Centers), has assisted almost 10 percent of the 1.1 million Hispanic students who have gone to college.
          </p>
          <p class="history-text">
            LULAC Councils have also responded to an alarming increase in xenophobia and anti-Hispanic sentiment. They have held seminars and public symposiums
            on language and immigration issues. In addition, LULAC officers have used television and radio to protest against the “English Only” movement, which
            seeks to limit the public (and in some cases, private) use of minority languages.
          </p>
          <p class="history-text">
            For more on the history of LULAC, visit the LULAC National website, <a>http://lulac.org/about/history/</a>
          </p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="hist1-section">
          <img src="../assets/about/hist1.jpg" class="hist1-img">
          <span class="hist1-text">First LULAC Convention, Corpus Christi TX, 1929</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.about {
  font-family: 'Muli';
}

.landingPage {
    background-image: url("../assets/about/about-landing.png");
    background-size: cover;
    width: 100%;
    height: 550px;
    margin: 0px;
  }

.banner-container {
  display: table; /* Make the container element behave like a table */
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #34495e;
  color: white;
  padding: 50px 0 50px 0;
}

.banner-header {
  text-align: center;
  font-size: 72px;
}

.banner-sub-header {
  text-align: center;
}

.about-us-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f6f6f6;
}

.about-us-header {
  text-align: center;
  margin-top: 50px;
  margin-left: -70px;
  margin-bottom: 0;
}

.about-us-text {
  text-align: center;
  width: 80%;
  margin: 30px auto auto auto;
  line-height: 2.0;
}

.about-us-img {
  margin-left: -70px;
  max-height: 900px;
}

.mission-statement-text {
  text-align: center;
  width: 80%;
  margin: 30px auto auto auto;
  line-height: 2.0;
}

.mission-statement-header {
  text-align: center;
  margin-top: 100px;
  margin-left: -70px;
}

.leadership-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #34495e;
  color: white;
  padding-bottom: 75px;
}

.leadership-header {
  margin: 50px auto 50px auto;
  text-align: center;
}

.leadership-item {
  color: white;
  background: rgba(0,0,0,0.5);
  border-bottom: 3px solid #383838;
  height: 90px;
  width: 70%;
  margin: 5px auto 5px auto;
}

.leadership-text {
  font-size: 24px;
  color: white;
  text-align: left;
  padding-top: 15px;
  padding-left: 15px;
  margin-bottom: 0px;
  display: block;
}

.leadership-sub-text {
  font-size: 18px;
  color: white;
  text-align: left;
  padding-left: 15px;
  padding-bottom: 15px;
  margin-top: 0px;
}

.history-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f6f6f6;
  padding-bottom: 75px;
}

.history-header {
  margin-top: 25px;
}

.history-sub-title {
  font-size: 20px;
  margin-left: 15px;
}

.history-text {
  margin-left: 15px;
  width: 75%;
}

.one-for-all {
  margin-top: 25px;
}

.formation {
  margin-top: 75px;
}

.hist1-section {
  margin-top: 75px;
}

.hist1-img {
  margin-bottom: 10px;
}

.hist1-text {
  display: block;
}

h1 {
  font-size: 32px;
}

a {
  cursor: pointer;
}

</style>
