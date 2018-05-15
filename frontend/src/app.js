export class App {
  configureRouter(config, router){
    config.title = 'StudyIt';
    config.map([
      { route: '',              moduleId: 'mainPage',   title: 'Main'},
      { route: '/mainPage',      moduleId: 'mainPage', name:'mainPage' },
      { route: '/kkk',           moduleId: 'kkk', name:'kkk' },
      { route: '/kontaktid',     moduleId: 'kontaktid', name:'kontaktid' },
      { route: '/arvustuseLisamine', moduleId: 'arvustuseLisamine', name:'arvustuseLisamine' },
      { route: '/arvustused', moduleId: 'arvustused', name:'arvustused' },
      { route: '/registreeri', moduleId: 'registreeri', name:'registreeri' },
      { route: '/login', moduleId: 'login', name:'login' }
    ]);
    this.router = router;
  }

  hideLogoutButton() {
    var cookieList = document.cookie.split(";");
    for(var i = 0; i < cookieList.length; i++) {
      if(cookieList[i].includes("user")) {
        document.cookie = "user=";

        document.getElementById("logOutButton").style.display = "none";
      }
    }

  }
}
