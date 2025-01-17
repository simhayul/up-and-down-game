let targetNumber;
let attempts = 0;
let guesses = [];  // 사용자가 입력한 숫자들을 저장할 배열

// 게임 시작 시, 랜덤한 숫자 선택
function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1; // 1부터 100까지의 랜덤 숫자
    attempts = 0;
    guesses = []; // 게임 리셋 시, 숫자 리스트 초기화
    document.getElementById('hint').textContent = ''; // 힌트 초기화
    document.getElementById('attempts').textContent = `시도 횟수: ${attempts}`;
    document.getElementById('guessesList').innerHTML = ''; // 리스트 초기화
    document.getElementById('resetButton').style.display = 'none'; // 리셋 버튼 숨기기
    document.getElementById('guess').disabled = false; // 입력 필드 활성화
    document.getElementById('checkButton').disabled = false; // 확인 버튼 활성화
}

// 숫자 맞추기 확인
document.getElementById('checkButton').addEventListener('click', () => {
    const guess = parseInt(document.getElementById('guess').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('1부터 100까지의 숫자를 입력해주세요.');
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `시도 횟수: ${attempts}`;

    let hintMessage = '';
    let arrow = '';

    // 입력한 숫자에 대해 "UP" 또는 "DOWN" 힌트 제공
    if (guess < targetNumber) {
        hintMessage = 'UP! 더 큰 숫자입니다.';
        arrow = '⬆️'; // UP 화살표
    } else if (guess > targetNumber) {
        hintMessage = 'DOWN! 더 작은 숫자입니다.';
        arrow = '⬇️'; // DOWN 화살표
    } else {
        hintMessage = `정답! ${attempts}번 만에 맞추셨습니다.`;
        document.getElementById('checkButton').disabled = true; // 확인 버튼 비활성화
        document.getElementById('resetButton').style.display = 'inline-block'; // 리셋 버튼 표시
    }

    // 힌트 및 화살표 업데이트
    document.getElementById('hint').textContent = hintMessage;

    // 사용자가 입력한 숫자와 화살표를 리스트에 추가
    const guessItem = document.createElement('li');
    guessItem.textContent = `${arrow} ${guess}`;
    document.getElementById('guessesList').appendChild(guessItem);

    // 입력 필드 비우기
    document.getElementById('guess').value = '';
});

// 게임 리셋
document.getElementById('resetButton').addEventListener('click', () => {
    startGame();
});

// 게임 시작
startGame();
