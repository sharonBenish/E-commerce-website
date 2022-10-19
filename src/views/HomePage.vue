<script setup lang="ts">
import ShopLinksLayout from "../components/ShopLinksLayout.vue";
</script>

<template>
  <div class="container">
    <div class="hero">
      <div>
          <div class="text">
            <h2>New Product</h2>
            <h1 class="home_banner_title">XX99 Mark II Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          </div>
          <button class="see_products">see product</button>
      </div>
    </div>
    <div class="categories_links">
      <ShopLinksLayout />
    </div>
    <div class="grid_layout">
      <div class="zx9_speaker card">
        <img src="https://audiophilee.netlify.app/images/home/desktop/image-speaker-zx9.png" alt="" class="desktop img-fluid">
        <img src="https://audiophilee.netlify.app/images/home/tablet/image-speaker-zx9.png" alt="" class="tablet img-fluid">
        <img src="https://audiophilee.netlify.app/images/home/mobile/image-speaker-zx9.png" alt="" class="mobile img-fluid">
        <img src="	https://audiophilee.netlify.app/images/home/desktop/pattern-circles.svg" alt="" class="circles img-fluid">
        <div class="details">
          <h3>zx9 speaker</h3>
          <p>Upgrade to speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button>see product</button>
        </div>   
      </div>
      <div class="zx7_speaker card"></div>
      <div class="yx1_earphones_img card"></div>
      <div class="yx1_earphones card"></div>
      <div class="about_img card"></div>
      <div class="about_text"></div>
    </div>
  </div>
</template>

<style scoped>
.container{
}
.hero{
  background-color: #0e0e0e;
  background-image: url("https://audiophilee.netlify.app/images/home/desktop/hero.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 4rem 0;
}

.hero > div{
  width: 80%;
  max-width:1200px;
  margin:0 auto;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  height: 300px;
}

.text{
  max-width:300px;
  margin: 0 auto;
}

.text > *:not(p), button{
  text-transform: uppercase;
}

.text p{
  max-width: 349px; 
  font-style: normal; 
  font-weight: 500; 
  font-size: 15px; 
  line-height: 25px; 
  color: #fff; 
  opacity: 0.75; 
  margin: 24px 0px 40px;
}

h1{
  font-size:2.2rem;
  color:#fff;
  letter-spacing: 2px;
}

h2{
  color:#fff;
  opacity: 0.5;
  letter-spacing: 10px;
  font-size:14px;
  text-transform: uppercase;
  margin-bottom:1rem;
  font-weight:400
}

.see_products{
  background-color: #d87d4a;
  color: #fff;
}

.categories_links{
  width:80%;
  max-width:1200px;
  margin:0 auto;
  padding: 4rem 0;
}

.card{
  border-radius:8px;
  padding:3rem 1rem;
}

.grid_layout{
  margin:0 auto;
  width:80%;
  max-width: 1200px;
}

.zx9_speaker{
  background:#d87d4a;
  position:relative;
}
.zx9_speaker > .details{
  padding-top:3rem;
  max-width:350px;
  margin:0 auto;
  height: auto;
}

.zx9_speaker > .details > h3{
    color:#fff;
    font-size:2rem;
    font-weight:700;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.zx9_speaker > .details > p{
  color: #fff;
    opacity: .75;
    margin-bottom: 40px;
}

.zx9_speaker > .details > button{
    color: #fff;
    background-color: #000;
}

.desktop, .tablet{
  display:none;
}
.mobile{
  max-width:150px;
  position: relative;
  z-index: 10;
}

.circles{
  position: absolute;
  top:0;
  left:0;
  z-index:0;
}

@media (min-width:675px) {
  .hero>div{
    height:500px;
  }
  .text{
    max-width:500px;
  }
  .text p{
    margin:40px auto;
    margin-top:20px
  }
  h1{
    font-size:3.5rem
  }
  .mobile{
    display:none
  }
  .tablet{
    display: block !important;
    position: relative;
    z-index:10;
    max-width: 200px;
    margin: 0 auto;
  }
  .zx9_speaker {
    display: flex;
    text-align: left;
    justify-content: space-between;
    gap:1rem;
  }
  .zx9_speaker > .details{
    max-width:300px;
}
}

@media (min-width:1190px) {
  .hero{
    background-color: #0e0e0e;
    background-image: url("https://audiophilee.netlify.app/images/home/desktop/hero.jpeg");
    background-repeat:no-repeat;
    background-position:80% 50%;
    padding: 4rem 0;
  }
  .hero>div{
    align-items:flex-start;
  }
  .hero > div{
    align-items:flex-start
  }
  .text{
    margin:0;
    text-align: left;
  }
  .text p{
    margin:20px 0 40px 0;
  }

  .tablet{
    display:none !important;
  }

  .desktop{
    display:block !important;
    position: relative;
    z-index:10;
    max-width: 300px;
    margin: 0 auto;
  }


  .zx9_speaker > .details > h3{
    font-size:3.5rem;
    font-weight:700;
    letter-spacing: 2px;
    line-height:4rem;
}

.zx9_speaker > .details > p{
  font-size:1.1rem;
}

}
</style>