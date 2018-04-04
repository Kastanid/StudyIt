export class App {
  configureRouter(config, router){
    config.title = 'StudyIt';
    config.map([
      { route: '',              moduleId: 'mainPage',   title: 'Main'},
      { route: '/mainPage',      moduleId: 'mainPage', name:'mainPage' },
      { route: '/kkk',           moduleId: 'kkk', name:'kkk' },
      { route: '/kontaktid',     moduleId: 'kontaktid', name:'kontaktid' },
      { route: '/arvustuseLisamine', moduleId: 'arvustuseLisamine', name:'arvustuseLisamine' },
      { route: '/arvustused', moduleId: 'arvustused', name:'arvustused' }
    ]);
    this.router = router;
  }
  valitudAine = "Palun vali õppeaine";
}
