# Slug Path - Landing Page

> A degree planner for UCSC students

## About

UCSC currently does not have an interactive and aesthetically pleasing degree
planner that provides basic validation for academic plans. Our aim with this
project is to meet that demand in the student body, starting with the CSE
department.

This repository is the landing page, which includes the basic features of the
main SlugPath webapp.

## Getting started

```
git clone git@github.com:SlugPath/Landing-Page.git
pnpm install
```

Make sure to create a `.env` file containing the necessary env variables (look at [.sample.env](./.sample.env) to see what variables need defining).

Then, start the development server using the following command:

```
pnpm dev
```

Et Voilà! The app should be running on `localhost:3001`.

## Contributing

After downloading the project files and the dependencies make sure to install
the necessary GitHooks for linting and formatting with

```
pnpm prepare
```

> To add your own Git Hooks beyond formatting or linting refer
> [here](https://typicode.github.io/husky/).

## Deployment

We use Vercel to deploy as it is the most convenient way to deploy a Next.js
application.

## Built With

- [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/) + [TailwindUI template Salient](https://tailwindui.com/templates/salient)

## License

This project is licensed under the MIT License - see the
[LICENSE](./LICENSE) file for details
