interface response {
    data: {
    };
}

interface err {
  err: any;
}

let swiper1:any;

interface obj{
  [propname: string]: any;
};


declare let AllData:obj;

let app = new Vue({
  el: "#app",
  data: {
    
  },
  methods: {},
  mounted: function () {
    swiper1 = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });


  },
});
