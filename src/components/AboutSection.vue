<script setup lang="ts">
</script>

<template>
  <div class="about-section content">
    <div class="about_img card">
    </div>
    <div class="about_text">
      <h3>bringing you the <span>best</span> audio gear</h3>
      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  </div>
</template>

<style scoped>
.about-section{
  margin:2rem auto;
}
.about_img{
  height:300px;
  background-image: url("https://audiophilee.netlify.app/images/shared/desktop/image-best-gear.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
}
.about_text{
  display: flex;
  flex-direction: column;
  align-items:center
}
.about_text h3{
  text-transform: uppercase;
  font-size:28px;
  line-height: 44px;
  font-weight: 700;
  max-width: 445px;
  letter-spacing: 1.5px;
}
.about_text h3 span{
  color:#d87d4a;
  
}
.about_text p{
  font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: rgb(0, 0, 0);
    opacity: 0.5;
    margin: 32px 0px 0px;
    max-width:500px;
}

@media (min-width:675px) {
  .about_img{
    height:300px;
    background-image: url("https://audiophilee.netlify.app/images/shared/tablet/image-best-gear.jpg");
  }
  .about-section{
    display: flex;
    gap:2rem;
  }

  .about-section > div{
    width:50%;
  }
  .about_text{
    order:-1;
    text-align:left;
    
    align-items: flex-start;
  }
}

@media (min-width:1190px){
  .about_text h3{
    font-size:40px;
  }
  .about_text > p {
    font-size: 18px;
    line-height:35px;
  }
  .about_img{
    height:500px;
  }
}
</style>