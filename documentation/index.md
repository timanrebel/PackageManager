# PaclageManager Module

Appcelerator Titanium module to check whether or not a package is install or an intent is available on Android

The module is licensed under the MIT license.

## Referencing the module in your Titanium Mobile application ##

Simply add the following lines to your `tiapp.xml` file:

```xml    
    <modules>
        <module platform="android">nl.rebelic.packagemanager</module> 
    </modules>
```

## Example

Check whether a package is installed:

```javascript
	var packageManager = require('nl.rebelic.packagemanager');
	Ti.API.info("module is => " + packageManager);

	var packageName = 'com.snowciety.app';
	Ti.API.info('Is '+packageName+' installed? ' + packageManager.isPackageInstalled(packageName));
```

Check whether an intent is available:

```javascript
	var packageManager = require('nl.rebelic.packagemanager');
	Ti.API.info("module is => " + packageManager);

	var twitterIntent = Ti.Android.createIntent({
		action: Ti.Android.ACTION_SEND,
		type: 'application/twitter'
	});
	twitterIntent.putExtra(Ti.Android.EXTRA_TEXT, 'What a great module! http://github.com/Rebelic/PackageManager');

	Ti.API.info('Is Twitter intent available? ' + packageManager.isIntentAvailable(twitterIntent));
```