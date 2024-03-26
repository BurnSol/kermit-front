## Getting Started with $BURN service

Run the development server:

```bash
yarn install

yarn dev
```

## Domain configuration

```bash
dig _github-pages-challenge-BurnSol.burnsol.ai +nostats +nocomments +nocmd TXT

dig burnsol.ai +noall +answer -t A
```