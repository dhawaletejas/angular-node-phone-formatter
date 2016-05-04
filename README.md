# AngularJS/NodeJS Phone Formatter

This application formats any given input phone number as per its country code. The user may or may not provide the country code since it is optional. The application defaults the phone number to a US country code (+1) in that case. 

## Getting Started

To get you started you can simply clone the egen-fe-challenge repository and install the dependencies:

### Prerequisites

You need git to clone the egen-fe-challenge repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

I have also used few node.js tools to initialize egen-fe-challenge. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone egen-fe-challenge

Clone the egen-fe-challenge repository using [git][git]:

```
git clone https://github.com/dhawaletejas/egen-fe-challenge.git
cd egen-fe-challenge
```

### Install Dependencies

Use npm-install to install required dependencies from npm. I have used a couple of NodeJS modules in this project.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
node app.js
```

Now browse to the app at `http://localhost:8080


## Testing

### Running Unit Tests

I have written unit tests for this application. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. I have provided a Karma configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found in the tests directory.
