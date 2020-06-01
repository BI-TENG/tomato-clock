<template>
  <div id="app">
<router-view/>
    <div id="nav">
      <circle-menu type="middle-around" :number='4' mask='black' circle btn colors="[ 'rgb(255, 255, 102)', '#A7425C', '#FFE26F', 'F3825F', '#F19584']">
      <router-link to="/" slot="item_1">Home</router-link> |
      <router-link to="/list" slot="item_2">清單</router-link> |
      <router-link to="/settings" slot="item_3">設定</router-link> |
      <router-link to="/" slot="item_4"></router-link> |
    </circle-menu>
    </div>
  </div>
</template>
