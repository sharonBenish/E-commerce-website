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
      <div class="zx7_speaker card">
        <div class="details">
          <h3>zx7 speaker</h3>
          <button class="transparent_btn">see product</button>
        </div>
      </div>
      <div class="yx1_earphones_img card">
        <div class="product_image"></div>
      </div>
      <div class="yx1_earphones card">
        <div class="details">
          <h3>yx1 earphones</h3>
          <button class="transparent_btn">see product</button>
        </div>
      </div>
      <div class="about_img card">
      </div>
      <div class="about_text">
        <h3>bringing you the <span>best</span> audio gear</h3>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
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
  width: 85%;
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
  width:85%;
  max-width:1200px;
  margin:0 auto;
  padding: 4rem 0;
}

.card{
  border-radius:8px;
  padding:3rem 1rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}
.card h3{
  text-transform: uppercase;
}

.grid_layout{
  margin:0 auto;
  width:85%;
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

.zx7_speaker {
  position: relative;
  padding:101px 0 101px 0;
  background-image: url("https://audiophilee.netlify.app/static/media/image-speaker-zx7-mobile.82dc33d6.jpg");
}

.zx7_speaker > .details{
  max-width:400px;
}

.card > .details h3{
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 2px;
  margin-bottom: 25px;
}

.transparent_btn {
  background-color: transparent;
  border:1px solid #0e0e0e
}

.yx1_earphones_img{
  overflow: hidden;
  padding: 0;
}

.yx1_earphones_img > .product_image{
  height:200px;
  background-image: url("https://audiophilee.netlify.app/static/media/image-earphones-yx1-mobile.48e16a44.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.yx1_earphones{
  height: 200px;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about_img{
  height:300px;
  background-image: url("https://audiophilee.netlify.app/images/shared/desktop/image-best-gear.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

  .zx7_speaker {
    background-image: url("https://audiophilee.netlify.app/static/media/image-speaker-zx7-tablet.173a4cb5.jpg");
  }

  .about_img{
    height:200px;
    background-image: url("https://audiophilee.netlify.app/images/shared/tablet/image-best-gear.jpg");
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
    max-width: 350px;
    margin: 0 auto;
  }


  .card > .details > h3{
    font-size:3.5rem;
    font-weight:700;
    letter-spacing: 2px;
    line-height:4rem;
}

.zx9_speaker > .details > p{
  font-size:1.1rem;
}

.zx7_speaker{
  background-image: url("https://audiophilee.netlify.app/static/media/image-speaker-zx7.3d4940e8.jpg");
}
.zx7_speaker > .details > h3{
  font-size:2.5rem;
}
.about_img{
  height:200px;
  background-image: url("https://audiophilee.netlify.app/images/shared/tablet/image-best-gear.jpg");
}
}
</style>