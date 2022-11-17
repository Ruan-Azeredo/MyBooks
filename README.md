# MyBooks

  Esta é uma aplicação que consiste num sistema onde o usuario, leitor, vai poder registar suas resenhas e reflexões que teve ao longo da leitura de um livro.
  
  Para tal, este sistema possui primeiramente um formato de cadastro utilizando o firebase, que permite ao usuario se logar a partir de sua conta do google. Caso o sistema identifique que o email do usuario já é compativel com um ussuario exixtente, ele valida o ususario para abrir a conta do mesmo. Caso o usuario ainda não exista, será criada uma nova conta e entrará no sistema.
  
  Ao entrar no sistema, o usuario podera cadastrar seus autores preditelos, e dentro destes autores, cadastrar seus livros pertencentas a cada autor, e em cada livro escrever resenhas, que são justamente as ideias do usuario que ele quer guardar e ter acesso de forma facil e rapida.
  
  Esta aplicação se comunica com o Back-end desenvolvido em node que se encontra em https://github.com/Ruan-Azeredo/MyBooks-Backend.
  
 ----------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
