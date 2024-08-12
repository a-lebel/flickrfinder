import React from 'react';

const WhereToWatch = ({ watchProviders }) => (
  <div className="where-to-watch">
    <h4>Where to Watch</h4>
    {watchProviders.flatrate && (
      <div>
        <h5>Streaming</h5>
        <ul>
          {watchProviders.flatrate.map(provider => (
            <li key={provider.provider_id}>{provider.provider_name}</li>
          ))}
        </ul>
      </div>
    )}
    {watchProviders.rent && (
      <div>
        <h5>Rent</h5>
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
