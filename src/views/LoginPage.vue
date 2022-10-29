<script lang="ts" setup>
import { ref } from 'vue';
import CustomInput from '../components/CustomInput.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const router = useRouter();

const loginDetails = ref({
    email:"",
    password:""
})

const form = ref();
const auth = getAuth();

const login = ()=>{
    signInWithEmailAndPassword(auth, loginDetails.value.email, loginDetails.value.password)
        .then((cred)=>{
            console.log('user logged in:', cred.user);
            form.value.reset();
            router.push({
                name:'home'
            })
        })
        .catch((err)=>{
            console.log(err.message)
        })
}
</script>

<template>
    <div class="login_form">
        <h2>Log in</h2>
        <form action="" ref="form" @submit.prevent="login">
            <CustomInput :label="'email'" :placeholder="'user@mail.com'" v-model="loginDetails.email" :type="'email'" />
            <CustomInput :label="'password'" :placeholder="''" v-model="loginDetails.password" :type="'password'" />
            <button type="submit">Log in</button>
        </form>
    </div>
</template>

<style scoped>
.login_form{
    padding:2rem 0;
    max-width:800px;
    margin: 0 auto;
}
form{
    padding:2rem;
}
form > *{
    margin-bottom: 1.5rem;
}
button{
    background-color: #d87d4a;
    color: #fff;
    max-width:300px;
    text-transform: uppercase;
    width:100%;
}
</style>