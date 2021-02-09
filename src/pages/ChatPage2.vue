<template>
  <div class="q-pa-md row justify-center">
    <div class="col-6" style="height: 70vh;">
      <q-scroll-area
        @scroll="scrollPosition"
        ref="scroll"
        style="height: 79vh;"
      >
        <q-chat-message label="Sunday, 19th" />

        <div v-for="(item, index) in allMessages" :key="index">
          <q-chat-message
            v-if="item.userId == 2"
            :name="item.user.name"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[item.message]"
            sent
            stamp="7 minutes ago"
          />
          <q-chat-message
            v-else
            :name="item.user.name"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="[item.message]"
            stamp="4 minutes ago"
          />
        </div>
      </q-scroll-area>
      <q-input
        @keyup.enter="sendMessage"
        outlined
        bottom-slots
        v-model="message"
        :dense="dense"
      >
        <template v-slot:append>
          <q-icon
            v-if="message !== ''"
            name="close"
            @click="message = ''"
            class="cursor-pointer"
          />
        </template>

        <template v-slot:after>
          <q-btn @click="sendMessage" round :dense="dense" flat icon="send" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPage",
  data() {
    return {
      allMessages: [],
      message: "",
      // user: {
      //   id: 1,
      //   name: "Joko"
      // },
      user: {
        id: 2,
        name: "Jono"
      },
      ph: "",

      dense: false
    };
  },
  created() {
    this.fetchMessage();
  },
  methods: {
    async fetchMessage() {
      await this.$db
        .collection("chats")
        .orderBy("createdAt")
        .onSnapshot(result => {
          let allMessages = [];
          result.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            allMessages.push(doc.data());
            // console.log(doc.id, " => ", doc.data());
          });
          this.allMessages = allMessages;
          this.$refs.scroll.setScrollPosition(909, 1);
        });
      this.$refs.scroll.setScrollPercentage(1);
    },
    sendMessage() {
      // Add a new document in collection "cities"
      this.$db.collection("chats").add({
        userId: this.user.id,
        user: this.user,
        message: this.message,
        createdAt: new Date()
      });
      this.message = null;
      this.fetchMessage();
    },
    scrollPosition(e) {
      // console.log(this.$refs.scroll);
    }
  }
};
</script>

<style></style>
