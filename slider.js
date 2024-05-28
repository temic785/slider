var sliderFactory = {
  getNewSlider: function () {
    var newSlider = {
      masImageUrls: [],
      cutrentImgIndex: 0,
      previousButton: null,
      nextButton: null,
      viewImg: null,
      start: function (elId) {
        //init mas
        var that = this;
        this.masImageUrls = [
          "img/vypsen1.jpg",
          "img/vypsen2.jpg",
          "img/vypsen3.jpg",
          "img/vypsen4.jpg",
          "img/vypsen5.jpg",
        ];
        //init el
        var elSelector = "#" + elId;
        var el = document.querySelector(elSelector);

        this.previousButton = el.querySelector(".left-button");
        this.nextButton = el.querySelector(".right-button");
        this.viewImg = el.querySelector(".main-photo");
        //add img in slider
        this.viewImg.src = this.masImageUrls[this.cutrentImgIndex];
        this.previousButton.disabled = true;

        //click on button
        this.previousButton.addEventListener("click", function (e) {
          that.previousImg(e);
        });
        this.nextButton.addEventListener("click", function (e) {
          that.nextImg(e);
        });
      },
      previousImg: function (e) {
        this.nextButton.disabled = false;
        this.cutrentImgIndex--;
        this.viewImg.src = this.masImageUrls[this.cutrentImgIndex];
        if (this.cutrentImgIndex === 0) {
          this.previousButton.disabled = true;
        }
      },
      nextImg: function (e) {
        this.previousButton.disabled = false;
        this.cutrentImgIndex++;
        this.viewImg.src = this.masImageUrls[this.cutrentImgIndex];
        if (this.cutrentImgIndex === this.masImageUrls.length - 1) {
          this.nextButton.disabled = true;
        }
      },
    };
    return newSlider;
  },
};
