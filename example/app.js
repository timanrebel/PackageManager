var packageManager = require('nl.rebelic.packagemanager');
Ti.API.info("module is => " + packageManager);

// test isPackageInstalled
var packageName = 'com.snowciety.app';
Ti.API.info('Is '+packageName+' installed? ' + packageManager.isPackageInstalled(packageName));

// test isIntentAvailable
var twitterIntent = Ti.Android.createIntent({
	action: Ti.Android.ACTION_SEND,
	type: 'application/twitter'
});
twitterIntent.putExtra(Ti.Android.EXTRA_TEXT, 'What a great module! http://github.com/Rebelic/PackageManager');

Ti.API.info('Is Twitter intent available? ' + packageManager.isIntentAvailable(twitterIntent));