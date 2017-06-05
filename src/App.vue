<template>
  <div class="background">
    <div class="title-wrapper">
      <h2>test</h2>
    </div>
    <div class="body-wrapper">
      <div class="menu-wrapper">
        <ul class="nav nav-pills nav-stacked">
          <li role="presentation" :class="searchActive"><a @click="eg_search">Search</a></li>
          <li role="presentation" :class="addActive"><a @click="eg_add">Add</a></li>
        </ul>
      </div>
      <div class="content-wrapper">
        <div name="judge" v-if="search === true">
          <search></search>
        </div>
        <div v-if="add === true">
          <add></add>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import search from './components/search';
  import add from './components/add';
  export default {
    data() {
      return {
        searchActive: "active",
        addActive: "",
        add: false,
        search: false
      }
    },
    methods: {
      eg_add () {
        this.add = true;
        this.search = false;
        this.searchActive = "";
        this.addActive = "active";
      },
      eg_search () {
        this.add = false;
        this.search = true;
        this.searchActive = "active";
        this.addActive = "";
      }
    },
    components: {
      search,
      add
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.background
  position: absolute
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
  background: #fff
  .title-wrapper
    position: relative
    flex: 0 0 100px
    background: rgb(245,246,235)
    h2
      margin 0
      padding 0
      margin-left 12px
      line-height 100px
  .body-wrapper
    flex: 1
    display: flex
    .menu-wrapper
      flex: 0 0 200px
      background #EFF0DC
      padding 10px 10px
      a
        text-align center
    .content-wrapper
      flex: 1
</style>
