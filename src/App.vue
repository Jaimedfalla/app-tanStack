<script setup lang="ts">
import { RouterView } from 'vue-router';
import IconPinia from '@/shared/components/icons/IconPinia.vue';
</script>

<template>
  <header>
    <icon-pinia />

    <div class="wrapper">
      <h3>Pinia App</h3>

      <nav> 
        <router-link :to="{name:'home'}">Counter Options</router-link>
        <router-link :to="{name:'counter-2'}">Counter Setup</router-link>
        <router-link :to="{name:'clients'}">Clients</router-link>
      </nav>
    </div>
  </header>
  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
