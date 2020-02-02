import AccountIcon from 'vue-material-design-icons/Account.vue'
import ForumIcon from 'vue-material-design-icons/Forum.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'

export default {
  components: {
    AccountIcon,
    ForumIcon,
    PhoneIcon
  },

  data () {
    return {
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
      ]
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
