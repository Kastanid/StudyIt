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
      { route: '/registreeru', moduleId: 'registreeru', name:'registreeru' },
      { route: '/login', moduleId: 'login', name:'login' }
    ]);
    this.router = router;
  }

  attached() {
    var cookieList = document.cookie.split(";");
    console.log(cookieList);
    for(var i = 0; i < cookieList.length; i++) {
      if(cookieList[i].includes("user") && cookieList[i].split("=")[1] == "") {
        document.getElementById("logOutButton").style.display = "none";
      }
    }
  }

  funks() {
    var cookieList = document.cookie.split(";");
    console.log(cookieList);
        for(var i = 0; i < cookieList.length; i++) {
          if(cookieList[i].includes("user")) {
            document.cookie = "user="
            document.getElementById("logOutButton").style.display = "none";
          }
        }

  }
}
