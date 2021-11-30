import React, { useRef, useState } from 'react'
import { pricingHeaderYearly, pricingHeaderMonthly, pricingBody } from '../assets/data/pricing'

const Pricing = () => {

    const activeRef = useRef(null)

    const [pricingHeader, setPricingHeader] = useState(pricingHeaderMonthly)

    const monthlyClick = () => {
        activeRef.current.classList.remove('yearly-active')
        setPricingHeader(pricingHeaderMonthly)
    }

    const yearlyClick = () => {
        activeRef.current.classList.add('yearly-active')
        setPricingHeader(pricingHeaderYearly)
    }

    return (
        <section className="pricing">
            <h1>Choose Your Perfect Plan</h1>
            <div className="pricing__table">
                <div className="pricing__table__header">
                    <div className="pricing__table__header__item">
                        <div className="pricing__table__header__item__switch">
                            <div className="pricing__table__header__item__switch__container" ref={activeRef}>
                                <span className="pricing__table__header__item__switch__container__monthly" onClick={monthlyClick}>Monthly</span>
                                <span className="pricing__table__header__item__switch__container__yearly" onClick={yearlyClick}>Yearly</span>
                            </div>
                        </div>
                    </div>
                    {
                        pricingHeader.map((item, index) => (
                            <div className="pricing__table__header__item" style={{ background: item.bg }} key={index}>
                                <h3 style={{ color: item.color }}>{item.title}</h3>
                                <h1>{item.pricing}</h1>
                                <p>{item.content}</p>
                                <button style={{ border: `${item.color} solid 1px` }}>Start Free Trial</button>
                            </div>
                        ))
                    }
                </div>
                <div className="pricing__table__body">
                    {
                        pricingBody.map((item, index) => (
                            <div className="pricing__table__body__row" key={index}>
                                <div className={`pricing__table__body__row__title ${index === pricingBody.length - 1 ? 'last' : ''}`}>
                                    {item.title}
                                </div>
                                <div className="pricing__table__body__row__cell">
                                    {item.starter}
                                </div>
                                <div className="pricing__table__body__row__cell">
                                    {item.pro}
                                </div>
                                <div className="pricing__table__body__row__cell">
                                    {item.master}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pricing__swicth-mobile">
                <div className="pricing__swicth-mobile__container" ref={activeRef}>
                    <span className="pricing__swicth-mobile__container__monthly" onClick={monthlyClick}>Monthly</span>
                    <span className="pricing__swicth-mobile__container__yearly" onClick={yearlyClick}>Yearly</span>
                </div>
            </div>
            {
                pricingHeader.map((item, index) => (
                    <div className="pricing__card" key={index}>
                        <div className="pricing__card__header" style={{ background: item.bg }}>
                            <h3>{item.pricing}</h3>
                            <p>{item.content}</p>
                            <button style={{ border: `${item.color} solid 1px` }}>Start Free Trial</button>
                        </div>
                        {
                            pricingBody.map((item, index) => (
                                <>
                                    <hr />
                                    <div className="pricing__card__item" key={index}>
                                        <div className="pricing__card__item__left">{item.title}</div>
                                        <div className="pricing__card__item__right">{item.starter}</div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                ))
            }
        </section>
    )
}

export default Pricing
