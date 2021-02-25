import m from "mithril"

const Referrals = {
    view: (vnode)=>{
        return [
            [ 
      m("section", {"class":"mw7 center lh-copy"}, 
      [
        m("p", {class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Legal referrals"),

          m("div", {class:"dt"},[
            m("div", {class:"dtc w3 v-mid"}, [
                m("img", {class:"w3 mr3 pt4-ns pt3", src:"static/square-mailbox.png"}),
            ]),
            m("div", {class:"dtc v-mid"}, [
                m("h2", {class:"mb0 ml3 black no-underline f1-ns f2 lora fw4 lh-title"},"Legal referrals"),
               // m("h3",{class:"mt0 pl1-ns black no-underline f4-ns f5 lora fw4"}, "How can data governance initiatives go wrong?")
            ])
          ]),
        

        m("p", {class:"f4-ns inter f5"}, [
            `The Peer-to-Peer (P2P) Referral Network was a collaboration with Centro Legal de la Raza, Bay Area Legal Aid, Eviction Defence Center, East Bay Community law Center, Asian Pacific Islander Legal Outreach, Housing and Economic Rights Advocates, and Legal Link. The organizations collaborated to build an inter-organizational referral system for clients facing housing instability in Alameda County. I helped organize project, and steered the development of the referral system through its initial prototyping and deployment phase.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `Prior to the project, the participating organizations did not have a formal system of making referrals to one another. So, we built a habit of making referrals gradually, moving from email templates and shared Google Docs to web forms and eventually the host organization's own case management system.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `We built and launched a working referral system within 60 days, and continued to refine the system over a six-month period.`
        ]),

     //   m("a", {class:"f5-ns f6 mt2 dim inter fw7 link ph3 pv2 mb2 dib white", href:"https://lighthouse.prospect.org.uk/", style:"background-image:linear-gradient(to bottom right, #6a66ff, #7a2cfe)"}, "Visit Lighthouse"),

        m("div", {class:"dt mt3"},[

        m("h2", {class:"db black no-underline f3-ns f4 inter fw2 i lh-title"},"Partners"),
        m("dt",[
            m("img", {class:"h2 v-mid dtc mr4", src:"static/centrolegal-logo.png"}),
            m("img", {class:"h2 v-mid dtc pa2 mr4", src:"static/baylegal.png"}),
            m("img", {class:"h2 v-mid dtc pa2", src:"static/legallink.webp"})

        ])
        

        ])

      
    ])]
           
          
        ]
    }
}

export default Referrals