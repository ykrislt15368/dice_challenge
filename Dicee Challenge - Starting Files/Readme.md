# platform-child-app-template-ui
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).This repository contains the basic template of Next.js child App.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Major Issues
If you want a child template remote repo in your newly created child app repo, first make sure you have a newly created child app repo and also have access to it. Otherwise, create a TechOps ticket by contacting the product owner or scrum master of your POD. In the ticket description, mention these points: child app repo name approved by front-end leads; read and write access for your child repo and child template remote repo from Devops.

## Create your child repo from child template remote with CLI
The prerequisites for this option are the workspace ID, repository URL for duplication, and the new repository URL. Follow up with devops team for workspace ID, sometimes we have permission to only view workspace not workspace ID. Please follow the following steps:
  1. Clone the bare repository you want to duplicate locally:
     1. Using HTTPS:
      ```javascript
       git clone --mirror https://<username>@bitbucket.org/<WorkspaceID>/<RepoName>.git
      ```
     2. Using SSH:
      ```javascript
       git clone --mirror git@bitbucket.org:<WorkspaceID>/<RepoName>.git
      ```
  2. Create the duplicate repository placeholder in your destination workspace and save the URL.
  3. Navigate to the cloned bare repository on your local machine via CLI
  4. Perform a mirror push to the new repository in the destination workspace:
     1. Using HTTPS:
      ```javascript
       git push --mirror https://<username>@bitbucket.org/<WorkspaceID>/<RepoName>.git
      ``` 
     2. Using SSH:
      ```javascript
       git push --mirror git@bitbucket.org:<WorkspaceID>/<RepoName>.git
      ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
