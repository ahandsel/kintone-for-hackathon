## Repo Usage

How to open the slides locally:

1. `git clone`
1. `npm install`
1. `npm run dev`

* Slide deck: <http://localhost:3030/>
* Presenter mode: <http://localhost:3030/presenter/>

How to deploy on GitHub Pages:

1. Modify [deploy.yml](.github/workflows/deploy.yml) file to use your repo name - [Sli.Dev HelpDoc](https://sli.dev/guide/hosting.html#github-pages)
1. Commit changes to `main` branch
1. From your GitHub Repo page: Repo `⚙️ Settings` > `Pages` > `Build and deployment` > `Branch`, select `gh-pages` and `/root`
1. Click on `Save`!
1. Finally, after all workflows is executed, a link to the slides should appear under Setting > Pages
