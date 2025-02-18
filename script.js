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
