Here’s the process to create a new MERN-Stack project that starts with the infrastructure code:

1. Clone the mern-infrastructure repo: git clone {url of mern-infrastructure} {name-of-project} [^1]
[^1]:Note that the folder created will be same as {name-of-project} instead of mern-infrastructure

2. cd {name-of-project}

3. Install the Node modules: npm i

4. Create a .env (touch .env) and add entries for DATABASE_URL and SECRET

5. Update the "name": "mern-infrastructure" in package.json to the name of your project. Also update the title in the public/index.html

6. Create a new repo on your personal GH account.

7. Copy the new GH repo’s URL.

8. Update the remote’s URL: git remote set-url origin {paste the copied GH url}

9. Make the initial commit: git add -A && git commit -m "Initial commit"

10. Push for the first time: git push -u origin main

Have fun coding your new project and don’t forget to make frequent commits!
