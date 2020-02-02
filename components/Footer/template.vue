<template>
  <footer class="c-footer">
    <div class="container-sm">
      <div class="row">
        <div
          v-for="(itemFirstRowMenus, indexFirstRowMenus) in footerSectionOne"
          :key="indexFirstRowMenus"
          class="col-3 footer__list-menus"
        >
          <h3 class="title">
            {{ itemFirstRowMenus.sectionTitle }}
          </h3>

          <ul class="list-menus">
            <li
              v-for="(itemMenus, indexMenus) in itemFirstRowMenus.menus"
              :key="indexMenus"
            >
              <a
                :href="itemMenus.url"
                v-html="itemMenus.label"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(itemSecondRowMenus, indexSecondRowMenus) in footerSectionTwo"
          :key="indexSecondRowMenus"
          class="col-3 footer__list-menus"
        >
          <h3 class="title">
            {{ itemSecondRowMenus.sectionTitle }}
          </h3>

          <ul class="list-menus">
            <li
              v-for="(itemMenus, indexMenus) in itemSecondRowMenus.menus"
              :key="indexMenus"
            >
              <a
                :href="itemMenus.url"
                v-html="itemMenus.label"
              />
            </li>
          </ul>
        </div>
        <div class="col-6 footer__list-menus">
          <h3 class="title">
            Newsletter
          </h3>

          <div class="footer__newsletter-list">
            <ul class="newsletter-list">
              <li class="footer__subscribe">
                <div class="subscribe__wrapper">
                  <input placeholder="Email" type="text" class="subscribe-input">
                  <button class="subscribe-action">
                    Berlangganan
                  </button>
                </div>

                <p class="description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </li>
              <li class="footer__socmed text-center">
                <a href="javascript:;" class="socmed__button">
                  <i class="icon">
                    <facebook-icon />
                  </i>
                </a>
              </li>
              <li class="footer__socmed text-center">
                <a href="javascript:;" class="socmed__button">
                  <i class="icon">
                    <twitter-icon />
                  </i>
                </a>
              </li>
              <li class="footer__socmed text-center">
                <a href="javascript:;" class="socmed__button">
                  <i class="icon">
                    <google-plus-icon />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Begin Payment -->
      <div class="row">
        <div class="col-12 footer__list-payment">
          <h3 class="title">
            Pembayaran
          </h3>

          <ul class="list-payment">
            <li
              v-for="(itemPayment, indexPayment) in listPayment"
              :key="indexPayment"
            >
              <img
                :src="itemPayment.image"
                :alt="itemPayment.title"
              >
            </li>
          </ul>

          <p class="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <!-- End Payment -->

      <!-- Begin Copyright -->
      <div class="row">
        <div class="col-12 footer__copyright">
          <div class="copyright__wrapper-content">
            <div class="row">
              <div class="col-6">
                Copyright ©2019 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC DCI-Indonesia. Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology
              </div>
              <div class="col-6 wrapper-content__list-privacy-policy">
                <ul class="list-privacy-policy">
                  <li>
                    <a href="javascript:;">
                      Syarat dan ketentuan
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      Kebijakan privasi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Copyright -->
    </div>
  </footer>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
