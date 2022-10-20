<script setup lang="ts">
</script>

<template>
  <div class="grid">
    <div class="product_image">
        <img class="desktop" src="http://audiophilee.netlify.app/images/product-xx99-mark-one-headphones/desktop/image-product.jpg" alt="">
        <img class="tablet" src="http://audiophilee.netlify.app/images/product-xx9…headphones/tablet/image-category-page-preview.jpg" alt="">
        <img class="mobile" src="https://audiophile1818.netlify.app/static/media/image-xx99-mark-two.42ad246f.jpg" alt="">
    </div>
    <div class="product-descr">
        <h4>new product</h4>
        <h3 class="product_name"></h3>
        <p class="text">xx99 mark i headphones</p>
        <button>see product</button>
    </div>
  </div>
</template>

<style scoped>
.tablet,.desktop{
    display:none;
}
.grid{
    display:grid;
}
.product_name{
    max-width: 445px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    color: rgb(0, 0, 0);
    letter-spacing: 1.42857px;
    text-transform: uppercase;
}
</style>