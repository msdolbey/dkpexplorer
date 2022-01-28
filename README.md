# KonvoyExplorer
Table of Contents

[Intro](https://github.com/msdolbey/dkpexplorer#intro)

[Tech Stack](https://github.com/msdolbey/dkpexplorer/blob/main/README.md#tech-stack)

[Installation](https://github.com/msdolbey/dkpexplorer/blob/main/README.md#installation)

[Contribute](https://github.com/msdolbey/dkpexplorer/blob/main/README.md#contribute)

[Makers](https://github.com/msdolbey/dkpexplorer/blob/main/README.md#makers-of-gitexplorer)

[RoadMap](https://github.com/msdolbey/dkpexplorer/blob/main/README.md#roadmap)

### Intro
At a D2iQ Hackathon, we came across git explorer: [Click to find the right git commands without digging through the web.](https://gitexplorer.com). This was based on [Sarah Drasner's array explorer](https://github.com/sdras/array-explorer). It is a really cool resource for anyone to easily figure out the best JS array method to use. We loved it and decided to build something similar for Konvoy. And now DKP.

Explore and Enjoy! 

### Tech Stack

- React
- Netlify

### Installation

```
yarn (Install all dependencies)

yarn start
```

To try DKPExplorer in a docker container, run this:

```
docker-compose up
```

### Contribute

Thank you for contributing to DKPExplorer!

Please follow the below instructions to send a Pull Request (Search the website to make sure that this command doesn't already exist).

The data folder (inside the src directory) is where you will be operating from. The three files you should be concerned with are the `primary-options.js`, `secondary-options.js` and `tertiary-options.js` files. 

These three files are responsible for the options a user can pick. 

`primary-options.js` contains an array of objects responsible for the options of the first select box. 
`secondary-options.js` contains an object. This object houses an arrays of objects (a mouthful :smile:), this is responsible for the second set of options a user sees when they select a primary option. 
`tertiary-option.js` file is responsible for cases where there needs to be a third & final select box.

###### Steps to add a new command

1.  Please ensure you are not on the main branch. Checkout to a new branch entirely.

1.  Add an object to the array in the `primary-options.js` file. Sample Format:

    ```
    { value: 'show', label: 'show/view' }
    ```

1.  Add an array to the `secondary-options` file. Sample Format:

    ```
    show: [
        {
          value: 'repo-status',
          label: 'status of project including staged, unstaged and untracked files',
          usage: 'git status'
          nb: 'To know about this command, "run git status --help"'
        },
        {
          value: 'logs',
          label: 'commit logs/history'
        },
    ```
  
    The `nb` is optional. It is responsible for what the user sees in the notes section. 

    `\n` is used to insert newline.
  
1.  To add tertiary options, remove the `usage` and `nb` key/value pair for that command in the `secondary-options.js` file e.g..
  
    ```
    show: [
        {
          value: 'logs',
          label: 'commit logs/history'
        },
   ```

   then supply `tertiary-options.js` file the necessary data e.g.

   ```
   logs: [
     {
       value: 'all',
       label: 'all',
       usage: 'git log',
       nb: 'Type q in the terminal to exit the logs'
     },
     {
       value: 'last-n-commit',
       label: 'for last xxx number of commits',
       usage: 'git log -n',
       nb: 'Replace n with number of commits e.g. git log -2'
     },
     {
       value: 'particular-period',
       label: 'since a particular period',
       usage: 'git log --since=period',
       nb: 'Replace period with intended timeframe e.g git log --since=3days. You can use dates like 2018-12-31.\n\n Similar flags are --until, --before, --after'
     }
   ]
   ```

1.  Once you are done, add, commit, push and create a PR to Master.

### Makers of GitExplorer

KonvoyExplorer is based on GitExplorer which is made by the awesome devs and designer at [Summitech](https://summitech.ng)

### Roadmap

Update everything to DKP
Add the ability to add as many flags as possible
Think about a way to not allow people to use conflicting flags that are not allowed in the product.

