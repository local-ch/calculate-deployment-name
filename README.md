# Calculate Deployment Name

Github Action to unify and centralize calculating deployment names for all
github actions.

## Motivation

To prevent every author of every application that uses github actions, to copy
the line where we calculate the deployment name across several files, we decided
to use a centralized approach, so all applications will work with the same
pattern of deployment names, no matter what stack they're written in.

## Usage

Basic:

```yaml
- uses: local-ch/calculate-deployment-name-action@v2
  id: calculate-deployment-name
  with:
    app: ${{github.event.repository.name}}
    branch: ${{ github.head_ref }}
```

This action export `DEPLOYMENT_NAME` as variable, and could be used anywhere as any other variable with `$DEPLOYMENT_NAME`
Because we have cases like `customer-apps` where we have multiple apps needed to be deployed and their deployment name has to be calculated in same job, there is option to use output of step where you calculate deployment name.

Example: `${{steps.step_id.outputs.name}}`, or if you had action defined like in top example, then you type `${{steps.calculate-deployment-name.outputs.name}}`, because step_id is `calculate-deployment-name`
