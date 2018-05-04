<template>
  <div class="my-application">
    <header-template></header-template>
    <navigation-template></navigation-template>
    <router-view></router-view>
  </div>
</template>

<script>
  import './app.scss';

  import HeaderTemplate from './templates/Header/Header.vue';
  import NavigationTemplate from './templates/Navigation/Navigation.vue';
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

<style lang="scss"></style>
