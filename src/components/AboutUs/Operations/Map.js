import { MapContainer, GeoJSON, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';

const Map = ({ geojsonData, provinceData }) => {
  const allowedProv = [11, 12, 18, 32, 35] //dummy
  //console.log(geojsonData)
  console.log(provinceData)

  const defaultStyle = {
    color: 'white',
    weight: 1,
    fillColor: '#153d89',
    fillOpacity: 0.5
  };

  const highlightStyle = {
    color: 'white',
    weight: 1,
    fillColor: '#153d89',
    fillOpacity: 1
  };

  const onEachFeature = (feature, layer) => {
    const { kode } = feature.properties;

    if (provinceData && provinceData.hasOwnProperty(kode)) {
      const provinceInfo = provinceData[kode];
      const { provinceName, facilities } = provinceInfo;
      const facilitiesList = facilities.map((facility) => `- ${facility}<br/>`).join('');
      const popupContent = `
        <b>${provinceName}</b><br/>
        ${facilitiesList}
      `;

      layer.on('mouseover', function (e) {
        this.bindPopup(popupContent).openPopup();
      });
      layer.on('mouseout', function (e) {
        this.closePopup();
      });
      layer.setStyle(highlightStyle);
    } else {
      layer.off('mouseover');
      layer.off('mouseout');
      layer.setStyle(defaultStyle);
    }

    // Prevent click events from triggering any action
    layer.on('click', (e) => {
      e.originalEvent.preventDefault();
      e.originalEvent.stopPropagation();
    });
  };

  const DisableInteractions = () => {
    const map = useMap();
    useEffect(() => {
      // Disable interactions
      map.dragging.disable();
      map.scrollWheelZoom.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      className="custom-map"
      style={{ height: "500px", width: "100%" }}
      center={[-2.5, 118.0]}
      zoom={4.8}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      /> */}
      <DisableInteractions />
      <GeoJSON data={geojsonData} style={defaultStyle} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default Map;
