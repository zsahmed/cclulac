<template lang="html">
  <nav class="footer navbar-inverse navbar-bottom">
    <div class="container">
      <div class="col-md-4 col-sm-4 left">
          <h4>Contact Us</h4>
          <span class="contact-span">CollinCountyLULAC@gmail.com</span>
          <span class="contact-span">214.394.3491</span>
          <a href="https://www.facebook.com/Collin-County-LULAC-Council-4537-116693833582/" class="fb-icon">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://twitter.com/CCLULAC" class="fb-icon">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
      </div>
      <div class="col-md-4 middle">
      </div>
      <div class="col-md-4 right">

        <a href="https://lulac.org" class="lulac-link">
          <img src="../assets/lulac-shield.png" class="lulac-ico">
          <h6>lulac.org</h6>
        </a>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.navbar {
  margin-bottom: 0px;
  border-radius: 0px;
  margin-top: 25px;
}

.navbar-header {
  display: inline-block;
}

.fab {
  color: #F0FFFF;
}

.fas {
  color: #F0FFFF;
  display: inline-block;
}

.left {
  margin-top: 12px;
  margin-bottom: 12px;
}

.middle {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.right {
  text-align: right;
  margin-top: 30px;
  margin-bottom: 12px;
}

h4 {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #F0FFFF;
}

h6 {
  color: #F0FFFF;
  display: inline-block;
}

hr {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 20%;
  border-top: 2px solid;
}

a {
  text-decoration: none;
  color: white;
  font-size: 14px;
}

a:hover {
  color: white;
}

.contact-span {
  color: #F0FFFF;
  display: block;
  margin-left: 10px;
}

.fb-icon {
  margin-left: 10px;
}

.lulac-ico {
  max-width: 50px;
  max-height: 50px;
}

.lulac-link {
  padding-top: 10px;
}

i {
  margin-top: 5px;
}
</style>
