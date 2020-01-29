import React from 'react';
import MyComponent from '../components/my_component';
import {
  EuiButton,
  EuiCode,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export default () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Elastic&apos;s Gatsby EUI Starter</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>
          <EuiButton
            iconType="logoGithub"
            href="https://github.com/elastic/gatsby-eui-starter"
            fill>
            Open in Github
          </EuiButton>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Getting started</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection />
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiText>
            <p>
              This Gatsby EUI Starter is intended to help you quickly build and
              deploy prototypes for Kibana apps with the EUI library.
            </p>
            <h3>Clone the project</h3>
            <p>
              To use this starter, simply run{' '}
              <EuiCode>
                gatsby new my-app https://github.com/elastic/gatsby-eui-starter
              </EuiCode>
              . Then <EuiCode>cd my-app</EuiCode> and start editing.
            </p>
            <h3>Running locally</h3>
            <p>
              <EuiCode>gatsby develop</EuiCode>
            </p>
            <h3>Deploying</h3>
            <p>
              Make sure that your repo has a <EuiCode>gh-pages</EuiCode> branch
              setup and that Github Pages is enabled in settings.
            </p>
            <p>
              <EuiCode>yarn deploy</EuiCode>
            </p>
            <MyComponent />
          </EuiText>
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);
