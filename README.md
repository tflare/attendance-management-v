# 勉強会出席者管理ツール for Connpass

## Firebaseの料金プラン

Blaze プラン(従量制)を選択すること
Blaze プランを使用しないと外部サイトのスクレイピングができないためです。
以下のアウトバウンド ネットワーキングの箇所が該当します。
[料金プラン](https://firebase.google.com/pricing?hl=ja)

Spark プランの無料使用量を含むので、課金されることはないと考えています。

## Cloud Firestoreのロケーション
初期設定でasia-northeast1を選択することをおすすめします。
ロケーションをasia-northeast1に揃えることで実行速度の向上が期待できます。

## 設定(作成中)
1. git@github.com:tflare/attendance-management-v.git をクローン
2. package.jsonの場所でnpm install
3. .firebasercのprojectを自分のものに書き換え
4. vue.jsのFirebase設定を実施
5. npm run serveで動作確認

## vue.jsのFirebase設定
```
プロジェクトのルート.env.localを作成し
以下を設定すること

VUE_APP_APIKEY=
VUE_APP_AUTHDOMAIN=
VUE_APP_DATABASEURL=
VUE_APP_PROJECTID=
VUE_APP_STORAGEBUCKET=
VUE_APP_MESSAGINGSENDERID=
VUE_APP_APPID=
VUE_APP_MEASUREMENTID=
```

## テストサイト
[テストサイト](https://attendance-management-v.firebaseapp.com)



