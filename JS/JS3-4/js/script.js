"use strict"


var obj = {

  wrapper   : document.createElement('div'),
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

  start : function () {

    this.addClass(this.wrapper, 'wrapper');
    this.append(document.body, this.wrapper);
    this.wrapper = this.findElement(document, this.wrapper.className);

    this.addClass(this.titleOfTest, 'titleOfTest');
    this.addText(this.titleOfTest, "TITLE OF TEXT");
    this.append(this.wrapper, this.titleOfTest);
    this.titleOfTest = this.findElement(this.wrapper, this.titleOfTest.className);

    for (var i = 1; i <= 3; i++) {
      var block = document.createElement('div');
      var classNameOfBlock = "block";
      this.addClass(block, classNameOfBlock);
      this.addText(block, classNameOfBlock);
      this.append(this.wrapper, block);

      for (var j = 1; j <=3; j++) {
        var innerBlock = document.createElement('div');
        var classNameOfInnerBlock = "inner-block";
        this.addClass(innerBlock, classNameOfInnerBlock);
        this.addText(innerBlock, classNameOfInnerBlock);
        this.append(block, innerBlock);
      }
    }

    var collectionOfBlocks = this.findElementsAll(this.wrapper, "inner-block");

    for (var i = 0; i < collectionOfBlocks.length; i++) {
      var radioBlock = document.createElement('div');
      var textBlock = document.createElement('div');
      this.addClass(radioBlock, "radio-block");
      this.addClass(textBlock, "text-block");
      this.append(collectionOfBlocks[i], radioBlock);
      this.append(collectionOfBlocks[i], textBlock);
    }

    console.log(collectionOfBlocks);

    this.addClass(this.button, "button");
    this.addText(this.button, "BUTTON");
    this.append(this.wrapper, this.button);
    this.button = this.findElement(this.wrapper, this.button.className);


  }
}

obj.start();
