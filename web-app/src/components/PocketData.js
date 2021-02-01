import React from 'react';

const PocketData = ({ title, subtitle }) => {
  return (
    <div>
      <p>
        <strong>{title}</strong> <br /> {subtitle}
      </p>
    </div>
  );
};

export default PocketData;
