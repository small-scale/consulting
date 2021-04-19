import m from "mithril"


const Layout = {
    
    view: (vnode)=>{
     // const path = (m.route.get()==="") || (m.route.get()==="/report") || (m.route.get()==="/results") 
        return [
            m("nav", {"class":"dt w-100  border-box center pa3 pb3-ns pb0 ph5-l"},
              [
                m("a", {"class":"dtc v-mid mid-gray  tl mb1","href":"/","title":"Home"},
                  [
                    m("img", {"class":"dib w4","src":"static/logo.png","alt":"small scale consulting"}),
                  ]
                ),
                m("div",{class:"dtc v-mid w-75 tr"},[
                  m("a", {class:"f5-ns f6 inter fw7 link ph3 pv2 mb2 dib white", href:"https://calendly.com/keithporcaro/web-intro", style:"background-image:linear-gradient(to bottom right, #ff6666, #fe8c65)"}, "Book a time")
                ])
              ]
            ), 
            m("article", {"class":"pa3 pa5-ns pt3-ns pt0 mw8 center spvar fw4 near-black vh-100"},
              [

                m("section", {"class":"f4-ns f5 lh-copy"}, 
                 vnode.children
                ),

              ]
            ), 

          /*  m("footer", {"class":"dt w-100 border-box center pb0 v-bottom"},[
             m("div",[
                m("div", {"class":"h1 pv1 w-100 dt", style:"background-color: hsl(27,100%,70%)"}, " "),
                m("div", {"class":"h1 pv1 w-100 dt",  style:"background-color: hsl(8,67%,60%)"}," "),
                m("div", {"class":"h1 pv1 w-100 dt",  style:"background-color: hsl(330,50%,40%)"}," "),
              ]),
              m("div", {"class":" h4 pv3 ph5-ns ph3 w-100 dt",  style:"background-color: hsl(234,55%,16%)"},[
                

              ]),
            ]),*/
          ]
    }
}

export default Layout
