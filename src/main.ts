import * as core from '@actions/core'
import calculate from './calculate'

async function run(): Promise<void> {
  try {
    const appName = core.getInput('app')
    const branchName = core.getInput('branch')
    const deploymentName = calculate(appName, branchName)

    core.debug('Successfully calculated deploymentName')
    core.info(`Exporting DEPLOYMENT_NAME=${deploymentName}`)
    core.exportVariable('DEPLOYMENT_NAME', deploymentName)
    core.setOutput('name', deploymentName)
  } catch (error: unknown) {
    core.setFailed(error as Error)
  }
}

run()
