import m from "mithril"

const Networks = {
    view: (vnode)=>{
        return [
            [ 
      m("section", {"class":"mw7 center lh-copy"}, 
      [
        m("p", {class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Health networks"),

          m("div", {class:"dt"},[
            m("div", {class:"dtc v-mid"}, [
                m("img", {class:"w3 mr3 pt4-ns pt3", src:"static/square-clipboard.png"}),
            ]),
            m("div", {class:"dtc v-mid"}, [
                m("h2", {class:"mb0 black no-underline f1-ns f2 lora fw4 lh-title"},"Health networks"),
               // m("h3",{class:"mt0 pl1-ns black no-underline f4-ns f5 lora fw4"}, "How can data governance initiatives go wrong?")
            ])
          ]),
        
        m("p", {class:"f4-ns inter f5"}, [
            `ImproveCareNow is a community of patients, parents, researchers, and clinicians focused on improving outcomes for children with Crohn's disease and IBD. I engaged with ICN and Cincinnati Children's Hospital to identify opportunities to modernize ImproveCareNow's governance.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `To conduct the engagement, I worked with stakeholders across the ICN community to understand the state of the network and the evolving needs of its membership. In particular, my work focused on how the network's governance could catch up with its growth.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `The resulting report included 27 recommendations, ranging from board composition to data review processes to the design of community platforms. ImproveCareNow hopes to use this work to develop resilient, community-led governance.`
        ]),
        
         m("a", {class:"f5-ns f6 mt2 dim inter fw7 link ph3 pv2 mb2 dib white", href:"https://d3n8a8pro7vhmx.cloudfront.net/improvecarenow/pages/5160/attachments/original/1594043919/ICN_Digital_Assets_Final.pdf?1594043919", style:"background-image:linear-gradient(to bottom right, #6a66ff, #7a2cfe)"}, "Read the report"),

        m("div", {class:"dt mt3"},[

        m("h2", {class:"db black no-underline f3-ns f4 inter i fw2 lh-title"},"Partners"),
        m("dt",{class:"ml2 "},[
            m("img", {class:"h2 v-mid dtc mr2", src:"static/childrens.png"}),
            m("img", {class:"h2 ml4 v-mid dtc pa2", src:"static/icn.png"})
        ])
        

        ])

      
    ])]
           
          
        ]
    }
}

export default Networks
