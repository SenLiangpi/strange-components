<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-03 17:03:15
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-01-20 10:36:05
-->
<template>
  <div class="strange-pdf" :id="pdf_id">
    <div class="loading" v-if="loadingType">
      <div></div>
    </div>
  </div>
</template>

<script>
  const pdfAnalysis = (data, back) => {
    PDFJS.cMapPacked = true;
    PDFJS.getDocument(data.url).then(function (pdf) {
      if (pdf) {
        for (var a = 1; a <= pdf.numPages; a++) {
          let c = document.createElement("canvas");
          c.className = "canvasclock";
          document.getElementById(data.id).append(c);
          openPage(pdf, a, c.getContext("2d"));
        }
        back();
      }
    });
  };
  function openPage(pdfFile, pageNumber, context) {
    let e = 2;
    pdfFile.getPage(pageNumber).then(function (page) {
      let viewport = page.getViewport(e);
      const width = 100,
        height = 100 / (viewport.width / viewport.height);
      context.canvas.width = viewport.width;
      context.canvas.height = viewport.height;
      context.canvas.style.width = width + "vw";
      context.canvas.style.height = height + "vw";
      var f = { canvasContext: context, viewport: viewport };
      page.render(f);
    });
  }
  export default { 
    name: "strange-pdf",
    components: {},
    props: {
      url_list: {
        type: Array
      }
    },
    data() {
      return {
        pdf_id: String(parseInt(Math.random() * 10000000000)),
        loadingType: true
      };
    },
    methods: {
    },
    created() {
      let loading_pdf = 0;
      for (let a in this.url_list) {
        pdfAnalysis({ url: this.url_list[a], id: this.pdf_id }, () => {
          loading_pdf++;
          if (this.url_list.length == loading_pdf) {
            this.loadingType = false;
          }
        });
      }
    },
    mounted() {
    },
    watch: {
    }
  }
</script>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(225, 225, 225, 0.5);
}
.loading div {
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: #fff;
  margin: calc(50vh - 40px) auto;
  background-image: url('../../../../../assets/loading.svg');
  -webkit-animation: rotator 1.4s linear infinite;
  animation: rotator 1.4s linear infinite;
}
@-webkit-keyframes rotator {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotator {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>