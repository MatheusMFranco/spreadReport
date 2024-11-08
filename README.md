# Spread Report

This is a cypress project to run e2e tests for my other projects.

## How to run
```bash
npx cypress open
```

## How to add new cases
Inside the `cypress/e2e` folder, add your tests in the `${project-name}.spec.cy.js` file.
Then, run:
```bash
git add .
npx cz
```
The scope is the `${project-name}`.
### Example:
- **File**: genus-teach-post.spec.cy.js
- **Scope**: genus-teach-post
The commit will render something like that: `feat(genus-teach-post): add Best Practices e2e tests`

![Phantom](https://i.pinimg.com/originals/4d/4e/aa/4d4eaa646cd0bcfbff8105fc1ad56240.gif)
