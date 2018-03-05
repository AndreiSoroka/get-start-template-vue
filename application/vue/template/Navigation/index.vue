<template>
  <div class="my-navigation nav nav-pills">
    <router-link
      class="nav-link"
      to="/">Home</router-link>
    <router-link
      class="nav-link"
      to="/not_found/">NotFound</router-link>
  </div>
</template>

<style lang="scss"></style>

<script>
  import './style.scss';

  import {mapState} from 'vuex';

  export default {
    components: {},
    data() {
      return {};
    },

    computed: {
      ...mapState({})
    },
    methods: {},
  };
</script>
