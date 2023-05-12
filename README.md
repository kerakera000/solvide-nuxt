# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

大雑把な説明卍
css => assets/css/style.cssを読み込み

componets => ページのdomなど & 共通して使うようなパーツ
componetsの構造(例：components/about/CompAbout)

layout => 大枠の共通部品をまとめる箇所header,footer,sidebar等(まとめるだけでdomはcomponentにあるけどね)
layout構造例

<!-- <template>
    <div>
        <Header/>
        <slot/>
        <Footer>
    </div>
</template> -->


