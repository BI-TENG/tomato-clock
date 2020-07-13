<template>
  <div id="app" class="h-100">
    <div class="h1 d-flex justify-content-center my-3">Home</div>
    <b-container class="h-100">
      <b-row class="h-100">
        <router-view></router-view>
      </b-row>
    </b-container>
    <div id="nav" class="d-flex justify-content-start fixed-bottom">
      <circle-menu type="left" :number='3' circle btn :colors="[ '#F27141', '#F2441D', '#F29422', '#734646' ]">
        <router-link to="/" slot="item_1">
          <font-awesome-icon class="text-white" size=2x :icon="['fas', 'home']" />
        </router-link> |
        <router-link to="/list" slot="item_2">
          <font-awesome-icon class="text-white" size=2x :icon="['fas', 'list-ul']" />
        </router-link> |
        <router-link to="/settings" slot="item_3">
          <font-awesome-icon class="text-white" size=2x :icon="['fas', 'music']" />
        </router-link> |
      </circle-menu>
    </div>
  </div>
</template>

<style lang="stylus" scoped>

</style>
