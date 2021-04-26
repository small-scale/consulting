import m from "mithril"

const Cards = [
    {
        title: "Red Team",
        href:"redteam",
        color: "#FFCACA",
        description: "Imagining scenarios where data governance initiatives go wrong.",
        icon: "static/square-wide-dumpster.png",
        partners: [
            {logo: "static/moz.png"}
        ]
    },
    {
        title: "Data maturity quiz",
        color: "#FFE8CA",
        href:"lighthouse",
        description: "Helping labor unions assess their data readiness.",
        icon: "static/square-lighthouse.png",
        partners: [
            {logo: "static/prospect.png"},
            {logo: "static/whynotlab.webp", class:"pa1", style:"background-color:black"}
        ]
    },
    {
        title: "Health networks",
        color: "#CAE2FF",
        href: "networks", //FFE8CA
        description: "Better governance for pediatric health data collaborations.",
        icon: "static/square-clipboard.png",
        partners: [
            {logo: "static/childrens.png"}
        ]
    },
    {
        title: "Legal referrals",
        color: "#E4CAFF",
        href:"referrals",
        description: "Peer-to-peer legal aid referrals for housing issues.",
        icon: "static/square-mailbox.png",
        partners: [
            {logo: "static/centrolegal-logo.png"},
            {logo: "static/baylegal.png"},
            {logo: "static/legallink.webp"},


        ]
    },
]

const Projects = {
    view: (vnode)=>{
        return  [ m("h1", {"class":"mt3 mb0 f3 f2-ns fw7", "style":`color:${vnode.attrs.color || "black"}`}, 
       // "Selected projects"
       ),
       m("section", {"class":"mw12 flex flex-wrap"}, 
       [
        //FFCACA
        Cards.map((card)=>{
            return m(WideCard,card)
           })
        ]
       
       )]
        
       
    }
}



const WideCard = {
    view:(vnode)=>{
        return  m("div", {"class":"br4 bn mv3 mr2 pa3 pt3 center", "style":`background-color:${vnode.attrs.color}; width:26rem`,}, [
            //Logo and title
            m("div", {class:"dt flex items-center justify-between"},[
                m("div", {class:"dtc v-mid w-third mr3"}, [
                  m("a",{href:`#!/${vnode.attrs.href}`},[  m("img", {class:"w-100", src:vnode.attrs.icon})]),
                    ]),
                m("div", {class:"dtc v-mid flex-auto mr2"}, [
                    m("a", {href:`#!/${vnode.attrs.href}`, class:"mb2 black no-underline f3 lora fw4 lh-title"}, vnode.attrs.title),
                    m("div", {class:"f5 mt2"},[vnode.attrs.description]),
                  /*  m("div", {class:"mt3 flex flex-wrap"},[
                        vnode.attrs.partners.map((partner)=>{
                            return  m("img", {class:`dtc h2 mr2 ${partner.class ?? ''}`, style:partner.style ?? '', src:partner.logo}) //also partner logo width?
                        })
                    ]) */
                ]),
               
            ]),
         
                    
        ])
    }
}

const AltCard = {
    view:(vnode)=>{
        return  m("div", {"class":"br4 bn mv3 mr2 pa3 pt3 center", "style":`background-color:${vnode.attrs.color}; width:22rem`,}, [
            //Logo and title
            m("div", {class:"dt flex flex-column items-center justify-between"},[
                m("div", {class:"dtc mt3 v-mid w-50 mr3"}, [
                    m("img", {class:"w-100", src:vnode.attrs.icon}),
                    ]),
                m("div", {class:"dtc v-mid w-80 center flex-auto mr2"}, [
                    m("h2", {class:"mb2 f2 lora fw4 lh-title"}, vnode.attrs.title),
                    m("div", {class:"f6 mt2"},[vnode.attrs.description]),
                    m("div", {class:"mt3"},[
                        vnode.attrs.partners.map((partner)=>{
                            return  m("img", {class:"dtc h2 mr2", src:partner.logo}) //also partner logo width?
                        })
                    ]) 
                ]),
               
            ]),
         
                    
        ])
    }
}

export default Projects
