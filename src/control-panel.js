import React, {PureComponent} from 'react';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
      <div className="input">
        <label>Ambulatory Surgery Centers</label>
          <input
            type="checkbox"
            checked={this.props.showHospitals}
            onChange={this.props.toggleShow}
            />
      </div>
      <div className="source-link">
        <a
          href="https://github.com/mynameisedison/Urban-Map-App/tree/master/src/data"
          target="_new">
          View Code and download data↗
        </a>
      </div>
      </Container>
    );
  }
}
