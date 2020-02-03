import { mapGetters, mapMutations } from 'vuex'
import * as ROOTTYPES from '~/store/types'

export default {
  data () {
    return {
      //
    }
  },

  computed: {
    ...mapGetters({
      entriesHeaderMenus: ROOTTYPES.GET_HEADER_MENUS,
      entriesSidebarStatus: ROOTTYPES.GET_SIDEBAR_STATUS
    })
  },

  methods: {
    ...mapMutations({
      setSideBarStatus: ROOTTYPES.SET_STATE
    }),

    init () {
      console.info('here component settings')
    },

    toggleSidebar () {
      const status = !this.entriesSidebarStatus
      this.setSideBarStatus({ accessor: 'componentSettings.sidebar.isShown', value: status })
    }
  }
}
