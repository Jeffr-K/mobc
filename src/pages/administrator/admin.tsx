import React from 'react';

export class Admin extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'p-4' },
      React.createElement('h1', { className: 'text-2xl font-bold' }, 'Admin Page'),
      React.createElement('p', { className: 'mt-4' }, 'This is an admin page.'),
    );
  }
}
