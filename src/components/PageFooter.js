import React from 'react';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>&copy; Liz Watkins. All rights reserved.</li>
        <li>
          Gatsby Design:{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://html5up.net"
          >
            HTML5 UP
          </a>
        </li>
        <li>
          Images:{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://unsplash.com/"
          >
            Unsplash
          </a>
        </li>
      </ul>
    </div>
  );
}
