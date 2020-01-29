import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { EuiEmptyPrompt, EuiButton } from '@elastic/eui';

const NotFoundPage = () => (
  <EuiEmptyPrompt
    iconType="editorStrike"
    title={<h2>Ack! There&apos;s nothing here.</h2>}
    body={
      <Fragment>
        <p>You found a page that doesn&apos;t exist.</p>
      </Fragment>
    }
    actions={
      <Link to="/">
        <EuiButton color="primary" fill>
          Go Home
        </EuiButton>
      </Link>
    }
  />
);

export default NotFoundPage;
