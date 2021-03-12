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
- uses: local-ch/calculate-deployment-name-action@v1
  with:
    app: ${{github.event.repository.name}}
    branch: ${{ github.head_ref }}
```
