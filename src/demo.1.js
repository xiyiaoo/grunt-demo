(function(){
  'use strict';

  (function(){
    print(tmp, 'latedef:ture 必须将tmp定义放在调用前');
    var tmp = print;
  })();

  (function(){
    function Person(name){
      this.name = name;
    }
    var tmp = new Person('');
    print(tmp, 'newcap:ture 作为构造函数必须大些首字母');
  })();

  (function(){
    print('quotmark:single 必须用单引号');
  })();

  (function(){
    var tmp = print;
    print('unuserd:true 定义的变量必须使用');
  })();

  (function(){
    var console = window['console'];
    print('sub:true 允许使用obj[prop]获取属性');
  })();

})();

