<template>
    <Page>
        <ActionBar class="ac"  title="Detail"/>
        <ScrollView orientation="vertical">
        <StackLayout >
        <Label row="1" col="2" :text="item.title"  class='title_style'/>
			  <Image row="1" col="2" :src="'~/assets/images/'+item.image+'.png'" class="image_style  " />
        <FlexboxLayout flexDirection="column" backgroundColor="whitesmoke"   justifyContent="space-around">
          <TextView class="input" hint="text" keyboardType="text" autocorrect="false" autocapitalizationType="none" v-model="item.description"
              fontSize="18"/>
          <WrapLayout >
              <Label text="Contenu :" height="40" class="label_style"/>  
              <TextField class="input" hint="text" keyboardType="text" autocorrect="false" autocapitalizationType="none" v-model="item.content"
                  fontSize="18" />
          </WrapLayout>
          <WrapLayout >
              <Label text="Categorie :" height="40"  class="label_style"/> 
                <TextField class="input" hint="number" keyboardType="number" autocorrect="false" autocapitalizationType="none" v-model="item.category"
                  fontSize="18" />
          </WrapLayout>
          <WrapLayout >
              <Label text="Note :" height="40"  class="label_style"/> 
              <WrapLayout v-if="item.rating == 1">
                {{item.rating}}
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />

              </WrapLayout>
              <WrapLayout v-if="item.rating == 2">
                {{item.rating}}
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
              </WrapLayout>
              <WrapLayout v-if="item.rating == 3">
                {{item.rating}}
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
              </WrapLayout>
              <WrapLayout v-if="item.rating == 4">
                {{item.rating}}
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
              </WrapLayout>
              <WrapLayout v-if="item.rating == 5">
                {{item.rating}}
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
                <Image  src="~/assets/images/etoile.png" class="etoile_style" />
              </WrapLayout>
          </WrapLayout>
          <WrapLayout v-if="item.status">
              <Label text="Status :" height="40"  class="label_style"  /> 
              <Label text="Disponible" class="label_style_status_true"/>
          </WrapLayout>
          <WrapLayout v-if="!item.status">
              <Label text="Status :" height="40"  class="label_style"  /> 
              <Label text="Indisponible" class="label_style_status_false"/>
          </WrapLayout>
	      </FlexboxLayout>
    </StackLayout>
     </ScrollView>
    </Page>
</template>
<script >
import dataFood from '../models/Data'
var dialogs = require("tns-core-modules/ui/dialogs");
  export default {
    
    props: {
        item: [],
    },
    data() {
      return {
        msg: "page de details"
      }
    },
    methods:{
      async onItemTap(e) {
      let value_item = await dialogs
        .prompt({
          title: e.content,
          message: "Modifier item :",
          okButtonText: "Ok",
          cancelButtonText: "Annuler",
          inputType: dialogs.inputType.text
        })
        .then(function(r) {
          return r.text;
        });
      if (value_item != "")
      console.log(value_item)
        this.item.description = value_item;
    }
    }
  }
</script>
<style scoped>
.ac {
        background-color: #53ba82;
        color: #ffffff;
    }
.title_style {
        font-size: 30;
	    margin: 20;    
        text-align: center;

    }
.image_style {

    height: 200;
    margin :10;
}
.etoile_style {

    height: 40;
    margin :10;
}
.label_style{
margin-left: 15;    
}
.label_style_status_true {
  color: green;
}
.label_style_status_false {
  color: red;
}
</style>