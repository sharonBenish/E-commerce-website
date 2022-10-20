<script setup lang="ts">
</script>

<template>
  <div class="footer content">
    <div class="logo">
        <img src="https://audiophilee.netlify.app/images/shared/logo.svg" alt="">
    </div>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/headphones">Headphones</router-link>
        <router-link to="/speakers">Speakers</router-link>
        <router-link to="/earphones">Earphones</router-link>
    </div>
    <p class="descr">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
    </p>
    <p class="copyright">
        Copyright 2021. All Rights Reserved
    </p>
    <div class="socials">
        <ul>
            <li><img src="../assets/shared/desktop/icon-facebook.svg" alt=""></li>
            <li><img src="../assets/shared/desktop/icon-twitter.svg" alt=""></li>
            <li><img src="../assets/shared/desktop/icon-instagram.svg" alt=""></li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.footer{
    display:grid;
    margin:0 auto;
    gap:2rem;
    padding:3rem 0;
}
.nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1.2rem;
}
.nav a{
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
}
ul{
    list-style: none;
    margin:0;
    display:flex;
    gap:1rem;
    justify-content:center;
}
p{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    font-style: normal;
    letter-spacing: 0;
    color:#fff;
    opacity: 0.5;
    max-width:370px;
    margin:0 auto;
}
@media(min-width:675px){
    .footer{
        grid-template-columns: 1fr 1fr;
    }
    p{
        margin:0;
        text-align: left;
        max-width:450px;
    }
    .logo{
        grid-column: 1/3;
        grid-row:1;
        margin-right:auto;
    }
    .nav{
        grid-column:1/3 ;
        grid-row:2;
        flex-direction: row;
        justify-content: flex-start;
    }
    .descr{
        grid-column: 1/3;
        grid-row:3;
    }
    .copyright{
        grid-column:1 ;
        grid-row:4;
    }
    .socials{
        grid-column:2 ;
        grid-row:4;
        justify-self:end
    }

}
@media (min-width:1190px) {
    .logo{
        grid-column: 1;
        grid-row:1;
        margin-right:auto;
    }
    p{
        max-width:600px
    }
    .nav{
        grid-column:2/3 ;
        grid-row:1;
        justify-self: end;
    }
    .descr{
        grid-column: 1/3;
        grid-row:2;
    }
    .copyright{
        grid-column:1 ;
        grid-row:3;
    }
    .socials{
        grid-column:2 ;
        grid-row:3;
        justify-self:end
    }
}
</style>