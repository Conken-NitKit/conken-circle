## アーキテクチャ

### コンポーネントのフォルダ構成

```
.
├- components // 汎用的なコンポーネント
|    └ Component1
|        ├- index.ts
|        ├- hooks.tsx
|        ├- Component1.tsx
|        └- Container1 // コンポーネントを構成するコンテナ
|             ├- index.ts
|             └- Container1.tsx
|             └- Component1 // コンテナを構成する部品
|                  ├- index.ts
|                  └- Container1.tsx
|
├- domains // ドメインを構成するコンポーネント
|    └ Domain1
|        | index.ts
|        ├- hooks.tsx
|        ├- Component1.tsx
|        └- Container1 // コンポーネントを構成するコンテナ
|             ├- index.ts
|             └- Container1.tsx
|             └- Component1 // コンテナを構成する部品
|                  ├- index.ts
|                  └- Container1.tsx
|
└ pages // ページを構成
    ├- _app.tsx // 全ページで必要な共通処理を定義
    ├- _documents.tsx // <Html> <Head /> など共通レイアウトを定義
    └- Domain1.tsx // 各ドメインをページとして定義
```

#### 各コンポーネントの index.ts 内の処理

```ts
export { Component1 } from "./Component1";
```

#### pages ディレクトリで定義される、 Domain ファイル内での処理

```ts
export { Domain1 as default } from "domains/Domain1";
```

### レイヤー設計

Firebase や DiscordAPI とのやりとりを各ドメインのコンポーネント側で意識する必要がない様に **「レイヤードアーキテクチャ」** を採用。
構成は以下の通りである。

- entity: プロダクトで扱うドメインの型定義
- usecase: UI(コンポーネント側)から実際に呼び出される関数を定義
- gateway: 実際に API 経由でデータの入出力を行う処理の実装を定義（ pages/\_app.tsx から呼び出す）
- infrastructure: API を呼び出すために必要な前処理（クライアントの用意）

```
.
└ lib
    ├- interface // 各レイヤーのinterfaceを定義
    |    ├- gateway
    |    |    └- SampleGateway.ts
    |    |
    |    └- infrastructure
    |         └- SampleClient.ts
    |
    ├- entity // モデルの型定義
    |    ├- index.ts // 汎用的なモデル
    |    └- domain1.ts // 特定ドメイン内のみで使われるモデル
    |
    ├- gateway // 実際にAPI経由でデータの入出力を行う処理の実装を定義（ pages/_app.tsx から呼び出す）
    |    ├- SampleGateway1.ts
    |    └- SampleGateway2.ts
    |
    ├- usecase // UI(コンポーネント側)から実際に呼び出される関数を定義
    |    ├- SampleUsecase1.tsx
    |    └- SampleUsecase2.tsx
    |
    ├- infrastructure // APIを呼び出すために必要な前処理（クライアントの用意）
    |    ├- SampleClient1.ts
    |    └- SampleClient2.ts
    |
    └- context.ts // contextをパッケージ化（ pages/_app.tsx から呼び出す）
```

#### 参考にした記事

- ディレクトリ構成図を書くときに便利な記号
  - https://qiita.com/paty-fakename/items/c82ed27b4070feeceff6
- web フロントエンドから webAPI を呼び出すのを wrap するアレの名前
  - https://nekogata.hatenablog.com/entry/2019/06/30/211904
- React で作る中規模 SPA のレイヤードアーキテクチャ
  - https://www.gixo.jp/blog/16133/
- フロントエンドで Clean Architecture を適用してみる(+サンプルコード)
  - https://qiita.com/ttiger55/items/50d88e9dbf3039d7ab66
- Firebase をフロントエンドから適切に隠蔽するための「Hooks Injection パターン」
  - https://tech.jxpress.net/entry/never-give-up-firebase

## 環境構築

### [1] プロジェクト作成

#### 該当コミット

- Initial commit from Create Next App
  - https://github.com/Conken-NitKit/conken-circle/commit/9e0e7df60958f24e1ffd9bc9597bc6f533fb7691
- Install TypeScript
  - https://github.com/Conken-NitKit/conken-circle/commit/651d29916d6596bf0f1b0453b83b8529fea482ef
- Set up ESLint, Prettier
  - https://github.com/Conken-NitKit/conken-circle/commit/7e3700144f363f006ab208dd9dbf4e8c11f011c6

#### 参考資料

- 【入門】create-next-app で Next.js と TypeScript 環境を構築
  - https://mo-gu-mo-gu.com/create-next-app-typescript
- Node.js と npm をアップデートする方法
  - https://parashuto.com/rriver/tools/updating-node-js-and-npm

### [2] VScode Settings

#### 該当コミット

- Add vscode settings
  - https://github.com/Conken-NitKit/conken-circle/commit/0f49caef117455b916e787382f427ec17f17c300

#### 参考資料

- 【Visual Studio Code】v1.12.1 設定のための Settings.json ファイルについて
  - https://qiita.com/ayatokura/items/4301e0d1d8b339f722eb

### [3] GitHub Actions (CI)

#### 該当コミット

- Create main.yml
  - https://github.com/Conken-NitKit/conken-circle/commit/f4415a17226b68c6a88cc7a2291c7cf4fa7f7b95
- Fix format error
  - https://github.com/Conken-NitKit/conken-circle/commit/6e3877c878d1b02e7e2ee01973d038d8ac39229f

#### 参考資料

- GitHub Actions で CI/CD 環境を構築する ～ React アプリを Firebase へデプロイする yaml ファイルの書き方～
  - https://snowsystem.net/git/github-actions-react-firebase/

### [4] tailwind CSS と emotion の導入

#### 該当コミット

- Add support for tailwind CSS and emotion
  - https://github.com/Conken-NitKit/conken-circle/commit/9db5d4d91804929d2c72e11f8786c8857467e880

#### 参考資料

- Next.js に入門してみた
  - https://qiita.com/knjname/items/0223a7dc5eff1ef82e0b

### [5] ローカルでコミットする際の自動テストの導入 (Husky)

#### 該当コミット

- Install husky
  - https://github.com/Conken-NitKit/conken-circle/commit/c2a5a77aafba03c0ebdce279f4b188f1f5e72773
- Add support for build check on pre-commit
  - https://github.com/Conken-NitKit/conken-circle/commit/2803aec53157c0aae88b78c041d60663be178474
- Add check-types on package.json
  - https://github.com/Conken-NitKit/conken-circle/commit/1e3447a4e1146e5bbd41d33f67d2f471941b9daa
- Update steps of pre-commit
  - https://github.com/Conken-NitKit/conken-circle/commit/0416a7df10e978ce3b19c7acdb89a5f895e2c4bd

#### 参考資料

- Next.js +TypeScript で環境構築！ESLint + Prettier の導入から解析自動化までやってみた
  - https://zenn.dev/kurao/articles/456f44a6f43d89
