<template>
  <div>
  {{msg}}
  <Party v-for="party in parties" :party="party" :key="party.id"/>
  </div>
</template>

<script>
import {db} from '@/firebase-config'
import Party from '@/components/Party'
export default {
  data () {
    return {
      msg: 'It\'s a party!'
    }
  },
  firebase: {
    parties: {
      source: db.ref('parties'),
      cancelCallback (err) {
        console.error(err)
      }
    }
  },
  components: {
    Party
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
