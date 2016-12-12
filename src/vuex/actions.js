import api from '../api'
import * as types from './types'

export const showMsg = ({dispatch}, content,type='default') => {
  dispatch(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({dispatch}) => {
  dispatch(types.HIDE_MSG)
}

export const localLogin = (store, userInfo, cb) => {
  api.localLogin(userInfo).then(response => {
    let res = response.data
    
    if(res.errno == 0){
      // showMsg(store,'登录成功,欢迎光临!','success')
      if(store.state.route.query.redierct){
          window.location = store.state.route.query.redierct
      }else{
        window.location = res.error
      }
     }else{
      if(typeof cb == 'function'){
        cb(res.error)
      }else{
        showMsg(store,res.error || '登录失败')
      }
     }
  }, response => {
    let res = response.data
    showMsg(store,'登录失败','error','')
  })
}


export const getArticle = (store, data, cb) => {
      
  store.dispatch(types.REQUEST_ARTICLE_LIST)

  api.getArticle(data).then(response => {

    let res = response.data
    console.log('res:',res)
     if(res.success){
        if(typeof cb == 'function'){
          cb(res.error)
        }else{
          store.dispatch(types.ARTICLE_LIST,{
            list: res.data
          })
        }
     }
  }, response => {
    let res = response.data
    showMsg(store,res.error || '获取文章列表失败','error')
  })

}


export const testLean = (store, data, cb) => {
      
  var TestObject = AV.Object.extend('TestObject');
  var testObject = new TestObject();
  testObject.save({
    testabc: 'john'
  }).then(function(res) {
    console.log('resId:',res.id)
    alert('LeanCloud works!');
  }).catch(function(err) {
    alert('error:' + err);
  });

}


export const addCard = (store, data, cb) => {
      
  var card = AV.Object.extend('cards');
  var cardOn = new card();
  cardOn.save(data).then(function(res) {
    console.log('resId:',res.id)
    alert('add ok!');
  }).catch(function(err) {
    alert('error:' + err);
  });

}


export const getCards = (store, data, cb) => {
      
  store.dispatch(types.REQUEST_CARD_LIST)
  var cards = new AV.Query('cards');
  cards.find().then(function (results) {
    let res = results.map((v,i)=>{
      let resi =  v.attributes
      resi.id = v.id
      return resi
    })
    // console.log('res',res)
    store.dispatch(types.CARD_LIST,{
            list: res
          })
    if(typeof cb== 'function'){
      cb(res)
    }
  }, function (error) {
    console.log('error:',error)
  });


}


