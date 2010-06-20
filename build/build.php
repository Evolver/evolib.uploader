<?php
// Author: Dmitry Stepanov <dmitrij@stepanov.lv>
// URL: http://www.stepanov.lv
// Sun Dec 20 21:00:07 GMT 2009 21:00:07 build.php

// where to take source files from
define( 'SOURCE_ROOT', dirname( __DIR__) .'/');

// compile library file
function lib_file( $path) {
  return file_get_contents( SOURCE_ROOT .'lib/' .$path);
}

// Library package builder

$authorNote =<<<NOTE
/**
 * Evolib Uploader - extension to Evolver's JavaScript library.
 * http://github.com/Evolver/evolib.uploader
 *
 * Copyright (C) 2010 Dmitry Stepanov <dmitrij@stepanov.lv>
 * URL: http://www.stepanov.lv
 *
 * Publicly available for non-commercial use under GPL v2 license terms.
 *
 * Includes File-Uploader - Evolver's file uploading script.
 * http://github.com/Evolver/File-Uploader
 *
 * Copyright (C) 2010 Dmitry Stepanov <dmitrij@stepanov.lv>
 * URL: http://www.stepanov.lv
 *
 * Publicly available for non-commercial use under GPL v2 license terms.
 */

NOTE;

file_put_contents( __DIR__ .'/evolib.uploader.js',
	$authorNote .
	lib_file( 'fileUploader/fileUploader.dependency.js') ."\n\n" .
	lib_file( 'fileUploader/fileUploader.core.js') ."\n\n" .
	lib_file( 'fileUploader/fileUploader.Uploader.js') ."\n\n" .
  lib_file( 'fileUploader/fileUploader.evolib.js') ."\n\n" .
  lib_file( 'uploader.js')
);

?>