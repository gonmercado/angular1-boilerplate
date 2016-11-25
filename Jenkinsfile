#!groovy
// ------------------------------------------------------------------------------------
// IMPORTANT:
// ------------------------------------------------------------------------------------
// Every change done to this file should follow these standards
// - Make every step efficient. If the job's full time exceeds 25 minutes, it should be
//   refactored and steps parellelized
// - If you are planning to make add/remove stages, be sure is the right way to go as
//   it will cause the whole history of jobs to stop showing up in the jenkins
// - Allways add comments that will help future people understand and maintain
//   your code
// ------------------------------------------------------------------------------------

branchDevelopment='development'
branchRelease='release'
branchMaster='master'
branchesWithAutomatedTests=[branchDevelopment,branchRelease,branchMaster]

// ------------------------------------------------------------------------------------
// General job properties
properties([[
  $class: 'GitLabConnectionProperty',
  gitLabConnection: 'qnap-gitlab-gonmercado'
]])

node (){
  // ------------------------------------------------------------------------------------
  // Update files from Git repository
  stage ('Checkout') {
    checkout scm
    sh 'git submodule update --init'
  }
  // ------------------------------------------------------------------------------------
  // Prepare the environment to have the propper tools and clean folders
  stage ('Environment Preparation') {
    def nodeHome = tool name: 'NodeJS 4.6.2', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"
    sh 'npm prune --no-color'
    sh 'npm install --no-color'
    sh 'bower install'
    sh 'grunt clean:gruntReports'
    sh 'grunt clean:app'
    sh 'grunt clean:frameworks'
  }
  // ------------------------------------------------------------------------------------
  // Creates coverage and linting reports
  stage ('Sanity Reports Generation') {
    //Running UT to generate coverage report
    sh 'grunt karma:coverage --force'
    //Running lints
    sh 'grunt eslint:xmlReport --force'
    //step([
    //  $class: 'hudson.plugins.checkstyle.CheckStylePublisher',
    //  pattern: 'karma_reports/eslint/eslint.xml',
    //  unstableTotalAll: '0',
    // usePreviousBuildAsReference: true
    //])
  }
  // ------------------------------------------------------------------------------------
  // Minimization process, will genereta one app.js (source code), framework.js (third party libs), app.css (application css files.)
  // and will ofuscate, the js files to reduce size and avoid code stealing.
  // This will also replace index with the minimized version, and add the no cache functionality.
  stage ('Minimization process') {
    sh 'grunt concat:frameworks'
    sh 'grunt concat:cssFrameworks'
    sh 'grunt concat:app'
    sh 'grunt concat:css'
    sh 'grunt uglify:app'
    sh 'grunt copy:generateIndexNonMin'
    sh 'grunt processhtml:indexFile'
    //sh 'grunt replace:app'
  }
  // ------------------------------------------------------------------------------------
  // Unit tests using karma.
  stage ('Unit Tests run') {
    sh 'grunt karma:min --force'
    step([
      $class: 'NUnitPublisher',
      testResultsPattern: "grunt_reports/karma/xml/**/*.xml",
      debug: false,
      keepJUnitReports: false,
      skipJUnitArchiver:false,
      failIfNoResults: true
    ])
  }
}
