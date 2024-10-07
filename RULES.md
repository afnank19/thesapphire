# Github Rules

## How to set up your dev environment

(Must have git installed and a github account!)

1. Create a folder where you'd like to keep the project (It is best to keep it separate from your other folders)
2. Open the terminal in that location.
3. Type `git clone https://url-to-our-repos`. This will copy the repository to your local machine.
4. `cd` into the folder that is created.
5. You will be on branch main, change your branch to development by `git checkout development`.
6. `git pull` to pull the latest changes just in case.
7. You can now start developing but please read the dev rules given below.

## Development Rules

1. Never push to the main branch. That will be done after complete consensus of the team.
2. Don't stray away from the branching workflow that is detailed after the dev rules.
3. Don't merge your or others PRs(Pull Requests) without informing the dev team.
4. Follow the branch naming conventions.
5. Be Descriptive in your PRs. Describe what you changed, added or fixed.
6. Before starting working on a new branch make sure to pull the latest changes.

## How to contribute to the repository

1. Go to the github repo and then create a new branch. Make the source to be the development branch.
2. On your local machine, `git checkout development` to be on the dev branch.
3. `git pull` to pull the new branch to your local machine.
4. `git checkout branch-you-just-made` to be on the your desired branch.
5. You can now start working the changes you want to make.
6. Once you are satisfied with your work, you can commit your changes by `git add .` followed by `git commit -m "short-message-on-your-work"`.
7. After commiting the changes, you have to push them to the remote repository. That is done by `git push -u origin head`.
8. You have successfully pushed your changes to github.
9. Now go to the github page, and create a PR(Pull Request). You can so by navigating to the PR tab, clicking on 'New Pull Request' and then choosing the development branch as the left option and your own branch as the right option. The arrow should be pointing to the development branch.
10. Your PR is now created. It will be merged after a review and an OK by the dev team.
11. After a succesful merge, your branch will be deleted.

## Branching conventions

1. Create a new branch for each feature or bug fix. Features can be refactoring, new features, improvements, adding/changing code. Bug fix branches will be created only if you will be working on fixing a bug in that branch.
2. Name you branches by the following convention. 'feature/feature-name' for branches that will come under the feature heading. 'bug/issue-name' for branches that will handle bug fixes.
3. If you are done working on a branch, please create a PR asap so that it can either get merged or closed so other devs can pull the latest changes.
4. You can navigate to the issues tab to create issues that are occuring.
