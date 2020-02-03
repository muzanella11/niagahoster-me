<template>
  <div class="l-landing">
    <!-- Begin Hero -->
    <section class="section section__hero">
      <div class="container-sm">
        <div class="row">
          <div class="col-6">
            <h3 class="title">
              PHP Hosting
            </h3>
            <p class="subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <ul class="list-feature">
              <li>
                <i class="icon"><check-circle-icon /></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
              <li>
                <i class="icon"><check-circle-icon /></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
              <li>
                <i class="icon"><check-circle-icon /></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
              <li>
                <i class="icon"><check-circle-icon /></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
            </ul>
          </div>
          <div class="col-6">
            <img :src="require('~/assets/images/icons/banner-php-hosting.svg')">
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Begin Package Pricing -->
    <section class="section section__package-pricing accent-line">
      <div class="container-sm">
        <div class="package-pricing__feature-list">
          <ul class="row feature-list">
            <li class="col-2" />
            <li class="col-3">
              <div class="feature-list__image">
                <img :src="require('~/assets/images/icons/icon-zendguard.svg')">
              </div>
              <div class="feature-list__title">
                PHP Zend Guard Loader
              </div>
            </li>
            <li class="col-3">
              <div class="feature-list__image">
                <img :src="require('~/assets/images/icons/icon-composer.svg')">
              </div>
              <div class="feature-list__title">
                PHP Composer
              </div>
            </li>
            <li class="col-3">
              <div class="feature-list__image">
                <img :src="require('~/assets/images/icons/icon-ioncube.svg')">
              </div>
              <div class="feature-list__title">
                PHP ionCuber Loader
              </div>
            </li>
            <li class="col-1" />
          </ul>
        </div>

        <div class="package-pricing__list-pricing">
          <div class="row list-pricing__header">
            <div class="col-12">
              <h3 class="title">
                Paket Hosting Singapura yang Tepat
              </h3>
              <p class="subtitle">
                Diskon 40% + Domain dan SSL Gratis Untuk Anda
              </p>
            </div>
          </div>

          <div class="row list-pricing__content">
            <div class="col-12">
              <div class="content-card">
                <div class="row">
                  <div
                    v-for="(itemPackage, indexPackage) in entriesPackage"
                    :key="indexPackage"
                    class="col-3 card text-center"
                  >
                    <div class="content-card__header card-header">
                      <h3>
                        {{ itemPackage.packageName }}
                      </h3>
                    </div>
                    <div class="content-card__body-content">
                      <div class="body-content__pricing">
                        <div class="row pricing__before-pricing">
                          <div class="col-12">
                            {{ itemPackage.pricing.beforeDiscount.amount }}
                          </div>
                        </div>
                        <div class="row pricing__after-pricing">
                          <div class="col-12">
                            <div class="after-pricing__big">
                              <span class="wording">Rp</span>
                              <h1 class="wording">
                                <strong>{{ itemPackage.pricing.afterDiscount.wording.big }}</strong>
                              </h1>
                              <span class="wording"><strong>{{ itemPackage.pricing.afterDiscount.wording.small }}</strong>/bln</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="body-content__user">
                        <strong>{{ itemPackage.userCounter }}</strong> Pengguna terdaftar
                      </div>
                      <div class="body-content__feature">
                        <ul>
                          <li
                            v-for="(itemBenefit, indexBenefit) in itemPackage.benefit"
                            :key="indexBenefit"
                          >
                            <strong v-if="itemBenefit.amount">
                              {{ itemBenefit.amount }}
                            </strong>
                            {{ itemBenefit.wording }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="content-card__footer card-footer">
                      <div class="row">
                        <div class="col-12">
                          <button class="btn btn-outline-primary">
                            Pilih Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="package-pricing__benefit-list">
          <div class="row benefit-list__header">
            <div class="col-12">
              <h3 class="title">
                Powerfull dengan limit yang lebih besar
              </h3>
            </div>
          </div>

          <div class="row benefit-list__content-list">
            <div class="col-6">
              <ul class="content-list">
                <li
                  v-for="(itemBenefitOne, indexBenefitOne) in 3"
                  :key="indexBenefitOne"
                >
                  <div class="row">
                    <div class="col-2 text-left">
                      <i class="icon"><check-circle-icon /></i>
                    </div>
                    <div class="col-10 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-6">
              <ul class="content-list">
                <li
                  v-for="(itemBenefitOne, indexBenefitOne) in 3"
                  :key="indexBenefitOne"
                >
                  <div class="row">
                    <div class="col-2 text-left">
                      <i class="icon"><check-circle-icon /></i>
                    </div>
                    <div class="col-10 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Package Pricing -->

    <!-- Begin Detail Package -->
    <section class="section section__detail-package accent-line">
      <div class="container-sm">
        <div class="row detail-package__header">
          <div class="col-12">
            <h3 class="title">
              Semua Paket Hosting Sudah Termasuk
            </h3>
          </div>
        </div>

        <div class="row detail-package__content">
          <div class="col-4 content__item">
            <div class="image">
              <img :src="require('~/assets/images/icons/icon-all-version.svg')">
            </div>
            <h3 class="title">
              PHP Semua Versi
            </h3>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div class="col-4 content__item">
            <div class="image">
              <img :src="require('~/assets/images/icons/icon-sql.svg')">
            </div>
            <h3 class="title">
              MySQL Versi 5.6
            </h3>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div class="col-4 content__item">
            <div class="image">
              <img :src="require('~/assets/images/icons/icon-cpanel.svg')">
            </div>
            <h3 class="title">
              Panel Hosting cPanel
            </h3>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div class="col-4 content__item">
            <div class="image">
              <img :src="require('~/assets/images/icons/icon-uptime.svg')">
            </div>
            <h3 class="title">
              Garansi Uptime 99.9%
            </h3>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div class="col-4 content__item">
            <div class="image">
              <img :src="require('~/assets/images/icons/icon-Innodb.svg')">
            </div>
            <h3 class="title">
              Database InnoDB Unlimited
            </h3>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div class="col-4 content__item">
            <div class="image">
              <img :src="require('~/assets/images/icons/icon-remote.svg')">
            </div>
            <h3 class="title">
              Wildcard Remote MySQL
            </h3>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Detail Package -->

    <!-- Begin Supported Laravel -->
    <section class="section section__supported-laravel">
      <div class="container-sm">
        <div class="row supported-laravel__header">
          <div class="col-12">
            <h3 class="title">
              Mendukung Penuh Framework Laravel
            </h3>
          </div>
        </div>

        <div class="row supported-laravel__content">
          <div class="col-6">
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

            <ul class="benefit-list">
              <li>
                <i class="icon"><check-circle-icon /></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
              <li>
                <i class="icon"><check-circle-icon /></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
              <li>
                <i class="icon"><check-circle-icon /></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
            </ul>

            <div class="notes">
              Nb. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>

            <button class="btn btn-primary btn-action">
              Pilih Hosting Anda
            </button>
          </div>
          <div class="col-6">
            <img :src="require('~/assets/images/icons/banner-support-laravel-hosting.svg')">
          </div>
        </div>
      </div>
    </section>
    <!-- End Supported Laravel -->

    <!-- Begin Feature Tech -->
    <section class="section section__feature-technology">
      <div class="container-sm">
        <div class="row feature-technology__header">
          <div class="col-12">
            <h3 class="title">
              Modul Lengkap untuk Menjalankan Aplikasi PHP Anda
            </h3>
          </div>
        </div>

        <div class="row feature-technology__content">
          <div
            v-for="(itemFeatureTech, indexFeatureTech) in 4"
            :key="indexFeatureTech"
            class="col-3"
          >
            <ul>
              <li
                v-for="(itemFeature, indexFeature) in 15"
                :key="indexFeature"
              >
                module {{ itemFeature }}
              </li>
            </ul>
          </div>
        </div>

        <div class="row feature-technology__footer text-center">
          <div class="col-12">
            <button class="btn btn-outline-primary">
              Selengkapnya
            </button>
          </div>
        </div>

        <div class="row feature-technology__server-detail">
          <div class="col-6">
            <h3 class="title">
              Linux Hosting yang Stabil dengan Teknologi LVE
            </h3>
            <p class="description">
              Lorem <strong>Ipsum</strong> is simply dummy text of <strong>the</strong> printing and typesetting industry.
              Lorem Ipsum <strong>is</strong> simply dummy text <strong>of</strong> the printing and typesetting industry.
              Lorem Ipsum is <strong>simply</strong> dummy <strong>text</strong> of the printing and typesetting industry.
              Lorem Ipsum is simply <strong>dummy</strong> text of the printing and typesetting industry.
            </p>
            <button class="btn btn-primary">
              Pilih Hosting Anda
            </button>
          </div>
          <div class="col-6">
            <img :src="require('~/assets/images/image-support.png')">
          </div>
        </div>
      </div>
    </section>
    <!-- End Feature Tech -->

    <!-- Begin Share -->
    <section class="section section__share">
      <div class="share__share-socmed">
        <div class="container-sm">
          <div class="row">
            <div class="col-6">
              <div class="share-socmed__wording">
                <div class="wording">
                  Bagikan jika Anda menyukai halaman ini
                </div>
              </div>
            </div>
            <div class="col-6">
              <ul class="socmed-list">
                <li>
                  <button id="btnSocmed1" class="btn btn-primary">
                    <facebook-icon />
                  </button>
                  <b-tooltip target="btnSocmed1" placement="right">
                    80k
                  </b-tooltip>
                </li>
                <li>
                  <button id="btnSocmed2" class="btn btn-primary">
                    <twitter-icon />
                  </button>
                  <b-tooltip target="btnSocmed2" placement="right">
                    450
                  </b-tooltip>
                </li>
                <li>
                  <button id="btnSocmed3" class="btn btn-primary">
                    <google-plus-icon />
                  </button>
                  <b-tooltip target="btnSocmed3" placement="right">
                    1900
                  </b-tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="share__cs-contact">
        <div class="container-sm">
          <div class="row">
            <div class="col-9 wording">
              Perlu <strong>BANTUAN?</strong> Hubungi Kami : <strong>0274-5305505</strong>
            </div>
            <div class="col-3">
              <button class="btn btn-outline-primary btn-action">
                <i class="icon"><forum-icon /></i> Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Share -->
  </div>
</template>

<script>
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import GooglePlusIcon from 'vue-material-design-icons/GooglePlus.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import ForumIcon from 'vue-material-design-icons/Forum.vue'
import { mapGetters } from 'vuex'
import * as HOMEPAGETYPES from '~/store/modules/homepage/types'

export default {
  components: {
    CheckCircleIcon,
    FacebookIcon,
    GooglePlusIcon,
    TwitterIcon,
    ForumIcon
  },

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapGetters({
      entriesPackage: HOMEPAGETYPES.GET_ENTRIES_PACKAGE
    })
  }
}
</script>
