<script setup>
import { ref } from 'vue'

const isHovered = ref(false)
const hoveredIndex = ref(null)

const advantages = ref([
  "A distinctive, fresh and luxurious aroma",
  "Long-lasting fragrance",
  "Derived from selected ingredients",
  "Unique aroma"
])

const handleDiscover = () => {
  alert('Discover more about our luxury perfumes!')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center p-4 md:p-8">
    <div class="max-w-7xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-16">
        
        <!-- Left Side - Content -->
        <div class="flex flex-col justify-center space-y-8 order-2 md:order-1">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-light text-gray-800 tracking-wide">
              The Advantages
            </h1>
            <h2 class="text-5xl md:text-6xl font-serif text-rose-900 italic">
              of Perfume
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-300 rounded-full"></div>
          </div>

          <div class="space-y-6">
            <div 
              v-for="(advantage, index) in advantages" 
              :key="index"
              class="flex items-start space-x-4 group cursor-pointer"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              <div 
                class="mt-1.5 w-2 h-2 rounded-full bg-rose-400 transition-transform duration-300"
                :class="{ 'scale-150': hoveredIndex === index }"
              ></div>
              <p 
                class="text-base md:text-lg text-gray-700 font-light leading-relaxed transition-colors duration-300"
                :class="{ 'text-rose-900': hoveredIndex === index }"
              >
                {{ advantage }}
              </p>
            </div>
          </div>

          <button 
            @click="handleDiscover"
            class="mt-8 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-light text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-fit"
          >
            Discover More
          </button>
        </div>

        <!-- Right Side - Product Image -->
        <div class="flex items-center justify-center relative order-1 md:order-2">
        <img src="/public/foto.png" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400;1,600&family=Poppins:wght@300;400;500&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-20px); 
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.particle-delay-1 {
  animation-delay: 100ms;
}

.particle-delay-2 {
  animation-delay: 200ms;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>