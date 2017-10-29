// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2017",
      text: {
        headline: "无锡市",
        text: "<p>无锡，简称“锡”，古称新吴、梁溪、金匮，江苏省地级市，被誉为“太湖明珠”。无锡位于江苏南部，地处长江三角洲平原、江南腹地，太湖流域。北倚长江，南滨太湖，东接苏州，西连常州，构成苏锡常都市圈，是长江经济带、长江三角洲城市群的重要城市。无锡是国家历史文化名城，自古就是鱼米之乡，素有布码头、丝都、米市之称。无锡是中国民族工业和乡镇工业的摇篮，是苏南模式的发祥地。无锡文化属吴越文化，无锡人属江浙民系，使用吴语。</p>"
      },
      media: {
        url: "http://file32.mafengwo.net/M00/9D/37/wKgBs1cAtOCAfiHNACo52SGcDlg15.groupinfo.w680.jpeg",
        credit: "无锡",
        caption: "关于无锡"
      }
    }, {
      date: "1918",
      text: {
        headline: "鼋头渚",
        text: "<p> 鼋头渚横卧于无锡太湖西北岸的一个半岛，三面环水，由宝界山、鹿顶山、南犊山及其附近的中犊山和三山岛等组成,因巨石突入湖中，形状酷似神龟昂首而得名。鼋头渚始建于1918年，由清末举人杨翰西建造，当时他巧妙利用真山真水建园，把鼋头渚这一私家园林建得三分人意七分自然。1958年郭沫若畅游太湖，留下了“太湖佳绝处，毕竟在鼋头”的诗句。上世纪80年代后的大规模扩建，使得鼋头渚的面积由原来大60亩扩大到了1960亩。2012年10月26日，鼋头渚被正式列为国家5A级风景区。</p>"

      },
      location: {
        name: "鼋头渚",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 31.519375,
        lon: 120.234281,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://iguide.lvmama.com/uploadfile/2013/0911/201309111619015142.jpg",
        type: 		"image",
        credit: "鼋头渚",
        caption: "关于鼋头渚"
      }
    }, {
      date: "1987",
      text: {
        headline: "三国城",
        text: "<p>无锡三国影视城又名中央电视台无锡影视基地，是中国首创的大规模影视拍摄和旅游基地，也是国家首批5A级旅游景区。三国城坐落在葱茏苍翠的军嶂山麓、风景秀丽的太湖之滨，始建于1987年，占地35公顷,是中央电视台为拍摄八十四集电视连续剧《三国演义》而兴建的大型影视文化景区，“刘备招亲”、“火烧赤壁”、“横槊赋诗”、“草船借箭”、“借东风”、“诸葛吊孝”、“舌战群儒”等十多集的重场戏均在此拍摄。</p>"

      },
      location: {
        name: "三国城",
        lat: 31.480739,
        lon: 120.234573,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pic4.40017.cn/scenery/destination/2017/01/12/11/fyvGww.jpg",
        credit: "三国城",
        caption: "关于三国城"
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}