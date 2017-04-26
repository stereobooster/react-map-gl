import {PureComponent} from 'react';
import PropTypes from 'prop-types';

import mapboxgl from 'mapbox-gl';
// import {LngLat} from 'mapbox-gl';

const propTypes = {
  /** The latitude of the center of the marker. */
  latitude: PropTypes.number.isRequired,
  /** The longitude of the center of the marker. */
  longitude: PropTypes.number.isRequired,
  /**
    * `onChangeViewport` callback is fired when the user interacted with the
    * map. The object passed to the callback contains `latitude`,
    * `longitude` and `zoom` and additional state information.
    */
  onClick: PropTypes.func,
  /**
    * Is the component currently being dragged. This is used to show/hide the
    * drag cursor. Also used as an optimization in some overlays by preventing
    * rendering while dragging.
    */
  isDragging: PropTypes.bool,

  children: PropTypes.node,

  position: PropTypes.object
};

const contextTypes = {
  map: PropTypes.element
};

export default class Marker extends PureComponent {
  /**
   * @classdesc
   */
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      isHovering: false,
      startDragLngLat: null
    };
    // autobind(this);
  }

  render() {
    const {children, latitude, longitude, ...props} = this.props;

    // return new mapboxgl.Marker(children, props)
    return new mapboxgl.Marker(children, props)
      .setLngLat([latitude, longitude])
      .addTo(this.context.map);
  }
}

Marker.displayName = 'Marker';
Marker.propTypes = propTypes;
Marker.contextTypes = contextTypes;
// Marker.defaultProps = defaultProps;
