---
title: Releasing patch update
---
To release a patch update, without messing with Git too much:

1. If there is not a branch for patch release, make a branch cut from the latest stable version's bump commit. (Go to master on local git, then run `git branch v1.xx.x COMMIT`
2. Bump to v1.xx.1-prerelease, commit, and push to v1.xx.x GitHub branch.
3. Make a new branch **from the v1.xx.x branch**. This should be as easy as running `git switch v1.xx.x` then `git switch -c work`.
4. Make changes and commit.
5. Push to your fork on GitHub.
6. Make a pull request **against this org's v1.xx.x branch**.
7. Merge the pull request.
8. If you want to cherry-pick existing commit from master, now is the last chance.
9. **Make a new branch from v1.xx.x branch on this org's GitHub** like `v1.xx.x-master`.
10. Make a pull request **FROM v1.xx.x-_master_ TO master**.
11. Merge the pull request. v1.xx.x-_master_ branch can now be deleted.
12. If there is a string change, **run the GitHub Actions on _master_**. NEVER RUN ON OTHER BRANCHES.
13. Merge the translation update pull request.
14. Wait until translations are ready.
15. Run `git switch v1.xx.x` and `git pull origin v1.xx.x` on your local environment.
16. On your local environment, on `v1.xx.x` branch, manually bring the translations and commit.
17. On your local environment, on `v1.xx.x` branch, bump to v1.xx.1 and commit.
18. Run `git push origin v1.xx.x`.
19. **The v1.xx.x branch is now ready for use.**

## Why hyphen-master branch?
This branch is used to prevent merge conflict fixes from accidentally leaking into v1.xx.x branch.

## Why run translation jobs on master?
Because existing translations added on master gets removed when you push from other branches. Also, this makes sure you do not accidentally push half-a-year-old strings.

## Any simpler way?
If the master branch does not contain any changes that are problematic to be added in patch release (e.g. just after the major version release), you can simply revert to 1.xx.x prerelease, merge necessary commits, do translation as usual and mark as v1.xx.x.
