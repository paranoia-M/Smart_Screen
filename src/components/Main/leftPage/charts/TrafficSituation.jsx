import React, { PureComponent } from 'react';
import Chart from '@/utils/chart';
import { trafficOptions } from './options';

class TrafficSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { trafficSitua } = this.props;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
        }}>
        {trafficSitua ? (
          <Chart renderer={renderer} option={trafficOptions(trafficSitua)} />
        ) : (
          ''
        )}
      </div>
    );
  } //endrender
}

export default TrafficSituation;
