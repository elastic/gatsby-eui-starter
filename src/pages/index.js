import React from 'react';
import { Link } from 'gatsby';

import '../styles/index.scss';
import Layout from '../components/layout';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        {/* You can delete this and put whatever you want in here */}
        <EuiPage>
          <EuiPageBody>
            <EuiPageHeader>
              <EuiPageHeaderSection>
                <EuiTitle size="l">
                  <h1>Page title</h1>
                </EuiTitle>
              </EuiPageHeaderSection>
              <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
            </EuiPageHeader>
            <EuiPageContent>
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Content title</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
                <EuiPageContentHeaderSection>
                  Content abilities
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <Link to="page-2">Go to Page 2</Link>
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </Layout>
    );
  }
}
