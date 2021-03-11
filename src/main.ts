import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const appName = core.getInput('app-name')
    const branchName = core.getInput('branch-name')
    let deploymentName;

    //TODO: Do some magic here!
    deploymentName = ''
    
    core.setOutput('name', deploymentName)
}

run()
