/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import "./layout.scss"

import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  EuiNavDrawerGroup,
  EuiNavDrawer,
  EuiHorizontalRule,
  EuiShowFor,
  EuiFocusTrap,
} from '@elastic/eui';

import { TopLinks } from './navigation_links/top_links';
import { SolutionLinks } from './navigation_links/solution_links';
import { ExploreLinks } from './navigation_links/explore_links';
import { AdminLinks } from './navigation_links/admin_links';

import { keyCodes } from '@elastic/eui/lib/services';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: true,
    };
  }

  onKeyDown = event => {
    if (event.keyCode === keyCodes.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      this.closeFullScreen();
    }
  };

  toggleFullScreen = () => {
    this.setState(prevState => ({
      isFullScreen: !prevState.isFullScreen,
    }));
  };

  closeFullScreen = () => {
    this.setState({
      isFullScreen: false,
    });
  };

  renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoKibana"
        href="/#/layout/nav-drawer"
        aria-label="Goes to home"
      />
    );
  }

  renderMenuTrigger() {
    return (
      <EuiHeaderSectionItemButton
        aria-label="Open nav"
        onClick={() => this.navDrawerRef.toggleOpen()}>
        <EuiIcon type="apps" href="#" size="m" />
      </EuiHeaderSectionItemButton>
    );
  }

  renderBreadcrumbs() {
    const breadcrumbs = [
      {
        text: 'Home',
        href: '#',
        onClick: e => {
          e.preventDefault();
          console.log('You clicked home');
        },
        'data-test-subj': 'breadcrumbsAnimals',
        className: 'customClass',
      }
    ];

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  }

  setNavDrawerRef = ref => (this.navDrawerRef = ref);

  render() {
    console.log(ExploreLinks);
    return (
      <EuiFocusTrap>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
          onKeyDown={this.onKeyDown}>
          <EuiHeader>
            <EuiHeaderSection grow={false}>
              <EuiShowFor sizes={['xs', 's']}>
                <EuiHeaderSectionItem border="right">
                  {this.renderMenuTrigger()}
                </EuiHeaderSectionItem>
              </EuiShowFor>
              <EuiHeaderSectionItem border="right">
                {this.renderLogo()}
              </EuiHeaderSectionItem>
              <EuiHeaderSectionItem border="right">
                {/* <HeaderSpacesMenu /> */}
              </EuiHeaderSectionItem>
            </EuiHeaderSection>

            {this.renderBreadcrumbs()}

            <EuiHeaderSection side="right">
              <EuiHeaderSectionItem>
                {/* <HeaderUserMenu /> */}
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiHeader>
          <EuiNavDrawer ref={this.setNavDrawerRef}>
            <EuiNavDrawerGroup listItems={TopLinks} />
            <EuiHorizontalRule margin="none" />
            <EuiNavDrawerGroup listItems={ExploreLinks} />
            <EuiHorizontalRule margin="none" />
            <EuiNavDrawerGroup listItems={SolutionLinks} />
            <EuiHorizontalRule margin="none" />
            <EuiNavDrawerGroup listItems={AdminLinks} />
          </EuiNavDrawer>
          <div className="demoWrapper">
            { this.props.children }
          </div>
        </div>
      </EuiFocusTrap>
    )
  }
}