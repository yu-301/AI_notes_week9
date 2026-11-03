// 5G 安全筆記 — 簡報播放器（所有簡報共用，不需修改）
// 操作：← → 鍵、空白鍵、或點下方按鈕換頁；網址 #3 可直接跳到第 3 張
(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const counter = document.querySelector(".deck-count");
  const prev = document.querySelector(".deck-prev");
  const next = document.querySelector(".deck-next");
  let i = 0;

  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, k) => s.classList.toggle("is-active", k === i));
    if (counter) counter.textContent = (i + 1) + " / " + slides.length;
    if (prev) prev.disabled = i === 0;
    if (next) next.disabled = i === slides.length - 1;
    history.replaceState(null, "", "#" + (i + 1));
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); show(i + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); show(i - 1); }
    if (e.key === "Home") show(0);
    if (e.key === "End") show(slides.length - 1);
  });
  if (prev) prev.addEventListener("click", function () { show(i - 1); });
  if (next) next.addEventListener("click", function () { show(i + 1); });

  const start = parseInt(location.hash.slice(1), 10);
  show(Number.isFinite(start) ? start - 1 : 0);
})();
