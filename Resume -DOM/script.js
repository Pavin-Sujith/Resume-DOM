const body = document.body
body.id = 'body'
//header-part
const header = document.createElement("section")
header.id = 'header'
document.body.append(header)
const image = document.createElement("img")
image.id = 'image'
image.src = 'https://sammy-39.github.io/resume-react/images/propic.png'
const wline = document.createElement("div")
wline.id = 'wline'
const brain = document.createElement("h1")
brain.id = 'name'
brain.innerHTML = 'BRAIN DUDEY'
header.append(image, wline, brain)
//header-part
//nav-part
const nav = document.createElement("p")
nav.id = 'nav'
document.body.append(nav)
nav.innerHTML = 'N. Damen Avenue, Chicago 99999| 999-999-9999 | hello@kickresume.com | www.kickresume.com'
//nav-part
//main-content
const content = document.createElement("section")
content.id = 'content'
document.body.append(content)
    //left-part
    const left = document.createElement("div")
    left.id = 'left'
    //profile-content
        const profileContent = document.createElement('div')
        profileContent.id = 'profileContent'
            //profile-Heading-Part
            const pHeading = document.createElement('div')
            pHeading.id = 'pHeading'
                //plogo
                const outring = document.createElement('div')
                outring.classList = 'outring'
                    const plogo = document.createElement('div')
                    plogo.classList = 'plogo logos'
                    plogo.innerHTML = '<span class="material-icons">person</span>'
                outring.append(plogo)    
                //plogo
                //phead
                const phead = document.createElement('h2')
                phead.classList = 'phead headings'
                phead.innerHTML = 'Profile'
                //phead
            pHeading.append(outring, phead)
            //profile-heading-part
            //profile-para
            const profilePara = document.createElement('p')
            profilePara.id = 'profilePara'
            profilePara.innerHTML = 'Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated and an alliteration advocate.'
            //profile-para
        profileContent.append(pHeading, profilePara)
        //skill-part
        const skillContent = document.createElement('div')
        skillContent.id = 'skillContent'
            const sHeading = document.createElement('div')
            sHeading.id = 'sHeading'
                const soutring = document.createElement('div')
                soutring.classList = 'outring'
                    const slogo = document.createElement('div')
                    slogo.classList = 'slogo logos'
                    slogo.innerHTML = '<span class="material-icons"> science</span>'
                soutring.append(slogo)
                const shead = document.createElement('h2')
                shead.classList = 'shead headings'
                shead.innerHTML = 'Skills'
            sHeading.append(soutring, shead)
            const skillPara = document.createElement('p')
            skillPara.id = 'skillPara'
                const techskill = document.createElement('div')
                techskill.id = 'techskill'
                    const theading = document.createElement('h3')
                    theading.classList = 'subheadings'
                    theading.innerHTML = 'Technical Skills'
                    const jsdiv = document.createElement('div')
                    jsdiv.classList = 'jsdiv technames'
                       const js = document.createElement('span')
                       js.classList = 'js skillnames'
                       js.innerHTML = 'Javascript'
                       const jsrange = document.createElement('input')
                       jsrange.type = 'range'
                       jsrange.value = '85'
                       jsrange.disabled = 'disabled'
                    jsdiv.append(js, jsrange)
                    const cssdiv = document.createElement('div')
                    cssdiv.classList = 'cssdiv technames'
                       const css = document.createElement('span')
                       css.classList = 'css skillnames'
                       css.innerHTML = 'CSS'
                       const cssrange = document.createElement('input')
                       cssrange.type = 'range'
                       cssrange.value = '85'
                       cssrange.disabled = 'disabled'
                    cssdiv.append(css, cssrange)
                    const htmldiv = document.createElement('div')
                    htmldiv.classList = 'htmldiv technames'
                       const html = document.createElement('span')
                       html.classList = 'html skillnames'
                       html.innerHTML = 'HTML'
                       const htmlrange = document.createElement('input')
                       htmlrange.type = 'range'
                       htmlrange.value = '75'
                       htmlrange.disabled = 'disabled'
                    htmldiv.append(html, htmlrange)

                    const reactdiv = document.createElement('div')
                    reactdiv.classList = 'reactdiv technames'
                       const react = document.createElement('span')
                       react.classList = 'react skillnames'
                       react.innerHTML = 'React'
                       const reactrange = document.createElement('input')
                       reactrange.type = 'range'
                       reactrange.value = '75'
                       reactrange.disabled = 'disabled'
                    reactdiv.append(react, reactrange)

                    const reduxdiv = document.createElement('div')
                    reduxdiv.classList = 'reduxdiv technames'
                       const redux = document.createElement('span')
                       redux.classList = 'redux skillnames'
                       redux.innerHTML = 'Redux'
                       const reduxrange = document.createElement('input')
                       reduxrange.type = 'range'
                       reduxrange.value = '85'
                       reduxrange.disabled = 'disabled'
                    reduxdiv.append(redux, reduxrange)
                    
                    const mongodiv = document.createElement('div')
                    mongodiv.classList = 'mongodiv technames'
                       const mongo = document.createElement('span')
                       mongo.classList = 'mongo skillnames'
                       mongo.innerHTML = 'Mongo'
                       const mongorange = document.createElement('input')
                       mongorange.type = 'range'
                       mongorange.value = '85'
                       mongorange.disabled = 'disabled'
                    mongodiv.append(mongo, mongorange)
                    const deploymentdiv = document.createElement('div')
                    deploymentdiv.classList = 'deploymentdiv technames'
                       const deployment = document.createElement('span')
                       deployment.classList = 'deployment skillnames'
                       deployment.innerHTML = 'Deployment'
                       const deploymentrange = document.createElement('input')
                       deploymentrange.type = 'range'
                       deploymentrange.value = '95'
                       deploymentrange.disabled = 'disabled'
                    deploymentdiv.append(deployment, deploymentrange)
                techskill.append(theading, jsdiv, cssdiv, htmldiv, reactdiv, reduxdiv, mongodiv, deploymentdiv)

                const addskill = document.createElement('div')
                addskill.id = 'addskill'
                    const aheading = document.createElement('h3')
                    aheading.classList = 'subheadings'
                    aheading.innerHTML = 'Additional Skills'
                    const pmdiv = document.createElement('div')
                    pmdiv.classList = 'pmdiv technames'
                       const pm = document.createElement('span')
                       pm.classList = 'pm skillnames'
                       pm.innerHTML = 'Project Mangement'
                       const pmrange = document.createElement('input')
                       pmrange.type = 'range'
                       pmrange.value = '95'
                       pmrange.disabled = 'disabled'
                    pmdiv.append(pm, pmrange)

                    const rdiv = document.createElement('div')
                    rdiv.classList = 'rdiv technames'
                       const r = document.createElement('span')
                       r.classList = 'r skillnames'
                       r.innerHTML = 'Recruitment'
                       const rrange = document.createElement('input')
                       rrange.type = 'range'
                       rrange.value = '85'
                       rrange.disabled = 'disabled'
                    rdiv.append(r, rrange)
                    const bdiv = document.createElement('div')
                    bdiv.classList = 'bdiv technames'
                       const b = document.createElement('span')
                       b.classList = 'b skillnames'
                       b.innerHTML = 'Business Development'
                       const brange = document.createElement('input')
                       brange.type = 'range'
                       brange.value = '95'
                       brange.disabled = 'disabled'
                    bdiv.append(b, brange)

                    const ediv = document.createElement('div')
                    ediv.classList = 'ediv technames'
                       const e = document.createElement('span')
                       e.classList = 'e skillnames'
                       e.innerHTML = 'Editing'
                       const erange = document.createElement('input')
                       erange.type = 'range'
                       erange.value = '85'
                       erange.disabled = 'disabled'
                    ediv.append(e, erange)

                    const fdiv = document.createElement('div')
                    fdiv.classList = 'fdiv technames'
                       const f = document.createElement('span')
                       f.classList = 'f skillnames'
                       f.innerHTML = 'Fundrising'
                       const frange = document.createElement('input')
                       frange.type = 'range'
                       frange.value = '95'
                       frange.disabled = 'disabled'
                    fdiv.append(f, frange)  
                addskill.append(aheading, pmdiv, rdiv, bdiv, ediv, fdiv)
            skillPara.append(techskill, addskill)
         skillContent.append(sHeading, skillPara)
        //skill-part
        //work-part
         const workContent = document.createElement('div')
         workContent.classList = 'workContent'
            const wHeading1 = document.createElement('div')
            wHeading1.id = 'wHeading1'
               const woutring1 = document.createElement('div')
               woutring1.classList = 'outring'
                 const wlogo1 = document.createElement('div')
                 wlogo1.classList = 'wlogo1 logos'
                 wlogo1.innerHTML = '<span class="material-icons">work</span>'
               woutring1.append(wlogo1)    
               const whead1 = document.createElement('h2')
               whead1.classList = 'whead1 headings'
               whead1.innerHTML = 'Work Experience'
            wHeading1.append(woutring1, whead1)
            const em = document.createElement('div')
            em.classList = 'em'
               const emheading = document.createElement('div')
               emheading.classList = 'emheading'
                  const emhead = document.createElement('h3')
                  emhead.classList = 'emhead h3'
                  emhead.innerHTML = 'Event Manager'
                  const eminhead = document.createElement('h4')
                  eminhead.classList = 'eminhead emhead1 h4'
                  eminhead.innerHTML = 'C3 Presents, Washington DC'
               emheading.append(emhead, eminhead)
               const emhead1 = document.createElement('h4')
               emhead1.classList = 'emhead1 h4'
               emhead1.innerHTML = '03/2014-2017'
            em.append(emheading, emhead1)
            const wmain = document.createElement('ul')
            wmain.classList = 'list wmainlist'
            wmain.innerHTML = '<li>Lead and execute all phases of event planning and production spanning committe recruitment, training, vendor relationships and on-site facilitation.</li> <li>Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.</li> <li>Exercise fiscal control over budget creation, tracking and reporting.Collaborate with employees at all organization levels to advance cohesive operations.</li>  '
            
         workContent.append(wHeading1, em, wmain)
        //work-part
    left.append(profileContent, skillContent, workContent)
    //left
    //right
    const right = document.createElement('div')
    right.id = 'right'
      //work-part
      const workCont = document.createElement('div')
      workCont.classList = 'workCont'
         const wHeading2 = document.createElement('div')
         wHeading2.id = 'wHeading2'
            const woutring2 = document.createElement('div')
            woutring2.classList = 'outring'
               const wlogo2 = document.createElement('div')
               wlogo2.classList = 'wlogo2 logos'
               wlogo2.innerHTML = '<span class="material-icons">work</span>'
            woutring2.append(wlogo2)
            const whead2 = document.createElement('h2')
            whead2.classList = 'whead2 headings'
            whead2.innerHTML = 'Work Experience'
         wHeading2.append(woutring2, whead2)
         
         const cr = document.createElement('div')
         cr.classList = 'cr'
            const crheading = document.createElement('div')
            crheading.classList = 'crheading'
               const crhead = document.createElement('h3')
               crhead.classList = 'crhead h3'
               crhead.innerHTML = 'Community Relation Manager'
               const crinhead = document.createElement('h4')
               crinhead.classList = 'crinhead crhead1 h4'
               crinhead.innerHTML = 'Gay & Lesbian Elder Housing, Los Angeles'
            crheading.append(crhead, crinhead)
            const crhead1 = document.createElement('h4')
            crhead1.classList = 'crhead1 h4'
            crhead1.innerHTML = '06/2011-01/2014'
         cr.append(crheading, crhead1)

         const wmain1 = document.createElement('ul')
            wmain1.classList = 'list wmainlist1'
            wmain1.innerHTML = '<li>Arranging presentations and pitch deck.</li> <li>Designing a PR plan and establishing important focus points.</li> <li>Designing, creating and managing content across multiple communication platforms</li> <li>Building relationships with key media players.</li> '
      workCont.append(wHeading2, cr, wmain1)
      //education-part
      const education = document.createElement('div')
      education.classList = 'edu'
         const eHeading2 = document.createElement('div')
         eHeading2.id = 'eHeading2'
            const eoutring2 = document.createElement('div')
            eoutring2.classList = 'outring'
               const elogo2 = document.createElement('div')
               elogo2.classList = 'elogo2 logos'
               elogo2.innerHTML = '<span class="material-icons">school</span>'
            eoutring2.append(elogo2)
            const ehead2 = document.createElement('h2')
            ehead2.classList = 'ehead2 headings'
            ehead2.innerHTML = 'Education'
         eHeading2.append(eoutring2, ehead2)

         const ei = document.createElement('div')
         ei.classList = 'ei'
            const eiheading = document.createElement('div')
            eiheading.classList = 'eiheading'
               const eihead = document.createElement('h3')
               eihead.classList = 'eihead h3'
               eihead.innerHTML = 'Education Immersion Program'
               const eiinhead = document.createElement('h4')
               eiinhead.classList = 'eiinhead eihead1 h4'
               eiinhead.innerHTML = 'Thinkful, Chicago, IL'
            eiheading.append(eihead, eiinhead)
            const eihead1 = document.createElement('h4')
            eihead1.classList = 'eihead1 h4'
            eihead1.innerHTML = '11/2018-06/2018'
         ei.append(eiheading, eihead1)
         const pr = document.createElement('p')
         pr.id = 'pr'
         pr.innerHTML = 'Project-focused intensive program with emphasis on mongo, Express, React, and JavaScript (MERN) technical stack.'
         const emain1 = document.createElement('ul')
            emain1.classList = 'list emainlist1'
            emain1.innerHTML = '<li>Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation. User"s progress is stored on a backend created using Node and MongoDB.</li><li>Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.</li> <li>Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.</li>'

            const ba = document.createElement('div')
            ba.classList = 'ba'
               const baheading = document.createElement('div')
               baheading.classList = 'baheading'
                  const bahead = document.createElement('h3')
                  bahead.classList = 'bahead h3'
                  bahead.innerHTML = 'BA, English'
                  const bainhead = document.createElement('h4')
                  bainhead.classList = 'bainhead bahead1 h4'
                  bainhead.innerHTML = 'University of California, Los Angles'
               baheading.append(bahead, bainhead)
               const bahead1 = document.createElement('h4')
               bahead1.classList = 'eihead1 h4'
               bahead1.innerHTML = '09/2001-09/2005'
            ba.append(baheading, bahead1)
      education.append(eHeading2, ei, pr, emain1, ba)
      //education-part
      //work-part
    right.append(workCont, education)
    //right
content.append(left, right)
//main-content

