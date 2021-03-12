// shows how the runner will run a javascript action with env / stdout protocol
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import * as core from '@actions/core'
jest.mock('@actions/core')
const mockedCore = core as jest.Mocked<typeof core>

test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '500'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
  expect(mockedCore.getInput).toHaveBeenCalledWith('app-name')
  expect(mockedCore.getInput).toHaveBeenCalledWith('branch-name')
})
