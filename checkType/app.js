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