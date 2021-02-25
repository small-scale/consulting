import m from "mithril"

const RedTeam = {
    view: (vnode)=>{
        return [
            [ 
      m("section", {"class":"mw7 center lh-copy"}, 
      [
        m("p", {class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Red Team"),

          m("div", {class:"dt"},[
            m("div", {class:"dtc v-mid"}, [
                m("img", {class:"w3 mr3 pt4-ns pt3", src:"static/square-wide-dumpster.png"}),
            ]),
            m("div", {class:"dtc v-mid"}, [
                m("h2", {class:"mb0 black no-underline f1-ns f2 lora fw4 lh-title"},"Red Team"),
               // m("h3",{class:"mt0 pl1-ns black no-underline f4-ns f5 lora fw4"}, "How can data governance initiatives go wrong?")
            ])
          ]),
        

        m("p", {class:"f4-ns inter f5"}, [
            `In collaboration with the Mozilla Foundation Insights team, I produced a red team brief for Mozilla's forthcoming Data Futures Lab. The brief consisted of nearly two dozen miniature speculative narratives on how data stewardship initiatives could go awry.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `The brief was written to support Mozilla's strategic planning process as it prepared to launch the Data Futures Lab: a hub for convening and supporting power-shifting data governance initiatives.`
        ]),
        m("p", {class:"f4-ns inter f5"}, [
            `The report's goal was to help Mozilla leadership recognize where the field's imagined solutions might be incomplete, and who might bear the burden of an experiment's failure. `
        ]),

        m("a", {class:"f5-ns f6 mt2 dim inter fw7 link ph3 pv2 mb2 dib white", href:"https://foundation.mozilla.org/en/initiatives/data-futures/what-could-go-wrong/", style:"background-image:linear-gradient(to bottom right, #6a66ff, #7a2cfe)"}, "Read the report"),

        m("div", {class:"dt mt3"},[

        m("h2", {class:"db black no-underline f3-ns f4 inter fw2 lh-title"},"Partners"),
        m("img", {class:"h2 mr2", src:"static/moz.png"})

        ])

      
    ])]
           
          
        ]
    }
}

export default RedTeam