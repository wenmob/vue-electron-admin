import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import UpdatePassword from '@/components/login/UpdatePassword'
import Register from '@/components/login/Register'
import Pargross from '@/components/Pargross'

import { MessageBox } from 'element-ui'
import APIS from '@/utils/apis'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/updatePassword',
      name: 'updatePassword',
      component: UpdatePassword
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/pargross',
      name: 'pargross',
      component: Pargross,
      meta: {
        requireAuth: true
      },
      children: [
        {
          //商户的详情
          path: 'merchantDetail',
          name: '商户详情',
          component: () => import('@/components/merchant/MerchantDetail'),
          meta: {
            icon: 'fa fa-pinterest-p',
            canc: false,
            tag: 0,
            pathFull: '/pargross/merchantDetail',
            requireAuth: true
          },
          children: [    
            {
              path: 'companyList',
              name: '商户列表',
              component: () => import('@/components/merchant/CompanyList'),
              meta: {
                icon: 'fa fa-list',
                tag: 1,
                pathFull: '/pargross/merchantDetail/companyList',
                requireAuth: true
              }
            },
            {
              path: 'consumePageByAdmin',
              name: '服务费记录',
              component: () => import('@/components/consume/ConsumePageByAdmin'),
              meta: {
                icon: 'fa fa-outdent',
                tag: 1,
                pathFull: '/pargross/merchantDetail/consumePageByAdmin',
                requireAuth: true
              }
            },
            {
              path: 'rechargePageByAdmin',
              name: '充值记录查询',
              component: () => import('@/components/recharge/RechargePageByAdmin'),
              meta: {
                icon: 'fa fa-strikethrough',
                tag: 1,
                pathFull: '/pargross/merchantDetail/rechargePageByAdmin',
                requireAuth: true
              }
             },
            {
              path: 'rebateList',
              name: '返佣记录',
              component: () => import('@/components/consume/RebateList'),
              meta: {
                icon: 'fa fa-file-pdf-o',
                tag: 1,
                pathFull: '/pargross/merchantDetail/rebateList',
                requireAuth: true
              }
            },
            {
              path: 'tradeRecord',
              name: '加减款记录',
              component: () => import('@/components/consume/TradeRecord'),
              meta: {
                icon: 'fa fa-file-excel-o',
                tag: 1,
                pathFull: '/pargross/merchantDetail/tradeRecord',
                requireAuth: true
              }
            }
          ]
        },
        
        // //充值详情
        // {
        //   path: 'rechargeDetail',
        //   name: '充值详情',
        //   component: () => import('@/components/recharge/RechargeDetail'),
        //   meta: {
        //     icon: 'fa fa-jpy',
        //     canc: false,
        //     tag: 0,
        //     pathFull: '/pargross/rechargeDetail',
        //     requireAuth: true
        //   },
        //   children: [
        //      {
        //       path: 'rechargePageByAdmin',
        //       name: '充值记录查询',
        //       component: () => import('@/components/recharge/RechargePageByAdmin'),
        //       meta: {
        //         icon: 'fa fa-strikethrough',
        //         tag: 1,
        //         pathFull: '/pargross/rechargeDetail/rechargePageByAdmin',
        //         requireAuth: true
        //       }
        //      }
        //   ]
        // }
     

      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    APIS.checkLogin().then(res => {
      if(res.code == 0){
        let n = router.options.routes.findIndex(ele => {
          return ele.name == "pargross"
        })
        Vue.prototype.asides = router.options.routes[n].children;
        next();
      }else{
        MessageBox.alert("由于你长时间未操作，请重新进入", {
          confirmButtonText: '确定',
          callback: action => {
            // window.location.href = "/h5/#/login"
          }
        })
      }
  }).catch(err => {
    console.log(error);
  })
 }else{
    next();
 }   
})

export default router
