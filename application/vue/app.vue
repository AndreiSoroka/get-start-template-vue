<template>
  <div class="my-application">
    <header-template></header-template>
    <navigation-template></navigation-template>
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>

<script>
  import './app.scss';

  import HeaderTemplate from './template/Header/index.vue';
  import NavigationTemplate from './template/Navigation/index.vue';
  import {mapState} from 'vuex';


  export default {
    components: {
      HeaderTemplate,
      NavigationTemplate,
    },
    data() {
      return {};
    },

    computed: {
      ...mapState({})
    },
    methods: {},
  };
</script>
