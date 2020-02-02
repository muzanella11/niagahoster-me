import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import GooglePlusIcon from 'vue-material-design-icons/GooglePlus.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import { mapGetters } from 'vuex'
import * as ROOTTYPES from '~/store/types'

export default {
  components: {
    FacebookIcon,
    GooglePlusIcon,
    TwitterIcon
  },

  data () {
    return {
      firstRowMenus: [
        {
          sectionTitle: 'Hubungi Kami',
          menus: [
            {
              url: 'javascript:;',
              label: 'Hosting'
            },
            {
              url: 'javascript:;',
              label: 'Domain'
            },
            {
              url: 'javascript:;',
              label: 'Server'
            },
            {
              url: 'javascript:;',
              label: 'Website'
            },
            {
              url: 'javascript:;',
              label: 'Afiliasi'
            },
            {
              url: 'javascript:;',
              label: 'Promo'
            },
            {
              url: 'javascript:;',
              label: 'Pembayaran'
            },
            {
              url: 'javascript:;',
              label: 'Review'
            },
            {
              url: 'javascript:;',
              label: 'Kontak'
            },
            {
              url: 'javascript:;',
              label: 'Blog'
            }
          ]
        },
        {
          sectionTitle: 'Hubungi Kami',
          menus: [
            {
              url: 'javascript:;',
              label: 'Hosting'
            },
            {
              url: 'javascript:;',
              label: 'Domain'
            },
            {
              url: 'javascript:;',
              label: 'Server'
            },
            {
              url: 'javascript:;',
              label: 'Website'
            },
            {
              url: 'javascript:;',
              label: 'Afiliasi'
            },
            {
              url: 'javascript:;',
              label: 'Promo'
            },
            {
              url: 'javascript:;',
              label: 'Pembayaran'
            },
            {
              url: 'javascript:;',
              label: 'Review'
            },
            {
              url: 'javascript:;',
              label: 'Kontak'
            },
            {
              url: 'javascript:;',
              label: 'Blog'
            }
          ]
        },
        {
          sectionTitle: 'Hubungi Kami',
          menus: [
            {
              url: 'javascript:;',
              label: 'Hosting'
            },
            {
              url: 'javascript:;',
              label: 'Domain'
            },
            {
              url: 'javascript:;',
              label: 'Server'
            },
            {
              url: 'javascript:;',
              label: 'Website'
            },
            {
              url: 'javascript:;',
              label: 'Afiliasi'
            },
            {
              url: 'javascript:;',
              label: 'Promo'
            },
            {
              url: 'javascript:;',
              label: 'Pembayaran'
            },
            {
              url: 'javascript:;',
              label: 'Review'
            },
            {
              url: 'javascript:;',
              label: 'Kontak'
            },
            {
              url: 'javascript:;',
              label: 'Blog'
            }
          ]
        },
        {
          sectionTitle: 'Hubungi Kami',
          menus: [
            {
              url: 'javascript:;',
              label: 'Hosting'
            },
            {
              url: 'javascript:;',
              label: 'Domain'
            },
            {
              url: 'javascript:;',
              label: 'Server'
            },
            {
              url: 'javascript:;',
              label: 'Website'
            },
            {
              url: 'javascript:;',
              label: 'Afiliasi'
            },
            {
              url: 'javascript:;',
              label: 'Promo'
            },
            {
              url: 'javascript:;',
              label: 'Pembayaran'
            },
            {
              url: 'javascript:;',
              label: 'Review'
            },
            {
              url: 'javascript:;',
              label: 'Kontak'
            },
            {
              url: 'javascript:;',
              label: 'Blog'
            }
          ]
        }
      ],
      secondRowMenus: [
        {
          sectionTitle: 'Hubungi Kami',
          menus: [
            {
              url: 'javascript:;',
              label: 'Hosting'
            },
            {
              url: 'javascript:;',
              label: 'Domain'
            },
            {
              url: 'javascript:;',
              label: 'Server'
            },
            {
              url: 'javascript:;',
              label: 'Website'
            },
            {
              url: 'javascript:;',
              label: 'Afiliasi'
            },
            {
              url: 'javascript:;',
              label: 'Promo'
            },
            {
              url: 'javascript:;',
              label: 'Pembayaran'
            },
            {
              url: 'javascript:;',
              label: 'Review'
            },
            {
              url: 'javascript:;',
              label: 'Kontak'
            },
            {
              url: 'javascript:;',
              label: 'Blog'
            }
          ]
        },
        {
          sectionTitle: 'Hubungi Kami',
          menus: [
            {
              url: 'javascript:;',
              label: 'Hosting'
            },
            {
              url: 'javascript:;',
              label: 'Domain'
            },
            {
              url: 'javascript:;',
              label: 'Server'
            },
            {
              url: 'javascript:;',
              label: 'Website'
            },
            {
              url: 'javascript:;',
              label: 'Afiliasi'
            },
            {
              url: 'javascript:;',
              label: 'Promo'
            },
            {
              url: 'javascript:;',
              label: 'Pembayaran'
            },
            {
              url: 'javascript:;',
              label: 'Review'
            },
            {
              url: 'javascript:;',
              label: 'Kontak'
            },
            {
              url: 'javascript:;',
              label: 'Blog'
            }
          ]
        }
      ],
      listMenu: [
        {
          url: 'javascript:;',
          label: 'Hosting'
        },
        {
          url: 'javascript:;',
          label: 'Domain'
        },
        {
          url: 'javascript:;',
          label: 'Server'
        },
        {
          url: 'javascript:;',
          label: 'Website'
        },
        {
          url: 'javascript:;',
          label: 'Afiliasi'
        },
        {
          url: 'javascript:;',
          label: 'Promo'
        },
        {
          url: 'javascript:;',
          label: 'Pembayaran'
        },
        {
          url: 'javascript:;',
          label: 'Review'
        },
        {
          url: 'javascript:;',
          label: 'Kontak'
        },
        {
          url: 'javascript:;',
          label: 'Blog'
        }
      ],
      listPayment: [
        {
          image: 'https://www.niagahoster.co.id/assets/images/2019/payment-gateway/bca.svg',
          title: 'bca'
        },
        {
          image: 'https://www.niagahoster.co.id/assets/images/2019/payment-gateway/bca.svg',
          title: 'bca'
        },
        {
          image: 'https://www.niagahoster.co.id/assets/images/2019/payment-gateway/bca.svg',
          title: 'bca'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      entriesFooterMenus: ROOTTYPES.GET_FOOTER_MENUS
    }),

    footerSectionOne () {
      if (!this.entriesFooterMenus) return []
      if (this.entriesFooterMenus.length < 0) return []

      return this.entriesFooterMenus.filter(item => item.name === 'menus-section-1')[0].data
    },

    footerSectionTwo () {
      if (!this.entriesFooterMenus) return []
      if (this.entriesFooterMenus.length < 0) return []

      return this.entriesFooterMenus.filter(item => item.name === 'menus-section-2')[0].data
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      console.info('here')
    }
  }
}
