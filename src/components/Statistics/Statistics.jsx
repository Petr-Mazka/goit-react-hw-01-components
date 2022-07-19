import React from "react";
import PropTypes from 'prop-types';

function Statistics({title, stats}){
    return (
        <section className="statistics">
            <h2 className="title">
            {title ? {title} : "Upload stats"} 
            </h2>
            <ul className="stat-list">
            {stats.map(stat => ( 
                <li className="item" key={stat.id}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}</span>
                </li>
            ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default Statistics;