import React from 'react'
import img from '../assets/images/performance.svg'

const Performance = () => {
    const stats = [
        { 
            title: 'Performance', 
            value: "99%",
            color: '#fa709a', 
            bg: 'radial-gradient(216.44% 216.44% at 58.08% 100%,rgba(45,55,115,.8) 25.12%,rgba(250,112,154,.8) 99.76%)'
        },
        { 
            title: 'Structure', 
            value: "83%",
            color: '#1ac6f4', 
            bg: 'radial-gradient(216.44% 216.44% at 58.08% 100%,rgba(45,55,115,.8) 25.12%,rgba(112,209,250,.8) 99.76%)'
        },
        { 
            title: 'LCP', 
            value: "877ms",
            color: '#2fd3ac', 
            bg: 'radial-gradient(216.44% 216.44% at 58.08% 100%,rgba(45,55,115,.8) 25.12%,rgba(112,250,167,.8) 99.76%)'
        },
        { 
            title: 'TBT', 
            value: "2ms",
            color: '#ffcc70', 
            bg: 'radial-gradient(216.44% 216.44% at 58.08% 100%,rgba(45,55,115,.8) 25.12%,rgba(250,203,112,.8) 99.76%)'
        }
    ]
    return (
        <section className="performance">
            <div className="performance__container">
                <div className="performance__title">
                    <h1>Cloud Hosting & Fast Loading</h1>
                    <p>All landing pages are published in a cloud multi-reagion hosting solution,
                        for 100% guaranteed uptime and optimal loading speed all over the world</p>
                </div>
                <div className="performance__image">
                    <img src={img} alt="0" />
                </div>
                <div className="performance__box">
                    {
                        stats.map((item, index) => (
                            <div className="performance__box__item" style={{background:item.bg}} key={index}>
                                <p style={{color:item.color}}>{item.title}</p>
                                <h1>{item.value}</h1>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Performance
