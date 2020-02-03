import { GET_HEADER_MENUS, GET_SIDEBAR_STATUS, GET_FOOTER_MENUS } from './types'

export default {
  [GET_HEADER_MENUS] (state) {
    return state.componentSettings.header.menus
  },

  [GET_SIDEBAR_STATUS] (state) {
    return state.componentSettings.sidebar.isShown
  },

  [GET_FOOTER_MENUS] (state) {
    return state.componentSettings.footer.menus
  }
}
