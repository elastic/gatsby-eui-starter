import React from 'react';
import { Link } from 'gatsby';
import { EuiButton } from '@elastic/eui';

export default class MyComponent extends React.Component {
  render() {
    return (
      <Link to="page-2">
        <EuiButton>Go to page 2</EuiButton>
      </Link>
    )
  }
}