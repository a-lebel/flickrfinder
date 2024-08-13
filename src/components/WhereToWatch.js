import React from 'react';

const WhereToWatch = ({ watchProviders }) => (
  <div className="where-to-watch">
    <h2>Where to Watch</h2>
    {watchProviders.flatrate && (
      <div>
        <h4>Streaming</h4>
        <ul>
          {watchProviders.flatrate.map(provider => (
            <li key={provider.provider_id}>{provider.provider_name}</li>
          ))}
        </ul>
      </div>
    )}
    {watchProviders.rent && (
      <div>
        <h4>Rent</h4>
        <ul>
          {watchProviders.rent.map(provider => (
            <li key={provider.provider_id}>{provider.provider_name}</li>
          ))}
        </ul>
      </div>
    )}
    {!watchProviders.flatrate && !watchProviders.rent && (
      <p>No streaming or rental options available.</p>
    )}
  </div>
);

export default WhereToWatch;
