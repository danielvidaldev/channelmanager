<template>
  <Layout>
    <h1 class="font-semibold text-xl">Channels</h1>
    <ChannelManager />
  </Layout>
</template>

<script>
import ChannelManager from './components/ChannelManager.vue'
import Layout from './layouts/Layout.vue'

export default {
  name: 'App',
  components: {
    ChannelManager,
    Layout,
  }
}
</script>