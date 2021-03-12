import {transliterate as tr, slugify} from 'transliteration'

export default function calculate(appName: string, branchName: string): string {
  let deploymentName = `${appName.toLowerCase()}-${branchName.toLowerCase()}`

  deploymentName = deploymentName.substring(0, 50)
  deploymentName = tr(deploymentName)
  deploymentName = slugify(deploymentName, {
    allowedChars: '-a-z0-9',
    trim: true
  })

  return deploymentName.replace(/^-+/, '').replace(/-+$/, '')
}
