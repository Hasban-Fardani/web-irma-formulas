import{_ as w}from"./Slider.bfa93ac8.js";import{_ as x}from"./nuxt-link.29f0af1e.js";import{_ as k}from"./nuxt-img.b914e525.js";import{_ as M,o as a,c,a as t,b as _,t as i,f as h,F as u,i as p,g as b,p as S,e as I,w as g,h as C,d as N}from"./entry.1ce3a925.js";const P={props:{no:Number,name:String,fotoLink:String,slogan:String,visi:Array,misi:Array},data(){return{showModal:!1}},methods:{openModal(){this.showModal=!0},closeModal(){this.showModal=!1}}},f=d=>(S("data-v-e431b354"),d=d(),I(),d),V={class:"card w-96 bg-base-100 shadow-xl hover:shadow-xl"},j={class:"card-body"},B={class:"flex justify-start w-min bg-green-300 py-5 px-2 absolute text-xl"},L={class:"card-title text-2xl ml-10"},R={class:"flex items-start ml-10 text-lg"},z={class:"flex justify-center mt-2"},A={class:"text-xl font-bold mb-4"},D={class:"flex flex-col gap-1"},F=f(()=>t("h2",{class:"text-lg font-semibold"},"Slogan",-1)),K=f(()=>t("h2",{class:"text-lg font-semibold"},"Visi",-1)),O=f(()=>t("h2",{class:"text-lg font-semibold"},"Misi",-1));function E(d,e,s,y,r,l){const m=k;return a(),c(u,null,[t("div",V,[t("figure",null,[_(m,{src:s.fotoLink,alt:s.name,sizes:"sm: 80vw md:50vw lg:300px",loading:"lazy"},null,8,["src","alt"])]),t("div",j,[t("span",B,i(s.no),1),t("h1",L,i(s.name),1),t("p",R,i(s.slogan),1),t("div",z,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(...n)=>l.openModal&&l.openModal(...n))},"Detail")])])]),r.showModal?(a(),c("div",{key:0,class:"fixed inset-0 flex items-center justify-center z-50",style:{"background-color":"rgba(0, 0, 0, 0.5)"},onClick:e[3]||(e[3]=h((...n)=>l.closeModal&&l.closeModal(...n),["self"]))},[t("div",{class:"bg-white w-full md:w-3/4 lg:w-1/2 p-4 rounded-lg shadow-lg",onClick:e[2]||(e[2]=h(()=>{},["stop"]))},[t("h1",A,i("Paslon No."+s.no.toString()),1),t("div",D,[F,t("p",null,i(s.slogan),1),K,t("p",null,i(s.visi[0].Visi),1),O,(a(!0),c(u,null,p(s.misi,(n,o)=>(a(),c("p",{key:o},i(o+1)+" "+i(n.Misi),1))),128))]),t("button",{onClick:e[1]||(e[1]=(...n)=>l.closeModal&&l.closeModal(...n)),class:"mt-4 bg-red-700 text-white px-4 py-2 rounded-md"}," Close ")])])):b("",!0)],64)}const T=M(P,[["render",E],["__scopeId","data-v-e431b354"]]);const U={key:0,class:"flex flex-col justify-center items-center"},q=t("h2",{class:"text-lg md:text-2xl font-bold my-4 mt-20"}," Calon Rois Roisah Angkatan 53 ",-1),G={class:"my-10 flex flex-wrap items-center justify-center gap-10"},X={__name:"index",setup(d){const e=["https://picsum.photos/1600/800","https://picsum.photos/1600/800","https://picsum.photos/1600/800"];return(s,y)=>{const r=w,l=x,m=T,n=x;return s.pending?b("",!0):(a(),c("div",U,[_(r,{images:e}),_(l,{to:"/"},{default:g(()=>[q]),_:1}),t("div",G,[(a(!0),c(u,null,p(s.listPaslon,(o,v)=>(a(),C(m,{key:v,id:o.IDPaslon,no:o.NoUrut,name:o.KandidatROIS+" & "+o.KandidatROISah,slogan:o.Slogan.Slogan,visi:o.Visi,misi:o.Misi,fotoLink:"https://picsum.photos/400/400"},null,8,["id","no","name","slogan","visi","misi"]))),128))]),_(n,{class:"btn btn-primary text-lg",to:"/pemiros/pilih"},{default:g(()=>[N(" Pilih")]),_:1})]))}}};export{X as default};