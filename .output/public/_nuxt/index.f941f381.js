import{_ as h}from"./Slider.bfa93ac8.js";import{_ as c,o as m,c as r,a as e,r as _,f as g,t as x,g as w,F as f,h as y,w as s,b as a}from"./entry.1ce3a925.js";import"./nuxt-img.b914e525.js";const M={data(){return{showModal:!1}},methods:{openModal(){this.showModal=!0},closeModal(){this.showModal=!1}},props:{title:String}},k={class:"text-lg font-semibold mb-4"};function b(d,t,l,p,u,o){return m(),r(f,null,[e("div",{onClick:t[0]||(t[0]=(...n)=>o.openModal&&o.openModal(...n))},[_(d.$slots,"trigger")]),u.showModal?(m(),r("div",{key:0,class:"fixed inset-0 flex items-center justify-center z-50",style:{"background-color":"rgba(0, 0, 0, 0.5)"},onClick:t[3]||(t[3]=g((...n)=>o.closeModal&&o.closeModal(...n),["self"]))},[e("div",{class:"bg-white w-5/6 md:w-3/4 lg:w-1/2 min-w-[250px] p-4 rounded-lg shadow-lg",onClick:t[2]||(t[2]=g(()=>{},["stop"]))},[e("h2",k,x(l.title),1),_(d.$slots,"content"),e("button",{onClick:t[1]||(t[1]=(...n)=>o.closeModal&&o.closeModal(...n)),class:"mt-4 bg-red-700 text-white px-4 py-2 rounded-md"}," Close ")])])):w("",!0)],64)}const R=c(M,[["render",b]]),v={props:{logoPath:String,name:String}};const $=["src","alt"];function j(d,t,l,p,u,o){const n=R;return m(),y(n,{class:"border w-fit md:w-1/3 lg:w-1/4",title:l.name},{trigger:s(()=>[e("img",{src:l.logoPath.replace("~","_nuxt"),alt:l.name},null,8,$)]),content:s(()=>[_(d.$slots,"default",{},void 0,!0)]),_:3},8,["title"])}const B=c(v,[["render",j],["__scopeId","data-v-c86c419c"]]);const C={data(){return{links:["/img/slide/jb-1-min.jpg","/img/slide/jb-2-min.jpg","/img/slide/jb-3-min.png"]}}},N={class:"my-14"},S=e("h2",{class:"text-center text-4xl sm:text-xl font-semibold my-4 animate-fade-left animate-once animate-duration-[999ms] animate-ease-out"}," Rumpun - Rumpun ",-1),z={class:"flex flex-wrap items-center justify-center gap-4 mx-4"},T=e("p",null,"Rumpun Dakwah",-1),D=e("p",null,"Rumpun MTQ",-1),V=e("p",null,"Rumpun Hadroh",-1),F=e("p",null,"Rumpun Tahfidz",-1),H=e("p",null,"Rumpun Nasyid",-1),P=e("p",null,"Rumpun Nasyid",-1);function Q(d,t,l,p,u,o){const n=h,i=B;return m(),r(f,null,[a(n,{images:u.links},null,8,["images"]),e("main",N,[S,e("div",z,[a(i,{name:"Rumpun Dakwah","logo-path":"/img/logo-rumpun/dakwah.png"},{default:s(()=>[T]),_:1}),a(i,{name:"Rumpun MTQ","logo-path":"/img/logo-rumpun/mtq.png"},{default:s(()=>[D]),_:1}),a(i,{name:"Hadroh","logo-path":"/img/logo-rumpun/hadroh.png"},{default:s(()=>[V]),_:1}),a(i,{name:"Tahfidz","logo-path":"/img/logo-rumpun/tahfidz.png"},{default:s(()=>[F]),_:1}),a(i,{name:"Nasyid","logo-path":"/img/logo-rumpun/nasyid.png"},{default:s(()=>[H]),_:1}),a(i,{name:"Kaligrafi","logo-path":"/img/logo-rumpun/kaligrafi.png"},{default:s(()=>[P]),_:1})])])],64)}const K=c(C,[["render",Q]]);export{K as default};