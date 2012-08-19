var PHOTO_WIDTH   = 18 //pixels
var PHOTO_HEIGHT  = 18 //pixels

var BORDER_WIDTH  = 2 //pixels
var BORDER_RADIUS = 2 //pixels
var BORDER_COLOR  = "white"

var BOX_SHADOW    = "2px 2px 10px black"

function PhotoOverlay(map, position, photoUrl, title) {
	this.map_      = map
	this.position_ = position
	this.photoUrl_ = photoUrl
	this.title_    = title || ''
	this.div_      = null

	this.setMap(map)
}

PhotoOverlay.prototype = new google.maps.OverlayView()

PhotoOverlay.prototype.onAdd = function() {
	var div = document.createElement('div')

	div.style.width           = PHOTO_WIDTH + "px"
	div.style.height          = PHOTO_HEIGHT + "px"
	
	div.style.backgroundColor = BORDER_COLOR // so it's not transparent
	div.style.borderStyle     = "solid"
	div.style.borderWidth     = BORDER_WIDTH + "px"
	div.style.borderColor     = BORDER_COLOR
	div.style.borderRadius    = BORDER_RADIUS + "px"
	
	div.style.boxShadow       = BOX_SHADOW
	
	div.style.position        = "absolute"
	div.style.cursor          = "pointer"
	div.title                 = this.title_

	var img = document.createElement("img")

	img.src          = this.photoUrl_
	img.style.width  = PHOTO_WIDTH + "px"
	img.style.height = PHOTO_HEIGHT + "px"

	div.appendChild(img)

	this.div_ = div

	var panes = this.getPanes()
	panes.overlayMouseTarget.appendChild(div)

	var overlay = this;

	google.maps.event.addDomListener(div, 'click', function() {
		google.maps.event.trigger(overlay, 'click')
	})
}

PhotoOverlay.prototype.onRemove = function() {
	this.div_.parentNode.removeChild(this.div_);
	this.div_ = null;
}

PhotoOverlay.prototype.draw = function() {
	var overlayProjection = this.getProjection()

	var point = overlayProjection.fromLatLngToDivPixel(this.position_)

	var div = this.div_;
	div.style.left = point.x - (PHOTO_WIDTH/2) + 'px';
	div.style.top  = point.y - (PHOTO_HEIGHT/2) + 'px';
}