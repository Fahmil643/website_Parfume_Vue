<template>
  <div class="page-wrapper">
    <div class="video-container">
      <video autoplay muted loop playsinline class="background-video">
        <source src="/parfume.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="content">
        <h1>Have you ever come across a perfume whose scent lingers even after you're gone?</h1>
        <p>a natural fragrance that smells amazing</p>
      </div>
    </div>

    <!-- Konten tambahan untuk mendemonstrasikan scroll -->

  </div>
</template>

<script>
export default {
  mounted() {
    const content = document.querySelector('.content');
    if (content) {
      content.classList.add('show');
    }
  }
}
</script>


<style>


  .page-wrapper {
    width: 100%;
  }

  .video-container {
    position: relative;
    width: 100%;
    height: 40rem;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #fff;
    opacity: 0;
    transition: opacity 2s ease;
    padding: 0 20px;
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .content.show {
    opacity: 1;
  }

  .content h1 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .content p {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .additional-content {
    position: relative;
    z-index: 2;
    background: white;
    min-height: 100vh;
    padding: 4rem 2rem;
    text-align: center;
  }

  .additional-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .additional-content p {
    font-size: 1.2rem;
    color: #666;
  }

  /* Responsif untuk layar kecil */
  @media (max-width: 768px) {
    .video-container {
      height: 25rem;
    }

    .content h1 {
      font-size: 1.2rem;
    }

    .content p {
      font-size: 0.8rem;
    }

    .additional-content h2 {
      font-size: 1.8rem;
    }

    .additional-content p {
      font-size: 1rem;
    }
  }
</style>