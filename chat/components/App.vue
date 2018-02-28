<style src="../chat.css"></style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script type="text/javascript">
	import ThreadSection from './ThreadSection.vue'
	import MessageSection from './MessageSection.vue'

	export default {
		name:'App',
		components:{
			ThreadSection,
			MessageSection
		}
	}
</script>