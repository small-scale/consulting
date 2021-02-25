import m from "mithril"

const clientLogos = [
    {src: "moz.png"},
    {src: "childrens.png"},
    {src: "prospect.png"},
    {src: "canada.svg"},

    {src: "centrolegal-logo.png"},
    {src: "legallink.webp"},
    {src: "ia.png"},
    {src: "whynotlab.webp", class:"pa1", style:"background-color: black"},
    {src: "liftdane.png"},
    {src: "hive.png"},
    {src: "bl.png"},
    {src: "improvecarenow.png"},
    {src: "cccfalong.png"},

    
]

const Clients = {
    view: (vnode)=>{
        return [
            m("div", {class: "mw7 mt4 flex justify-around tc center flex-wrap mh3"},
                clientLogos.map((logo)=>{
                    return  m("img", {class:`dtc ma3 ${logo.class ?? ''}`, style:`height:2.5rem; ${logo.style ?? ''}`, src:`static/${logo.src}`}) //also partner logo width?
                  })
            )
           
        ]
    }
}

export default Clients