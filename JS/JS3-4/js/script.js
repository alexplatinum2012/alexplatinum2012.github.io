"use strict"


var obj = {

  wrapper   : document.createElement('div'),
  form   : document.createElement('form'),
  titleOfTest : document.createElement('div'),
  button   : document.createElement('button'),



  addClass  : function(where, nameOfClass) {
    where.classList.add(nameOfClass);
  },

  addText   : function(where, text) {
    where.innerHTML = text;
  },

  append    : function(where, what) {
    where.appendChild(what);
  },

  findElement : function(where, className) {
    className = "." + className;
    return where.querySelector(className);
  },

  findElementsAll : function(where, className) {
    className = "." + className;
    return where.querySelectorAll(className);
  },

  styling   : function(what, str) {
    what.style = str;
  },

  start : function () {
    var test = ["wrapper", "boot", "lng"];

    this.addClass(this.wrapper, 'wrapper');
    this.styling(this.wrapper, "width:100%; height:100%; padding:5% 20%");
    this.append(document.body, this.wrapper);
    this.wrapper = this.findElement(document, this.wrapper.className);

    this.setAttribute('id', "formID");
    this.setAttribute('method', "GET");
    this.append(this.wrapper, this.form);

    this.addClass(this.titleOfTest, 'titleOfTest');
    this.addText(this.titleOfTest, "Тест по программированию");
    this.styling(this.titleOfTest, "text-align:center; font-size:14px; font-weight:bold; margin-bottom:10%");
    this.append(this.wrapper, this.titleOfTest);
    this.titleOfTest = this.findElement(this.wrapper, this.titleOfTest.className);

    for (var i = 1; i <= 3; i++) {
      var block = document.createElement('div');
      var classNameOfBlock = "block";
      this.addClass(block, classNameOfBlock);
      this.addText(block, i + ". Вопрос №" + i);
      this.styling(block, "font-weight:bold; font-size:1.5em; padding-top:2%");
      this.append(this.wrapper, block);

      for (var j = 1; j <=3; j++) {
        var innerBlock = document.createElement('div');
        var classNameOfInnerBlock = "inner-block";
        var checkboxBlock = document.createElement('div');
        var textBlock = document.createElement('div');

        var inputChkBox = document.createElement('input');
        var labelChkBox = document.createElement('label');

        this.addClass(innerBlock, classNameOfInnerBlock);
        (j == 1) ?  this.styling(innerBlock, "font-size:14px; font-weight:normal; margin-left:3%; margin-top:2%") :
                    this.styling(innerBlock, "font-size:14px; font-weight:normal; margin-left:3%");
        this.append(block, innerBlock);
        this.addClass(checkboxBlock, "checkbox-block");
        this.addClass(textBlock, "text-block");
        this.append(innerBlock, checkboxBlock);
        this.append(innerBlock, textBlock);

        inputChkBox.setAttribute("type", "checkbox");
        inputChkBox.setAttribute("name", "q" + i + j);
        inputChkBox.setAttribute("id", "q" + i + j);
        inputChkBox.setAttribute("form", "formID");
        this.styling(inputChkBox, "float:left; margin-right:20px; color:red")
        this.append(checkboxBlock, inputChkBox);

        labelChkBox.setAttribute("for", "q" + i + j);
        this.addText(labelChkBox, "Вариант ответа №" + j);
        this.append(textBlock, labelChkBox);
      }
    }

    this.addClass(this.button, "button");
    this.addText(this.button, "Проверить мои результаты");
    this.button.setAttribute("type", "submit");
    this.button.setAttribute("form", "formID");
    this.styling(this.button, "margin: 2% 30%; width: 200px; background-color: aliceblue; border-radius: 3px; border: 2px solid")
    this.append(this.wrapper, this.button);
    //this.button = this.findElement(this.wrapper, this.button.className);


  }
}

obj.start();
