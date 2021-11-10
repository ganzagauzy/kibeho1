var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement("div");
  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
  document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}
if (setREVStartSize !== undefined) setREVStartSize(
  {
    c: '#rev_slider_4_1',
    responsiveLevels: [1240, 1024, 778, 480],
    gridwidth: [1240, 1024, 778, 480],
    gridheight: [672, 600, 500, 400],
    sliderLayout: 'fullwidth'
  });
var revapi4, tpj;
(function () {
  if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad); else onLoad();

  function onLoad() {
    if (tpj === undefined) {
      tpj = jQuery;
      if ("off" == "on") tpj.noConflict();
    }
    if (tpj("#rev_slider_4_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_4_1");
    } else {
      revapi4 = tpj("#rev_slider_4_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//hotelwp.thimpress.com/demo-3/wp-content/plugins/revslider/public/assets/js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          arrows: {
            style: "zeus",
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '<div class="tp-title-wrap">  <div class="tp-arr-imgholder"></div> </div>',
            left: {
              h_align: "left", v_align: "center", h_offset: 30, v_offset: 0
            },
            right: {
              h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
            }
          },
          bullets: {
            enable: true,
            hide_onmobile: false,
            style: "hermes",
            hide_onleave: false,
            direction: "horizontal",
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 100,
            space: 10,
            tmp: ''
          }
        },
        viewPort: {
          enable: true, outof: "wait", visible_area: "80%", presize: false
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [672, 600, 500, 400],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: false,}
      });
    }

  }
}());

var htmlDivCss = unescape(".tparrows%3Abefore%20%7B%0A%20%20font-family%3A%20%22Ionicons%22%20%21important%3B%0A%20%20line-height%3A%2060px%3B%0A%7D%0A.tparrows.tp-leftarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Cf3cf%22%20%21important%3B%0A%7D%0A.tparrows.tp-rightarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Cf3d1%22%20%21important%3B%0A%7D%0A.rev_slider%20.hermes%20.tp-bullet%20%7B%0A%20%20%20%20background%3A%20none%3B%0A%20%20%20%20box-shadow%3A%20none%20%21important%3B%0A%20%20%20%20border%3A%202px%20solid%20transparent%20%21important%3B%0A%7D%0A.rev_slider%20.hermes%20.tp-bullet.selected%2C%20.rev_slider%20.hermes%20.tp-bullet%3Ahover%20%7B%0A%20%20%20%20border-color%3A%20rgba%28255%2C255%2C255%2C0.3%29%20%21important%3B%0A%7D%0A.rev_slider%20.hermes%20.tp-bullet%3Aafter%20%7B%0A%20%20%20%20bottom%3A%200px%20%21important%3B%0A%20%20%20%20left%3A%200px%20%21important%3B%0A%20%20%20%20width%3A%2010px%20%21important%3B%0A%20%20%20%20background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.3%29%20%21important%3B%0A%20%20%20%20box-shadow%3A%20none%20%21important%3B%0A%20%20%20%20height%3A%2010px%20%21important%3B%0A%7D%0A.rev_slider%20.hermes%20.tp-bullet.selected%3Aafter%2C%20.rev_slider%20.hermes%20.tp-bullet%3Ahover%3Aafter%20%7B%0A%20%20%20%20background%3A%20none%20%21important%3B%0A%7D%0A.rev_slider%20.hermes%20.tp-bullet%3Ahover%2C%20.rev_slider%20.hermes%20.tp-bullet.selected%3Ahover%20%7B%0A%20%20%20%20%20background%3A%20none%20%21important%3B%20%0A%20%20%20%20%20border-color%3A%20rgba%28255%2C255%2C255%2C0.3%29%20%21important%3B%0A%7D%0A.thim-link-slider2%20a%7B%0A%20%20%09line-height%3A%201%20%21important%3B%0A%20%20%20%20padding-top%3A%2017px%20%21important%3B%0A%20%20%20%20padding-bottom%3A%2016px%20%21important%3B%0A%20%7D%0A%40media%20%28max-width%3A%20599px%29%20and%20%28min-width%3A%20567px%29%20%7B%0A%20%20p.tp-caption%2C%0A%20%20h1.tp-caption%20%7B%0A%20%20%20%20margin-top%3A%2060px%20%21important%3B%0A%20%20%7D%0A%0A%20%20h1.tp-caption%20%7B%0A%20%20%20%20font-size%3A%2032px%20%21important%3B%0A%20%20%7D%0A%0A%20%20.thim-link-slider%20%7B%0A%20%20%20%20margin-top%3A%2040px%20%21important%3B%0A%20%20%7D%0A%7D");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement('div');
  htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
  document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}
var htmlDivCss = unescape("%23rev_slider_4_1%20.zeus.tparrows%20%7B%0A%20%20cursor%3Apointer%3B%0A%20%20min-width%3A60px%3B%0A%20%20min-height%3A60px%3B%0A%20%20position%3Aabsolute%3B%0A%20%20display%3Ablock%3B%0A%20%20z-index%3A100%3B%0A%20%20border-radius%3A50%25%3B%20%20%20%0A%20%20overflow%3Ahidden%3B%0A%20%20background%3Argba%28255%2C%20255%2C%20255%2C%200.3%29%3B%0A%7D%0A%0A%23rev_slider_4_1%20.zeus.tparrows%3Abefore%20%7B%0A%20%20font-family%3A%20%22revicons%22%3B%0A%20%20font-size%3A32px%3B%0A%20%20color%3Argb%28255%2C%20255%2C%20255%29%3B%0A%20%20display%3Ablock%3B%0A%20%20line-height%3A%2060px%3B%0A%20%20text-align%3A%20center%3B%20%20%20%20%0A%20%20z-index%3A2%3B%0A%20%20position%3Arelative%3B%0A%7D%0A%23rev_slider_4_1%20.zeus.tparrows.tp-leftarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Ce824%22%3B%0A%7D%0A%23rev_slider_4_1%20.zeus.tparrows.tp-rightarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Ce825%22%3B%0A%7D%0A%0A%23rev_slider_4_1%20.zeus%20.tp-title-wrap%20%7B%0A%20%20background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%20%20width%3A100%25%3B%0A%20%20height%3A100%25%3B%0A%20%20top%3A0px%3B%0A%20%20left%3A0px%3B%0A%20%20position%3Aabsolute%3B%0A%20%20opacity%3A0%3B%0A%20%20transform%3Ascale%280%29%3B%0A%20%20-webkit-transform%3Ascale%280%29%3B%0A%20%20%20transition%3A%20all%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%20-moz-transition%3Aall%200.3s%3B%0A%20%20%20border-radius%3A50%25%3B%0A%20%7D%0A%23rev_slider_4_1%20.zeus%20.tp-arr-imgholder%20%7B%0A%20%20width%3A100%25%3B%0A%20%20height%3A100%25%3B%0A%20%20position%3Aabsolute%3B%0A%20%20top%3A0px%3B%0A%20%20left%3A0px%3B%0A%20%20background-position%3Acenter%20center%3B%0A%20%20background-size%3Acover%3B%0A%20%20border-radius%3A50%25%3B%0A%20%20transform%3Atranslatex%28-100%25%29%3B%0A%20%20-webkit-transform%3Atranslatex%28-100%25%29%3B%0A%20%20%20transition%3A%20all%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%20-moz-transition%3Aall%200.3s%3B%0A%0A%20%7D%0A%23rev_slider_4_1%20.zeus.tp-rightarrow%20.tp-arr-imgholder%20%7B%0A%20%20%20%20transform%3Atranslatex%28100%25%29%3B%0A%20%20-webkit-transform%3Atranslatex%28100%25%29%3B%0A%20%20%20%20%20%20%7D%0A%23rev_slider_4_1%20.zeus.tparrows%3Ahover%20.tp-arr-imgholder%20%7B%0A%20%20transform%3Atranslatex%280%29%3B%0A%20%20-webkit-transform%3Atranslatex%280%29%3B%0A%20%20opacity%3A1%3B%0A%7D%0A%20%20%20%20%20%20%0A%23rev_slider_4_1%20.zeus.tparrows%3Ahover%20.tp-title-wrap%20%7B%0A%20%20transform%3Ascale%281%29%3B%0A%20%20-webkit-transform%3Ascale%281%29%3B%0A%20%20opacity%3A1%3B%0A%7D%0A%20%0A.hermes.tp-bullets%20%7B%0A%7D%0A%0A.hermes%20.tp-bullet%20%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%20%20%20%20width%3A14px%3B%0A%20%20%20%20height%3A14px%3B%0A%20%20%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200%29%3B%0A%20%20%20%20box-shadow%3A%20inset%200%200%200%202px%20rgb%28255%2C%20255%2C%20255%2C%200.3%29%3B%0A%20%20%20%20-webkit-transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%7D%0A%0A.hermes%20.tp-bullet%3Ahover%20%7B%0A%09%20%20background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.3%29%3B%0A%7D%0A.hermes%20.tp-bullet%3Aafter%20%7B%0A%20%20content%3A%20%27%20%27%3B%0A%20%20position%3A%20absolute%3B%0A%20%20bottom%3A%200%3B%0A%20%20height%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgb%28255%2C%20255%2C%20255%2C%200.3%29%3B%0A%20%20box-shadow%3A%200%200%201px%20rgb%28255%2C%20255%2C%20255%2C%200.3%29%3B%0A%20%20-webkit-transition%3A%20height%200.3s%20ease%3B%0A%20%20transition%3A%20height%200.3s%20ease%3B%0A%7D%0A.hermes%20.tp-bullet.selected%3Aafter%20%7B%0A%20%20height%3A100%25%3B%0A%7D%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement('div');
  htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
  document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}
