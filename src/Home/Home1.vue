<template>
  <div
    class="relative min-h-screen w-full bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden"
  >
    <!-- Background efek blur -->
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
      :style="{ animationDelay: '1s' }"
    ></div>

    <!-- Konten utama -->
    <div
      class="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div class="max-w-6xl w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Gambar -->
          <div class="flex justify-center gap-8 order-2 md:order-1">
            <div
              class="transform hover:scale-105 transition-all duration-500 hover:-rotate-3"
            >
              <div
                class="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90"
              >
                <div
                  class="w-48 h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center"
                >
                  <img src="../assets/foto1.png" alt="foto1" />
                </div>
              </div>
            </div>
            <div
              class="transform hover:scale-105 transition-all duration-500 hover:rotate-3 mt-8"
            >
              <div
                class="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90"
              >
                <div
                  class="w-48 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center"
                >
                  <img src="../assets/foto2.png" alt="foto2" />
                </div>
              </div>
            </div>
          </div>

          <!-- Teks -->
          <div class="space-y-8 order-2 md:order-2 text-center md:text-left">
            <div class="inline-block">
              <span
                class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg"
              >
                Signature Collection
              </span>
            </div>

            <h1 class="text-6xl md:text-7xl font-bold tracking-tight">
              <span
                class="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                BOMBSHELL
              </span>
            </h1>

            <p class="text-xl text-gray-600 font-light">
              Unforgettable Elegance
            </p>

            <p class="text-gray-600 text-lg leading-relaxed max-w-lg">
              Bring unforgettable charm. Each spray carries an exclusive
              fragrance that exudes elegance and confidence. Experience the
              perfect blend of sophistication and allure.
            </p>

            <!-- Fitur -->
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <div class="bg-white rounded-xl px-4 py-2 shadow-md">
                <span class="text-sm font-medium text-gray-700"
                  >✨ Long-lasting</span
                >
              </div>
              <div class="bg-white rounded-xl px-4 py-2 shadow-md">
                <span class="text-sm font-medium text-gray-700"
                  >🌸 Floral Notes</span
                >
              </div>
              <div class="bg-white rounded-xl px-4 py-2 shadow-md">
                <span class="text-sm font-medium text-gray-700"
                  >💎 Premium Quality</span
                >
              </div>
            </div>

            <!-- Tombol -->
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                @click="openModal = true"
                class="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span class="relative z-10">Shop Now</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>

              <button
                class="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-pink-300"
              >
                Learn More
              </button>
            </div>

            <!-- Trust Indicators -->
            <div
              class="flex items-center gap-6 justify-center md:justify-start text-sm text-gray-600 pt-4"
            >
              <div class="flex items-center gap-2">
                <span class="text-yellow-500">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
              <div class="h-4 w-px bg-gray-300"></div>
              <div><span class="font-semibold">10K+</span> Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave background -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="w-full"
      >
        <path
          fill="rgba(236, 72, 153, 0.1)"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>

    <!-- Modal Platform -->
    <transition name="fade">
      <div
        v-if="openModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        @click.self="openModal = false"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl p-6 w-80 transform scale-95 opacity-0 animate-fadeIn"
        >
          <h2 class="text-xl font-bold text-gray-800 mb-4 text-center">
            Pilih Platform Belanja
          </h2>

          <div class="space-y-3">
            <a
              href="https://shopee.co.id"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-orange-500 text-white rounded-xl hover:scale-105 transform transition"
            >
              🛒 Shopee
            </a>
            <a
              href="https://tokopedia.com"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-green-500 text-white rounded-xl hover:scale-105 transform transition"
            >
              🏬 Tokopedia
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-black text-white rounded-xl hover:scale-105 transform transition"
            >
              🎥 TikTok Shop
            </a>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:scale-105 transform transition"
            >
              🌐 Website
            </a>
          </div>

          <button
            @click="openModal = false"
            class="mt-5 w-full py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const openModal = ref(false)
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
