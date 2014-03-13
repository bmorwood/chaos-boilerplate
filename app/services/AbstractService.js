(function () {
    /**
     * This is the description for AbstractService.
     *
     * @class AbstractService
     * @constructor
     */
	var AbstractService = function () {
		this.initialize();
	};
    
    var p = AbstractService.prototype;
<<<<<<< HEAD
    /**
     * default service request using ajax calls
     *
     *
     * @method initServiceWithConfig
     * @param {String} $url url to call
     * @param {Function} $success callback success
     * @param {Function} $fault  callback fault
     */
	p.$initServiceWithConfig = function ($url, $success, $fault) {
		$.get($url, function ($data) {

			if(typeof $data === 'string')
=======
	
	p.$initServiceWithConfig = function ($url, $success, $fault) {
		$.get($url, function ($data) {

			if(typeof $data === "string")
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
				$data = JSON.parse($data);
				
			$success($data);
		}).error(function ($data) {
			$fault($data);
		});
	};
<<<<<<< HEAD
    /**
    * default service request using ajax calls
    *
    *
    * @method initServiceWithConfig
    * @param {String} $url url to call
    * @param {Function} $success callback success
    * @param {Function} $fault  callback fault
    */
=======


    /**
     * My method description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @method initServiceWithConfig
     * @param {String} $url url to call
     * @param {Function} $success callback success
     * @param {Function} $fault  callback fault
     */
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.initServiceWithConfig = function ($url, $success, $fault) {
		this.$initServiceWithConfig($url, $success, $fault);
	};
	
	p.initialize = function () { };
<<<<<<< HEAD
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function () {
		return 'AbstractService';
	};

    chaos.AbstractService = AbstractService;
=======

	p.toString = function () {
		return "[AbstractService]";
	};

    Chaos.AbstractService = AbstractService;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());