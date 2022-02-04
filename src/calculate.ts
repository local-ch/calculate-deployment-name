import {transliterate as tr, slugify} from 'transliteration'

export default function calculate(appName: string, branchName: string): string {
  // we want to have a limit of max 52 characters for deployment name (dictated by the limit of some k8s services (like CronJobs))
  // setting here to 47 to account for stage prefix ('stg-' or 'prd-')
  const deploymentName = slugify(
    tr(`${appName.toLowerCase()}-${branchName.toLowerCase()}`.substring(0, 47)),
    {
      allowedChars: '-a-z0-9',
      trim: true
    }
  )

  return deploymentName.replace(/^-+/, '').replace(/-+$/, '')
}
