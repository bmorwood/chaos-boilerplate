(function(){
<<<<<<< HEAD
    /**
     * class of OverlayContainerWindow.
     *
     * @class OverlayContainerWindow
     * @constructor
     * @namespace chaos.viewmodels
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var OverlayContainerWindow = function($name, $window, $isModal, $x, $y) {
		this.name = $name;
		this.window = $window;
		this.isModal = _.isUndefined($isModal) ? false : $isModal;
		this.x = _.isUndefined($x) ? 0 : $x;
		this.y = _.isUndefined($y) ? 0 : $y;
	};
	
	var p = OverlayContainerWindow.prototype;
	
	p.name;
	p.window;
	p.isModal;
	p.y;
	p.x;
<<<<<<< HEAD
    /**
     * toString returns the class name.
     *
     * @method toString
     * @return {String} Class name.
     */
	p.toString = function (){
		return 'OverlayContainerWindow';
	};

    chaos.OverlayContainerWindow = OverlayContainerWindow;
=======

	p.toString = function (){
		return '[OverlayContainerWindow]';
	};

    Chaos.OverlayContainerWindow = OverlayContainerWindow;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());