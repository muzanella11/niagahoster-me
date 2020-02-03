import AccountIcon from 'vue-material-design-icons/Account.vue'
import ForumIcon from 'vue-material-design-icons/Forum.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import MixinsComponentSettings from '~/mixins/componentSettings'

export default {
  mixins: [
    MixinsComponentSettings
  ],

  components: {
    AccountIcon,
    ForumIcon,
    PhoneIcon
  },

  data () {
    return {
      //
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
