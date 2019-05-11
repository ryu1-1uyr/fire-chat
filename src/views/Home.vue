<template>
  <div class="home">
    <h1>俺たちがチャットルム一覧だ！！！！</h1>
    <input type="button" value="新しくチャットルームを作ろうと思うんだ" />
  
  
  <ul v-for="(room,i) in rooms" :key="'room-id-'+i">
    <li>
      <p>{{room.name}}</p>
      <p>{{room.num}}</p>
      <input type="button" value="じょいんじょいんとき" >
    </li>
  </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import firebase, { firestore } from 'firebase';

export default {
  name: "home",
  components: {
    HelloWorld
  },
  
  created() {
    firebase
    .firestore()
    .collection("rooms")
    .get()
    .then(ss => {
      const rooms = [];

      ss.docs.forEach(room => {
        rooms.push( room.data() )
      })

      this.rooms = rooms
    });
  },

  data () {
    return {
      rooms:[],
    }
  },
};
//この書き方するとめちゃくちゃ実行速度が遅くなるけど…
</script>

