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
      <div class="form-sect">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="cardTitle" class="col-sm-2 control-label">贺卡标题</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="cardTitle" placeholder="eg:zq01" v-model="title">
            </div>
          </div>
        </form>
      </div>
      <div class="code-sect">
        <textarea class="textarea form-control" rows="3" v-model="style1" ></textarea>
      </div>
      <div class="code-sect">
        <textarea class="textarea form-control" rows="3" v-model="container1" ></textarea>
      </div>
    </div>
    <div class="actWrap area">
      <button class="btn btn-success btn-block btn-lg" @click="goAdd">提 交</button>
    </div>
	</div>
  </div>
</template>
<script>
import { addCard } from '../../vuex/actions'
import {CSSdecode,CSSencode,style_html} from '../../utils/format.js'
require('../../assets/scss/card_add.css')
export default{
  vuex:{
      actions:{
        addCard
      }
    },
  data(){
  	return{
  		cid: null,
      style1:'',
      container1:'',
      title:null,
  		hd:'<!DOCTYPE html> <html> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0"> <title>感谢有你</title> <meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-status-bar-style" content="black"> <meta name="format-detection" content="telephone=no"> <link rel="shortcut icon" href="http://mp.51guanhuai.com/favicon.ico" type="image/x-icon"><link rel="stylesheet" href="//static.aghcdn.com/mp/2015/event/tgd/style/weui.css"/> <link rel="stylesheet" href="//static.aghcdn.com/mp/2015/event/tgd/style/common.css"/> <link rel="stylesheet" href="//static.aghcdn.com/mp/2015/event/tgd/style/card_style.css"/> </head> <body>',
  		style:'<style>.page{background: url(http://s2.aghcdn.com/gift/cards/img/bg_gq01.jpg); background-size:100% 100%; } .card .txt {padding-top:2.6em;font-size: 16px;color:#000;} .txt .pa{padding-top:1em;padding-left:3.1em;color:#424242;color:#000;} .card .img{} .card .img .outer{padding: 0 0 10px;} .card .img .inner{border-radius: 50px;position:relative;top:3px;} .card .img .im{width: 148px; margin-left: 0; transform: translateX(-50%); -webkit-transform: translateX(-50%); top: -19px; } .voice .bar {width: 150px; height: 40px; background:url(http://s2.aghcdn.com/gift/cards/img/voice.png); background-size:100% 100%; } .voice .bar i{background:none;} .page .btm_link a{color: #fff; } .card .weui_btn_area .weui_btn{box-shadow: 0 1px 2px rgba(0,0,0,0.4),inset 1px 1px 2px rgba(255,255,255,.4); } </style>',
  		container:'<div class="container js_container"> <div class="page card "> <div class="bd"> <div class="txt"> <h3>亲爱的伙伴：</h3> <div class="pa"> <p>逐梦路上</p> <p>教我读懂生命哲学</p> <p>让我变得更加成熟</p> <p>在这特别的日子里</p> <p>祝你：生日快乐</p> </div> <h4>——合作伙伴敬上</h4> </div> <div class="img"> <div class="outer"> <div class="inner"> <img id="userImg" class="img-res" src="" style="display: block;"> </div> <img class="img-res im" src="" > <!-- <img class="img-res sp" src="./images/cards/sp_lb02.jpg" > --> </div> </div> <div class="voice"> <div class="bar"> <i></i> <em></em> <h4><span id="sec"></span></h4> </div> <audio id="voc" autobuffer=true><source src=""></audio>',
      foot:'</div> <div class="weui_btn_area"> <a class="weui_btn weui_btn_warn one" href="">小小心意</a> </div> <div class="btm_link"> <a href="http://mp.51guanhuai.com/">爱关怀技术支持</a> </div> </div> </div> </div>'
  	}
  },
  computed:{
    formatStyle(){
      return this.container1.replace(/(\n)|(\s{2,})/g,'')
    },
  	frameDoc(){
      let st = '<style>'+this.style1+'</style>'
      return this.hd+st+this.container1+this.foot
    },
    style4Data(){
      return CSSdecode($(this.style).html())
    },
    html4Data(){
      let $c = $(this.container)
      $c.find('h3').html('[to_name]')
      $c.find('h4').html('[from_name]')
      $c.find('.pa').html('<p>[card_wish]</p>')
      $c.find('#userImg').attr({
        'src':'[pic]',
        'style':'display: block;[pic_style]'
      })
      $c.find('source').attr('src','[sound]')
  		return CSSdecode($(this.style).html())+'\n\n'+style_html($c.prop("outerHTML"))
  	},
  	code(){
  		return this.style
  	}
  },
  created(){
    this.style1= CSSdecode($(this.style).html())
  	this.container1= style_html(this.container)
  },
  destory(){
  	this.cid = null
  },
  methods:{
    copySucess(e){
      alert('复制成功')
    },
    error(e){
      alert('复制失败,请手动复制')
    },
    goAdd(){
      let data = {
        tp : this.title,
        style : CSSencode(this.style1.replace(/\n/g,'')),
        html : CSSencode(this.container1.replace(/\n/g,'')),
        cover : $(this.container1).find('#userImg').attr('src')
      }
      if(!data.tp || !data.cover)return alert('伙计！没有封面或标题')
      console.log('carddata:',data)
      this.addCard(data)
    }
  },
  ready(){
  }
}
</script>
<style>

</style>