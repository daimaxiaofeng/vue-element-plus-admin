import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
import { NO_RESET_WHITE_LIST } from '@/constants'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Dashboard',
    meta: {
      title: t('router.dashboard'),
      icon: 'ant-design:dashboard-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/Dashboard/Analysis.vue'),
        name: 'Analysis',
        meta: {
          title: t('router.analysis'),
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    name: 'ComponentsDemo',
    meta: {
      title: t('router.component'),
      icon: 'bx:bxs-component',
      alwaysShow: true
    },
    children: [
      {
        path: 'form',
        component: getParentLayout(),
        redirect: '/components/form/default-form',
        name: 'Form',
        meta: {
          title: t('router.form'),
          alwaysShow: true
        },
        children: [
          {
            path: 'default-form',
            component: () => import('@/views/Components/Form/DefaultForm.vue'),
            name: 'DefaultForm',
            meta: {
              title: t('router.defaultForm')
            }
          },
          {
            path: 'use-form',
            component: () => import('@/views/Components/Form/UseFormDemo.vue'),
            name: 'UseForm',
            meta: {
              title: 'UseForm'
            }
          }
        ]
      },
      {
        path: 'table',
        component: getParentLayout(),
        redirect: '/components/table/default-table',
        name: 'TableDemo',
        meta: {
          title: t('router.table'),
          alwaysShow: true
        },
        children: [
          {
            path: 'default-table',
            component: () => import('@/views/Components/Table/DefaultTable.vue'),
            name: 'DefaultTable',
            meta: {
              title: t('router.defaultTable')
            }
          },
          {
            path: 'use-table',
            component: () => import('@/views/Components/Table/UseTableDemo.vue'),
            name: 'UseTable',
            meta: {
              title: 'UseTable'
            }
          },
          {
            path: 'tree-table',
            component: () => import('@/views/Components/Table/TreeTable.vue'),
            name: 'TreeTable',
            meta: {
              title: t('router.treeTable')
            }
          },
          {
            path: 'table-image-preview',
            component: () => import('@/views/Components/Table/TableImagePreview.vue'),
            name: 'TableImagePreview',
            meta: {
              title: t('router.PicturePreview')
            }
          },
          {
            path: 'table-video-preview',
            component: () => import('@/views/Components/Table/TableVideoPreview.vue'),
            name: 'TableVideoPreview',
            meta: {
              title: t('router.tableVideoPreview')
            }
          },
          {
            path: 'card-table',
            component: () => import('@/views/Components/Table/CardTable.vue'),
            name: 'CardTable',
            meta: {
              title: t('router.cardTable')
            }
          }
        ]
      },
      {
        path: 'editor-demo',
        component: getParentLayout(),
        redirect: '/components/editor-demo/editor',
        name: 'EditorDemo',
        meta: {
          title: t('router.editor'),
          alwaysShow: true
        },
        children: [
          {
            path: 'editor',
            component: () => import('@/views/Components/Editor/Editor.vue'),
            name: 'Editor',
            meta: {
              title: t('router.richText')
            }
          },
          {
            path: 'json-editor',
            component: () => import('@/views/Components/Editor/JsonEditor.vue'),
            name: 'JsonEditor',
            meta: {
              title: t('router.jsonEditor')
            }
          }
        ]
      },
      {
        path: 'search',
        component: () => import('@/views/Components/Search.vue'),
        name: 'Search',
        meta: {
          title: t('router.search')
        }
      },
      {
        path: 'descriptions',
        component: () => import('@/views/Components/Descriptions.vue'),
        name: 'Descriptions',
        meta: {
          title: t('router.descriptions')
        }
      },
      {
        path: 'image-viewer',
        component: () => import('@/views/Components/ImageViewer.vue'),
        name: 'ImageViewer',
        meta: {
          title: t('router.imageViewer')
        }
      },
      {
        path: 'dialog',
        component: () => import('@/views/Components/Dialog.vue'),
        name: 'Dialog',
        meta: {
          title: t('router.dialog')
        }
      },
      {
        path: 'icon',
        component: () => import('@/views/Components/Icon.vue'),
        name: 'Icon',
        meta: {
          title: t('router.icon')
        }
      },
      {
        path: 'icon-picker',
        component: () => import('@/views/Components/IconPicker.vue'),
        name: 'IconPicker',
        meta: {
          title: t('router.iconPicker')
        }
      },
      {
        path: 'echart',
        component: () => import('@/views/Components/Echart.vue'),
        name: 'Echart',
        meta: {
          title: t('router.echart')
        }
      },
      {
        path: 'count-to',
        component: () => import('@/views/Components/CountTo.vue'),
        name: 'CountTo',
        meta: {
          title: t('router.countTo')
        }
      },
      {
        path: 'qrcode',
        component: () => import('@/views/Components/Qrcode.vue'),
        name: 'Qrcode',
        meta: {
          title: t('router.qrcode')
        }
      },
      {
        path: 'highlight',
        component: () => import('@/views/Components/Highlight.vue'),
        name: 'Highlight',
        meta: {
          title: t('router.highlight')
        }
      },
      {
        path: 'infotip',
        component: () => import('@/views/Components/Infotip.vue'),
        name: 'Infotip',
        meta: {
          title: t('router.infotip')
        }
      },
      {
        path: 'input-password',
        component: () => import('@/views/Components/InputPassword.vue'),
        name: 'InputPassword',
        meta: {
          title: t('router.inputPassword')
        }
      },
      {
        path: 'waterfall',
        component: () => import('@/views/Components/Waterfall.vue'),
        name: 'waterfall',
        meta: {
          title: t('router.waterfall')
        }
      },
      {
        path: 'image-cropping',
        component: () => import('@/views/Components/ImageCropping.vue'),
        name: 'ImageCropping',
        meta: {
          title: t('router.imageCropping')
        }
      },
      {
        path: 'video-player',
        component: () => import('@/views/Components/VideoPlayer.vue'),
        name: 'VideoPlayer',
        meta: {
          title: t('router.videoPlayer')
        }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/example-dialog',
    name: 'Example',
    meta: {
      title: t('router.example'),
      icon: 'ep:management',
      alwaysShow: true
    },
    children: [
      {
        path: 'example-dialog',
        component: () => import('@/views/Example/Dialog/ExampleDialog.vue'),
        name: 'ExampleDialog',
        meta: {
          title: t('router.exampleDialog')
        }
      },
      {
        path: 'example-page',
        component: () => import('@/views/Example/Page/ExamplePage.vue'),
        name: 'ExamplePage',
        meta: {
          title: t('router.examplePage')
        }
      },
      {
        path: 'example-add',
        component: () => import('@/views/Example/Page/ExampleAdd.vue'),
        name: 'ExampleAdd',
        meta: {
          title: t('router.exampleAdd'),
          noTagsView: true,
          noCache: true,
          hidden: true,
          canTo: true,
          activeMenu: '/example/example-page'
        }
      },
      {
        path: 'example-edit',
        component: () => import('@/views/Example/Page/ExampleEdit.vue'),
        name: 'ExampleEdit',
        meta: {
          title: t('router.exampleEdit'),
          noTagsView: true,
          noCache: true,
          hidden: true,
          canTo: true,
          activeMenu: '/example/example-page'
        }
      },
      {
        path: 'example-detail',
        component: () => import('@/views/Example/Page/ExampleDetail.vue'),
        name: 'ExampleDetail',
        meta: {
          title: t('router.exampleDetail'),
          noTagsView: true,
          noCache: true,
          hidden: true,
          canTo: true,
          activeMenu: '/example/example-page'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !NO_RESET_WHITE_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
