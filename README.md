### Getting Started
- Clone the repo: `git clone https://github.com/kathrynherod/gitTutorial.git`
- Navigate into the project folder: `cd gitTutorial`
- If you have npm and node installed, I've added browser sync, which will automatically refresh the browser when you save changes
    - To install node modules: `npm install`
    - To start the project: `npm start`
    - Browser sync will open `index.html` in your default browser
- If you don't have npm and node, no worries, just navigate to your browser and open `index.html` from within the project folder.

### Working on the project
- Choose an item from the to-do list
- Create a feature branch based on master
    - `git checkout master`
    - `git pull`
    - Then you will create a feature branch. Let's pretend the to-do list numbers are ticket/issue numbers. So if you are choosing to-do item 1, you will do:
        - `git checkout -b item1`
    - After you are ready to submit your changes, add and commit your changes, locally
    - Then `git checkout master`
    - `git pull`
    - `git checkout -` goes to your previous branch before current
    - `git rebase master`
    - deal with any merge conflicts
    - `git push -u origin <your branch name>`
    - Create a pull request

### Project To-Do List

- [x] Create repo and base files
- [x] Create HTML skeleton, add Bootstrap, custom CSS, and custom JS
- [ ] 1. Add About Section to Collapsible Header
- [ ] 2. Add Social Networking to Collapsible Header
- [ ] 3. Add left branding to Navbar
- [ ] 4. Add right button to Navbar
- [x] 5. Add Jumbotron Content to Jumbotron `<section>`
- [ ] 6. Add Footer Content to `<footer>` tag
- [ ] 7. Add Modal
- [ ] 8. Add two cards with photos and text (make sure to update the `<img src="">` and `<p class="card-text">`)
- [ ] 9. Add two cards with photos and text (make sure to update the `<img src="">` and `<p class="card-text">`)
- [ ] 10. Add two cards with photos and text (make sure to update the `<img src="">` and `<p class="card-text">`)
- [ ] 11. Add two cards with photos and text (make sure to update the `<img src="">` and `<p class="card-text">`)
- [ ] 12. Add two cards with photos and text (make sure to update the `<img src="">` and `<p class="card-text">`)
- [ ] 13. Add two cards with photos and text (make sure to update the `<img src="">` and `<p class="card-text">`)
