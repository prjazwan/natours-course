export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYXp3YW5heW9iIiwiYSI6ImNrbm9yN21xbjAzZmUydnFtN2tobXpwbHQifQ.4nOxb71WLQEUMB_ntN3ThA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/azwanayob/cknorvj9t0dv217n2bnfg63lq',
    scrollZoom: false,
    //center: [-118.113491, 34.111745],
    //zoom: 10,
    //interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
