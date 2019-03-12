import Vue from 'vue'
import Router from 'vue-router'
// 首页
import index from '@/pages/index'
// 数据目录
// 法律法规
import lawsreg from '@/pages/datadirectory/lawsreg.vue'
import lawanswer from '@/pages/datadirectory/lawanswer.vue'
import violationcase from '@/pages/datadirectory/violationcase.vue'
// 我的订阅
import mysub from '@/pages/mysub'
import recomhistory from '@/pages/recomhistory'
import mycollection from '@/pages/mycollection'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/lawsreg',
      name: 'lawsreg',
      component: lawsreg
    },
    {
      path: '/lawanswer',
      name: 'lawanswer',
      component: lawanswer
    },
    {
      path: '/violationcase',
      name: 'violationcase',
      component: violationcase
    },
    {
      path: '/mysub',
      name: 'mysub',
      component: mysub
    },
    {
      path: '/recomhistory',
      name: 'recomhistory',
      component: recomhistory
    },
    {
      path: '/mycollection',
      name: 'mycollection',
      component: mycollection
    },
  ]
})
