import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import BackgroundImage from 'gatsby-background-image';
import { OuterContent, PortfolioItem } from './Projekte.styled';

const PortfolioContainer = styled.div`
  margin-left: -1em;
`;

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.project = props.project;
    this.index = props.index;
    this.setItemState = props.setItemState;
    this.mounted = false;
    this.close = false;
    this.refIntoView = React.createRef();
  }

  setUnMount = () => {
    this.setState({ mounted: 'false' });
    this.setState({ closed: 'true' });
  };

  onClick = (e) => {
    this.refIntoView.current.scrollIntoView({ behaviour: 'smooth' });
    if (this.project.expanded === 'false') {
      this.setState({ mounted: 'true' });
      this.setItemState(this.index, 'true');
    } else {
      this.setUnMount();
    }
  };

  render() {
    return (
      <PortfolioItem
        ref={this.refIntoView}
        colour={this.project.secondaryColour}
        className={
          this.project.expanded === 'true' && this.state.mounted === 'true'
            ? 'isExpanded'
            : ''
        }
      >
        <div className="post__inner" onClick={this.onClick}>
          <div
            className={`post__image ${
              this.project.expanded === 'true' ? 'isActive' : 'nie'
            }`}
            style={{
              backgroundImage: `url(${this.project.secondaryBackground?.asset.url}?h=300)`,
            }}
          />

          <div className="post__logo">
            <Img fluid={this.project.secondaryLogo?.asset.fluid} />
          </div>
        </div>

        {this.project.expanded === 'true' ? (
          <SingleDetail
            setItemState={this.setItemState}
            index={this.index}
            onTransitionEnd={this.transitionEnd}
            mounted={this.state.mounted}
            closed={this.setClosed}
            setUnMount={this.setUnMount}
            project={this.project}
          />
        ) : null}
      </PortfolioItem>
    );
  }
}

class SingleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.project = props.project;
    this.setItemState = props.setItemState;
    this.index = props.index;
    this.transitionEnd = this.transitionEnd.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.setUnMount = props.setUnMount;
    this.mounted = props.mounted;

    this.state = {
      // base css
      show: true,
      classi: 'in',
    };
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps');
    // check for the mounted props

    if (newProps.mounted === 'false') return this.unMountStyle(); // call outro animation when mounted prop is false
    console.log('received');
    this.setState({
      // remount the node when the mounted prop is true
      show: true,
    });
    setTimeout(this.mountStyle, 10); // call the into animation
  }

  unMountStyle() {
    console.log('unmount');
    // css for unmount animation
    this.setState({
      classi: 'in',
    });
  }

  mountStyle() {
    // css for mount animation
    console.log('mount');
    this.setState({
      classi: 'out',
    });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    setTimeout(this.mountStyle, 10); // call the into animation
    console.log('didmount');
  }

  transitionEnd() {
    console.log(this.props);
    if (this.props.mounted === 'false') {
      console.log('finish');
      this.setItemState(this.index, 'false');

      // remove the node on transition end when the mounted prop is false
      this.setState({
        show: false,
      });
    }
  }

  handleClick = (e) => {
    if (this.node && this.node.contains(e.target)) {
      // inside
    }
    // outside
    else {
      this.setUnMount();
    }
  };

  render() {
    const imageData = this.project.secondaryBackground.asset.fluid;
    return (
      <OuterContent
        ref={(node) => (this.node = node)}
        className={this.state.classi}
        onTransitionEnd={this.transitionEnd}
      >
        <BackgroundImage
          Tag="section"
          className="content "
          fluid={imageData}
          backgroundColor={this.project.secondaryColour}
        >
          <div className="row port__items">
            <AiOutlineCloseCircle
              className="closeDetail"
              onClick={() => {
                this.setUnMount();
              }}
            >
              x
            </AiOutlineCloseCircle>

            <div className="port__item port__item--img">
              <Img
                fluid={this.project.secondaryImage.asset.fluid}
                alt={this.project.name}
              />
            </div>
            <div className="port__item port__item--text">
              <h4>{this.project.title}</h4>

              <BlockContent blocks={this.project._rawExcerpt} />
              <a href="link" className="btn">
                Anschauen
              </a>
            </div>
          </div>
        </BackgroundImage>
      </OuterContent>
    );
  }
}

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.projects = props.projects.map((project) => ({
      ...project,
      expanded: 'false',
    }));

    this.state = { rowShow: false, itemState: [...this.projects] };
  }

  setItemState = (id, value) => {
    // 1. Make a shallow copy of the items
    const copies = { ...this.state.itemState };
    // 2. Make a shallow copy of the item you want to mutate
    const item = copies[id];
    // 3. Replace the property you're intested in
    item.expanded = value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    copies[id] = item;

    // 5. Set the state to our new copy
    this.setState({ itemState: { ...copies } });

    console.log(this.state.itemState);
  };

  render() {
    return (
      <div className="projects__container">
        <PortfolioContainer className="row">
          {this.projects.map((project, index) => (
            <SingleProject
              index={index}
              key={project.id}
              project={project}
              setItemState={this.setItemState}
            />
          ))}
        </PortfolioContainer>
      </div>
    );
  }
}

export default ProjectList;
