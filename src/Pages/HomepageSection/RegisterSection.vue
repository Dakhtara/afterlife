<template>
  <div class="container mx-auto mb-40">
  <HomeTitle>Register</HomeTitle>

    <div class="my-8">
      <p>Register for more information and exclusive content</p>
      <small>This form doesn't do anything for the moment</small>
    </div>

  <form class="w-100 md:w-2/6">
    <div class="flex flex-col mb-6">
      <label for="registerName" class="mb-2">Name</label>
      <input id="registerName" class="form-input  px-2" type="text"  />
    </div>
    <div class="flex flex-col mb-6">
      <label for="registerEmail" class="mb-2">Email</label>
      <input id="registerEmail" class="form-input px-2" type="email"  />
    </div>
    <input type="submit" class="form-submit w-100 uppercase py-4 px-2" value="Subscribe" />
  </form>
  </div>
</template>

<script setup lang="ts">
import HomeTitle from "../../components/HomeTitle.vue";
</script>

<style lang="scss">

.form-input {
  background: rgba(34, 52, 73, .8);
  min-height: 3rem;
  border: 1px solid #fff;
}

.form-submit {
  background: transparent;
  width: 100%;
  border: 2px solid #fff;
}

</style>
