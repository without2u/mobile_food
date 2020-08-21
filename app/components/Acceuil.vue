<template>
    <Page>
        <ActionBar class="ac"  title="Acceuil"/> 
         <StackLayout backgroundColor="white">
        <Button text="Ajouter un item" @tap="onTapCreate" height="70"/>
        <Switch checked="true" class='filtre_style'/>
        <ListView for="item in listeItems" @itemTap="showDetails" >
            <v-template>
                	<GridLayout  rows="*" columns="auto, *" :backgroundColor="getFoodStar" verticalAlignment="stretch">
                        <Label class= "title_style" row="0" col="0" :text="item.title"  />
						<Image class= "image_style" row="0" col="1" :src="'~/assets/images/'+item.image+'.png'" />
					</GridLayout>
            </v-template>
        </ListView>
         </StackLayout>
    </Page>
</template>
<script >

 /*<v-template>
            <FlexboxLayout flexDirection="row">
                <Label :text="item.name" class="t-12" style="width: 60%" />
            </FlexboxLayout>
        </v-template>*/
import DetailVue from './Detail'
import dataFood from '../models/Data'
import ItemF from '../models/ItemF'
var dialogs = require("tns-core-modules/ui/dialogs");
  export default {
      components: {
      DetailVue
    },
    data() {
      return {
        msg: "page d'accueil",
        isActive: true,
        hasError: true,
        listeItems:
            dataFood
      }
    },
    computed:{
        getFoodStar(){
           
        this.listeItems.forEach(element => {
            if(element.rating == 5){
                return '#3c495e'
            }else {
                return 'white'
            }
        });
           
        }
    },
    methods:{
        //naviger vers la deuxieme page
        showDetails(event){

            this.$navigateTo(DetailVue,{
				props: {
					item: event.item
				},
				animated: true,
				transition: {
					name: "slideLeft",
					duration: 380,
					curve: "easeIn"
				}
            })
        },
          //ajouter un item
    async onTapCreate(e) {
      let nameList = await dialogs
        .prompt({
          title: "ajouter un item",
          message: "Ajouter un nom :",
          okButtonText: "Ok",
          cancelButtonText: "Annuler",
          inputType: dialogs.inputType.login
        })
        .then(function(r) {
          return r.text;
        });
      if (nameList != "") this.listeItems.unshift(new ItemF(6, nameList, 'description', 'fast food', 1, nameList, 5, true)  );
    },
    //supprimer un item
    async onTapDelete(e) {
        let nameList = await dialogs
        .confirm({
            title: "Your title",
            message: "Your message",
            okButtonText: "Your OK button text",
            cancelButtonText: "Your Cancel text"
            }).then(result => {
            console.log(result);
            });
        }
    }
  }
</script>
<style scoped>
.ac {
        background-color: #53ba82;
        color: #ffffff;
    }
 .image_style {

        height: 40;
        margin :10;
    }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
    .title_style {
        font-size: 18;
	    margin-left: 15;    
        vertical-align: center;

    }
    .grid_style{
        background-color: getFoodStar();
    }
    .filtre_style{
        text-align: right;
    }
</style>