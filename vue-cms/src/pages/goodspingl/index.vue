<template>
     <comment :id="id"></comment>
</template>
<script>
import comment from '../../components/comment'
export default {
    data(){
       return {
           id:this.$route.params.id
       }
    },
    components:{
          comment
    }
}
</script>
<style>

</style>
