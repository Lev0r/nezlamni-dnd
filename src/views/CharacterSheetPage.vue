<script setup lang="ts">
import {Character} from "@/models/character";

const character = loadCharacterFromDb(5);

function loadCharacterFromDb(id: number): Character {
  return {
    name: "Darius",
    age: 28
  };
}
</script>

<template>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-card-title>{{character.name}}</ion-card-title>
      <ion-card-subtitle>Age: {{character.age}}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
</template>

<style scoped>

</style>
