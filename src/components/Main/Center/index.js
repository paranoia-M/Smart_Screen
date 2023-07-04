import React, { PureComponent } from 'react';
import Map from './charts/Map';
import map from '@/store/data/map'


class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

  }
  render() {
    const { detailsList, mapData } = map;
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'54%'
      }}>
        <Map mapData={mapData}></Map>
        <div style={{
          // display:'flex'
        }}>
          <div className='detail-list' style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            alignContent: 'space-between',
            justifyContent: 'space-around',
            width:'100%'
        }}>
            {detailsList
              ? detailsList.map((item, index) => {
                  return (
                    <div className='detail-list-item'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        width: '32%',
                        borderRadius: '5px',
                        border: '1px solid #343f4b',
                        backgroundColor:' rgba(19, 25, 47, 0.8)',
                        
                      }}
                      key={index}>
                      <img
                        style={{width:'80px'}}
                        src={require(`@/assets/images/center-details-data${
                          index + 1
                        }.png`)}
                        alt={item.title}
                      />
                      <div className='detail-item-text'>
                        <h3>{item.title}</h3>
                        <span>{item.number}</span>
                        <span className='unit'>{item.unit}</span>
                      </div>
                    </div>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

// detailsList: state.centerPage.detailsList,
// mapData: state.centerPage.mapData,


export default (index);
