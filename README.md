# Github Commits

A simple mobile app used to show a list of commits from a particular repository

<br/>

## Prerequisites

To follow this guide you should have access to either an [iOS simulator](https://developer.apple.com/xcode/resources) or an [Android emulator](ahttps://developer.android.com/studio). Although you could run the application on a real device, this guide advises the use of a virtual device.

Another requirement for this app is have a running instance of the following [server](https://github.com/romedu/github-commits-api) on port 3000. For this current process [Node.js 10 or higher](https://nodejs.org) is required as well.

<br/>

## Installation

Clone the repository:

```sh
$ git clone https://github.com/romedu/github-commits.git
```

Install the dependencies:

```sh
$ cd github-commits
$ npm install
```

<br/>

## Running the app through the expo Metro Bundler

After the completing the installation process, you should be able to run the app using the following command:

```sh
$ npm start
```

That command should open the expo Metro Bundler, in which you will have the option to run the application on your preferred device.

**Note:** If for some reason your simulator/emulator is not opening automatically after clicking on the respective option, we suggest that you open the virtual device manually and then retry to run the app.

<br/>

## Running the app directly on the iOS Simulator

You can open the application directly on the simulator with the following command:

```sh
$ npm run ios
```

**Note:** If for some reason your simulator is not opening automatically, we suggest that you open the virtual device manually and then retry to run the app.

<br/>

## Running the app directly on the Android Emulator

You can open the application directly on the emulator with the following command:

```sh
$ npm run android
```

**Note:** If for some reason your emulator is not opening automatically, we suggest that you open the virtual device manually and then retry to run the app.

<br/>

## Tip

To get the next page of commits you should scroll all the way down, and pull to refresh.
