<template>
  <div>
    <button @click="openWindow">open waiting</button>
  </div>
</template>

<script>
export default {
  name: "TestData",
  methods: {
    openWindow() {
      var external = window.open(
        "",
        "external",
        "width=450,height=600,left=100,top=50"
      );
      external.ProcessParentMessage("Message to the child");
    },
  },
};
</script>
