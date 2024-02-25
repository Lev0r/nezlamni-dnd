<template>
  <v-app>
    <v-main>
      <router-view></router-view>

      <v-bottom-navigation>
        <v-btn to="/">
          <v-icon>mdi-history</v-icon>
          <span>Info</span>
        </v-btn>

        <v-btn to="/resources">
          <v-icon>mdi-heart</v-icon>
          <span>Resources</span>
        </v-btn>

        <v-btn to="/inventory">
          <v-icon>mdi-map-marker</v-icon>
          <span>Inventory</span>
        </v-btn>

        <v-btn>
          <v-icon>mdi-map-marker</v-icon>
          <span>More</span>
          <v-menu>
            <v-list>
              <v-list-item>
                Nani?
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>

export default {
}
</script>
