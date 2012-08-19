Photo Overlay
=============

A [custom overlay](https://developers.google.com/maps/documentation/javascript/overlays#CustomOverlays) for the [Google Maps API v3](https://developers.google.com/maps/documentation/javascript/) that can display small photo thumbnails on the map. Here's an example of what it looks like in the standard configuration (it's the thumbnails on the map):

[![](https://dl.dropbox.com/u/5513964/Screenshots/Photo%20Overlay%20Example.png)](https://dl.dropbox.com/u/5513964/Screenshots/Photo%20Overlay%20Example.png)

Usage
-------------

```javascript
// The constructor takes 4 parameters:
// * map: the map you want the overlay to be on
// * position: a lat/lng element
// * url: the URL of the thumbnail
// * title: text for the title element, displayed when you hover over it (optional)
function PhotoOverlay(map, position, photoUrl, title)

// Example initialization using a photo received from the Flickr API
// This makes the overlay appear on the map
var photoOverlay = new PhotoOverlay(map, new google.maps.LatLng(photo.latitude, photo.longitude), photo.url_sq, photo.title)

// You can add a listener to the click event of the overlay
google.maps.event.addListener(photoOverlay, 'click', function() {
	// Do something, like open an infowindow for example.
})

// Remove the overlay from the map like this:
photoOverlay.setMap(null)
```

To Do
-------------

Adding the overlay to the `overlayImage` [MapPane](https://developers.google.com/maps/documentation/javascript/reference#MapPanes) and creating another transparent and clickable overlay that sits on the `overlayMouseTarget` pane to receive click events.

The scenario described above is how Google Maps' native markers are implemented. I'd like this custom overlay to work the same way. Currently the whole overlay is added to the `overlayMouseTarget` pane.