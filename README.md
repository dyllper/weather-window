# Weather Window

## Welcome to Weather Window!

This is a simple application that makes use of a web browser's Geolocation API to retrieve the latitude and longitude values for where the user is at, then uses those coordinates in combination with the [Open Weather Map API](https://openweathermap.org/api) to retrieve the current weather for the location as well as a 5 day forecast.

## Why did I make this app?

The inspiration for this application came from seeing several posts about "glassmorphism" for web design. I really liked the look of the frosty glass effect and wanted to use it for something, and I've wanted to play around with making a simple weather app for a while so it seemed like the perfect fit! I also wanted to get a little practice using Styled Components and Framer Motion, so a simpler app like this one seemed like a great opportunity to test the waters with those packages.

## Known Issues

There are a few issues I know exist with this application.

1. This application is not responsive at all. I designed it with only a desktop version in mind. Given that this was never meant to be a test of styled components and framer motion rather than a full featured web application, I decided to just leave it as is. I may update it to be responsive in the future, but for the moment there are no plans for this.
2. The fact that the application requires access to the browser's geolocaiton API could be considered an issue. There are many users that may not feel comfortable allowing this site to have that kind of access to their personal information, and if that's the case then they cannot make use of the app. Unfortunately, due to limitations with the free tier API options provided by Open Weather Map, it wasn't feasible for me to add in an alternative option without having to put in far more effort into this than a simple test app warranted. This is also a candidate for something to add if I ever decide to update this application in the future.
