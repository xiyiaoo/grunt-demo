/*! grunt-demo 2015-02-15 */
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


(function(){
  'use strict';

  function print(string){
    //browser: true时有window对象
    window.console.log(string);
  }

  (function(){
    print(1 & 2, 'bitwise:true 不允许使用位运算');
  })();

  (function(){
    if(window.tmp = print){
      window.tmp('boss:true 允许在if,for,while中使用赋值语句');
    }
  })();

  if(true)
    print('curly:true 代码块必须用大括号包住');

  if(print === ''){
    print('eqeqeq:true 必须用===,!==做判断');
  }

  (function(){
    //这种方式也会出错, 因为表达式有返回值吗, 像window.console && window.console('1')也不行
    print('immed:true 匿名函数只能像(function(){})()这样调用');
  })();

})();

