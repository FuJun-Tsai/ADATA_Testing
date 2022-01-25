<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark position-fixed w-100 top-0 bg-gray"
       aria-label="Fifth navbar example">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">
        <img class="logo" src="./assets/images/logo.png" alt="">
      </router-link>
      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarsExample05"
              aria-controls="navbarsExample05" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/news">News</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/prizes">Prizes</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/winners">Winners</router-link>
          </li>
          <li class="nav-item px-2">
            <p v-if="user.isLog === true"
               @click="dataReset()"
               class="nav-link mb-0 text-light cursor-point" >Log Out</p>
          </li>
          <li class="nav-item px-2 dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown05"
                data-bs-toggle="dropdown" aria-expanded="false">
                Language
            </a>
            <select class="dropdown-menu" aria-labelledby="dropdown05"
                    v-model="lang" @change="handleChangeLanguage">
              <option class="w-100" value="en">English</option>
              <option class="w-100" value="tw">中文</option>
              <option class="w-100" value="de">德語</option>
              <option class="w-100" value="jp">日文</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view :lang="lang"
               :islog="user.isLog"
               @emit-reg="setMember"
               @emit-ver="setVerify"/>
  <footer class="p-4">
    <p class="text-center m-0">Copyright © 2019 ADATA Technology Co., Ltd All rights reserved</p>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
import emitter from './plugins/mitt';

export default {
  data() {
    return {
      lang: 'jp',
      user: {
        name: '',
        email: '',
        password: '',
        isLog: false,
        isVer: false,
        created: '',
        updated: '',
      },
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    setMember(email, name, password, created) {
      this.user.email = email;
      this.user.name = name;
      this.user.password = password;
      this.user.created = created;
      this.user.isLog = true;
    },
    setVerify() {
      this.user.isVer = true;
    },
    dataReset() {
      this.user.name = '';
      this.user.email = '';
      this.user.password = '';
      this.user.isLog = false;
      this.user.isVer = false;
      this.user.created = '';
      this.user.updated = '';
    },
  },
  created() {
    emitter.on('emit-log', (data) => {
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.name = data.name;
      this.user.isLog = true;
    });
  },
  //
  setup() {
    const { locale } = useI18n();
    const handleChangeLanguage = (e) => {
      locale.value = e.target.value;
    };
    return {
      handleChangeLanguage,
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
*{
  box-sizing: border-box;
}

:root{
  --bs-dark-rgb: 0, 0, 0;
}

.bg-gray{
  background: #b9b9b977;
}

.letter-space1{
  letter-spacing: 1px;
}

.letter-space2{
  letter-spacing: 2px;
}

.letter-space4{
  letter-spacing: 4px;
}

.cursor-point{
  cursor: pointer;
}

#nav{
  .logo{
    max-width: 160px;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  .dropdown-item{
    color: #333;
  }
}

body{
  padding-top: 100px;
  background: url('./assets/images/bg_all.jpg');
  background-size: cover;
}

footer{
  background: url('./assets/images/home/bg_footer.jpg');
  background-size: cover;
}

img{
  width: 100%;
}

</style>
