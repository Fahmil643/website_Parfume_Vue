<template>
  <div class="max-w-sm rounded-xl overflow-hidden shadow-lg border border-purple-100 bg-white/70 backdrop-blur-md p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl">
    <div class="flex items-center justify-center bg-white rounded-lg overflow-hidden h-40">
      <img class="max-h-full object-contain" :src="image" alt="Product Image" />
    </div>
    <div class="px-4 py-3 text-center">
      <div class="font-bold text-lg text-purple-700 mb-1">{{ title }}</div>
      <p class="text-gray-600 text-sm leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
};
</script>

<style scoped>
/* Tidak wajib, tapi ini membantu tampilan lebih lembut */
</style>
