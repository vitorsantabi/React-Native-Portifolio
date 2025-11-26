# Portfolio App - React Native

Este é um aplicativo de portfólio pessoal desenvolvido com **React Native** e **Expo**. O objetivo deste projeto é demonstrar habilidades em desenvolvimento mobile, criando uma interface moderna e interativa para apresentar projetos e informações de contato.

## Funcionalidades

- **Home**: Apresentação pessoal com foto, breve descrição e links para redes sociais.
- **Projetos**: Seção dedicada para listar e detalhar os projetos desenvolvidos (Em construção).
- **Contato**: Links diretos para Email, LinkedIn, GitHub e X (Twitter).
- **Design**: Interface com efeitos de blur (vidro), animações e layout responsivo.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction) (Navegação baseada em arquivos)
- [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur/)
- [Ionicons](https://icons.expo.fyi/)

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o app:

   ```bash
   npx expo start
   ```

3. Escaneie o QR Code com o aplicativo **Expo Go** no seu celular (Android ou iOS) ou execute em um emulador.

## Estrutura do Projeto

O projeto utiliza o roteamento baseado em arquivos do Expo Router:

- `src/app/index.tsx`: Tela inicial (Home).
- `src/app/projetos.tsx`: Tela de projetos.
- `src/app/_layout.tsx`: Configuração global do layout e navegação.
