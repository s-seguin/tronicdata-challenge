# About

Stuart Seguin's Backend Developer Skill Test Submission

Should parse any RSS feed but was intially created for the Mr. Money Moustache blog and then HackerNews front page.

A mongo instance is created on the default port `27017` using the db `blogHeadlines` and the collection `articles`.

## Prompt
```
Backend Developer Skill Test
The purpose of this test is to provide the candidate with an opportunity to show that they can
perform the duties of a backend developer. It is intended to represent a normal, every-day type
task that they may be asked to complete on the job. Nothing tricky. No riddles. Just coding.
We will evaluate the solution with the understanding that the candidate has been limited to 4
hours. The 4 hour limit is not intended to add stress to the candidate, but rather as an effort to
respect their time. We don't want to ruin anyone's weekend.
• Create a public facing Git repository on Github or Gitlab.
• Create a new Node JS project using the most recent version of Node 12.
• Add and commit that project to the git repository above.
• Create a command line tool to fetch and display the 3 most recent headlines from a blog of
your choice.
• Add those headlines, a link to the article, the current date and time to some kind of
permanent storage solution of your choice (database, file, etc..)
• Commit your code occasionally as you go (every 15/30 minutes).
• Pass along a link to the repository for review.
```

## Usage
1. `npm run up` to start db in docker
2. `cd app` to navigate to cmd line tool
3. `npm i` to install dependencies
4. `npm run start` to build and run with default params
5. `npm run start -- --source="https://hnrss.org/frontpage" --limit=10` to specify different source and limits