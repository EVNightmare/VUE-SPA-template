import { StaffAuth,InfoAuth,postService,cnodeServices } from './resources'

export default {
  checkLogin : function (data) {
    return InfoAuth.get({method:'check'},data)
  },
  getArticle: function(data){
    return cnodeServices.get({method:'topics'},data)
  }
}