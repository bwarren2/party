<template>
  <div>
  {{party['.key']}}
  </div>
</template>

<script>
// import {db} from '@/firebase-config'
console.log(process.env)
export default {
  data () {
    return {
      msg: 'I am a party!'
    }
  },
  props: {
    party: {
      required: true,
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
