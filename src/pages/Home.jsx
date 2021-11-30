import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Section, {SectionContent, SectionImages} from '../components/Section'
import Domain from '../components/Domain'
import Contact from '../components/Contact'
import Performance from '../components/Performance'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

import img01 from '../assets/images/img01.png'
import img02 from '../assets/images/img02.png'
import img03 from '../assets/images/img03.png'
import img04 from '../assets/images/img04.png'
import img05 from '../assets/images/img05.png'




const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Section>
                <SectionImages>
                    <img src={img01} alt=""/>
                </SectionImages>
                <SectionContent 
                title="Create a New or Import an Existing Landing Page" 
                subtitle="Creating and publishing your landing pages is now easier than ever. 
                With LanderLab you can be up and running in just a few seconds. 
                Chose from our rich collection of 100+ ready to use templates, upload a .zip or directly import from an URL."/>
            </Section>
            <Section>
                <SectionContent 
                title="Lead Collection & Management" 
                subtitle="Convert every visit into a lead! 
                Create amazing forms and popups and use them in your landing pages to collect leads. 
                Fully automate your sales workflow by connecting your prefered lead management CRM to LanderLab and automatically pushing leads to it."/>
                <SectionImages>
                    <img src={img02} alt=""/>
                </SectionImages>
            </Section>
            <Section>
                <SectionImages>
                    <img src={img03} alt=""/>
                </SectionImages>
                <SectionContent 
                title="A/B Test Your Landing Pages" 
                subtitle="Customize images, headlines, call to actions or any other part, with our built in easy to use Visual Editor. 
                Build your audiences by easily installing any tracking pixel for popular platforms like Facebook, Google Analytics, etc. 
                Preview and publish your landing page online."/>
            </Section>
            <Section>
                <SectionContent 
                title="Track Your Landing Page Performance" 
                subtitle="Never again miss important insights about your customers! 
                With LanderLab’s built-in tracking solution, you can track visits, clicks, conversions, etc, 
                and break them down by country, city, device type, browser, or other dimensions."/>
                <SectionImages>
                    <img src={img04} alt=""/>
                </SectionImages>
            </Section>
            <Section id="template">
                <SectionImages>
                    <img src={img05} alt=""/>
                </SectionImages>
                <SectionContent 
                title="+100 Ready To Use Templates" 
                subtitle="If you are looking to build your first landing page, 
                then our collection of pre-designed templates is the best place to get started. 
                All templates have been curated to be fully responsive and optimized for maximal loading speeds."/>
            </Section>
            <Domain/>
            <Contact/>
            <Performance/>
            <Pricing/>
            <Footer />
        </>
    )
}

export default Home
