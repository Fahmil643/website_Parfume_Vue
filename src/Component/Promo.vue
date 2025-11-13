<script setup>
const products = [
  {
    id: 1,
    title: "Paket Hemat",
    price: "Rp 200.000",
    description:
      "Victoria's Secret Bombshell Eau de Parfum is a top-selling fragrance known for its fresh, fruity-floral scent that appeals to a wide range of users. Its blend of passion fruit, peony, and vanilla orchid offers a vibrant yet elegant aroma, making it suitable for both daily wear and special occasions.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.5v73JBf8d6AwHyLW_sgdKAHaJ4?pid=Api&P=0&h=220",
    promo: true,
  },
  {
    id: 2,
    title: "Paket Harum Alami",
    price: "Rp 200.000",
    description:
      "Victoria's Secret Bombshell Eau de Parfum is a top-selling fragrance known for its fresh, fruity-floral scent that appeals to a wide range of users. Its blend of passion fruit, peony, and vanilla orchid offers a vibrant yet elegant aroma, making it suitable for both daily wear and special occasions.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.RzfBPurnKg7m9xpHj7f6IwHaLH?pid=Api&P=0&h=220",
    promo: true,
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10 space-y-10">
    <div
      v-for="product in products"
      :key="product.id"
      class="flex bg-white shadow-md rounded-2xl p-6 w-[700px] max-w-full hover:shadow-lg transition"
    >
      <!-- Gambar Produk -->
      <div class="relative w-1/3">
        <img :src="product.image" alt="Product" class="rounded-xl w-full h-full object-cover" />

        <!-- Icon Diskon Elegan -->
        <div
          v-if="product.promo"
          class="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-yellow-300"
        >
          <span class="drop-shadow-sm tracking-wide font-serif">Disc 10%</span>
        </div>
      </div>

      <!-- Detail Produk -->
      <div class="w-2/3 pl-6 flex flex-col justify-between">
        <div>
          <h2 class="text-xl font-semibold text-gray-800">{{ product.title }}</h2>
          <p class="text-gray-600 mt-1 font-medium">{{ product.price }}</p>
          <p class="text-gray-500 text-sm mt-3 leading-relaxed">{{ product.description }}</p>
        </div>
        <!-- Tombol Elegan -->
        <button
          class="self-start mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-semibold py-2 px-5 rounded-md shadow-md transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 hover:from-yellow-500 hover:to-yellow-700"
        >
          Shop Now
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Responsif */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }
  .w-1\/3 {
    width: 100%;
  }
  .w-2\/3 {
    width: 100%;
    padding-left: 0;
    margin-top: 1rem;
  }
}
</style>
