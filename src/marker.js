const mapboxgl = require('mapbox-gl');

const buildMarker = (type, coords) => {
	let urlString = '';
	switch (type) {
		case 'activity':
			urlString = 'http://i.imgur.com/WbMOfMl.png';
			break;
		case 'hotel':
			urlString = 'http://i.imgur.com/D9574Cu.png';
			break;
		case 'restaurant':
			urlString = ' http://i.imgur.com/cqR6pUI.png';
			break;
		default:
			urlString = 'https://secure.gravatar.com/avatar/a82b5ca9a3c93521bccdcdfaf7cd8e38?s=32&d=wavatar&r=g';
	}
	const markerElm = document.createElement('div');
	markerElm.style.width = '32px';
	markerElm.style.height = '32px';
	markerElm.style.backgroundImage = `url(${urlString})`;

	const newMap = new mapboxgl.Marker(markerElm).setLngLat(coords);
	return newMap;
};

module.exports = buildMarker;
