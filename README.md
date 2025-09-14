# 簡単なタイピングゲームを作る

## プログラミングってなに？

プログラミングとは、コンピューターが理解できる特別な言葉を使って、コンピューターへの命令を書き出すことです。この命令をまとめたものを **「プログラム」** と呼びます。

例えば、朝起きて歯を磨き、顔を洗って、朝食を食べる、という一連の流れがありますね。この一連の行動を、コンピューターが理解できるように一つずつ細かく指示するのがプログラミングです。

## どんなことができるの？

プログラミングを学ぶと、まるで魔法のように様々なものを自分で作れるようになります。

- ウェブサイトやブログ: 情報を表示したり、お問い合わせフォームを作ったりする。
- ゲーム: タイピングゲームやパズルゲームなど、自分でルールを考えたゲームを作って遊べる。
- アプリ: スマートフォンで使う天気予報アプリや家計簿アプリなど。
- 便利な道具: 計算を自動で行うツールや、大量のデータを整理するプログラムなど、日々の生活や仕事で役立つ道具も作れる。

プログラミングは、自分のアイデアを形にするための強力な道具です。最初は難しく感じるかもしれませんが、パズルのように少しずつ組み立てていく楽しさがあります。

## Let's make typing game

### 挙動

これから作るものは、最終的に以下のようになります！

[YouTube](https://youtu.be/YOyzH9WAAYw)

### HTMLで骨格を作る

HTMLというのは、ウェブサイトを作るための「設計図」のようなものです。私たちが家を建てるときに、まず家の骨組みや柱を組み立てるのと同じように、HTMLはウェブサイトの骨格を作ります。

これから、その、ゲームを作るための骨格を作って行きます。

1. 好きなフォルダ名をつけて、その中に`index.html`というファイルを作ります。
2. フォルダに写り、ファイルを開きます。
3. ファイルを開いたら、そのファイルに以下のコードを記述します。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>タイピングゲーム</title>
</head>
<body>
    <h1>タイピングゲーム</h1>
    <p>準備ができたら「スタート」ボタンを押してください。</p>
    <button id="start-button">スタート</button>
</body>
</html>
```

4. 記述ができたら、ブラウザで確認をしてみます。

### CSSで見た目を作る

CSSとは、ウェブサイトを美しく飾るための「装飾」や「デザイン」を専門とする言語です。
この言語を活用して、HTMLという骨格に装飾を行い、少し豪華な構造にして行きます。

1. index.htmlと同じフォルダに`style.css`というファイルを作成します。
2. `style.css`というファイルを開き、以下の内容を記述します。

```css
body {
    background-color: #f0f0f0; /* 背景を薄いグレーに */
    font-family: sans-serif; /* 文字の形をシンプルに */
    text-align: center; /* 全ての文字を真ん中に寄せる */
    padding-top: 50px; /* 上に少し隙間を作る */
}

h1 {
    color: #333; /* 見出しの色を濃いグレーに */
}

button {
    padding: 10px 20px; /* ボタンの内側に隙間を作る */
    font-size: 18px; /* 文字の大きさを少し大きく */
    cursor: pointer; /* マウスを乗せると指の形に変わる */
}
```

3. HTMLファイルに、style.cssというファイルを反映させるために、index.htmlの<head>セクションに以下の記述を追加します。

```html
<head>
    <meta charset="UTF-8">
    <title>タイピングゲーム</title>
    <link rel="stylesheet" href="style.css"><!--追加-->
</head>
```

### JavaScriptで動きをつける

いよいよプログラミングの醍醐味です。JavaScriptを使って、ゲームのルールや動きを実装していきます。今回は、動くものを作るというコンセプトなので、細かいところは気にしないでください。

1. HTMLファイル（index.html）とCSSファイル（style.css）があるフォルダーに、新しく`main.js`という名前のファイルを作成します。

2. このJavaScriptファイルをHTMLに読み込ませる必要があります。index.htmlファイルの<body>タグの一番最後に、以下のコードを追加してください。

```html
<body>
    <h1>タイピングゲーム</h1>
    <p>準備ができたら「スタート」ボタンを押してください。</p>
    <button id="start-button">スタート</button>
    <script src="main.js"></script><!--追加-->
</body>
```

3. `main.js`ファイルに、以下のコードを書いてみましょう。

```javascript
// 「スタート」ボタンが押されたら動くプログラム
const startButton = document.querySelector('#start-button');

startButton.addEventListener('click', () => {
    alert('ゲームを開始します！');
});
```

4. ポップアップが出せたら、いよいよタイピングゲームの核となる部分を作っていきます。
ここで、ボタンを押したら、問題文や入力欄が表示されるように、index.htmlファイルを少し変更します。

```html
<body>
    <h1>タイピングゲーム</h1>
    <!--追加 start-->
    <div id="game-area">
        <p id="question-text"></p>
        <input type="text" id="typing-input" disabled>
    </div>
    <!--追加 end-->
    <p>準備ができたら「スタート」ボタンを押してください。</p>
    <button id="start-button">スタート</button>

    <script src="main.js"></script>
</body>
```

5. `main.js`にタイピングゲームが動くようにおまじない(ロジック)を作成して行きます。

```javascript
// 必要な要素をHTMLから取得
const startButton = document.querySelector('#start-button');
const questionText = document.querySelector('#question-text');
const typingInput = document.querySelector('#typing-input');

// 問題文のリスト
const questions = ['JavaScriptは楽しい', 'プログラミングは面白い', 'タイピングゲームを作ろう'];
let currentQuestionIndex = 0;

// ゲーム開始関数
const startGame = () => {
    // 1. スタートボタンを非表示にする
    startButton.style.display = 'none';
    // 2. 入力欄を有効にする
    typingInput.disabled = false;
    // 3. 最初の問題を表示する
    displayQuestion();
};

// 問題を表示する関数
const displayQuestion = () => {
    questionText.textContent = questions[currentQuestionIndex];
    typingInput.value = ''; // 入力欄を空にする
    typingInput.focus();    // 入力欄にカーソルを合わせる
};

// 入力された文字をチェックする関数
const checkTyping = () => {
    const typedValue = typingInput.value;
    const currentQuestion = questions[currentQuestionIndex];

    // 入力した文字と問題文を比較
    if (typedValue === currentQuestion) {
        // 問題文と一致したら
        alert('正解！');
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert('全問クリア！おめでとうございます！');
            // ゲーム終了後の処理をここに書く
        }
    }
};

// イベントリスナーの設定
startButton.addEventListener('click', startGame);
typingInput.addEventListener('input', checkTyping);
```

## 動作確認

最後に、`index.html`をブラウザーで開き直して、ゲームを試してみてください。

1. 「スタート」ボタンを押すと、ボタンが消えて問題文が表示されます。

2. 入力欄に「JavaScriptは楽しい」と正確に打ち込むと、「正解！」というメッセージが表示され、次の問題に進みます。

この状態までできれば、タイピングゲームの基本的な仕組みは完成です！ お疲れ様でした。