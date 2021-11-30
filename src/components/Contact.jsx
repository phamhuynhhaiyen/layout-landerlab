import React from 'react'
import img from '../assets/images/img_contact.svg'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <div className="contact__container__left">
                    <img src={img} alt="" />
                    <h2>Not Enough technical skills ?</h2>
                    <p>We have our teams with developer and designers ready to help you.</p>
                </div>
                <div className="contact__container__right">
                        <button>Contact US</button>
                </div>
            </div>
        </section>
    )
}

export default Contact
