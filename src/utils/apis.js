import request from '@/utils/request'
const APIS = {
   //登入接口
    login: (mobile, password, uuid, picCode) => {
      return request({
          url: '/auth/adminLogin',
          method: 'post',
          data: {
              mobile,
              password,
              uuid,
              picCode
          }
      })
   },
   //检查是否登录
   checkLogin: () => {
       return request({
           url: '/user/userInfo',
           method: 'get',
           data: ''
       })   
   },
   //获取验证码的接口
   getCode: (uuid) => {
       return request({
           url: '/user/code?uuid=' + uuid,
           method: 'get',
           data: {}
       })
   },
   //退出登录的接口
   signOut: () => {
       return request({
           url: '/auth/logout',
           method: 'post',
           data: {}
       })
   },
   //获取商户列表
    getMerchantDatas: (offset, limit, name, pname) => {
       return request({
           url: '/company/companyList',
           method: 'post',
           data: { offset, limit, name, pname}
       })
   },
   //显示商户的详情
    viewCompanyDetail: (companyId) => {
        return request({
            url: '/company/companyDetailByAdmin?companyId=' + companyId,
            method: 'get',
            data: {}
        })
    },
    //修改商户是否禁用
    changeStatus: (companyId, status) => {
        return request({
            url: '/company/changeStatus',
            method: 'post',
            data: { companyId, status }
        })
    },
    //修改密码的接口
    updatePassword: (oldPassword, password) => {
        return request({
            url: '/user/updatePassword',
            method: 'post',
            data: { oldPassword, password }
        })
    },
    //商户添加/修改的功能
    saveSubCompany: (id, mobile, password, name, rate) => {
        return request({
            url: '/company/saveCompanyAdmin',
            method: 'post',
            data: { id, mobile, password, name, rate }
        })
    },
    //重置秘钥
    resetKeys: (companyId) => {
        return request({
            url: '/company/resetKeys?companyId=' + companyId,
            method: 'get',
            data: {}
        }) 
    },
    //商户加减款
    updateCompanyBalance: (companyId, desc, occurAmount) => {
        return request({
            url: '/company/updateCompanyBalance',
            method: 'post',
            data: { companyId, desc, occurAmount }
        })
    },
    //获取消费记录查询
    consumeList: (companyId, offset, limit, startTime, endTime) => {
        return request({
            url: '/consume/consumePageByAdmin',
            method: 'post',
            data: { companyId, offset, limit, startTime, endTime }
        })
    },
    //获取充值记录
    rechargeList: (companyId, offset, limit, startTime, endTime) => {
        return request({
            url: '/recharge/rechargePageByAdmin',
            method: 'post',
            data: { companyId, offset, limit, startTime, endTime }
        })
    },
    //返佣列表
    getRebateList: (companyId, offset, limit, startTime, endTime) => {
        return request({
            url: '/profit/listByAdmin',
            method: 'post',
            data: { companyId, offset, limit, startTime, endTime }
        })
    },
    //加减款记录
    getTradeRecord: (companyId, offset, limit, startTime, endTime) => {
        return request({
            url: '/tradeRecord/listByAdmin',
            method: 'post',
            data: { companyId, offset, limit, startTime, endTime }
        })
    }
    
}
export default APIS