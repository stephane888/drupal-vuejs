<template>
  <!-- Apres une connexion rx, on demande les informations supplementaires. -->
  <div
    class="block-center"
    v-if="stepe === 'final-fb-register' || stepe === 'final-gl-register'"
    :key="'checkstatus'"
  >
    <div class="content-center">
      <a class="content-center__img" href="/">
        <img :src="urlLogo" alt="" />
      </a>
      <p>Finaliser votre connexion</p>
      <ValidationProvider
        v-for="(temp, i) in templates"
        :key="i"
        class="content-center__input"
        v-slot="v"
        :ref="temp.ref"
      >
        <component :is="temp"></component>
        <div class="text-danger text-small">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>

      <div class="content-center__btn">
        <div class="btn-login btn-login--connexion" @click="finalRegister">
          <span class="btn-login__text">
            {{ messages.submit.final }}
          </span>
          <svgWaiting v-if="waiting == 'wait'"></svgWaiting>
        </div>
      </div>
    </div>
  </div>
</template>
