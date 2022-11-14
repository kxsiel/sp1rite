<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { createApp } from 'vue';
import VueFeather from 'vue-feather';

</script>

<template class="template">

  <header>
    <div class="imges">
      <img class="fota" src="./assets/log.gif">
    </div>
    <div class="wrapper">
      <h1 class="BigText">The New</h1>
      <h1 class="pink BigText">Generation</h1>
      <h2 class="BigText">Of Optimizations</h2>
      <vue-feather class="sper" type="arrow-down"></vue-feather>
    </div>
  </header>
  <header class="hea2">
    <div class="Desc1">
      <vue-feather class="IcoA" type="activity" size="32px"></vue-feather>
      <h2 class="tran hov pink">Advanced</h2>
      <h3 class="tran hov h1w2d1">
        All our products and the features they contain<br>
        are developed with the utmost care <br>
        and the latest technology to keep up with <br>
        the times while having the best quality product<br>
        you can get on the whole market.<br>
      </h3>
    </div>
    <div class="Desc2">
      <vue-feather class="IcoA" type="shield" size="32px"></vue-feather>
      <h2 class="tran hov pink">Safe</h2>
      <h3 class="tran hov h1w2d1">
        We use industry-standard encryption and <br>
        hashing methods to ensure your sensitive data <br>
        or not in a secure place. <br>
        This is one of our most important tasks. <br>
        Keep your information private. <br>
        No matter how you do it, it's safe and out of sight.<br>
      </h3>
    </div>
    <div class="Desc3">
      <vue-feather class="IcoA" type="refresh-cw" size="32px"></vue-feather>
      <h2 class="tran hov pink">continious updates</h2>
      <h3 class="tran hov h1w2d1">
        The products that enrage provides <br>
        are constantly being improved <br>
        through regular updates to keep our products <br>
        up to date so that they meet our customers' needs.<br>
        ' needs for the best possible experience.<br>
      </h3>
    </div>
  </header>
  <header class="hea3">
    <div class="pricing">
      <h1 class="tran hov pink BigText"> Pricing</h1>
    </div>
    <div class="Month">
      <vue-feather class="IcoB" type="dollar-sign" size="32px"></vue-feather>
      <h2 class="tran hov CenterBig pink">Month</h2>
      <h3 class="tran hov h1w2d1">
        - Regular Updates<br>
        - 24/7 Support<br>
        - All functions<br>
        - Chat witch customers<br>
        - 1 month access<br>
      </h3>
      <button
        class="tran hov Pink Buy btn"
        data-sellix-product="6346d013bf292"
        type="submit"
        alt="Buy Now with sellix.io"
      >
        Buy
      </button>
    </div>
    <div class="lifetime">
      <vue-feather class="IcoB" type="dollar-sign" size="32px"></vue-feather>
      <h2 class="tran hov CenterBig pink">LifeTime</h2>
      <h3 class="tran hov h1w2d1">
        - Regular Updates<br>
        - 24/7 Support<br>
        - All functions<br>
        - Chat witch customers<br>
        - LifeTime access<br>
      </h3>
      <button
        class="hov Pink Buy btn"
        data-sellix-product="634950272d2fa"
        type="submit"
        alt="Buy Now with sellix.io"
      >
        Buy
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.tran {
  transition: 0.75s;
}

.btn {
  background: none;
  color: #052194;
  transition: 0.75s;
  font-size: x-large;
  border: none;
}

.hov:hover {
  color: azure;
}

.Month {
  position: relative;
  margin-top: 3%;
  margin-left: 25%;
  width: 350px;
  height: 325px;
  text-align: center;
}

.lifetime {
  position: relative;
  margin-top: -27%;
  margin-left: 45%;
  width: 350px;
  height: 325px;
  text-align: center;
}

.pricing {
  text-align: center;
}
.sper {
  margin-left: 25%;
  margin-top: 15%;
}

.h1w2d2 {
  margin-left: 2%;
}

.h1w2d1 {
  margin-left: 2%;
}
.wrapper {
  padding-top: 20%;
  text-align:left;
}

.Desc1 {
  position: relative;
  margin-top: 10%;
  margin-left: 3.2%;
  width: 350px;
  height: 325px;
  text-align: center;

}

.Desc2 {
  position:absolute;
  margin-top: -27%;
  margin-left: 33.2%;
  width: 350px;
  height: 325px;
  text-align: center;

}

.Desc3 {
  position:absolute;
  margin-top: -27%;
  margin-left: 63.2%;
  width: 350px;
  height: 325px;
  text-align: center;

}

.hea2{
  position:relative;
  flex-direction: column;
}
.BigText {
  transition: 0.75s;
  font-size: xx-large;
}

.fota {
  position: absolute;
  height: 512px;
  padding-left: 50%;
  
}

.imges {
  margin-top: 5%;
}

@media (max-width: 1280px) {

.lifetime {
  margin-left: 70%;
  margin-top: -27%;
}
.Month {
  margin-left: 50%;
}
.pricing {
  margin-top: 0%;
  padding-left: 67%;
}
.fota {
  position:absolute;
  height: 512px;
  margin-left: 5%;


}
.imges {
  padding-top: 1%;
}

.wrapper {
  margin-top: 10%;
  text-align: center;
  left: 50%;
}

.BigText {
  position: relative;
  margin-left: -47% ;
  text-align: center;
}


.Desc1 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: 10%;
  margin-left: -21.5%;
  
}
.Desc2 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -27%;
  margin-left: 11.5%;
}

.Desc3 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -27%;
  margin-left: 47.5%;
}
.sper {
  margin-right: 85%;
}
.hea2 {
  text-align: center;
  left: 50%;

}
.hea3 {
  text-align: center;
  
}
}

@media (max-width: 1028px) {
  div.wrap {
    width:1000px;
    margin:0 auto;
}
  .lifetime {
    margin-left: 52.5%;
    margin-top: -33.7%;
  }
  .Month {
    margin-left: 42.5%;
  }
  .pricing {
    margin-top: -10%;
    padding-left: 55%;
  }
  .fota {
    position:absolute;
    height: 512px;
    margin-left: -8%;


  }
  .imges {
    padding-top: 1%;
  }

  .wrapper {
    margin-top: 30%;
    text-align: center;
    left: 42%;
  }

  .BigText {
    position: relative;
    margin-left: -47% ;
    text-align: center;
  }

  .h1w2d1 {
    font-size: 8px;
  }
  
  .Desc1 {
    position: relative;
    transition: 0.75s;
    text-align: center;
    margin-top: 10%;
    margin-left: -20%;
    font-size:smaller;
    
  }
  .Desc2 {
    position: relative;
    transition: 0.75s;
    text-align: center;
    margin-top: -34.5%;
    margin-left: 0%;
    font-size:smaller;
  }

  .Desc3 {
    position: relative;
    transition: 0.75s;
    text-align: center;
    margin-top: -33.5%;
    margin-left: 22%;
    font-size: 12.5px;
  }
  .sper {
    margin-right: 85%;
  }
  .hea2 {
    text-align: center;
    left: 50%;
  
  }
  .hea3 {
    text-align: center;
    
  }
}
@media (max-width: 951px) {

.lifetime {
  margin-left: 52.5%;
  margin-top: -35%;
}
.Month {
  margin-left: 42.5%;
}
.pricing {
  margin-top: -10%;
  padding-left: 55%;
}
.fota {
  position:absolute;
  height: 312px;
  margin-left: 3%;


}
.imges {
  padding-top: 1%;
}

.wrapper {
  margin-top: 10%;
  text-align: center;
  left: 42%;
}

.BigText {
  position: relative;
  margin-left: -47% ;
  text-align: center;
}

.h1w2d1 {
  font-size: 8px;
}

.Desc1 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: 10%;
  margin-left: 0%;
  font-size:smaller;
  
}
.Desc2 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -20.5%;
  margin-left: 0%;
  font-size:smaller;
}

.Desc3 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -18.5%;
  margin-left: 0%;
  font-size: 12.5px;
}
.sper {
  margin-right: 85%;
}
.hea2 {
  text-align: center;
  left: 50%;

}
.hea3 {
  text-align: center;
  
}
}
@media (max-width: 375px) {
body {
  display:flow-root;
}
.lifetime {
  margin-left: 33.5%;
  margin-top: -95%;
}
.Month {
  margin-left: 7.5%;
}
.pricing {
  margin-top: -40%;
  padding-left: 64%;
}
.fota {
  position:absolute;
  height: 312px;
  margin-left: -22%;
  margin-top: -25%;


}
.imges {
  padding-top: 1%;
}

.wrapper {
  margin-top: 20%;
  text-align: center;
  left: 47%;
}

.BigText {
  position: relative;
  margin-left: -47% ;
  text-align: center;
}

.h1w2d1 {
  font-size: 8px;
}

.Desc1 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: 10%;
  margin-left: -27%;
  font-size:smaller;
  
}
.Desc2 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -50.5%;
  margin-left: -27%;
  font-size:smaller;
}

.Desc3 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -45.5%;
  margin-left: -27%;
  font-size: 12.5px;
}
.sper {
  margin-right: 85%;
}
.hea2 {
  text-align: center;
  left: 50%;

}
.hea3 {
  text-align: center;
  
}
}
@media (max-width: 414px) {

.lifetime {
  margin-left: 38.5%;
  margin-top: -85%;
}
.Month {
  margin-left: 12.5%;
}
.pricing {
  margin-top: -40%;
  padding-left: 64%;
}
.fota {
  position:absolute;
  height: 312px;
  margin-left: -22%;
  margin-top: -25%;


}
.imges {
  padding-top: 1%;
}

.wrapper {
  margin-top: 20%;
  text-align: center;
  left: 47%;
}

.BigText {
  position: relative;
  margin-left: -47% ;
  text-align: center;
}

.h1w2d1 {
  font-size: 8px;
}

.Desc1 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: 10%;
  margin-left: -27%;
  font-size:smaller;
  
}
.Desc2 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -50.5%;
  margin-left: -27%;
  font-size:smaller;
}

.Desc3 {
  position: relative;
  transition: 0.75s;
  text-align: center;
  margin-top: -45.5%;
  margin-left: -27%;
  font-size: 12.5px;
}
.sper {
  margin-right: 85%;
}
.hea2 {
  text-align: center;
  left: 50%;

}
.hea3 {
  text-align: center;
  
}
}
</style>

