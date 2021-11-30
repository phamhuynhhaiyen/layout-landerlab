import React from 'react'

import img01 from '../assets/images/domain01.svg'
import img02 from '../assets/images/domain02.svg'
import img03 from '../assets/images/domain03.svg'

const Domain = () => {
    return (
        <section className="domain">
            <div className="domain__title">
            <h1>Domain Management</h1>
            <p>Mange your domains, subdomains and DNS records directly from LanderLab without the need to login to CloudFlare</p>
            </div>
            <div className="domain__box">
                <div className="domain__box__item">
                    <img src={img01} alt=""/>
                    <h3>Domains</h3>
                    <p>Add domains to LanderLab an use them to publish your landing pages.</p>
                </div>
                <div className="domain__box__item">
                    <img src={img02} alt=""/>
                    <h3>Subdomain</h3>
                    <p>Manage subdomains for each domain and add a new dimension you can use to publish your landing pages.</p>
                </div>
                <div className="domain__box__item">
                    <img src={img03} alt=""/>
                    <h3>DNS Records</h3>
                    <p>Create, edit delete DNS records (A, CNAME, TEXT, etc) directly from LanderLab</p>
                </div>
            </div>
        </section>
    )
}

export default Domain
