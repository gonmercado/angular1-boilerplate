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
}
