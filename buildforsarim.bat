call cordova build --release android
call cd platforms/android/build/outputs/apk
call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name
call C:\Users\sarimj\AppData\Local\Android\sdk\build-tools\19.1.0\zipalign -v 4 android-release-unsigned.apk Almandi4.4.2.apk