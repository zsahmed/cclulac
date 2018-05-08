<template lang="html">
  <div class="about">
    <div class="history-container">
      <div class="col-md-8">
        <h1>History</h1>

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
        <img src="../assets/about/hist1.jpg" class="hist1-img">
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

.history-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f6f6f6;
  padding-bottom: 75px;
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

.hist1-img {
  margin-top: 75px;
}

h1 {
  font-size: 32px;
}

a {
  cursor: pointer;
}

</style>
