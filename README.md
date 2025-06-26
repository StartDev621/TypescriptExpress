How to initialize typescript project
This guide explains how to initialize and configure a typescript project from scratch.

Step 1: Initialize Project
npm init -y or npm init

Step 2: Install devDependencies
npm install -D typescript ts-node
npm install @types/node

Step 3: Create Typescript Config
npx tsc --init
Then create tsconfig.json with:
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

Step 4: Set Project Structure
Step 5: Run the typescript file
ts-node main.ts

Additional information
Use @types/ packages for Typescript type support
Use npx tsc to transpile .ts files to .js files