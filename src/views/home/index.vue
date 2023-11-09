<script setup lang="ts">
import { useStore } from '@/store'
import HelloWorld from '@/components/HelloWorld.vue';
import router from '@/router';

const store = useStore()

const gotoLogin = () => {
  router.push('/login')
}

</script>

<template>
  <h1>首页</h1>
  <p>{{ store.state.count }}</p>
  <p>{{ $store.state.count }}</p>
  <HelloWorld msg="Vue" />
  <button @click="gotoLogin">
    去登录
  </button>
</template>
