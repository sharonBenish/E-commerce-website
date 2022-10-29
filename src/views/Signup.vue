<script lang="ts" setup>
import { ref } from 'vue';
import CustomInput from '../components/CustomInput.vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const router = useRouter();

const signupDetails = ref({
    email:"",
    password:"",
    username:"",
    confirmPassword:""
})
const form = ref();

const auth = getAuth();
const signUp = ()=>{
    if (signupDetails.value.username.trim().length > 5 && signupDetails.value.password === signupDetails.value.confirmPassword){
        createUserWithEmailAndPassword(auth, signupDetails.value.email, signupDetails.value.password)
            .then((cred)=>{
                console.log(cred.user);
                form.value.reset();
                router.push({
                    name:'home'
                })
            })
            .catch(err => console.log(err.message))
    }
}
</script>

<template>
    <div class="signup_form">
        <h2>Sign Up</h2>
        <form action="" @submit.prevent="signUp" ref="form">
            <CustomInput :label="'email'" :placeholder="'user@mail.com'" v-model="signupDetails.email" :type="'email'" />
            <CustomInput :label="'name'" :placeholder="'John Doe'" v-model="signupDetails.username" :type="'text'" />
            <CustomInput :label="'password'" :placeholder="''" v-model="signupDetails.password" :type="'password'" />
            <CustomInput :label="'confirm password'" :placeholder="''" v-model="signupDetails.confirmPassword" :type="'password'" />
            <button type="submit">Log in</button>
        </form>
    </div>
</template>

<style scoped>
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
.signup_form{
    padding: 2rem 0;
    max-width:800px;
    margin: 0 auto;
}
</style>