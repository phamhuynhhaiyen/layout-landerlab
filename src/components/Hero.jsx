import React from 'react'
import img from '../assets/images/img_hero.png'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__content__title">
                    <h1>Build </h1>
                    <h1 className="hero__content__title__dynamic-text">
                        <span className="color-orange">CONVERTING</span>
                        <span className="color-pink">RESPONDSIVE</span>
                        <span className="color-blue">BEAUTIFUL</span>
                        <span className="color-purple">FAST</span>
                    </h1>
                    <h1>Landing Pages</h1>
                </div>
                <p>No coding, no server skills needed! With Landerlab, you can create, edit,
                    and publish beautiful and responsive landing pages that convert more in a matter of clicks.</p>
                <button>Start Free Trial</button>
            </div>
            <div className="hero__image">
                <img src={img} />
            </div>
        </section>
    )
}

export default Hero
