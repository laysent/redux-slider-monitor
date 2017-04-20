import React, { Component, PureComponent, PropTypes } from 'react';
import { Button } from 'devui';

export default class SliderButton extends (PureComponent || Component) {
  static propTypes = {
    theme: PropTypes.object,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  }

  iconStyle() {
    return {
      cursor: 'hand',
      fill: this.props.theme.base06,
      width: '1.8rem',
      height: '1.8rem'
    };
  }

  renderPlayButton() {
    return (
      <Button
        onClick={this.props.onClick}
        title='Play'
        size='small'
        disabled={this.props.disabled}
        theme={this.props.theme}
      >
        <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet'
          style={this.iconStyle()}
        >
          <g><path d='M8 5v14l11-7z'></path></g>
        </svg>
      </Button>
    );
  }

  renderPauseButton = () => {
    return (
      <Button
        onClick={this.props.onClick}
        title='Pause'
        size='small'
        disabled={this.props.disabled}
        theme={this.props.theme}
      >
        <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet'
          style={this.iconStyle()}
        >
          <g><path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'></path></g>
        </svg>
      </Button>
    );
  }

  renderStepButton = (direction) => {
    const isLeft = direction === 'left';
    const d = isLeft ?
      'M15.41 16.09l-4.58-4.59 4.58-4.59-1.41-1.41-6 6 6 6z' :
      'M8.59 16.34l4.58-4.59-4.58-4.59 1.41-1.41 6 6-6 6z';

    return (
      <Button
        size='small'
        title={isLeft ? 'Go back' : 'Go forward'}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        theme={this.props.theme}
      >
        <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet'
          style={this.iconStyle()}
        >
          <g><path d={d}></path></g>
        </svg>
      </Button>
    );
  }

  render() {
    switch (this.props.type) {
      case 'play':
        return this.renderPlayButton();
      case 'pause':
        return this.renderPauseButton();
      case 'stepLeft':
        return this.renderStepButton('left');
      case 'stepRight':
        return this.renderStepButton('right');
      default:
        return null;
    }
  }
}
