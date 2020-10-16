import React from 'react';

export default function TopNav({ title, onMenuClick = () => {} }) {
  return (
    <div id="headerToggle">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="/#"
        className="toggle"
        onClick={e => {
          e.preventDefault();
          onMenuClick();
        }}
      >
        {' '}
      </a>
    </div>
  );
}
