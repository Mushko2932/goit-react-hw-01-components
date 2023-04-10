import React from "react";
import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
} from './Statistics.styled';

export function Statistics({ stats }) {
  return (
    <StatSection>
      <StatTitle>Upload stats</StatTitle>

      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
}