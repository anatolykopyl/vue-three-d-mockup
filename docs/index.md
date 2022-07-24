---
layout: home
---

<script setup>
import Mockup from '../src/Mockup.vue'
import screenImage from './assets/screen.png';
</script>

<main>
  <Mockup
    class="mockup"
    :screen="screenImage"
  />

  <h1 class="heading">
    Vue 3D Mockup
  </h1>
  <p class="tagline">
    Create interactive 3D mockups with ease.
  </p>

  <div class="buttons">
    <a 
      href="/guide"
      class="buttons__button"
    >
      Guide
    </a>
    <a 
      href="https://github.com/anatolykopyl/vue-three-d-mockup" 
      class="buttons__button buttons__button--secondary"
    >
      Github
    </a>
  </div>
</main>

<style scoped>
main {
  text-align: center;
}

.mockup {
  max-width: 600px;
  height: 500px;
  margin: auto;
}

.heading {
  font-size: 42px;
  line-height: 1.2;
  padding: 32px;
  font-weight: bold;
  color: var(--vp-c-brand);
}

.tagline {
  font-size: 24px;
  padding: 16px;
}

.buttons {
  padding: 32px;
}

.buttons__button {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--vp-c-brand);
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-white);
  text-decoration: none;
  font-size: 16px;
  margin: 0 8px;
}

.buttons__button--secondary {
  background-color: var(--vp-c-gray-light-4);
  color: var(--vp-c-black);
  border: 1px solid var(--vp-c-divider-light-2);
}
</style>
