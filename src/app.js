export class App {
<<<<<<< HEAD
  constructor() {
    this.message = 'Kastanid!';

    this.styleString = `color: gray;
    background-color: rgb(30,40,40);
    width: 110%;
    height: 60px;
    ;
=======
  configureRouter(config, router){
    config.title = 'StudyIt';
    config.map([
      { route: '',              moduleId: 'mainPage',   title: 'Main'},
      { route: '/mainPage',      moduleId: 'mainPage', name:'mainPage' },
      { route: '/kkk',           moduleId: 'kkk', name:'kkk' },
      { route: '/kontaktid',     moduleId: 'kontaktid', name:'kontaktid' },
      { route: '/arvustuseVorm', moduleId: 'arvustuseVorm', name:'arvustuseVorm' }
    ]);
    this.router = router;
>>>>>>> 3c72e00bc6c35b0cc7e0910de0614e08abf83a63
  }
}
