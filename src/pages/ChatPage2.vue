<template>
  <div class="q-pa-md row justify-center">
    <div class="col-6" style="height: 70vh;">
      <q-scroll-area
        @scroll="scrollPosition"
        ref="scroll"
        style="height: 75vh;"
        class="q-px-md"
      >
        <!-- <q-chat-message label="Sunday, 19th" /> -->
        <div v-for="(item, index) in allMessages" :key="index">
          <q-chat-message
            v-if="item.userId == 2"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            sent
            stamp="7 minutes ago"
          >
            {{ item.message }}
            <img v-if="item.image" :src="item.image" height="100px" />
          </q-chat-message>
          <q-chat-message
            v-else
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            stamp="4 minutes ago"
          >
            {{ item.message }}
            <img v-if="item.image" :src="item.image" height="100px" />
          </q-chat-message>
        </div>
      </q-scroll-area>
      <div class="q-py-md">
        <q-input
          @keyup.enter="sendMessage"
          outlined
          bottom-slots
          v-model="message"
        >
          <template v-slot:append>
            <q-btn
              @click="$refs.FileInput.pickFiles()"
              round
              :dense="dense"
              flat
              icon="attach_file"
            />
            <q-btn @click="sendMessage" round :dense="dense" flat icon="send" />
          </template>
        </q-input>
      </div>
      <q-file
        ref="FileInput"
        style="display:none"
        v-model="file"
        @input="uploadImage"
        accept=".jpg, image/*"
      />
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
      user: {
        id: 2,
        name: "Jono"
      },
      file: null,
      dense: false
    };
  },
  created() {
    this.fetchMessage();
  },
  methods: {
    async fetchMessage() {
      if (this.allMessages.legth != 0) {
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
      }
    },
    sendMessage() {
      // Add a new document in collection "cities"
      this.$db.collection("chats").add({
        userId: this.user.id,
        user: this.user,
        message: this.message,
        image: this.file
          ? "https://firebasestorage.googleapis.com/v0/b/vue-chat-4681a.appspot.com/o/" +
            image +
            "?alt=media"
          : null,
        createdAt: new Date()
      });
      this.message = null;
      this.file = null;
      this.fetchMessage();
    },
    uploadImage(file) {
      // Add a new document in collection "cities"
      const ref = this.$firebase
        .storage()
        .ref()
        .child(file.name);

      // [START storage_upload_blob]
      // 'file' comes from the Blob or File API
      ref.put(file).then(snapshot => {
        console.log("Uploaded a blob or file!");
        this.sendMessage(file.name);
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
