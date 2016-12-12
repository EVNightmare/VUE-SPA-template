<template>
	<div class="detailWrap" >	
	<div class="leftWrap">
		<div class="frameWrap">
		  <iframe :srcdoc="frameDoc" frameborder=0 height="640" width="360"></iframe>
    </div>
	</div>
	<div class="rightWrap">
    <div class="MenuWrap"></div>
    <div class="codeArea area">
      <div class="code-sect">
        <pre>{{html4Data}}</pre>
        <button class="btn btn-primary btn-copy" 
          v-clipboard:copy="html4Data" 
          :success="copySucess" :error="copyError"
        >
          复制
        </button>
      </div>
      <div class="code-sect">
        <textarea class="form-control" v-model="userImg" readonly></textarea>
        <button class="btn btn-primary btn-copy" 
          v-clipboard:copy="userImg" 
          :success="copySucess" :error="copyError"
        >
          复制
        </button>
      </div>
    </div>
	</div>
  </div>
</template>
<script>
import { getCards } from '../../vuex/actions'
import {CSSdecode,style_html} from '../../utils/format.js'
require('../../assets/scss/card_detail.css')
export default{
  route: {
    data ({ to: { params: { cid }}}) {
      // if(this.list)return
      //   return this.getCards({},(data)=>{
      //     let item = data.filter((v,i)=>{
      //       return v.id == cid
      //     })[0]
      //     console.log('item123:',item)
      //     this.item = item
      //     this.style = item.style
      //     this.container = item.html
      //   })
      
    }
  },
  vuex:{
    getters:{
      list: ({cardStore}) => cardStore.list
    },
    actions:{
      getCards
    }
  },
  data(){
  	return{
  		hd:'<!DOCTYPE html> <html> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0"> <title>感谢有你</title> <meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-status-bar-style" content="black"> <meta name="format-detection" content="telephone=no"> <link rel="shortcut icon" href="http://mp.51guanhuai.com/favicon.ico" type="image/x-icon"><link rel="stylesheet" href="//static.aghcdn.com/mp/2015/event/tgd/style/weui.css"/> <link rel="stylesheet" href="//static.aghcdn.com/mp/2015/event/tgd/style/common.css"/> <link rel="stylesheet" href="//static.aghcdn.com/mp/2015/event/tgd/style/card_style.css"/> </head> <body>',
  		style: '',
  		container:'',
      foot:'</div> <div class="weui_btn_area"> <a class="weui_btn weui_btn_warn one" href="">小小心意</a> </div> <div class="btm_link"> <a href="http://mp.51guanhuai.com/">爱关怀技术支持</a> </div> </div> </div> </div>'
  	}
  },
  watch:{
    'item':{
      handler: function (val, oldVal) {
      }
    }
  },
  computed:{
    item(){
      let it = this.list.filter((v,i)=>{
            return v.id == this.$route.params.cid
          })[0]
      this.style = it.style
      this.container = it.html
      return it
    },
  	frameDoc(){
      let st = '<style>'+this.style+'</style>'
      return this.hd+st+this.container+this.foot
    },
    style4Data(){
      return CSSdecode($(this.style).html())
    },
    userImg(){
      if(!this.container)return false
      let $c = $(this.container)
      return $c.find('#userImg').attr('src')
    },
    html4Data(){
      if(!this.container)return false
      let $c = $(this.container)
      $c.find('h3').html('[to_name]')
      // $c.find('h4').html('[from_name]')
      $c.find('.pa').html('<p>[card_wish]</p>')
      $c.find('#userImg').attr({
        'src':'[pic]',
        'style':'display: block;[pic_style]'
      })
      $c.find('source').attr('src','[sound]')
  		let text = '<style>\n'+CSSdecode(this.style)+'\n</style>'+'\n\n'+style_html($c.prop("outerHTML"))
      let re = /<\/div>\n\s+<\/div>\n\s+<\/div>\n\s{0,3}<\/div>/gi;
      let bf = /autobuffer\=\"\"/gi;
      text = text.replace(re,'').replace(bf,'autobuffer')
      return text
  	}
  },
  created(){

  },
  destory(){
  },
  methods:{
    init(data){
        this.style = data.style
        this.container = data.html
    },
    getItem(data){
      return data.filter((v,i)=>{
          return v.id = this.cid
        })[0]
    },
    copySucess(e){
      alert('复制成功')
    },
    error(e){
      alert('复制失败,请手动复制')
    }
  },
  ready(){
  }
}
</script>
<style>

</style>