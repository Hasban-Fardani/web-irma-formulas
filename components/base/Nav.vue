<template lang="">
  <nav class="navbar bg-base-100 p-4">
    <div class="flex-1">
      <nuxt-link to="/" class="flex items-center gap-2 normal-case text-xl">
        <img src="/img/logo-irma.png" alt="" class="w-[50px] h-auto" />
        IRMA FORMULAS
      </nuxt-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <nuxt-link to="/about">
          About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/pemiros">
          Pemiros
        </nuxt-link>
      </li>
        
      </ul>
    </div>
  </nav>
</template>

<style lang="css">
nav {
  box-shadow: 0 3px 6px -6px #222;
}
</style>
