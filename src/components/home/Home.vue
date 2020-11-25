<template>
  <div class="home-div">
    <div class="form-row" style="width: 100%; ">
      <div class="col-6" style="height: 50px">
        <img src="../../assets/Home_images1.jpg" style="height: 100%;display: inline-block">
        <p class="top-text" style="margin-left: 10px;">VIDEO TRACKING SOFTWARE</p>
      </div>
      <div class="col-6" style="height: 50px;text-align: right">
        <p class="top-text" style="margin-right: 10px;">You’re the xxxxx visiting this website.</p>
      </div>
    </div>
    <div class="main-div">
      <div class="img-div">
        <img src="../../assets/logo.jpg" style="width: 50%;display: inline-block">
        <p style="color: #888888;font-size: 16px">
          EasyFlyTracker is an easy-to-use program for analyzing Drosophila Activity. It is the most<br/>
          widely applied video tracking software that tracks and analyzes the behavior,<br/> movement, and activity of
          any animal.
        </p>
        <div class="btn-div">
          <Button size="large" class="btn-divide" type="primary" shape="circle">Getting Started</Button>
          <Button size="large" class="btn-divide" ghost type="primary" shape="circle" icon="logo-github" @click="gotoGit">GitHub</Button>
          <Button size="large" class="btn-divide" ghost type="primary" shape="circle" icon="md-create">Forum</Button>
        </div>
      </div>
      <div class="right-div">
        <img src="../../assets/Home_image2.gif" style="width: 100%">
      </div>
    </div>
    <div class="bottom-div">
      xxx is a free software, released under GPL; All site is released as CC.
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods : {
    gotoGit : function (){
      window.open("https://github.com/azzhu/EasyFlyTracker");
    }
  }
}
</script>

<style scoped>
.bottom-div {
  position: fixed;
  bottom: 5px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: darkgrey;
  font-family : Georgia, serif
}

.btn-divide {
  margin-left: 2%;
}

.btn-div {
  margin-top: 5%;
}

.right-div {
  width: 50%;
  position: absolute;
  right: 5%;
  z-index: -1;
}

.img-div {
  width: 50%;
  margin-left: 5%;
  display: inline-block;
  float: left;
  margin-top: 10%;
  z-index: 999;
}

.main-div {
  width: 100%;
}

.home-div {
  font-family: "Comic Sans MS", cursive, sans-serif;
  width: 100%;
  margin-top: 20px;
}

.top-text {
  color: darkorange;
  display: inline-block;
  line-height: 50px;
  font-size: 20px;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>