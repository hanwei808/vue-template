<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])


console.log(import.meta.env.DEV, 'VITE_API_BASEURL', import.meta.env.VITE_API_BASEURL)
onMounted(async () => {
  const res = await getLoginInfo()
  list.value = res.slide
  console.log('===', list.value)
})
</script>

<template>
  <h1>Login</h1>
</template>
