(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){e.exports=a(317)},141:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),s=(a(141),a(20)),i=a(21),c=a(23),u=a(22),h=a(24),m=a(16),d=a(74),p=a(118),y=a.n(p),k=Object(m.createMuiTheme)({palette:{primary:d.teal,secondary:d.blue},typography:{useNextVariants:!0}});var f=function(e){return function(t){return r.a.createElement(m.MuiThemeProvider,{theme:k},r.a.createElement(y.a,null),r.a.createElement(e,t))}},b=a(58),_=a.n(b),g=a(14),C=a.n(g),E=a(27),v=a.n(E),O=a(134),w=a.n(O),L=a(56),S=a.n(L),j=a(37),A=a(57),N=a(135),x=a(29),R=a.n(x),F=a(119),D=a(72),B=a.n(D),V=a(120),T=a.n(V),M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e){var t=a.props.onChange,n=e.target.value;t&&t(n)},a.renderOptions=function(){var e=a.props,t=e.label,n=e.options;return Object.keys(n).map(function(e){var a=n[e];return r.a.createElement("option",{key:"select_"+t.toLowerCase()+"_"+e,value:e},a)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.dense,n=e.label,l=e.hideLabel,o=e.selectedOption,s=e.defaultLabel,i=e.defaultValue,c=e.disabled;return r.a.createElement("div",{className:Object(F.a)({},t.root,{maxWidth:!0===a?80:void 0})},!0!==l&&r.a.createElement(C.a,{variant:"h5"},n,r.a.createElement("span",{className:t.required},"*")),r.a.createElement(B.a,{className:t.formControl,style:{margin:!0===a?0:12}},r.a.createElement(T.a,{disabled:c,value:o,onChange:this.handleChange,name:"select_"+n.toUpperCase,className:t.selectEmpty},r.a.createElement("option",{key:"select_"+n.toLowerCase()+"_none",value:i||""},s||"Select"),this.renderOptions())))}}]),t}(r.a.Component),z=Object(m.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"column"},formControl:{maxWidth:180},required:{color:"red"}}})(M),W=a(121),I=a.n(W),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selectedValue:-1},a.handleChange=function(e){var t=a.props.onChange,n=parseInt(e.target.value);t&&t(n+1),a.setState({selectedValue:n})},a.renderRadioButtons=function(){var e=a.props,t=e.classes,n=e.label;return Array.apply(null,{length:5}).map(Number.call,Number).map(function(e){return r.a.createElement(I.a,{key:"linear_scale_"+n.toLowerCase()+"_"+e,checked:a.state.selectedValue===e,onChange:a.handleChange,value:e,classes:{root:t.button,checked:t.checked}})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.label,n=e.leftLabel,l=e.rightLabel;return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"subtitle2"},a,r.a.createElement("span",{className:t.required},"*")),r.a.createElement("div",{className:t.wrapper},r.a.createElement(C.a,{variant:"subtitle2"},n),r.a.createElement("div",{className:t.buttons},this.renderRadioButtons()),r.a.createElement(C.a,{variant:"subtitle2",align:"right"},l)))}}]),t}(r.a.Component),H=Object(m.withStyles)(function(e){return{button:{alignSelf:"center",padding:2,"&$checked":{color:e.palette.primary.main}},checked:{},wrapper:{marginTop:2*e.spacing.unit,display:"flex",flexDirection:"row",justifyContent:"left"},buttons:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:16,marginRight:16},required:{color:"red"}}})(q),K=a(124),P=a.n(K),U=a(126),J=a.n(U),Y=a(122),G=a.n(Y),Q=a(125),Z=a.n(Q),$=a(75),X=a.n($),ee=a(123),te=a.n(ee),ae=function(e){return{root:{marginTop:3*e.spacing.unit,overflowX:"scroll"},table:{minWidth:"100% !important",width:"100% !important"},tableCell:{whiteSpace:"nowrap",textOverflow:"ellipsis"}}},ne=Object(m.withStyles)(function(e){return{root:Object(j.a)({},e.breakpoints.down("xs"),{maxWidth:"120px !important"})}})(G.a),re=0;function le(e,t){return{id:re+=1,label:e,size:t}}var oe=[le('< 8"',"lt8"),le('8" - 9.9\u201d',"8"),le('10" - 11.9\u201d',"10"),le('12" - 13.9\u201d',"12"),le("14 - 15.9\u201d","14"),le('16" - 17.9\u201d',"16"),le('18" - 19.9\u201d',"18"),le('>= 20"',"gte20")],se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e,t){var n=a.props.onChange;n&&n(e,t)},a.range=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a={};return Array.from(Array(e).keys()).forEach(function(e,n){a[n+t]=n+t}),a},a.renderRow=function(e){var t=a.props,n=t.formState,l=t.fish,o=t.fish_id,s=a.props.selectedOptions||{},i=[],c=[o+"_kept_"+e.size,o+"_released_"+e.size,o+"_ad_clip_"+e.size];i.push(r.a.createElement(ne,{key:"cell_header_"+e.size,component:"th",scope:"row"},e.label));for(var u="Kokanee"===l?3:2,h=function(){var e=c[m],t=3===u&&2===m?(parseInt(n[c[0]])||0)+(parseInt(n[c[1]])||0):40;i.push(r.a.createElement(ne,{key:"cell_"+e},r.a.createElement(z,{defaultValue:0,defaultLabel:"0",label:"",hideLabel:!0,options:a.range(t),selectedOption:s[e],onChange:function(t){console.log(e,t),a.handleChange(e,t)}})))},m=0;m<u;m++)h();return i},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.fish,l={root:{maxWidth:"50px !important"}};return r.a.createElement("span",null,r.a.createElement(C.a,{variant:"h6"},n),r.a.createElement(te.a,{smUp:!0},r.a.createElement(C.a,{variant:"subtitle2",className:ae.underline},r.a.createElement("strong",null,"You may need scroll right to view all information"))),r.a.createElement(v.a,{className:a.root},r.a.createElement(P.a,{className:a.table,padding:"dense",style:{width:"auto",tableLayout:"auto"}},r.a.createElement(Z.a,{className:a.tableBody},r.a.createElement(X.a,null,r.a.createElement(ne,{style:{maxWidth:"50px !important"}},"Size"),r.a.createElement(ne,{align:"left",style:l},"Kept"),r.a.createElement(ne,{align:"left",style:l},"Released"),"Kokanee"===n&&r.a.createElement(ne,{align:"left",style:l},"Fin Clipped"))),r.a.createElement(J.a,{className:a.tableBody},oe.map(function(t){return r.a.createElement(X.a,{key:t.id},e.renderRow(t))})))))}}]),t}(r.a.Component),ie=Object(m.withStyles)(ae)(se),ce={lake_almanor:"Lake Almanor",bass_lake:"Bass Lake",boca_reservoir:"Boca Reservoir",bowman_lake:"Bowman Lake",bucks_lake:"Bucks Lake",bullards_bar_reservoir:"Bullards Bar Reservoir",donner_lake:"Donner Lake",folsom_lake:"Folsom Lake",hellhole_reservoir:"Hellhole Reservoir",huntington_lake:"Huntington Lake",lake_berryessa:"Lake Berryessa",lake_don_pedro:"Lake Don Pedro",lake_mcclure:"Lake McClure",lake_oroville:"Lake Oroville",lake_pardee:"Lake Pardee",lake_spaulding:"Lake Spaulding",lake_tahoe:"Lake Tahoe",little_grass_valley:"Little Grass Valley",new_melones_reservoir:"New Melones Reservoir",pine_flat_lake:"Pine Flat Lake",shasta_lake:"Shasta Lake",shaver_lake:"Shaver Lake",stampede_reservoir:"Stampede Reservoir",trinity_lake:"Trinity Lake","twin_lakes,_upper":"Twin Lakes, Upper",union_valley_reservoir:"Union Valley Reservoir",whiskeytown_lake:"Whiskeytown Lake"},ue={alameda:"Alameda County",alpine:"Alpine County",amador:"Amador County",butte:"Butte County",calaveras:"Calaveras County",colusa:"Colusa County",contra_costa:"Contra Costa County",del_norte:"Del Norte County",el_dorado:"El Dorado County",fresno:"Fresno County",glenn:"Glenn County",humboldt:"Humboldt County",imperial:"Imperial County",inyo:"Inyo County",kern:"Kern County",kings:"Kings County",lake:"Lake County",lassen:"Lassen County",los_angeles:"Los Angeles County",madera:"Madera County",marin:"Marin County",mariposa:"Mariposa County",mendocino:"Mendocino County",merced:"Merced County",modoc:"Modoc County",mono:"Mono County",monterey:"Monterey County",napa:"Napa County",nevada_county:"Nevada County",orange:"Orange County",placer:"Placer County",plumas:"Plumas County",riverside:"Riverside County",sacramento:"Sacramento County",san_benito:"San Benito County",san_bernardino:"San Bernardino County",san_diego:"San Diego County",san_francisco:"San Francisco County",san_joaquin:"San Joaquin County",san_luis_obispo:"San Luis Obispo County",san_mateo:"San Mateo County",santa_barbara:"Santa Barbara County",santa_clara:"Santa Clara County",santa_cruz:"Santa Cruz County",shasta:"Shasta County",sierra:"Sierra County",siskiyou:"Siskiyou County",solano:"Solano County",sonoma:"Sonoma County",stanislaus:"Stanislaus County",sutter:"Sutter County",tehama:"Tehama County",trinity:"Trinity County",tulare:"Tulare County",tuolumne:"Tuolumne County",ventura:"Ventura County",yolo:"Yolo County",yuba:"Yuba County",other:"Other"},he={az:"AZ",or:"OR",wa:"WA",other:"Other"},me={kokanee:"Kokanee",chinook:"Chinook",both:"Both"},de=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedDate:new Date,state:"ca",submit:!1},a.formComplete=function(){var e=a.state,t=e.selectedDate,n=e.lake,r=e.numOfAnglers,l=e.numOfHoursFished,o=e.numOfRods,s=e.state,i=e.residence,c=e.sat_overall,u=e.sat_numOfFish,h=e.sat_sizeOfFish;return t&&n&&r&&l&&o&&s&&i&&c&&u&&h},a.handleDateChange=function(e){a.setState({selectedDate:e})},a.range=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a={};return Array.from(Array(e).keys()).forEach(function(e,n){a[n+t]=n+t}),a},a.handleChange=function(e,t){""===t&&(t=void 0),a.setState(Object(j.a)({},e,t))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillUpdate",value:function(e,t){console.log(t)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.selectedDate,n={"entry.1113825212":a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2),"entry.978780858":ce[this.state.lake],"entry.544223057":this.state.numOfAnglers,"entry.465386035":this.state.numOfHoursFished,"entry.2083749126":this.state.numOfRods,"entry.1594605968":"n/a"===this.state.residence?"N/A":ue[this.state.residence],"entry.1774382335":"ca"===this.state.state?"CA":he[this.state.state],"entry.245010161":this.state.targetedSpecies,"entry.926315835":this.state.kokanee_kept_lt8||0,"entry.1168566108":this.state.kokanee_released_lt8||0,"entry.182249114":this.state.kokanee_kept_8||0,"entry.1899785101":this.state.kokanee_released_8||0,"entry.1826766183":this.state.kokanee_kept_10||0,"entry.2118288753":this.state.kokanee_released_10||0,"entry.1846482354":this.state.kokanee_kept_12||0,"entry.1509350859":this.state.kokanee_released_12||0,"entry.1460011487":this.state.kokanee_kept_14||0,"entry.436313363":this.state.kokanee_released_14||0,"entry.1425365122":this.state.kokanee_kept_16||0,"entry.380712182":this.state.kokanee_released_16||0,"entry.414278670":this.state.kokanee_kept_18||0,"entry.607088307":this.state.kokanee_released_18||0,"entry.2050628999":this.state.kokanee_kept_gte20||0,"entry.1190430582":this.state.kokanee_released_gte20||0,"entry.502757154":this.state.chinook_kept_lt8||0,"entry.1717172748":this.state.chinook_released_lt8||0,"entry.1161055011":this.state.chinook_kept_8||0,"entry.1068593095":this.state.chinook_released_8||0,"entry.163459983":this.state.chinook_kept_10||0,"entry.1662185936":this.state.chinook_released_10||0,"entry.1380958071":this.state.chinook_kept_12||0,"entry.1239720748":this.state.chinook_released_12||0,"entry.1207753498":this.state.chinook_kept_14||0,"entry.1538963740":this.state.chinook_released_14||0,"entry.143882022":this.state.chinook_kept_16||0,"entry.1209645714":this.state.chinook_released_16||0,"entry.576771471":this.state.chinook_kept_18||0,"entry.1123048741":this.state.chinook_released_18||0,"entry.574251591":this.state.chinook_kept_gte20||0,"entry.1877388184":this.state.chinook_released_gte20||0,"entry.1213613591":this.state.sat_overall,"entry.486866884":this.state.sat_numOfFish,"entry.162065823":this.state.sat_sizeOfFish,"entry.877114646":this.state.kokanee_ad_clip_lt8||0,"entry.921596154":this.state.kokanee_ad_clip_8||0,"entry.1062659070":this.state.kokanee_ad_clip_10||0,"entry.520944888":this.state.kokanee_ad_clip_12||0,"entry.801137358":this.state.kokanee_ad_clip_14||0,"entry.19730656":this.state.kokanee_ad_clip_16||0,"entry.470753667":this.state.kokanee_ad_clip_18||0,"entry.1678122272":this.state.kokanee_ad_clip_gte20||0};return console.log("states:",he),console.log("state:",this.state),console.log("submission:",n),r.a.createElement("div",null,!this.state.submit&&r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h4"},"Location and Angling Information"),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"body1"},"Required fields are marked with a ",r.a.createElement("span",{className:t.required},"*")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"h5"},"Date",r.a.createElement("span",{className:t.required},"*")),r.a.createElement(A.b,{utils:N.a},r.a.createElement(A.a,{keyboard:!0,value:a,onChange:this.handleDateChange})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z,{label:"Lake",options:ce,selectedOption:this.state.lake,onChange:function(t){return e.handleChange("lake",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z,{label:"Number of Anglers",defaultValue:0,defaultLabel:"0",options:this.range(10),selectedOption:this.state.numOfAnglers,onChange:function(t){return e.handleChange("numOfAnglers",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z,{label:"Number of Hours Fished",defaultValue:0,defaultLabel:"0",options:this.range(12),selectedOption:this.state.numOfHoursFished,onChange:function(t){return e.handleChange("numOfHoursFished",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z,{label:"Number of Rods Used",defaultValue:0,defaultLabel:"0",options:this.range(10),selectedOption:this.state.numOfRods,onChange:function(t){return e.handleChange("numOfRods",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z,{label:"State of Residence",noNone:!0,options:he,selectedOption:this.state.state,defaultLabel:"CA",defaultValue:"ca",onChange:function(t){e.handleChange("state",t),"ca"!==t?e.handleChange("residence","n/a"):e.handleChange("residence","")}}),r.a.createElement("br",null),r.a.createElement("br",null),"ca"===this.state.state&&r.a.createElement("span",null,r.a.createElement(z,{label:"County of Residence",disabled:"ca"!==this.state.state,options:ue,selectedOption:this.state.residence,onChange:function(t){e.handleChange("residence",t)}}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(z,{label:"Targeted Species",options:me,selectedOption:this.state.targetedSpecies,onChange:function(t){return e.handleChange("targetedSpecies",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(C.a,{variant:"h4"},"Fish Information"),r.a.createElement("br",null),r.a.createElement(ie,{formState:this.state,fish_id:"kokanee",fish:"Kokanee",onChange:function(t,a){return e.handleChange(t,a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ie,{formState:this.state,fish_id:"chinook",fish:"Inland Chinook",onChange:function(t,a){return e.handleChange(t,a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(C.a,{variant:"h4"},"Feedback"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(H,{label:"Overall Angling Experience Today",leftLabel:"Very Dissatisfied",rightLabel:"Very Satisfied",onChange:function(t){return e.handleChange("sat_overall",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(H,{label:"Number of Fish",leftLabel:"Very Dissatisfied",rightLabel:"Very Satisfied",onChange:function(t){return e.handleChange("sat_numOfFish",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(H,{label:"Size of Fish",leftLabel:"Very Dissatisfied",rightLabel:"Very Satisfied",onChange:function(t){return e.handleChange("sat_sizeOfFish",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R.a,{color:"primary",variant:"contained",disabled:!this.formComplete(),onClick:function(){return e.setState({submit:!0})}},"Submit")),this.state.submit&&r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h6",style:{textAlign:"center"}},"Thank you for filling out the survey"),r.a.createElement("iframe",{title:"submit window",style:{display:"none",height:0,width:0},src:"https://docs.google.com/forms/d/e/1FAIpQLSfK8v4xHnetEJH9B_qRJ9W6_gOQHRQgvUZf-Ms90eL-roJnZg/formResponse?usp=pp_url&submit=Submit&"+Object.keys(n).map(function(e){return e+"="+n[e]}).join("&")})))}}]),t}(r.a.Component),pe=f(Object(m.withStyles)(function(e){return{title:{marginBottom:32},underline:{textDecoration:"underline"},required:{color:"red"}}})(de)),ye=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{position:"sticky",color:"primary"},r.a.createElement(S.a,null,r.a.createElement(C.a,{variant:"h6",color:"inherit",className:e.name},"Kokanee & Inland Chinook Angler Survey"))),r.a.createElement("div",{style:{paddingTop:20}},r.a.createElement(_.a,{container:!0},r.a.createElement(_.a,{item:!0,md:3,sm:2}),r.a.createElement(_.a,{item:!0,md:6,sm:8,xs:12},r.a.createElement(v.a,{className:e.paper},r.a.createElement(pe,null)),r.a.createElement("div",{className:e.footer},r.a.createElement(C.a,{variant:"body2",color:"inherit"},"Developed and paid for by members and sponsors of ",r.a.createElement("a",{href:"http://kokanee.org"},"Project Kokanee")," & ",r.a.createElement("a",{href:"http://kokaneepower.org"},"Kokanee Power")),r.a.createElement(C.a,{variant:"caption",color:"inherit"},"Form was created by ",r.a.createElement("a",{href:"mailto:hello@austinerck.com"},"Austin Erck")))))))}}]),t}(r.a.Component),ke=f(Object(m.withStyles)(function(e){return{root:{flexGrow:1},logo:{height:40},name:{marginLeft:8},grid:{paddingTop:24},paper:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,padding:3*e.spacing.unit,color:e.palette.text.secondary},footer:{marginTop:16,marginBottom:32,textAlign:"center"}}})(ye));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,2,1]]]);
//# sourceMappingURL=main.0c72351f.chunk.js.map