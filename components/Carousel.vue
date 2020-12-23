<template>
  <div class="carousel">
    <div class="carousel__slide active">
      <picture>
        <source media="(max-width: 768px)" srcset="/images/hero-slide-01--768px.jpg" />
        <img src="/images/hero-slide-01.jpg" alt="Hero Slide 01" class="carousel__slide__image" />
      </picture>
    </div>
    <div class="carousel__slide">
      <picture>
        <source media="(max-width: 768px)" srcset="/images/hero-slide-02--768px.jpg" />
        <img src="/images/hero-slide-02.jpg" alt="Hero Slide 02" class="carousel__slide__image" />
      </picture>
    </div>
    <div class="carousel__slide">
      <picture>
        <source media="(max-width: 768px)" srcset="/images/hero-slide-03--768px.jpg" />
        <img src="/images/hero-slide-03.jpg" alt="Hero Slide 03" class="carousel__slide__image" />
      </picture>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const slides = [...document.querySelectorAll('.carousel__slide')]
      const maxCounter = slides.length

      let counter = 1

      setInterval(() => {
        counter++

        slides.forEach((slide) => {
          if (slide.classList.contains('active')) {
            slide.classList.remove('active')
          }
        })
        
        slides[counter - 1].classList.add('active')

        if (counter === maxCounter) {
          counter = 0
        }
      }, 3000)
    }
  }
</script>

<style scoped lang="scss">
  .carousel {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    &__slide {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      height: 100%;
      width: 100%;
      transition: opacity 300ms ease-in;

      &.active {
        opacity: 1;
      }
    }
  }
  .carousel__slide__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @supports (object-fit: cover) {
      object-fit: cover;
    }
  }
</style>