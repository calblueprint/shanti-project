# Shanti Project

This project is designed and developed by a team of UC Berkeley students through one of [Cal Blueprint](https://calblueprint.org/)'s project teams during the 2022-23 academic year.

Learn more about [Shanti Project](https://www.shanti.org/) and [Cal Blueprint](https://calblueprint.org/).

---
## Getting Started

Check your installation of npm and node:

```sh
node -v
npm -v
```
We strongly recommend using a Node version manager like [nvm](https://github.com/nvm-sh/nvm) (for Mac) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (for Windows) to install Node.js and npm. See [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
### Installation

1. Clone the repo & install dependencies
   1. Clone this repo
      * using SSH (recommended)
         ```sh
         git clone git@github.com:calblueprint/shanti-project.git
         ```
      * using HTTPS
         ```sh
         git clone https://github.com/calblueprint/shanti-project.git
         ```
   2. Enter the cloned directory
        ```sh
        cd shanti-project
        ```
   3. Install project dependencies. This command installs all packages from [`package.json`](package.json).
      ```sh
      npm install
      ```
2. Set up secrets:
   TBD

**Helpful resources**

* [GitHub: Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository)
* [GitHub: Generating SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
### Development Environment

- **[VSCode](https://code.visualstudio.com/) (recommended)**
  1. Open the `shanti-project` project in VSCode.
  2. Install recommended workspace VSCode extensions. You should see a pop-up on the bottom right to "install the recommended extensions for this repository".
### Running the app
1. In the project directory, run:
   ```shell
    npm run dev
   ```
2. Open up [http://localhost:3000](http://localhost:3000) in your browser to see the results.
