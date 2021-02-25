import m from "mithril"

import Layout from "../src/view/layout"
import Consulting from "../src/view/sections/consulting"
import Projects from "../src/view/sections/projects"
import Networks from "./view/project/healthnetworks"
import Lighthouse from "./view/project/lighthouse"
import RedTeam from "./view/project/redteam"
import Referrals from "./view/project/referrals"
import Clients from "./view/sections/clients"


     m.route(document.body, "/",{
   
       
        "/":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, {title: "",
                step: null,
                nextLink: null,
                nextCopy: null,
                prevLink: null,
                prevCopy: null }, [
                    m(Consulting),
                    m(Projects),
                    m(Clients)
                ])
            }
        }, 
        "/redteam":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, {title: "",
                step: null,
                nextLink: null,
                nextCopy: null,
                prevLink: null,
                prevCopy: null }, [
                    m(RedTeam),
                ])
            }
        }, 
        "/lighthouse":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, {title: "",
                step: null,
                nextLink: null,
                nextCopy: null,
                prevLink: null,
                prevCopy: null }, [
                    m(Lighthouse),
                ])
            }
        }, 
        "/referrals":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, {title: "",
                step: null,
                nextLink: null,
                nextCopy: null,
                prevLink: null,
                prevCopy: null }, [
                    m(Referrals),
                ])
            }
        }, 
        "/networks":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, {title: "",
                step: null,
                nextLink: null,
                nextCopy: null,
                prevLink: null,
                prevCopy: null }, [
                    m(Networks),
                ])
            }
        }, 
    })
     
   