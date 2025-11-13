<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <!-- Left Sidebar - Variant Links -->
        <div class="w-full md:w-1/4 bg-gray-200 p-6">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Variants</h3>
          <ul class="space-y-2">
            <li v-for="variant in Object.keys(variantData)" :key="variant">
              <button
                @click="selectedVariant = variant"
                :class="[
                  'w-full text-left px-4 py-2 rounded transition-colors',
                  selectedVariant === variant
                    ? 'bg-violet-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-pink-100'
                ]"
              >
                {{ variant }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Right Side - Product List -->
        <div class="w-full md:w-3/4 p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            {{ selectedVariant }}
          </h2>

          <!-- Scrollable area -->
          <div class="max-h-[500px] overflow-y-auto space-y-6 pr-2">
            <div
              v-for="(product, index) in variantData[selectedVariant]"
              :key="index"
              class="bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <!-- Product Image -->
              <div class="flex justify-center mb-4">
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>

              <!-- Product Title -->
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ product.title }}
              </h3>

              <!-- Product Description -->
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ product.description }}
              </p>

              <!-- Rating Section -->
              <div>
                <h4 class="text-sm text-gray-600 mb-2">Rating / Ulasan</h4>
                <div class="flex gap-1">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    :class="[
                      'w-6 h-6',
                      star <= product.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    ]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
                      00.95.69h3.462c.969 0 
                      1.371 1.24.588 1.81l-2.8 2.034a1 1 0 
                      00-.364 1.118l1.07 
                      3.292c.3.921-.755 1.688-1.54 
                      1.118l-2.8-2.034a1 1 0 
                      00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                      1 0 
                      00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                      1 0 
                      00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Selected Variant Info -->
          <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Selected:</span> {{ selectedVariant }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const selectedVariant = ref('Flora Variant')

// Data varian produk
const variantData = {
  'Flora Variant': [
    {
      title: 'Bombshell Flora 1',
      description: 'Aroma floral lembut dengan peony dan jasmine.',
      image:
        'https://ceklist.id/wp-content/uploads/2023/12/Parfum-Bubble-Gum.jpg',
      rating: 0
    },
    {
      title: 'Bombshell Flora 2',
      description: 'Wangi bunga mawar segar dan lembut.',
      image:
        'https://images.unsplash.com/photo-1600181953663-7a50f3c7c1ff?w=300&h=300&fit=crop',
      rating: 0
    },
    {
      title: 'Bombshell Flora 3',
      description: 'Kombinasi peony dan violet.',
      image:
        'https://images.unsplash.com/photo-1612817159949-196d6e203fe3?w=300&h=300&fit=crop',
      rating: 0
    },
    {
      title: 'Bombshell Flora 4',
      description: 'Sentuhan bunga lily yang lembut.',
      image:
        'https://images.unsplash.com/photo-1616627985486-0a6c8a94b445?w=300&h=300&fit=crop',
      rating: 0
    },
    {
      title: 'Bombshell Flora 5',
      description: 'Wangi elegan dengan nuansa jasmine.',
      image:
        'https://images.unsplash.com/photo-1618498082499-301e1e819b4a?w=300&h=300&fit=crop',
      rating: 0
    }
  ],
  'Fruity Variant': [
    {
      title: 'Bombshell Fruity 1',
      description: 'Perpaduan strawberry dan vanilla yang manis.',
      image:
        'https://images.unsplash.com/photo-1556228578-ead5c6e0a1e4?w=300&h=300&fit=crop',
      rating: 0
    },
    {
      title: 'Bombshell Fruity 2',
      description: 'Wangi manis dengan nuansa apel segar.',
      image:
        'https://images.unsplash.com/photo-1567174052270-1bdee2c54099?w=300&h=300&fit=crop',
      rating: 0
    },
    {
      title: 'Bombshell Fruity 3',
      description: 'Kombinasi berry dan citrus yang menggoda.',
      image:
        'https://images.unsplash.com/photo-1588195548863-24e8917a1e3b?w=300&h=300&fit=crop',
      rating: 0
    }
  ],
  'Fresh Variant': [
    {
      title: 'Bombshell Fresh 1',
      description: 'Aroma citrus dan bunga segar.',
      image:
        'https://images.unsplash.com/photo-1596464716121-f1c1d2b9f9e2?w=300&h=300&fit=crop',
      rating: 0
    },
    {
      title: 'Bombshell Fresh 2',
      description: 'Wangi segar seperti udara pagi.',
      image:
        'https://images.unsplash.com/photo-1587814213275-f0b65e721b1a?w=300&h=300&fit=crop',
      rating: 0
    }
  ]
}

// Saat komponen dimuat, acak rating tiap produk (antara 3–5)
onMounted(() => {
  Object.values(variantData).forEach(variant =>
    variant.forEach(product => {
      product.rating = Math.floor(Math.random() * 3) + 3 // hasil: 3, 4, atau 5
    })
  )
})
</script>
