import m from "mithril"

const Lighthouse = {
    view: (vnode)=>{
        return [
            [ 
      m("section", {"class":"mw7 center lh-copy"}, 
      [
        m("p", {class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Lighthouse"),

          m("div", {class:"dt"},[
            m("div", {class:"dtc v-mid"}, [
                m("img", {class:"w3 mr3 pt4-ns pt3", src:"static/square-lighthouse.png"}),
            ]),
            m("div", {class:"dtc v-mid"}, [
                m("h2", {class:"mb0 black no-underline f1-ns f2 lora fw4 lh-title"},"Data maturity quiz"),
               // m("h3",{class:"mt0 pl1-ns black no-underline f4-ns f5 lora fw4"}, "How can data governance initiatives go wrong?")
            ])
          ]),
        

        m("p", {class:"f4-ns inter f5"}, [
            `Lighthouse was a collaboration with Prospect and the Why Not Lab. We sought to empower unions to more confidently steward and govern data and technology projects, without drowning them in legalese.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `The result was a simple, engaging maturity quiz (with emoji). Unions can use Lighthouse to assess their own readiness for managing data projects, and find advice and resources to build their own capacity.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `The Lighthouse site is open-source and freely remixable. The quiz itself collects no data from the user. `
        ]),

        m("a", {class:"f5-ns f6 mt2 dim inter fw7 link ph3 pv2 mb2 dib white", href:"https://lighthouse.prospect.org.uk/", style:"background-image:linear-gradient(to bottom right, #6a66ff, #7a2cfe)"}, "Visit Lighthouse"),

        m("div", {class:"dt mt3"},[

        m("h2", {class:"db black no-underline f3-ns f4 inter i fw2 lh-title"},"Partners"),
        m("dt",{class:"ml2 "},[
            m("img", {class:"h2 v-mid dtc mr2", src:"static/prospect.png"}),
            m("img", {class:"h2 ml4 v-mid dtc bg-black pa2", src:"static/whynotlab.webp"})
        ])
        

        ])

      
    ])]
           
          
        ]
    }
}

export default Lighthouse