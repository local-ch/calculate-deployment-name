import * as core from '@actions/core'
import calculate from './calculate'

async function run(): Promise<void> {
  try {
    const appName = core.getInput('app-name')
    const branchName = core.getInput('branch-name')
    const deploymentName = calculate(appName, branchName)

    core.debug('Successfully calculated deploymentName')
    core.info(`Setting output 'name' to ${deploymentName}`)
    core.setOutput('name', deploymentName)
  } catch (error) {
    core.setFailed(error)
  }
}

run()
