<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-lavender-50 to-pink-50">
    <!-- Header Section -->
    <div class="relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div class="absolute top-40 left-1/2 w-80 h-80 bg-lavender-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <!-- Header Content -->
      <div class="relative pt-20 pb-16 px-4">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-block mb-4">
            <span class="text-purple-600 text-sm font-semibold tracking-widest uppercase bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
              Premium Fragrance Collection
            </span>
          </div>
          <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Boombshell Parfume
          </h1>
          <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the enchanting essence of lavender fields captured in every bottle. 
            A timeless fragrance that speaks of elegance and sophistication.
          </p>
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <div class="relative px-4 pb-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :title="product.title"
            :description="product.description"
            :image="product.image"
            :style="{ animationDelay: `${index * 150}ms` }"
            class="fade-in-up"
          />
        </div>
        
      </div>
    </div>

    <!-- Features Section -->
    <div class="relative px-4 pb-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white/60 backdrop-blur-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Long-Lasting</h3>
            <p class="text-gray-600">Extraordinary aroma that lasts all day long</p>
          </div>

          <div class="bg-white/60 backdrop-blur-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Natural Ingredients</h3>
            <p class="text-gray-600">Made from the finest lavender flowers</p>
          </div>

          <div class="bg-white/60 backdrop-blur-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
            <p class="text-gray-600">Crafted with care and expertise</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './Productcard.vue';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          title: "Boobleshell Parfume",
          description: "Making the extraordinary and long-lasting aroma of Lovender flowers",
          image: "https://tse4.mm.bing.net/th/id/OIP.ohUls-rQez5DoZvvYwdN6wHaHa?pid=Api&P=0&h=220"
        },
        {
          title: "Boobleshell Parfume",
          description: "Making the extraordinary and long-lasting aroma of Lovender flowers",
          image: "https://tse3.mm.bing.net/th/id/OIP.IkZ-jYeUKH4GvT6COVeDgQHaKA?pid=Api&P=0&h=220"
        },
        {
          title: "Boobleshell Parfume",
          description: "Making the extraordinary and long-lasting aroma of Lovender flowers",
          image: "https://tse3.mm.bing.net/th/id/OIP.eVPD1d84yqk_sQ5KGxxJVQAAAA?pid=Api&P=0&h=220"
        }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s ease infinite;
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Custom colors for lavender theme */
.from-lavender-50 {
  --tw-gradient-from: #f5f3ff;
}

.bg-lavender-200 {
  background-color: #ddd6fe;
}
</style>