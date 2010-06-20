
(function( lib, namespace, fileUploader){
	
// resolve namespace
var api =lib.namespace( namespace), undefined;

// reference configuration of file uploader
api.config =fileUploader.config;

// load uploader (should be called during page load)
api.load =fileUploader.load;

// initialize uploader instance for target element
api.attach =function( elem, defaultUploadData) {
	if( lib.data.has( elem, 'uploader.uploaderInstance'))
		throw 'Uploader is already attached to specified element';
	
	// return uploader instance
	var uploader =new fileUploader.Uploader( defaultUploadData);
	
	// attach uploader
	uploader.attach( elem);
	
	// associate uploader with object
	lib.data.set( elem, 'uploader.uploaderInstance', uploader);
	
	// return uploader instance
	return uploader;
};

// detach uploader instance from target element
api.detach =function( elem) {
	if( !lib.data.has( elem, 'uploader.uploaderInstance'))
		// uploader is not attached to specified element
		return;
	
	// get uploader instance
	var uploader =lib.data.get( elem, 'uploader.uploaderInstance');
	
	// detach
	uploader.detach();
	
	// remove association with element
	lib.data.remove( elem, 'uploader.uploaderInstance');
};
	
})( EVOLIB_EXPORT, 'uploader', window.fileUploader);
