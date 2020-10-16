import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <i
            class="fa fa-code"
            style={{ fontSize: '2em', marginTop: '-3px' }}
          ></i>
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
