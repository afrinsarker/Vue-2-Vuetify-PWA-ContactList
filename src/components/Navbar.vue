<template>
 
</template>

<script>
export default {
  name: "Navbar",
  props:{
   
    },
    data () {
      return {
      right: null,
      right: false,
      left: null,
      left: false,
      loggedIn:false,
    }
    },
}
</script>

<style >
.removeLine{
    text-decoration: none;
    color: grey;
 }
 span:hover {
  cursor: pointer;
  color: gray;
}
</style>
