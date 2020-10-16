import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={url}
                className={`icon ${icon}`}
              >
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
