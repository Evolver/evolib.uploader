
(function( lib, namespace, fileUploader){
	
// declare namespace
var api =lib.namespace( namespace), undefined;

// reference file uploader's prototype
var p =fileUploader.Uploader.prototype;

// handle dialog open
p.onDialogOpen =function() {
	lib.event.trigger( this.elem, 'uploadDialogOpen');
};

// handle file selection
p.onSelect =function( id, fileInfo) {
	// reference default upload data
	var returnData ={
		'value': true
	};
	
	lib.event.trigger( this.elem, 'uploadFileSelect', {
		'fileId': id,
		'fileInfo': fileInfo,
		'returnData': returnData
	});
	
	// pass return value to native API
	return returnData.value;
};

// handle file removal
p.onRemove =function( id, fileInfo) {
	lib.event.trigger( this.elem, 'uploadFileRemove', {
		'fileId': id,
		'fileInfo': fileInfo
	});
};

// handle dialog closure
p.onDialogClose =function() {
	lib.event.trigger( this.elem, 'uploadDialogClose');
};

// handle file uploading start
p.onUploadStart =function( id, fileInfo) {
	lib.event.trigger( this.elem, 'uploadStart', {
		'fileId': id,
		'fileInfo': fileInfo
	});
};

// handle file uploading progress
p.onUploadProgress =function( id, fileInfo, bytesLoaded, bytesTotal, percComplete) {
	lib.event.trigger( this.elem, 'uploadProgress', {
		'fileId': id,
		'fileInfo': fileInfo,
		'bytesLoaded': bytesLoaded,
		'bytesTotal': bytesTotal,
		'percComplete': percComplete
	});
};

// handle file uploading transfer rate
p.onUploadTransferRate =function( id, fileInfo, speed, avgSpeed) {
	lib.event.trigger( this.elem, 'uploadTransferRate', {
		'fileId': id,
		'fileInfo': fileInfo,
		'speed': speed,
		'avgSpeed': avgSpeed
	});
};

// handle file uploading completion, enter server response awaiting state
p.onUploadAwaitingResponse =function( id, fileInfo) {
	lib.event.trigger( this.elem, 'uploadWaitResponse', {
		'fileId': id,
		'fileInfo': fileInfo
	});
};

// handle file uploading error
p.onUploadError =function( id, fileInfo, errorMsg) {
	lib.event.trigger( this.elem, 'uploadError', {
		'fileId': id,
		'fileInfo': fileInfo,
		'errorMsg': errorMsg
	});
};

// handle file uploading success
p.onUploadSuccess =function( id, fileInfo, serverData, filesRemaining) {
	lib.event.trigger( this.elem, 'uploadSuccess', {
		'fileId': id,
		'fileInfo': fileInfo,
		'serverData': serverData,
		'filesRemaining': filesRemaining
	});
};

// handle file uploading completion
p.onUploadComplete =function( id, fileInfo, filesPending, removeFromQueue) {
	lib.event.trigger( this.elem, 'uploadComplete', {
		'fileId': id,
		'fileInfo': fileInfo,
		'filesPending': filesPending,
		'removeFromQueue': removeFromQueue
	});
};

})( EVOLIB_EXPORT, 'uploader', window.fileUploader);