import React from 'react';

const WhereToWatch = ({ platforms }) => (
  <div className="where-to-watch">
    <h4>Where to Watch</h4>
    <ul>
      {platforms.map(platform => (
        <li key={platform.name}>{platform.name}</li>
      ))}
    </ul>
  </div>
);

export default WhereToWatch;
