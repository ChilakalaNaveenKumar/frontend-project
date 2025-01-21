(function(){"use strict";var e={8661:function(e,n,t){var l=t(5130),o=t(6768);function a(e,n,t,l,a,i){const s=(0,o.g2)("Main");return(0,o.uX)(),(0,o.Wv)(s)}function i(e,n,t,l,a,i){const s=(0,o.g2)("Navbar"),r=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1})])}function s(e,n,t,l,a,i){const s=(0,o.g2)("Logo"),r=(0,o.g2)("v-toolbar-title"),u=(0,o.g2)("v-spacer"),c=(0,o.g2)("v-icon"),d=(0,o.g2)("v-btn"),m=(0,o.g2)("v-app-bar"),f=(0,o.g2)("router-view"),p=(0,o.g2)("v-main"),h=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.Wv)(h,{class:"app-background"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{app:"",dark:"",style:{top:"0"},class:"navbar"},{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1}),(0,o.bF)(u),(0,o.bF)(d,{text:"",to:"/"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{left:""},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("mdi-home")]))),_:1}),n[1]||(n[1]=(0,o.eW)(" Home "))])),_:1}),(0,o.bF)(d,{text:"",to:"/services"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{left:""},{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.eW)("mdi-briefcase-outline")]))),_:1}),n[3]||(n[3]=(0,o.eW)(" Our Services "))])),_:1}),(0,o.bF)(d,{text:"",to:"/team"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{left:""},{default:(0,o.k6)((()=>n[4]||(n[4]=[(0,o.eW)("mdi-account-group-outline")]))),_:1}),n[5]||(n[5]=(0,o.eW)(" Our Team "))])),_:1}),(0,o.bF)(d,{text:"",to:"/client-login"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{left:""},{default:(0,o.k6)((()=>n[6]||(n[6]=[(0,o.eW)("mdi-login")]))),_:1}),n[7]||(n[7]=(0,o.eW)(" Client Login "))])),_:1}),(0,o.bF)(d,{text:"",to:"/about"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{left:""},{default:(0,o.k6)((()=>n[8]||(n[8]=[(0,o.eW)("mdi-information-outline")]))),_:1}),n[9]||(n[9]=(0,o.eW)(" About Us "))])),_:1}),(0,o.bF)(d,{text:"",to:"/contact"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{left:""},{default:(0,o.k6)((()=>n[10]||(n[10]=[(0,o.eW)("mdi-email-outline")]))),_:1}),n[11]||(n[11]=(0,o.eW)(" Contact Us "))])),_:1})])),_:1}),(0,o.bF)(p,{class:"routing-pages"},{default:(0,o.k6)((()=>[(0,o.bF)(f)])),_:1})])),_:1})}const r={xmlns:"http://www.w3.org/2000/svg",width:"300",height:"120",viewBox:"0 0 300 120"},u={x:"70",y:"55","font-size":"20","font-family":'"Amaranth", serif',"font-weight":"700",fill:"#658cb1"},c={x:"135",y:"90","font-size":"16","font-family":'"Amaranth", serif',"font-weight":"700",fill:"#658cb1"};function d(e,n,t,l,a,i){const s=(0,o.g2)("Animations");return(0,o.uX)(),(0,o.CE)("svg",r,[(0,o.Lk)("text",u,[(0,o.bF)(s,{words:a.titleWords,"class-name":a.titleClass,index:10},null,8,["words","class-name"])]),n[0]||(n[0]=(0,o.Lk)("line",{x1:"50",y1:"68",x2:"140",y2:"68",stroke:"#658cb1","font-family":'"Amaranth", serif',"font-weight":"700","stroke-width":"4"},null,-1)),n[1]||(n[1]=(0,o.Lk)("line",{x1:"160",y1:"68",x2:"250",y2:"68",stroke:"#658cb1","font-family":'"Amaranth", serif',"font-weight":"700","stroke-width":"4"},null,-1)),n[2]||(n[2]=(0,o.Lk)("text",{x:"145",y:"73","font-size":"18","font-weight":"700","font-family":'"Amaranth", serif',fill:"#658cb1"},"X",-1)),(0,o.Lk)("text",c,[(0,o.bF)(s,{words:a.subtitleWords,"class-name":a.subtitleClassName,index:15},null,8,["words","class-name"])])])}var m=t(4232);function f(e,n,t,l,a,i){return(0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.words,((e,n)=>((0,o.uX)(),(0,o.CE)("tspan",{key:n,class:(0,m.C4)(i.cal(n))},(0,m.v_)(e),3)))),128)}var p={name:"Animations",props:{className:{type:String,required:!0},words:{type:Array,required:!0},index:{type:Number,required:!0}},methods:{cal(e){return`${this.className} ${this.className}_${this.index+e}`}},mounted(){}},h=t(1241);const g=(0,h.A)(p,[["render",f]]);var b=g,k={name:"Logo",components:{Animations:b},data(){return{titleWords:["E","2","E"," D","a","t","a"," S","o","l","u","t","i","o","n","s"],titleClass:"logo-title",subtitleWords:["E","2","E"],subtitleClassName:"logo-subtitle"}}};const v=(0,h.A)(k,[["render",d]]);var L=v,y={name:"TopNavigation",components:{Logo:L},data(){return{}}},w={...y};const F=(0,h.A)(w,[["render",s]]);var A=F,_={name:"LoginPage",components:{Navbar:A}};const S=(0,h.A)(_,[["render",i]]);var x=S,C={name:"App",components:{Main:x}};const E=(0,h.A)(C,[["render",a]]);var W=E,D=t(7768),M=(t(5524),t(4458));(0,M.k)("/frontend-project/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var P=t(782),U=(0,P.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),I=t(1920),j=t(5741),B=t(1387),N=t.p+"img/data transformation.e587bca2.png";const O={class:"home-section"},V={class:"client-overlay"},z={class:"client-content transparent-card"},T={class:"action-buttons"};function H(e,n,t,l,a,i){const s=(0,o.g2)("v-btn"),r=(0,o.g2)("v-col"),u=(0,o.g2)("v-row"),c=(0,o.g2)("Services"),d=(0,o.g2)("Leadership"),m=(0,o.g2)("AboutUs"),f=(0,o.g2)("ContactUs"),p=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",null,[(0,o.Lk)("section",O,[n[4]||(n[4]=(0,o.Lk)("img",{src:N,alt:"transformation-image",class:"transformation-image"},null,-1)),(0,o.Lk)("div",V,[(0,o.Lk)("div",z,[n[2]||(n[2]=(0,o.Lk)("h1",{class:"display-4"},"Transform Your Data into Business Intelligence",-1)),(0,o.Lk)("div",T,[(0,o.bF)(u,{"no-gutters":""},{default:(0,o.k6)((()=>[(0,o.bF)(r,{cols:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{color:"primary",large:"",to:"/login"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("Contact US")]))),_:1})])),_:1}),(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,{color:"primary",large:"",to:"/login"},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.eW)("Client Login")]))),_:1})])),_:1})])),_:1})]),n[3]||(n[3]=(0,o.Lk)("h3",{class:"mb-4"},"Unlock the full potential of your data with AI-driven insights, seamless system integration, and scalable solutions tailored to your business.",-1))])])])]),(0,o.bF)(c),(0,o.bF)(d),(0,o.bF)(m),(0,o.bF)(f),(0,o.bF)(p)],64)}var q=t.p+"img/custom-data-solutions.32b06ece.svg",X=t.p+"img/system-integration.1951a6cf.svg",R=t.p+"img/agile-development.912e50e7.svg",K=t.p+"img/noun-database.2733b73d.svg";const Q={class:"services-cards"};function $(e,n,t,l,a,i){const s=(0,o.g2)("v-col"),r=(0,o.g2)("v-row"),u=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.CE)("div",Q,[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.Lk)("img",{src:q,alt:"Data Virtualization Isometric"},null,-1),(0,o.Lk)("h3",null,"Custom Data Solutions",-1),(0,o.Lk)("h4",null,"Unlock the potential of your data with our custom-tailored solutions, delivering actionable insights and business growth.",-1)]))),_:1}),(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.Lk)("img",{src:X,alt:"Data Virtualization Isometric"},null,-1),(0,o.Lk)("h3",null,"System Integration",-1),(0,o.Lk)("h4",null,"Ensure smooth operations by connecting systems seamlessly, enhancing operational efficiency across your enterprise.",-1)]))),_:1}),(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.Lk)("img",{src:R,alt:"Data Virtualization Isometric"},null,-1),(0,o.Lk)("h3",null,"Agile Development",-1),(0,o.Lk)("h4",null,"Rapidly iterate and deliver high-quality solutions, adapting to your evolving needs in a dynamic market.",-1)]))),_:1}),(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[3]||(n[3]=[(0,o.Lk)("img",{src:K,alt:"Data Virtualization Isometric"},null,-1),(0,o.Lk)("h3",null,"User-Friendly Interfaces",-1),(0,o.Lk)("h4",null,"Powerful yet easy-to-use solutions with interactive dashboards and interfaces designed for engagement.",-1)]))),_:1})])),_:1})])),_:1})])}var Y={name:"Services"};const G=(0,h.A)(Y,[["render",$]]);var J=G;const Z={class:"leadership-section"};function ee(e,n,t,l,a,i){const s=(0,o.g2)("v-col"),r=(0,o.g2)("v-row"),u=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.CE)("section",Z,[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.Lk)("h3",null,"Owner & Director of Business Development and Technology",-1),(0,o.Lk)("h1",null,[(0,o.Lk)("span",null,"Melissa"),(0,o.eW)(" Ball ")],-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"As the visionary leader of E2E, Melissa Ball combines business expertise with technological innovation to drive cutting-edge data solutions. With a strong passion for utilizing technology to solve complex business challenges, she has positioned E2E as a trusted partner for organizations looking to maximize the value of their data.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Background and Experience:",-1),(0,o.Lk)("h5",null,"Melissa has over 15 years of experience in the technology industry, with a proven track record of delivering exceptional results across sectors. She has a strong background in business development, technology leadership, and project management, with expertise in Azure Cloud Services, Azure SQL Database, and Azure Data Factory.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Expertise:",-1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("h5",null,"Business Development: Strong client relationships and business growth strategies.")]),(0,o.Lk)("li",null,[(0,o.Lk)("h5",null,"Technology Leadership: Expertise in Azure Cloud Services, Azure SQL Database, and Azure Data Factory.")]),(0,o.Lk)("li",null,[(0,o.Lk)("h5",null,"Project Management: Cross-functional team management and quality delivery.")])],-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Vision and Mission:",-1),(0,o.Lk)("h5",null,"Melissa's vision is to transform data into insights for business growth and innovation. She is committed to delivering innovative solutions that drive business success and foster a culture of continuous improvement.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Personalized Approach:",-1),(0,o.Lk)("h5",null,"At E2E Melissa Ball ensures that each client receives personalized attention and solutions tailored to their unique needs.",-1),(0,o.Lk)("b",null,"Commitment to Excellence:",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"Driven by a commitment to excellence, Melissa Ball and the team strive to deliver top-notch services that drive real results.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Innovative Solutions:",-1),(0,o.Lk)("h5",null,"With a focus on innovation, Melissa Ball continually seeks out the latest advancements in technology, such as Microsoft Azure, and Power BI, to provide cutting-edge solutions that give clients a competitive edge.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"Behind every successful project at E2E is a team of dedicated professionals who share Melissa Ball's passion for technology and excellence. Our team is composed of experienced developers, data analysts, and project managers who work collaboratively to deliver outstanding results.",-1)]))),_:1}),(0,o.bF)(s)])),_:1})])),_:1}),(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s),(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.Lk)("h3",null,"Director of all Technology Solutions",-1),(0,o.Lk)("h1",null,[(0,o.Lk)("span",null,"Dr. Sunil"),(0,o.eW)(" Kumar, Ph.D., PMP ")],-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"Founder, Chief Advisor & Mentor of Mend Solutions. He is a successful Entrepreneur, and a man with a strong will power and a long-term vision along. He is a specialist in Analytic skills, Database design, System Architect & Business Process Analysis & Integration. His main responsibilities include guiding the company overall across all projects and setting overall product strategy.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"Dr. Sunil holds Doctor of Philosophy (Ph.D.) in Computer Science & Engineering with specialization in Business Intelligence, Data Warehousing & Reporting and Analytics and also Project Management Professional (PMP) certified since February 2013. He has implemented various IT projects successfully with Delta Dental USA, NYK Business Systems USA, Bank of America USA, Research in Motion (RIM) Canada, Royal Bank of Scotland UK,Blue Cross Blue Shield Florida USA.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"He has more than 22 years of Telecommunications, Banking, Insurance, Transportation, Airlines domains consulting and end to end project implementation experience. In the past, he worked for TCS, HCL, Expediency, Amerisoftpro Systems, Noblesoft Solutions Inc USA. He has a strong history of delivering data Intensive solutions in Data Warehousing, Business Intelligence, Data Modelling, Analytical & Real Time Reporting with various OLAP Tools such as IBM Cognos various application, SAP BO, Actuate etc. Currently, he is working with Noble Soft Solutions as ETL/BI Technical Manager. Recently, he worked with Advantasure HCL America. He is responsible to provide guidance as Subject Matter Expert to some of the top US based consulting companies.",-1)]))),_:1})])),_:1})])),_:1}),(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.Lk)("h3",null,"Director of Sales and Commission Applications",-1),(0,o.Lk)("h1",null,[(0,o.Lk)("span",null,"Mr. Pandi"),(0,o.eW)(" Kumar")],-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"Mr. Pandi kumar is a Director of sales and Commission Applications. He has got his Master’s degree in Computer Applications (MCA) from Anna University. He has more than 18 years of experience in the IT industry and has implemented various projects in Polaris Group, Standard Chartered, and Accenture. He has played various roles and has very good client interaction in India and USA. He has good experience in various domains like HRMS and payroll, Banking, Health care and telecommunications.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"Quick-learner and willing to embrace new challenges. Good time management skills, decision-making, leadership and planning skills with the ability to learn quickly and multitasking in fast paced environments.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"He is specialized in RDBMS, Data engineering, BI Analytics and SAP products.",-1)]))),_:1}),(0,o.bF)(s)])),_:1})])),_:1}),(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s),(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[3]||(n[3]=[(0,o.Lk)("h3",null,"Director of Web Applications",-1),(0,o.Lk)("h1",null,[(0,o.Lk)("span",null,"Dr. Sani"),(0,o.eW)(" Kumar")],-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"Dr. Sani Kumar is a Director of Web Applications.He holds Doctor of Philosophy (Ph.D.) in Computer Science.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"He excels in time management, decision-making, leadership, and planning, demonstrating a remarkable capacity to learn swiftly and multitask effectively in dynamic environments",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("h5",null,"He is Specialized in ERP technologies and expertise in MVC, Asp.net, C#, SQL Server, LINQ, Web API, XML, JSON, JavaScript, jQuery, CSS3, HTML5, Bootstrap technologies.",-1)]))),_:1})])),_:1})])),_:1})])}var ne={name:"Leadership"};const te=(0,h.A)(ne,[["render",ee]]);var le=te;const oe={class:"about-us-section"};function ae(e,n,t,l,a,i){const s=(0,o.g2)("v-col"),r=(0,o.g2)("v-row"),u=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.CE)("section",oe,[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,null,{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.Lk)("h1",null,"About Us",-1),(0,o.Lk)("h3",null,"At E2E our vision is to transform the way businesses harness the power of their data. We believe in the potential of data to drive smarter decisions, foster innovation, and deliver unparalleled value to our clients.",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("p",null," Founded by industry veterans with a passion for technology and business development, E2E was established to address the growing need for agile, efficient, and customized data solutions. Our journey began with a simple yet ambitious goal: to build a system that not only meets but exceeds our clients' expectations in a rapidly evolving digital landscape. ",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Our Development Team",-1),(0,o.Lk)("p",null," Behind every successful project is our exceptional development team. With a diverse range of expertise and a shared dedication to excellence, our team has engineered a remarkably agile system within a very short period. We pride ourselves on our ability to adapt quickly, delivering robust and scalable solutions that are both innovative and reliable. ",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"What Sets Us Apart",-1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("b",null,"Innovation at Our Core:"),(0,o.eW)(" We are constantly exploring new technologies and methodologies to ensure our solutions remain at the forefront of the industry. ")]),(0,o.Lk)("li",null,[(0,o.Lk)("b",null,"Client-Centric Focus:"),(0,o.eW)(" Your success is our success. We work closely with our clients to understand their unique challenges and deliver tailored solutions that drive real results. ")]),(0,o.Lk)("li",null,[(0,o.Lk)("b",null,"Agility and Speed:"),(0,o.eW)(" Our agile development approach allows us to respond swiftly to your needs, ensuring timely delivery without compromising quality. ")]),(0,o.Lk)("li",null,[(0,o.Lk)("b",null,"Expertise and Experience:"),(0,o.eW)(" Our team’s deep industry knowledge and technical expertise are the cornerstones of our high-quality solutions and services. ")])],-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Our Commitment",-1),(0,o.Lk)("p",null," At E2E, we are committed to delivering exceptional value to our clients through innovative solutions, personalized service, and a relentless pursuit of excellence. We believe that by harnessing the power of data, we can help businesses thrive in an increasingly competitive and data-driven world. ",-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("b",null,"Join Us On This Journey",-1),(0,o.Lk)("p",null," Discover the power of your data with E2E. Whether you’re looking to integrate, analyze, or optimize your data, our team is here to help you unlock new possibilities and drive your business to new heights. ",-1)]))),_:1})])),_:1})])),_:1})])}var ie={name:"AboutUs"};const se=(0,h.A)(ie,[["render",ae]]);var re=se;const ue={class:"contact-us-section"};function ce(e,n,t,l,a,i){const s=(0,o.g2)("v-col"),r=(0,o.g2)("v-text-field"),u=(0,o.g2)("v-textarea"),c=(0,o.g2)("v-btn"),d=(0,o.g2)("v-row"),m=(0,o.g2)("v-form"),f=(0,o.g2)("v-container"),p=(0,o.g2)("v-card");return(0,o.uX)(),(0,o.CE)("section",ue,[(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,{cols:"6",class:"get-in-touch"},{default:(0,o.k6)((()=>n[5]||(n[5]=[(0,o.Lk)("h1",null,"Get in Touch",-1),(0,o.Lk)("div",null,[(0,o.Lk)("h3",null,"Support"),(0,o.Lk)("b",null,"Email US: "),(0,o.Lk)("a",{href:"mailto:contactus@e2edatasolutions.com"},"contactus@e2edatasolutions.com"),(0,o.eW)(),(0,o.Lk)("br"),(0,o.Lk)("b",null,"Phone Number (Direct): "),(0,o.Lk)("a",{href:"tel:361-455-6860"},"361-455-6860"),(0,o.Lk)("br")],-1),(0,o.Lk)("br",null,null,-1),(0,o.Lk)("div",null,[(0,o.Lk)("h3",null,"IT Service contact details"),(0,o.Lk)("b",null,"Email US: "),(0,o.Lk)("a",{href:"mailto:sunil@e2edatasolutions.com"},"sunil@e2edatasolutions.com"),(0,o.eW)(),(0,o.Lk)("br"),(0,o.Lk)("b",null,"Phone Number (Direct): "),(0,o.Lk)("a",{href:"tel:361-455-6860"},"904-738-6292"),(0,o.Lk)("br")],-1)]))),_:1}),(0,o.bF)(s,null,{default:(0,o.k6)((()=>[(0,o.bF)(p,null,{default:(0,o.k6)((()=>[n[7]||(n[7]=(0,o.Lk)("h1",null,"Contact Us",-1)),n[8]||(n[8]=(0,o.Lk)("br",null,null,-1)),(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,{ref:"contactForm"},{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,{cols:"12",md:"6"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{label:"First Name",modelValue:a.firstName,"onUpdate:modelValue":n[0]||(n[0]=e=>a.firstName=e),class:"custom-input",rounded:"",required:""},null,8,["modelValue"])])),_:1}),(0,o.bF)(s,{cols:"12",md:"6"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{label:"Second Name",modelValue:a.secondName,"onUpdate:modelValue":n[1]||(n[1]=e=>a.secondName=e),class:"custom-input",rounded:"",required:""},null,8,["modelValue"])])),_:1}),(0,o.bF)(s,{cols:"12"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{label:"Your Email",modelValue:a.email,"onUpdate:modelValue":n[2]||(n[2]=e=>a.email=e),class:"custom-input",rounded:"",required:"",type:"email"},null,8,["modelValue"])])),_:1}),(0,o.bF)(s,{cols:"12"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{label:"Subject",modelValue:a.subject,"onUpdate:modelValue":n[3]||(n[3]=e=>a.subject=e),class:"custom-input",rounded:"",required:""},null,8,["modelValue"])])),_:1}),(0,o.bF)(s,{cols:"12"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{label:"Your Message",modelValue:a.message,"onUpdate:modelValue":n[4]||(n[4]=e=>a.message=e),class:"custom-input",rounded:"",required:""},null,8,["modelValue"])])),_:1}),(0,o.bF)(s,{cols:"12",class:"text-center"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{color:"primary"},{default:(0,o.k6)((()=>n[6]||(n[6]=[(0,o.eW)(" Send Message ")]))),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}var de={data(){return{firstName:"",secondName:"",email:"",subject:"",message:""}},methods:{}};const me=(0,h.A)(de,[["render",ce]]);var fe=me;const pe={class:"footer"};function he(e,n,t,l,a,i){return(0,o.uX)(),(0,o.CE)("footer",pe,n[0]||(n[0]=[(0,o.Lk)("div",{class:"footer-container"},[(0,o.Lk)("div",{class:"footer-left"},[(0,o.Lk)("p",null,"Ⓒ2024 E2E Data Solutions")])],-1)]))}var ge={name:"Footer"};const be=(0,h.A)(ge,[["render",he],["__scopeId","data-v-e25941b2"]]);var ke=be,ve={name:"Home",components:{Services:J,Leadership:le,AboutUs:re,ContactUs:fe,Footer:ke}};const Le=(0,h.A)(ve,[["render",H]]);var ye=Le;function we(e,n,t,a,i,s){const r=(0,o.g2)("v-card-title"),u=(0,o.g2)("v-text-field"),c=(0,o.g2)("v-icon"),d=(0,o.g2)("v-btn"),f=(0,o.g2)("v-checkbox"),p=(0,o.g2)("v-col"),h=(0,o.g2)("v-row"),g=(0,o.g2)("v-form"),b=(0,o.g2)("v-card-text"),k=(0,o.g2)("v-card"),v=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(v,{class:"login-container"},{default:(0,o.k6)((()=>[(0,o.bF)(k,{class:"login-card"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{class:"headline text-center"},{default:(0,o.k6)((()=>n[4]||(n[4]=[(0,o.Lk)("strong",null,"E2E DATA SOLUTIONS LOGIN",-1)]))),_:1}),(0,o.bF)(b,null,{default:(0,o.k6)((()=>[n[6]||(n[6]=(0,o.Lk)("p",{class:"text-center"},"Enter your credentials to get sign into your account",-1)),n[7]||(n[7]=(0,o.Lk)("br",null,null,-1)),(0,o.bF)(g,{onSubmit:(0,l.D$)(s.login,["prevent"])},{default:(0,o.k6)((()=>[(0,o.bF)(u,{label:"Enter Username",modelValue:i.username,"onUpdate:modelValue":n[0]||(n[0]=e=>i.username=e),"prepend-inner-icon":"mdi-email",outlined:"",dense:"",required:""},null,8,["modelValue"]),(0,o.bF)(u,{label:"Enter Password",modelValue:i.password,"onUpdate:modelValue":n[2]||(n[2]=e=>i.password=e),"prepend-inner-icon":"mdi-lock",type:i.showPassword?"text":"password",outlined:"",dense:"",required:""},{"append-inner":(0,o.k6)((()=>[(0,o.bF)(d,{icon:"",onClick:n[1]||(n[1]=e=>i.showPassword=!i.showPassword),class:"custom-eye"},{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,m.v_)(i.showPassword?"mdi-eye-off":"mdi-eye"),1)])),_:1})])),_:1})])),_:1},8,["modelValue","type"]),(0,o.bF)(h,{align:"center"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{cols:"12"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{modelValue:i.rememberMe,"onUpdate:modelValue":n[3]||(n[3]=e=>i.rememberMe=e),label:"Remember Me",dense:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.bF)(d,{color:"primary",block:"",class:"mt-3",type:"submit"},{default:(0,o.k6)((()=>n[5]||(n[5]=[(0,o.eW)(" Sign In ")]))),_:1})])),_:1},8,["onSubmit"]),n[8]||(n[8]=(0,o.Lk)("p",{class:"text-center mt-4"},[(0,o.eW)(" Forget Password? : "),(0,o.Lk)("a",{href:"#",class:"link-text"},"Click Here")],-1)),n[9]||(n[9]=(0,o.Lk)("p",{class:"text-center"},[(0,o.eW)(" Support : "),(0,o.Lk)("a",{href:"#",class:"link-text"},"Client Issue Management")],-1))])),_:1})])),_:1})])),_:1})}var Fe={name:"ClientLogin",data(){return{username:"",password:"",showPassword:!1,rememberMe:!1}},methods:{login(){}}};const Ae=(0,h.A)(Fe,[["render",we],["__scopeId","data-v-f90b886a"]]);var _e=Ae;const Se=[{path:"/",name:"Home",component:ye},{path:"/client-login",name:"ClientLogin",component:_e},{path:"/frontend-project/",redirect:"/"},{path:"/frontend-project",redirect:"/"}],xe=(0,B.aE)({history:(0,B.LA)("/frontend-project/"),routes:Se});var Ce=xe;const Ee=(0,D.$N)({components:I,directives:j});(0,l.Ef)(W).use(Ee).use(U).use(Ce).mount("#app")}},n={};function t(l){var o=n[l];if(void 0!==o)return o.exports;var a=n[l]={exports:{}};return e[l].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,l,o,a){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,r=0;r<l.length;r++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](l[r])}))?l.splice(r--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[l,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/frontend-project/"}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var o,a,i=l[0],s=l[1],r=l[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(r)var c=r(t)}for(n&&n(l);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},l=self["webpackChunke2edatasolutions"]=self["webpackChunke2edatasolutions"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(8661)}));l=t.O(l)})();
//# sourceMappingURL=app.cdc94855.js.map