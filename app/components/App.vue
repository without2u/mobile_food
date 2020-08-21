<template>
    <Page>
       <AcceuilVue></AcceuilVue>
    </Page>
</template>

<script >
import AcceuilVue from './Acceuil'

  export default {
    components: {
      AcceuilVue
    },
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
  /*showItem(payload) {
			this.$navigateTo(ItemDetails,{
				props: {
					item: payload
				},
				animated: true,
				transition: {
					name: "slideTop",
					duration: 380,
					curve: "easeIn"
				}
			})
		}, */
</script>

<style scoped>
    

   
</style>
