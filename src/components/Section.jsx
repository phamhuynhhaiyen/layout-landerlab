import React from 'react'

const Section = props => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export const SectionImages = props => {
    return (
        <div className="section__image">
            {props.children}
        </div>
    )
}
export const SectionContent = ({title, subtitle}) => {
    return (
        <div className="section__content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <a href="#">Learn more <i className="fas fa-chevron-right"></i> </a>
        </div>
    )
}

export default Section
