(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c57f6ae"],{1148:function(t,a,e){"use strict";var s=e("5926"),i=e("577e"),r=e("1d80");t.exports=function(t){var a=i(r(this)),e="",o=s(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(a+=a))1&o&&(e+=a);return e}},"408a":function(t,a){var e=1..valueOf;t.exports=function(t){return e.call(t)}},b680:function(t,a,e){"use strict";var s=e("23e7"),i=e("5926"),r=e("408a"),o=e("1148"),l=e("d039"),n=1..toFixed,c=Math.floor,d=function(t,a,e){return 0===a?e:a%2===1?d(t,a-1,e*t):d(t*t,a/2,e)},h=function(t){var a=0,e=t;while(e>=4096)a+=12,e/=4096;while(e>=2)a+=1,e/=2;return a},p=function(t,a,e){var s=-1,i=e;while(++s<6)i+=a*t[s],t[s]=i%1e7,i=c(i/1e7)},f=function(t,a){var e=6,s=0;while(--e>=0)s+=t[e],t[e]=c(s/a),s=s%a*1e7},C=function(t){var a=6,e="";while(--a>=0)if(""!==e||0===a||0!==t[a]){var s=String(t[a]);e=""===e?s:e+o.call("0",7-s.length)+s}return e},b=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){n.call({})}));s({target:"Number",proto:!0,forced:b},{toFixed:function(t){var a,e,s,l,n=r(this),c=i(t),b=[0,0,0,0,0,0],u="",g="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(u="-",n=-n),n>1e-21)if(a=h(n*d(2,69,1))-69,e=a<0?n*d(2,-a,1):n/d(2,a,1),e*=4503599627370496,a=52-a,a>0){p(b,0,e),s=c;while(s>=7)p(b,1e7,0),s-=7;p(b,d(10,s,1),0),s=a-1;while(s>=23)f(b,1<<23),s-=23;f(b,1<<s),p(b,1,1),f(b,2),g=C(b)}else p(b,0,e),p(b,1<<-a,0),g=C(b)+o.call("0",c);return c>0?(l=g.length,g=u+(l<=c?"0."+o.call("0",c-l)+g:g.slice(0,l-c)+"."+g.slice(l-c))):g=u+g,g}})},ff8c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Line With Data Labels")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"380",type:"line",dir:"ltr",series:t.linewithDataChart.series,options:t.linewithDataChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Dashed Line")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"380",type:"line",dir:"ltr",series:t.dashedLineChart.series,options:t.dashedLineChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Spline Area")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"area",dir:"ltr",series:t.splineAreaChart.series,options:t.splineAreaChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Column Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.columnChart.series,options:t.columnChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Column With Data Labels")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.columnDatalabelChart.series,options:t.columnDatalabelChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Bar Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.barChart.series,options:t.barChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Line, Column & Area Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"line",dir:"ltr",series:t.mixedChart.series,options:t.mixedChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Radial Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"370",type:"radialBar",dir:"ltr",series:t.radialChart.series,options:t.radialChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Pie Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"320",type:"pie",dir:"ltr",series:t.pieChart.series,options:t.pieChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Donut Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"320",type:"donut",dir:"ltr",series:t.donutChart.series,options:t.donutChart.chartOptions}})],1)])])])],1)},i=[],r=(e("a4d3"),e("e01a"),e("444f")),o=e("2579"),l=e("c2a4"),n=(e("b680"),{chartOptions:{chart:{height:380,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#556ee6","#34c38f"],dataLabels:{enabled:!1},stroke:{width:[3,3],curve:"straight"},title:{text:"Average High & Low Temperature",align:"left",style:{fontWeight:"500"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f1f1"},markers:{style:"inverted",size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:[{name:"High - 2018",data:[26,24,32,36,33,31,33]},{name:"Low - 2018",data:[14,11,16,12,17,13,12]}]}),c={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[36,42,60,42,13,18,29,37,36,51,32,35]},{name:"Total Visits",data:[89,56,74,98,72,38,64,46,84,58,46,49]}],chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:["#556ee6","#f46a6a","#34c38f"],dataLabels:{enabled:!1},stroke:{width:[3,4,3],curve:"straight",dashArray:[0,8,5]},title:{text:"Page Statistics",align:"left",style:{fontWeight:"500"}},markers:{size:0,hover:{sizeOffset:6}},xaxis:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},tooltip:{y:[{title:{formatter:function(t){return t+" (mins)"}}},{title:{formatter:function(t){return t+" per session"}}},{title:{formatter:function(t){return t}}}]},grid:{borderColor:"#f1f1f1"}}},d={series:[{name:"series1",data:[34,40,28,52,42,109,100]},{name:"series2",data:[32,60,34,46,34,52,41]}],chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},colors:["#556ee6","#34c38f"],xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},grid:{borderColor:"#f1f1f1"},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},h={series:[{name:"Net Profit",data:[46,57,59,54,62,58,64,60,66]},{name:"Revenue",data:[74,83,102,97,86,106,93,114,94]},{name:"Free Cash Flow",data:[37,42,38,26,47,50,54,55,43]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},colors:["#34c38f","#556ee6","#f46a6a"],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)",style:{fontWeight:"500"}}},grid:{borderColor:"#f1f1f1"},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}}},p={series:[{name:"Inflation",data:[2.5,3.2,5,10.1,4.2,3.8,3,2.4,4,1.2,3.5,.8]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(t){return t+"%"},offsetY:-22,style:{fontSize:"12px",colors:["#304758"]}},colors:["#556ee6"],grid:{borderColor:"#f1f1f1"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(t){return t+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:330,align:"center",style:{color:"#444",fontWeight:"500"}}}},f={series:[{data:[380,430,450,475,550,584,780,1100,1220,1365]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},colors:["#34c38f"],grid:{borderColor:"#f1f1f1"},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}}},C={series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],chartOptions:{chart:{stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#f46a6a","#556ee6","#34c38f"],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?t.toFixed(0)+" points":t}}},grid:{borderColor:"#f1f1f1"}}},b={series:[44,55,67,83],chartOptions:{plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(t){return 249}}}}},labels:["Computer","Tablet","Laptop","Mobile"],colors:["#556ee6","#34c38f","#f46a6a","#f1b44c"]}},u={series:[44,55,41,17,15],chartOptions:{labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#34c38f","#556ee6","#f46a6a","#50a5f1","#f1b44c"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]}},g={series:[44,55,41,17,15],chartOptions:{labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#34c38f","#556ee6","#f46a6a","#50a5f1","#f1b44c"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]}},m={page:{title:"Apex Chart",meta:[{name:"description",content:l.description}]},components:{Layout:r["a"],PageHeader:o["a"]},data:function(){return{linewithDataChart:n,dashedLineChart:c,splineAreaChart:d,columnChart:h,columnDatalabelChart:p,barChart:f,mixedChart:C,radialChart:b,pieChart:u,donutChart:g,title:"Apex charts",items:[{text:"Charts",href:"/"},{text:"Apex charts",active:!0}]}}},v=m,x=e("2877"),y=Object(x["a"])(v,s,i,!1,null,null,null);a["default"]=y.exports}}]);
//# sourceMappingURL=chunk-4c57f6ae.29059319.js.map