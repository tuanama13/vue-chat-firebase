<template>
  <q-page class="row text-center flex-center">
    <div class="col-12">
      <q-avatar size="200px" icon="mark_chat_read" />
      <span class="text-h4">
        Vue + Firebase Chat App
      </span>
    </div>
    <div class="col-12 ">
      <q-btn
        color="primary"
        label="Start Chat"
        icon-right="arrow_right_alt"
        @click="$router.push('/chat')"
        no-caps
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
