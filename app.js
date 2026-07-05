// ============ 合格マスター アプリ本体 ============
(function () {
  "use strict";

  const STORE_KEY = "gokaku_master_progress_v2";
  const OLD_KEY = "kounin_master_progress_v1"; // 旧・高卒認定単独版からの移行用
  const THEME_KEY = "kounin_master_theme";
  const LAST_COURSE_KEY = "gokaku_master_last_course";

  // ---------- コース定義 ----------
  const SECTIONS = [
    {
      id: "koutei", num: "1", name: "高卒認定マスター", short: "高卒認定",
      icon: "🎓", color: "#2f6fed", tag: "SECTION 1 ・ 基礎",
      desc: "高等学校卒業程度認定試験の合格を目指す。全科目の基礎を要点学習とインタラクティブ演習で固める。",
      passLine: 40, lineLabel: "合格ライン",
      subjects: SUBJECTS, guide: EXAM_GUIDE
    },
    {
      id: "daigaku", num: "2", name: "大学入試マスター", short: "大学入試",
      icon: "📚", color: "#0d9488", tag: "SECTION 2 ・ 標準〜中堅",
      desc: "高校3年までの内容を総復習し、標準〜中堅レベル(中央値)の大学合格に必要な学力を完成させる。",
      passLine: 70, lineLabel: "目標ライン",
      subjects: DAIGAKU_SUBJECTS, guide: DAIGAKU_GUIDE
    },
    {
      id: "toudai", num: "3", name: "東大入試マスター", short: "東大入試",
      icon: "🏛️", color: "#7c3aed", tag: "SECTION 3 ・ 最難関",
      desc: "東京大学の二次試験合格を目指す。記述・論述・思考力を、解法の方針と論の設計から鍛える。",
      passLine: 60, lineLabel: "目標ライン",
      subjects: TOUDAI_SUBJECTS, guide: TOUDAI_GUIDE
    }
  ];
  function findSection(id) { return SECTIONS.find(s => s.id === id); }

  const app = document.getElementById("app");
  const toastEl = document.getElementById("toast");

  // ---------- 進捗データ(コース別)----------
  function blankSlice() { return { units: {}, wrong: {}, mock: [] }; }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.sections) {
          SECTIONS.forEach(s => { if (!parsed.sections[s.id]) parsed.sections[s.id] = blankSlice(); });
          if (!parsed.streak) parsed.streak = { last: "", count: 0 };
          return parsed;
        }
      }
      // 旧バージョンからの移行(高卒認定の記録を koutei に引き継ぐ)
      const old = localStorage.getItem(OLD_KEY);
      if (old) {
        const o = JSON.parse(old);
        const st = freshState();
        st.sections.koutei = { units: o.units || {}, wrong: o.wrong || {}, mock: o.mock || [] };
        return st;
      }
    } catch (e) { /* 破損時は初期化 */ }
    return freshState();
  }
  function freshState() {
    const st = { sections: {}, streak: { last: "", count: 0 } };
    SECTIONS.forEach(s => { st.sections[s.id] = blankSlice(); });
    return st;
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
    catch (e) { toast("保存に失敗しました(ストレージ制限)"); }
  }
  let state = loadState();
  saveState(); // 旧バージョンからの移行結果を即時保存

  // ---------- 現在のコース ----------
  let currentSectionId = localStorage.getItem(LAST_COURSE_KEY) || null;
  function sec() { return findSection(currentSectionId); }
  function subjects() { return sec().subjects; }
  function slice() { return state.sections[currentSectionId]; }

  // ---------- ユーティリティ ----------
  function findSubject(id) { return subjects().find(s => s.id === id); }
  function findUnit(subject, uid) { return subject.units.find(u => u.id === uid); }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function wrongKey(sid, uid, qi) { return sid + "|" + uid + "|" + qi; }

  // ---------- 連続学習日数(ストリーク)----------
  function dateStr(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function touchStreak() {
    const today = dateStr(new Date());
    if (!state.streak) state.streak = { last: "", count: 0 };
    const s = state.streak;
    if (s.last === today) return;
    const yesterday = dateStr(new Date(Date.now() - 86400000));
    s.count = (s.last === yesterday) ? s.count + 1 : 1;
    s.last = today;
  }
  function streakCount() {
    if (!state.streak || !state.streak.last) return 0;
    const today = dateStr(new Date());
    const yesterday = dateStr(new Date(Date.now() - 86400000));
    return (state.streak.last === today || state.streak.last === yesterday) ? state.streak.count : 0;
  }

  function sectionUnitStats(section) {
    const sl = state.sections[section.id];
    let total = 0, done = 0, quiz = 0;
    section.subjects.forEach(s => s.units.forEach(u => {
      total++; quiz += u.quiz.length;
      if (sl.units[u.id] && sl.units[u.id].done) done++;
    }));
    return { total, done, quiz, pct: total ? Math.round(done / total * 100) : 0 };
  }

  function totalUnits() { let n = 0; subjects().forEach(s => n += s.units.length); return n; }
  function doneUnits() { let n = 0; subjects().forEach(s => s.units.forEach(u => { if (slice().units[u.id] && slice().units[u.id].done) n++; })); return n; }
  function totalQuizCount() { let n = 0; subjects().forEach(s => s.units.forEach(u => n += u.quiz.length)); return n; }
  function wrongCount() { return Object.keys(slice().wrong).length; }

  function subjectProgress(subject) {
    const done = subject.units.filter(u => slice().units[u.id] && slice().units[u.id].done).length;
    return { done, total: subject.units.length, pct: subject.units.length ? Math.round(done / subject.units.length * 100) : 0 };
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { toastEl.hidden = true; }, 2200);
  }

  function updateReviewBadge() {
    const b = document.getElementById("review-badge");
    if (!currentSectionId) { b.hidden = true; return; }
    const n = wrongCount();
    if (n > 0) { b.hidden = false; b.textContent = n; }
    else { b.hidden = true; }
  }

  // ヘッダーのコース表示・ナビ切替
  function updateChrome() {
    const nav = document.getElementById("topnav");
    const navTop = document.getElementById("topnav-top");
    const brandCourse = document.getElementById("brand-course");
    const inCourse = current.view !== "courses" && currentSectionId;
    nav.hidden = !inCourse;
    navTop.hidden = !!inCourse;
    brandCourse.textContent = inCourse ? " ／ " + sec().short : "";
    if (inCourse) document.documentElement.style.setProperty("--primary", sec().color);
    else document.documentElement.style.removeProperty("--primary");
  }

  // ---------- ルーター ----------
  let current = { view: "courses" };
  function go(view, params) {
    current = Object.assign({ view }, params || {});
    setQuizKeys(null); // 画面遷移時にクイズのキー操作を解除
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelectorAll(".nav-btn").forEach(btn =>
      btn.classList.toggle("active", btn.dataset.view === view));
  }
  function openCourse(sectionId) {
    currentSectionId = sectionId;
    localStorage.setItem(LAST_COURSE_KEY, sectionId);
    go("home");
  }

  function render() {
    updateChrome();
    updateReviewBadge();
    if (current.view !== "courses" && !currentSectionId) { current.view = "courses"; }
    switch (current.view) {
      case "courses": return renderCourses();
      case "home": return renderHome();
      case "subject": return renderSubject(current.subjectId);
      case "unit": return renderUnit(current.subjectId, current.unitId);
      case "review": return renderReview();
      case "mock": return renderMockSetup();
      case "mockrun": return renderMockRun(current.config);
      case "guide": return renderGuide();
      default: return renderCourses();
    }
  }

  // ---------- コース選択(トップ)----------
  function renderCourses() {
    let cards = "";
    SECTIONS.forEach(s => {
      const st = sectionUnitStats(s);
      cards += `
        <button class="course-card" style="--cc:${s.color}" data-course="${s.id}">
          <span class="course-num">${s.num}</span>
          <span class="course-tag">${esc(s.tag)}</span>
          <span class="course-badge"><span class="course-icon">${s.icon}</span>${esc(s.name)}</span>
          <span class="course-desc">${esc(s.desc)}</span>
          <span class="course-meta">
            <span>📗 ${s.subjects.length}科目</span>
            <span>📄 ${st.total}単元</span>
            <span>✏️ ${st.quiz}問</span>
          </span>
          <span class="course-prog">
            <span class="pbar" style="--sc:${s.color}"><span style="width:${st.pct}%"></span></span>
            <span class="course-meta"><span>達成度 ${st.pct}%(${st.done}/${st.total})</span></span>
          </span>
          <span class="course-cta">このコースで学ぶ →</span>
        </button>`;
    });

    app.innerHTML = `
      <section class="landing-hero">
        <h1>合格マスター</h1>
        <p class="lead">3つのコースで、あなたの目標に合わせた学習を。要点学習とインタラクティブ演習で着実に力をつけ、進捗はコースごとにこの端末へ自動保存されます。</p>
        ${streakCount() > 0 ? `<p class="streak-line">🔥 連続学習 ${streakCount()}日目です。今日も一歩前へ!</p>` : ""}
      </section>
      <div class="course-grid">${cards}</div>
      <div class="section-title" style="margin-top:30px">学習データの管理 <small>全コース共通</small></div>
      <div class="info-card">
        <p>すべての学習記録(進捗・成績・弱点)はこのブラウザ(localStorage)に保存されます。端末やブラウザを変えると引き継がれないため、必要に応じてバックアップしてください。</p>
        <div class="settings-row">
          <button class="btn ghost" id="btn-export">バックアップを書き出す</button>
          <button class="btn ghost" id="btn-import">バックアップを読み込む</button>
          <button class="btn danger" id="btn-reset">全学習記録を消去</button>
        </div>
        <input type="file" id="file-import" accept="application/json" hidden>
      </div>`;

    app.querySelectorAll(".course-card").forEach(c =>
      c.addEventListener("click", () => openCourse(c.dataset.course)));
    document.getElementById("btn-reset").addEventListener("click", resetAll);
    document.getElementById("btn-export").addEventListener("click", exportData);
    const fileInput = document.getElementById("file-import");
    document.getElementById("btn-import").addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", importData);
  }

  // ---------- コース内ホーム ----------
  function renderHome() {
    const dU = doneUnits(), tU = totalUnits();
    const pct = tU ? Math.round(dU / tU * 100) : 0;
    const circ = 2 * Math.PI * 52;
    const off = circ * (1 - pct / 100);

    let cards = "";
    subjects().forEach(s => {
      const p = subjectProgress(s);
      const chip = p.done === p.total && p.total > 0
        ? `<span class="done-chip">✓ 完了</span>`
        : `${p.done}/${p.total} 単元`;
      cards += `
        <button class="subject-card" style="--sc:${s.color}" data-sid="${s.id}">
          <div class="subject-head">
            <span class="subject-icon">${s.icon}</span>
            <div>
              <div class="subject-name">${esc(s.name)}</div>
              <div class="subject-desc">${esc(s.desc)}</div>
            </div>
          </div>
          <div class="pbar"><span style="width:${p.pct}%"></span></div>
          <div class="subject-meta"><span>${chip}</span><span>${p.pct}%</span></div>
        </button>`;
    });

    app.innerHTML = `
      <section class="hero" style="background:linear-gradient(135deg, ${sec().color} 0%, #7c3aed 100%)">
        <div class="hero-left">
          <div class="course-tag" style="color:rgba(255,255,255,.85)">${esc(sec().tag)}</div>
          <h1>${esc(sec().name)}</h1>
          <p>${esc(sec().desc)}</p>
          <div class="hero-stats">
            <div class="hero-stat"><b>${subjects().length}</b>科目</div>
            <div class="hero-stat"><b>${tU}</b>単元</div>
            <div class="hero-stat"><b>${totalQuizCount()}</b>問</div>
            <div class="hero-stat"><b>${wrongCount()}</b>弱点</div>
            <div class="hero-stat"><b>${streakCount()}</b>日連続</div>
          </div>
        </div>
        <div class="ring-wrap">
          <svg class="ring" width="130" height="130" viewBox="0 0 130 130">
            <circle class="ring-bg" cx="65" cy="65" r="52"></circle>
            <circle class="ring-fg" cx="65" cy="65" r="52"
              stroke-dasharray="${circ}" stroke-dashoffset="${off}"></circle>
            <text class="ring-label" x="65" y="65">${pct}%</text>
          </svg>
          <div class="ring-caption">学習達成度</div>
        </div>
      </section>

      <div class="section-title">科目を選ぶ <small>要点を読んで、問題で確認しよう</small></div>
      <div class="subject-grid">${cards}</div>

      <div class="info-card" style="margin-top:20px">
        <p>他のコースに切り替えるには、右上の「🔀 コース変更」またはロゴをクリックしてください。進捗はコースごとに独立して保存されます。</p>
      </div>`;

    app.querySelectorAll(".subject-card").forEach(c =>
      c.addEventListener("click", () => go("subject", { subjectId: c.dataset.sid })));
  }

  // ---------- 科目(単元一覧)----------
  function renderSubject(sid) {
    const s = findSubject(sid);
    if (!s) return go("home");
    let rows = "";
    s.units.forEach((u, i) => {
      const st = slice().units[u.id];
      let statusClass = "", statusText = i + 1, scoreText = "未学習";
      if (st) {
        if (st.done) { statusClass = "done"; statusText = "✓"; }
        else { statusClass = "part"; }
        if (typeof st.best === "number") scoreText = `最高 <b>${st.best}/${st.total}</b>`;
      }
      rows += `
        <button class="unit-row" data-uid="${u.id}">
          <span class="unit-status ${statusClass}">${statusText}</span>
          <span class="unit-info">
            <span class="unit-title">${esc(u.title)}</span>
            <span class="unit-sub">目安 ${u.minutes}分 ・ 確認問題 ${u.quiz.length}問</span>
          </span>
          <span class="unit-score">${scoreText}</span>
        </button>`;
    });
    const p = subjectProgress(s);
    app.innerHTML = `
      <div class="page-head">
        <div class="crumb"><button data-home>ホーム</button> ／ ${esc(s.name)}</div>
        <h2><span class="subject-icon" style="background:${s.color}22">${s.icon}</span>${esc(s.name)}</h2>
        <p class="unit-sub">${esc(s.desc)} ・ 達成度 ${p.pct}%</p>
        <div class="pbar" style="--sc:${s.color};max-width:420px"><span style="width:${p.pct}%"></span></div>
      </div>
      <div class="unit-list">${rows}</div>`;
    app.querySelector("[data-home]").addEventListener("click", () => go("home"));
    app.querySelectorAll(".unit-row").forEach(r =>
      r.addEventListener("click", () => go("unit", { subjectId: sid, unitId: r.dataset.uid })));
  }

  // ---------- 単元(学習+クイズ)----------
  function renderUnit(sid, uid) {
    const s = findSubject(sid);
    const u = findUnit(s, uid);
    if (!u) return go("subject", { subjectId: sid });

    app.innerHTML = `
      <div class="page-head">
        <div class="crumb">
          <button data-home>ホーム</button> ／
          <button data-subject>${esc(s.name)}</button> ／ ${esc(u.title)}
        </div>
        <h2>${esc(u.title)}</h2>
      </div>
      <div class="lesson-tabs">
        <button class="tab-btn active" data-tab="learn">📘 要点を学ぶ</button>
        <button class="tab-btn" data-tab="quiz">✏️ 問題を解く</button>
      </div>
      <div id="tab-body"></div>`;

    app.querySelector("[data-home]").addEventListener("click", () => go("home"));
    app.querySelector("[data-subject]").addEventListener("click", () => go("subject", { subjectId: sid }));

    const tabBody = document.getElementById("tab-body");
    const tabs = app.querySelectorAll(".tab-btn");
    function selectTab(name) {
      tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === name));
      if (name === "learn") showLearn(); else showQuiz();
    }
    tabs.forEach(t => t.addEventListener("click", () => selectTab(t.dataset.tab)));

    function showLearn() {
      tabBody.innerHTML = `
        <div class="lesson-body">${u.points}</div>
        <div class="lesson-next">
          <button class="btn" id="to-quiz">問題を解いて確認する →</button>
        </div>`;
      document.getElementById("to-quiz").addEventListener("click", () => selectTab("quiz"));
    }

    function showQuiz() {
      runQuiz({
        container: tabBody,
        questions: u.quiz.map((q, i) => ({ q, sid, uid, qi: i })),
        passLine: sec().passLine, lineLabel: sec().lineLabel,
        onFinish: (correct, total) => {
          const prev = slice().units[uid] || {};
          const best = Math.max(prev.best || 0, correct);
          slice().units[uid] = { best, total, done: true };
          saveState();
        },
        afterActions: () => `
          <div class="btn-row">
            <button class="btn ghost" data-again>もう一度</button>
            <button class="btn" data-next>単元一覧へ戻る</button>
          </div>`,
        bindActions: (wrap) => {
          const again = wrap.querySelector("[data-again]");
          const next = wrap.querySelector("[data-next]");
          if (again) again.addEventListener("click", showQuiz);
          if (next) next.addEventListener("click", () => go("subject", { subjectId: sid }));
        }
      });
    }

    showLearn();
  }

  // ---------- 汎用クイズエンジン ----------
  // 選択肢は表示のたびにシャッフルする(記号の位置で正解を推測できないようにするため)
  let quizKeyHandler = null;
  function setQuizKeys(fn) {
    if (quizKeyHandler) document.removeEventListener("keydown", quizKeyHandler);
    quizKeyHandler = fn;
    if (fn) document.addEventListener("keydown", fn);
  }
  function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function runQuiz(opts) {
    const qs = opts.questions;
    const passLine = opts.passLine || 40;
    const lineLabel = opts.lineLabel || "合格ライン";
    let idx = 0, correctCount = 0;
    const container = opts.container;

    // キーボード操作:1〜4 / A〜D で解答、Enterで次へ
    setQuizKeys(function (e) {
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      const k = e.key.toLowerCase();
      const btns = Array.from(container.querySelectorAll(".choice:not(:disabled)"));
      if (btns.length) {
        let i = "1234".indexOf(k);
        if (i < 0) i = "abcd".indexOf(k);
        if (i >= 0 && btns[i]) { btns[i].click(); e.preventDefault(); }
        return;
      }
      if (e.key === "Enter") {
        const nx = container.querySelector("#q-next");
        if (nx) { nx.click(); e.preventDefault(); }
      }
    });

    function draw() {
      const item = qs[idx];
      const q = item.q;
      item.perm = shuffleArr(q.c.map((_, i) => i)); // 表示順(元indexの並び)
      const pct = Math.round(idx / qs.length * 100);
      container.innerHTML = `
        <div class="quiz-progress">
          <div class="pbar"><span style="width:${pct}%"></span></div>
          <span class="quiz-count">${idx + 1} / ${qs.length}</span>
          <span class="kbd-hint">1〜4キーで解答 / Enterで次へ</span>
        </div>
        <div class="quiz-card">
          ${item.tag ? `<div class="quiz-tag">${esc(item.tag)}</div>` : ""}
          <p class="quiz-q"><span class="qnum">問${idx + 1}</span>${esc(q.q)}</p>
          <div class="choices">
            ${item.perm.map((orig, di) => `
              <button class="choice" data-orig="${orig}">
                <span class="choice-key">${"ABCD"[di]}</span>
                <span>${esc(q.c[orig])}</span>
              </button>`).join("")}
          </div>
          <div id="fb"></div>
        </div>`;
      const choiceBtns = container.querySelectorAll(".choice");
      choiceBtns.forEach(btn => btn.addEventListener("click", () => answer(item, Number(btn.dataset.orig), choiceBtns)));
    }

    function answer(item, origIdx, btns) {
      const q = item.q;
      const ok = origIdx === q.a;
      btns.forEach(b => {
        const o = Number(b.dataset.orig);
        b.disabled = true;
        if (o === q.a) b.classList.add("correct");
        else if (o === origIdx) b.classList.add("wrong");
        else b.classList.add("dim");
      });

      const key = wrongKey(item.sid, item.uid, item.qi);
      if (ok) {
        correctCount++;
        if (slice().wrong[key]) delete slice().wrong[key];
      } else {
        slice().wrong[key] = { sid: item.sid, uid: item.uid, qi: item.qi };
      }
      touchStreak();
      saveState();
      updateReviewBadge();

      const correctLetter = "ABCD"[item.perm.indexOf(q.a)];
      const fb = container.querySelector("#fb");
      fb.innerHTML = `
        <div class="feedback ${ok ? "ok" : "ng"}">
          <div class="fb-head">${ok ? "◯ 正解!" : "✕ 不正解"}</div>
          <p><b>正解:${correctLetter}</b> ${esc(q.c[q.a])}</p>
          <p>${esc(q.e)}</p>
        </div>
        <div class="lesson-next">
          <button class="btn" id="q-next">${idx + 1 < qs.length ? "次の問題 →" : "結果を見る"}</button>
        </div>`;
      fb.querySelector("#q-next").addEventListener("click", () => {
        idx++;
        if (idx < qs.length) draw(); else finish();
      });
      fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function finish() {
      setQuizKeys(null);
      const total = qs.length;
      const pct = Math.round(correctCount / total * 100);
      const pass = pct >= passLine;
      let emoji, msg;
      if (pct === 100) { emoji = "🏆"; msg = "全問正解!完璧です。"; }
      else if (pct >= Math.min(passLine + 20, 90)) { emoji = "🎉"; msg = "よくできました。この調子!"; }
      else if (pass) { emoji = "👍"; msg = `${lineLabel}(${passLine}点)は超えています。間違えた問題を復習して確実にしましょう。`; }
      else { emoji = "📖"; msg = "もう一度要点を読み返して再挑戦しましょう。間違えた問題は「弱点復習」に登録されています。"; }

      if (opts.onFinish) opts.onFinish(correctCount, total);

      container.innerHTML = `
        <div class="result-card">
          <div class="result-emoji">${emoji}</div>
          <div class="result-score">${correctCount}<small> / ${total} 問正解</small></div>
          <div class="result-score" style="font-size:1.4rem">${pct}点
            <span class="${pass ? "result-pass" : "result-fail"}">${pass ? lineLabel + "到達" : "あと少し"}</span>
          </div>
          <p class="result-msg">${msg}</p>
          <div id="result-actions"></div>
        </div>`;
      const wrap = container.querySelector("#result-actions");
      wrap.innerHTML = opts.afterActions ? opts.afterActions(correctCount, total) : "";
      if (opts.bindActions) opts.bindActions(wrap);
    }

    draw();
  }

  // ---------- 弱点復習 ----------
  function renderReview() {
    const keys = Object.keys(slice().wrong);
    if (keys.length === 0) {
      app.innerHTML = `
        <div class="page-head"><h2>弱点復習</h2></div>
        <div class="empty-state">
          <div class="big">🎯</div>
          <p>今のところ復習が必要な問題はありません。<br>問題を解いて間違えると、ここに自動で集まります。</p>
          <div class="btn-row"><button class="btn" data-home>科目を選ぶ</button></div>
        </div>`;
      const h = app.querySelector("[data-home]");
      if (h) h.addEventListener("click", () => go("home"));
      return;
    }

    const questions = [];
    keys.forEach(k => {
      const w = slice().wrong[k];
      const s = findSubject(w.sid);
      if (!s) return;
      const u = findUnit(s, w.uid);
      if (!u || !u.quiz[w.qi]) return;
      questions.push({ q: u.quiz[w.qi], sid: w.sid, uid: w.uid, qi: w.qi, tag: s.name + " ・ " + u.title });
    });

    app.innerHTML = `
      <div class="page-head">
        <div class="crumb"><button data-home>ホーム</button> ／ 弱点復習</div>
        <h2>弱点復習 <small class="unit-sub">${questions.length}問</small></h2>
        <p class="unit-sub">間違えた問題だけを集めました。正解すればリストから消えます。</p>
      </div>
      <div id="review-body"></div>`;
    app.querySelector("[data-home]").addEventListener("click", () => go("home"));

    runQuiz({
      container: document.getElementById("review-body"),
      questions,
      passLine: sec().passLine, lineLabel: sec().lineLabel,
      afterActions: () => `
        <div class="btn-row">
          <button class="btn" data-refresh>残りの弱点を続ける</button>
          <button class="btn ghost" data-home2>ホームへ</button>
        </div>`,
      bindActions: (wrap) => {
        wrap.querySelector("[data-refresh]").addEventListener("click", () => go("review"));
        wrap.querySelector("[data-home2]").addEventListener("click", () => go("home"));
      }
    });
  }

  // ---------- 実力テスト(設定)----------
  function renderMockSetup() {
    const counts = [10, 20, 30];
    app.innerHTML = `
      <div class="page-head">
        <div class="crumb"><button data-home>ホーム</button> ／ 実力テスト</div>
        <h2>実力テスト</h2>
        <p class="unit-sub">選んだ科目からランダムに出題する本番形式のテストです。${sec().lineLabel}(${sec().passLine}点)で判定します。</p>
      </div>
      <div class="info-card">
        <h3>出題する科目</h3>
        <div class="mock-opts" id="subj-opts">
          <div class="mock-opt sel" data-sid="all">全科目</div>
          ${subjects().map(s => `<div class="mock-opt" data-sid="${s.id}">${s.icon} ${esc(s.name)}</div>`).join("")}
        </div>
        <h3>問題数</h3>
        <div class="mock-opts" id="count-opts">
          ${counts.map((c, i) => `<div class="mock-opt ${i === 1 ? "sel" : ""}" data-count="${c}">${c}問</div>`).join("")}
        </div>
        <div class="btn-row" style="justify-content:flex-start">
          <button class="btn" id="start-mock">テストを開始する</button>
        </div>
      </div>`;

    app.querySelector("[data-home]").addEventListener("click", () => go("home"));

    let selSubjects = new Set(["all"]);
    let selCount = 20;

    const subjOpts = app.querySelector("#subj-opts");
    subjOpts.querySelectorAll(".mock-opt").forEach(el => {
      el.addEventListener("click", () => {
        const sid = el.dataset.sid;
        if (sid === "all") selSubjects = new Set(["all"]);
        else {
          selSubjects.delete("all");
          if (selSubjects.has(sid)) selSubjects.delete(sid); else selSubjects.add(sid);
          if (selSubjects.size === 0) selSubjects = new Set(["all"]);
        }
        subjOpts.querySelectorAll(".mock-opt").forEach(x =>
          x.classList.toggle("sel", selSubjects.has(x.dataset.sid)));
      });
    });

    const countOpts = app.querySelector("#count-opts");
    countOpts.querySelectorAll(".mock-opt").forEach(el => {
      el.addEventListener("click", () => {
        selCount = Number(el.dataset.count);
        countOpts.querySelectorAll(".mock-opt").forEach(x => x.classList.remove("sel"));
        el.classList.add("sel");
      });
    });

    document.getElementById("start-mock").addEventListener("click", () => {
      go("mockrun", { config: { subjects: Array.from(selSubjects), count: selCount } });
    });
  }

  // ---------- 実力テスト(実行)----------
  function renderMockRun(config) {
    let pool = [];
    const useAll = config.subjects.includes("all");
    subjects().forEach(s => {
      if (!useAll && !config.subjects.includes(s.id)) return;
      s.units.forEach(u => u.quiz.forEach((q, qi) => pool.push({ q, sid: s.id, uid: u.id, qi, tag: s.name })));
    });
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const questions = pool.slice(0, Math.min(config.count, pool.length));

    app.innerHTML = `
      <div class="page-head">
        <div class="crumb"><button data-home>ホーム</button> ／ 実力テスト</div>
        <h2>実力テスト <small class="unit-sub">${questions.length}問</small></h2>
      </div>
      <div id="mock-body"></div>`;
    app.querySelector("[data-home]").addEventListener("click", () => go("home"));

    runQuiz({
      container: document.getElementById("mock-body"),
      questions,
      passLine: sec().passLine, lineLabel: sec().lineLabel,
      onFinish: (correct, total) => {
        const sl = slice();
        sl.mock = sl.mock || [];
        sl.mock.push({ date: Date.now(), correct, total });
        if (sl.mock.length > 20) sl.mock = sl.mock.slice(-20);
        saveState();
      },
      afterActions: () => `
        <div class="btn-row">
          <button class="btn" data-retry>もう一度挑戦</button>
          <button class="btn ghost" data-home2>ホームへ</button>
        </div>`,
      bindActions: (wrap) => {
        wrap.querySelector("[data-retry]").addEventListener("click", () => go("mock"));
        wrap.querySelector("[data-home2]").addEventListener("click", () => go("home"));
      }
    });
  }

  // ---------- コース案内 ----------
  function renderGuide() {
    const g = sec().guide;
    app.innerHTML = `
      <div class="page-head">
        <div class="crumb"><button data-home>ホーム</button> ／ コース案内</div>
        <h2>${esc(sec().name)} ガイド</h2>
      </div>
      <div class="info-card" style="margin-bottom:14px"><p>${g.intro}</p></div>
      <div class="info-grid">
        ${g.cards.map(c => `<div class="info-card"><h3>${esc(c.h)}</h3>${c.body}</div>`).join("")}
      </div>`;
    app.querySelector("[data-home]").addEventListener("click", () => go("home"));
  }

  // ---------- データ管理 ----------
  function resetAll() {
    if (!confirm("すべてのコースの学習記録(進捗・成績・弱点)を消去します。よろしいですか?")) return;
    state = freshState();
    saveState();
    toast("全学習記録を消去しました");
    render();
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gokaku-master-backup.json";
    a.click();
    URL.revokeObjectURL(url);
    toast("バックアップを書き出しました");
  }

  function importData(ev) {
    const file = ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (data && data.sections) {
          state = freshState();
          SECTIONS.forEach(s => {
            if (data.sections[s.id]) {
              const d = data.sections[s.id];
              state.sections[s.id] = { units: d.units || {}, wrong: d.wrong || {}, mock: d.mock || [] };
            }
          });
          saveState();
          toast("バックアップを読み込みました");
          render();
        } else if (data && data.units) {
          // 旧形式(単一コース)は高卒認定として取り込む
          state.sections.koutei = { units: data.units || {}, wrong: data.wrong || {}, mock: data.mock || [] };
          saveState();
          toast("旧バックアップを高卒認定コースに読み込みました");
          render();
        } else { toast("形式が正しくありません"); }
      } catch (e) { toast("読み込みに失敗しました"); }
    };
    reader.readAsText(file);
    ev.target.value = "";
  }

  // ---------- テーマ ----------
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    document.getElementById("btn-theme").textContent = t === "dark" ? "☀️" : "🌙";
    document.getElementById("btn-theme-top").textContent = t === "dark" ? "☀️" : "🌙";
  }
  let theme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(theme);
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }
  document.getElementById("btn-theme").addEventListener("click", toggleTheme);
  document.getElementById("btn-theme-top").addEventListener("click", toggleTheme);

  // ---------- ナビ・初期化 ----------
  document.getElementById("btn-home").addEventListener("click", () => go("courses"));
  document.querySelectorAll(".nav-btn").forEach(btn =>
    btn.addEventListener("click", () => go(btn.dataset.view)));

  // 最後に開いていたコースがあればそのホームへ、なければコース選択へ
  if (currentSectionId && findSection(currentSectionId)) go("home");
  else go("courses");
})();
