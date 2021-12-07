I run the following command to build/submit:

```
GITHUB_RUN_NUMBER=10 eas build --platform ios --auto-submit
```

The output from debug logging in app.config.js is 
```
Dynamic Config: {
  name: 'build-num-bug',
  slug: 'build-num-bug',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: { fallbackToCacheTimeout: 0 },
  assetBundlePatterns: [ '**/*' ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.cyclops23.buildnumbug',
    buildNumber: '10'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    }
  },
  web: { favicon: './assets/images/favicon.png' },
  _internal: {
    isDebug: false,
    projectRoot: '/code/scratch/bug-repro/build-num-bug',
    dynamicConfigPath: '/code/scratch/bug-repro/build-num-bug/app.config.js',
    staticConfigPath: '/code/scratch/bug-repro/build-num-bug/app.json',
    packageJsonPath: '/code/scratch/bug-repro/build-num-bug/package.json'
  },
  description: undefined,
  sdkVersion: '43.0.0',
  platforms: [ 'ios', 'android', 'web' ]
}
```

The [submission log](https://expo.dev/accounts/cyclops23/projects/build-num-bug/submissions/396ac1e3-af3a-4c9f-88ea-4f65d251412c) shows fastlane is sending buildNumber 1

```
ERROR ITMS-90189: "Redundant Binary Upload. You've already uploaded a build with build number '1' for version number '1.0.0'. Make sure you increment the build string before you upload your app to App Store Connect. Learn more in Xcode Help (http://help.apple.com/xcode/mac/current/#/devba7f53ad4)."
```
