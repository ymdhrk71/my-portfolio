window.addEventListener ('load', () => {
  // 3秒間ボールをバウンドさせる
  setTimeout (() => {
    // 読み込み画面を非表示にする
    const loader = document.querySelector ('.loader');
    loader.style.opacity = '0'; // フェードアウト
    loader.style.pointerEvents = 'none'; // ユーザーが操作できないようにする

    // Chromeウィンドウを拡大し、定位置に移動する
    const chromeWindow = document.querySelector ('.chrome-window');
    chromeWindow.classList.add ('show');
  }, 2000);
});

document.addEventListener ('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll ('.tab-button');
  const tabContents = document.querySelectorAll ('.tab-content');

  tabButtons.forEach (button => {
    button.addEventListener ('click', () => {
      // すべてのタブボタンとコンテンツを非アクティブに
      tabButtons.forEach (btn => btn.classList.remove ('active'));
      tabContents.forEach (content => content.classList.remove ('active'));

      // クリックしたタブをアクティブに
      button.classList.add ('active');
      const activeTab = document.getElementById (button.dataset.tab);
      activeTab.classList.add ('active');
    });
  });

  // 最初にホームタブをアクティブにする
  document
    .querySelector ('.tab-button[data-tab="home"]')
    .classList.add ('active');
  document.getElementById ('home').classList.add ('active');
});
