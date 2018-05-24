<style>
  @import url('../../style/index');
  @import url('../../style/transition');
</style>
<template>
  <div class="app-main" style="padding-top:36px">
    <transition name="fade" mode="out-in">
        <!-- <router-view :key="key"></router-view> -->
        <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  
}
</script>




