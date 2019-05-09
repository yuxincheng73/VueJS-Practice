<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home </router-link> |
      <router-link to="/todo"> Todo </router-link> |
      <router-link to="/shoppingCart"> ShoppingCart </router-link> |
      <router-link to="/videos"> Videos </router-link> |
      <router-link to="/forums"> Community Forums </router-link> |
      <span>
        <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
          <b-dropdown-item to="/profile">Your Profile</b-dropdown-item>
          <b-dropdown-item to="/profile/settings">Settings</b-dropdown-item>
          <b-dropdown-item to="/">Sign Out</b-dropdown-item>
        </b-dropdown>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
