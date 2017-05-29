<template>
  <div class="row" id="greeting">
    <h1>{{greeting}}</h1>
    <img id="welcome" src="http://static4.comicvine.com/uploads/scale_small/2/27783/727072-uncle_sam.jpg" alt="">
  </div>
</template>

<script>

export default {
  name: 'welcome',
  data() {
    return {
      greeting: 'Vote Hard Or Go Home',
      img: {}
    }
  },
  mounted() {
    this.img = document.getElementById('welcome');
    this.img.addEventListener('error', function() {this.style.display = 'none'});
  }
}
</script>


<style scoped>
  div {
    text-align: center;
  }

</style>
