This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration Editor config

<!-- Documentation: https://editorconfig.org -->

Passo a passo da configuração do Editor Config

Etapa 1. Crie um .editorConfig na raiz do projeto
Etapa 2. Passe as configurações de formatação desejadas -> Ler documentação

## Configuration ESlint

<!-- Documentation: https://eslint.org -->

Etapa 1. Rode este comando em seu projeto: npm init @eslint/config@latest
Etapa 2. Por padrão, o next já traz um arquivo .eslint, porém, podemos configurar com nossa escolha -> Ler Documentação
Etapa 3. Instale a extensão no vsCode Eslint

## Configurtion Prettier with ESlint

<!-- Documentation: https://prettier.io -->

Etapa 1. Rode este comando em seu projeto: npm install --save-dev --save-exact prettier
Etapa 2. Um arquivo .prettirrc será criado na raiz, agora é só adicionar os padrões desejados
Etapa 3. Criar o arquivo .prettierignore
Etapa 4. Adicionar os aquirvos que deseja serem ignorados pelo prettier
Etapa 5. Baixar a extensão do prettier
Etapa 6. Criar uma pasta .vscode
Etapa 7. Criar um arquivo settings.json
Etapa 8. Dentro da pasta, colocar esse comando dento de um json: "editor.formatOnSave": true. Para que sempre que salvar o arquivo ele rode o prettier e formate, antes de salvar
Etapa 9. Rodar esse comando no projeto: npm install --save-dev eslint-config-prettier. Esse comando evita conflitos do ESlint com o prettier
Etapa 10. No arquivo .eslintrc, em extends você deve adicionar o "prettier"

## Configurando git hooks

<!-- Documentation (Prettier): https://prettier.io/docs/en/install.html#git-hooks -->
<!-- Documentation: (husky): https://typicode.github.io/husky/get-started.html -->

Bloqueia os commits se existirem algum erro

Etapa 1. Rode este comando no projeto: npm install --save-dev husky lint-staged
Etapa 2. Em seguida usaremos a documentação do husky, e rodaremos este coamndo: npm install --save-dev husky
Etapa 3. Agora rodaremos este comando que criará uma pasta .husky: npx husky init
Etapa 4. Dentro de .husky deve existir um arquivo pre-commit devemos apagar o que tiver dentro dele e adicionar este comando: npx --no-install lint-staged -> Fará com que rode o lint-staged sem fazer a instalação dele, para verificar o que desejar-mos
Etapa 5. Criar um arquivo na raiz, chamado: .lintstagedrc.js
Etapa 6. Usar alguma configurações (Estão salvas neste projeto) -> Isso fará com que os comando prettier --write e npm run lint --fix . rodem em cima de todos os arquivos do projeto

## Configuration jest for test

<!-- Documentation: https://jestjs.io/docs/getting-started -->

Etapa 1. Rode este comando para instalar o jest: npm install --save-dev jest
Etapa 2. Rode este comando: npm install --save-dev @types/jest -> este comando evitará de ter a necessidade de ficar importando coisas do jest
Etapa 3. npm install jest-environment-
Etapa 4. Criar um arquivo jest.config.js
Etapa 5. Passar as configurações desejadas ao rodar os testes unitários
Etapa 6. Passar no package.json, em scripts os seguintes comandos
6.1. "test": "jest --maxWorkers=50%", -> isso faz com que o teste de performace rode mais rápido do que usar apenas o "jest"
6.2. "test:watch": "jest --watch --maxWorkers=25%", -> Faz o mesmo que o de comando acima, porém comm um watch.
6.3. "test:ci": "jest --runInBand" -> Comando a ser usado no ci, pensando em questões de performance
Etapa 7. Criar uma pasta .jest (Se não já estiver criado)
Etapa 8. Criar arquivo setup.ts dentro de .jest
Etapa 9. Usar estes comando dentro do arquivo import '@testing-library/'
Etapa 10: Se estiver usando TS, será necessário adicionar o .jest/setup.ts no include do arquivo tsconfig.json

## Configuration Testing Library

<!-- Documentation: https://testing-library.com/docs/react-testing-library/example-intro -->

Passo a passo da configuração do Testing Library

Etapa 1. Instale a lib em seu projetoto, com os seguintes comandos: npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event
Etapa 2. Se não existir uma pasta ".jest" na raiz do seu projeto, crie uma. Caso tenha, pule para a etapa 4
Etapa 3. Dentro da pasta .jest, você deve criar uma arquivo setup.ts
Etapa 4. Dentro da psta de setup.ts você deve importar o testing library: import '@testing-library/'.
