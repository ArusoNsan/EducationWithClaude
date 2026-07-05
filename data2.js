// ============ 高卒認定マスター 教材データ(2/2)============
// 科学と人間生活・物理基礎・化学基礎・生物基礎・地学基礎

const SUBJECTS_2 = [

/* ==================== 科学と人間生活 ==================== */
{
  id: "science-life", name: "科学と人間生活", icon: "🔬", color: "#0891b2",
  desc: "身近な現象を科学の目で見る(理科の入門)",
  units: [
    {
      id: "sl-1",
      title: "光・熱・エネルギーと生活",
      minutes: 15,
      points: `
<h3>光の性質</h3>
<ul>
<li><b>反射</b>:入射角=反射角。<b>屈折</b>:光が異なる物質へ進むとき曲がる(水中のストローが曲がって見える)</li>
<li>光は<b>直進</b>する。太陽光(白色光)はプリズムで七色に分かれる(<b>分散</b>)=虹のしくみ</li>
<li>物が色づいて見えるのは、その色の光を<b>反射</b>し、他の色を吸収するため</li>
</ul>
<figure class="fig">
<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="光の反射と屈折">
  <rect x="20" y="110" width="280" height="78" fill="var(--primary)" fill-opacity="0.10"/>
  <line x1="20" y1="110" x2="300" y2="110" stroke="var(--text-sub)" stroke-width="1.5"/>
  <line x1="160" y1="30" x2="160" y2="192" stroke="var(--text-sub)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="150" y="42" font-size="10" fill="var(--text-sub)" text-anchor="end">法線</text>
  <text x="28" y="102" font-size="11" fill="var(--text-sub)">空気</text>
  <text x="28" y="128" font-size="11" fill="var(--primary)" font-weight="700">水(密)</text>
  <line x1="86" y1="44" x2="160" y2="110" stroke="var(--primary)" stroke-width="2.4" marker-end="url(#lr)"/>
  <line x1="160" y1="110" x2="234" y2="44" stroke="var(--primary)" stroke-width="2.4" marker-end="url(#lr)"/>
  <line x1="160" y1="110" x2="198" y2="186" stroke="var(--accent)" stroke-width="2.4" marker-end="url(#lo)"/>
  <path d="M160,84 A26 26 0 0 0 141,93" fill="none" stroke="var(--text-sub)" stroke-width="1"/>
  <path d="M160,84 A26 26 0 0 1 179,93" fill="none" stroke="var(--text-sub)" stroke-width="1"/>
  <path d="M160,136 A26 26 0 0 1 172,133" fill="none" stroke="var(--accent)" stroke-width="1"/>
  <text x="123" y="80" font-size="10" fill="var(--text)" text-anchor="middle">入射角</text>
  <text x="197" y="80" font-size="10" fill="var(--text)" text-anchor="middle">反射角</text>
  <text x="150" y="162" font-size="10" fill="var(--accent)" text-anchor="middle">屈折角</text>
  <defs>
    <marker id="lr" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--primary)"/></marker>
    <marker id="lo" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)"/></marker>
  </defs>
</svg>
<figcaption>反射では入射角=反射角。屈折では、水など密な物質へ入るとき光は法線側へ曲がる(屈折角<入射角)。境界で速さが変わるために起こる。</figcaption>
</figure>
<h3>熱の伝わり方</h3>
<table>
<tr><th>伝わり方</th><th>しくみ</th><th>例</th></tr>
<tr><td>伝導</td><td>物の中を熱が伝わる</td><td>金属スプーンが熱くなる</td></tr>
<tr><td>対流</td><td>温まった液体・気体が動いて熱を運ぶ</td><td>エアコンで部屋が暖まる、味噌汁の対流</td></tr>
<tr><td>放射(輻射)</td><td>離れていても電磁波で熱が伝わる</td><td>太陽の熱、たき火のそばが暖かい</td></tr>
</table>
<div class="kp"><b>金属が熱くも冷たくも感じやすいのは、熱の伝導率が大きいから。</b>木やプラスチックは伝わりにくい(断熱材)。</div>
<h3>エネルギーの移り変わり</h3>
<ul>
<li>エネルギーは形を変えても総量は変わらない(<b>エネルギー保存の法則</b>)</li>
<li>例:水力発電=位置エネルギー→運動エネルギー→電気エネルギー</li>
<li><b>再生可能エネルギー</b>:太陽光・風力・地熱・水力・バイオマス(枯渇せず、CO₂排出が少ない)</li>
<li><b>化石燃料</b>(石油・石炭・天然ガス):有限で、燃やすと二酸化炭素を排出 → 地球温暖化の一因</li>
</ul>`,
      quiz: [
        { q: "水の入ったコップに差したストローが曲がって見える現象の原因はどれか。",
          c: ["光の反射", "光の屈折", "光の直進", "光の吸収"],
          a: 1, e: "光が水と空気の境界で進む速さが変わり、進行方向が曲がる「屈折」が原因です。虹は屈折と分散によって起こります。" },
        { q: "太陽の熱が真空の宇宙空間を通って地球に届く、熱の伝わり方はどれか。",
          c: ["伝導", "対流", "放射(輻射)", "蒸発"],
          a: 2, e: "放射(輻射)は物質を介さず電磁波として熱が伝わる方法。真空でも伝わるため、太陽の熱が地球に届きます。伝導・対流は物質が必要です。" },
        { q: "赤い花が赤く見える理由として正しいものはどれか。",
          c: ["赤い光だけを吸収するから", "赤い光を反射し、他の色を吸収するから", "自ら赤い光を出しているから", "光をすべて反射するから"],
          a: 1, e: "物の色は、反射した光の色です。赤い花は赤色の光を反射し、それ以外の色を吸収するため赤く見えます。すべて反射すると白、すべて吸収すると黒に見えます。" },
        { q: "再生可能エネルギーに分類されるものはどれか。",
          c: ["石油", "石炭", "風力", "天然ガス"],
          a: 2, e: "風力・太陽光・地熱・水力・バイオマスは繰り返し利用でき、CO₂排出が少ない再生可能エネルギーです。石油・石炭・天然ガスは有限な化石燃料です。" },
        { q: "金属製のスプーンの端を熱すると、やがて手で持つ側も熱くなる。この熱の伝わり方はどれか。",
          c: ["伝導", "対流", "放射", "分散"],
          a: 0, e: "物体の中を熱が順に伝わっていくのが「伝導」です。金属は伝導率が大きいため熱が速く伝わります。" }
      ]
    },
    {
      id: "sl-2",
      title: "身近な物質と生物・微生物",
      minutes: 15,
      points: `
<h3>身のまわりの物質</h3>
<ul>
<li><b>金属の性質</b>:電気・熱を通す、みがくと光る(金属光沢)、たたくと広がる(展性)・のびる(延性)</li>
<li><b>プラスチック</b>:石油が原料。軽く加工しやすいが、自然界で分解されにくい → <b>マイクロプラスチック問題</b>。生分解性プラスチックの開発も</li>
<li><b>繊維</b>:天然繊維(綿・絹・羊毛)と合成繊維(ナイロン・ポリエステル)</li>
</ul>
<h3>食品と微生物</h3>
<div class="kp"><b>発酵</b>:微生物の働きで人間に有益な物質ができること。<b>腐敗</b>:有害な物質ができること。同じ微生物の働きでも人にとって役立つかどうかで呼び分ける。</div>
<table>
<tr><th>食品</th><th>関わる微生物</th></tr>
<tr><td>パン・酒</td><td>酵母(こうぼ)…アルコール発酵</td></tr>
<tr><td>ヨーグルト・チーズ</td><td>乳酸菌</td></tr>
<tr><td>納豆</td><td>納豆菌</td></tr>
<tr><td>味噌・しょうゆ</td><td>こうじ菌など</td></tr>
</table>
<h3>光合成と呼吸(生物の基本)</h3>
<div class="formula">光合成:二酸化炭素 + 水 +(光エネルギー)→ 栄養分(デンプン)+ 酸素<br>呼吸:栄養分 + 酸素 → 二酸化炭素 + 水 + エネルギー</div>
<figure class="fig">
<svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="光合成と呼吸">
  <path d="M78,62 Q170,18 262,62" fill="none" stroke="var(--primary)" stroke-width="2.4" marker-end="url(#pc)"/>
  <text x="170" y="26" font-size="12" fill="var(--primary)" text-anchor="middle" font-weight="700">光合成(光を使う)</text>
  <path d="M262,118 Q170,162 78,118" fill="none" stroke="var(--accent)" stroke-width="2.4" marker-end="url(#rc)"/>
  <text x="170" y="158" font-size="12" fill="var(--accent)" text-anchor="middle" font-weight="700">呼吸(エネルギーを取り出す)</text>
  <rect x="18" y="68" width="112" height="46" rx="8" fill="var(--bg-soft)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="74" y="87" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">二酸化炭素</text>
  <text x="74" y="103" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">＋ 水</text>
  <rect x="210" y="68" width="112" height="46" rx="8" fill="var(--bg-soft)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="266" y="87" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">酸素</text>
  <text x="266" y="103" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">＋ 栄養分</text>
  <defs>
    <marker id="pc" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--primary)"/></marker>
    <marker id="rc" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)"/></marker>
  </defs>
</svg>
<figcaption>光合成と呼吸は互いに逆向きの反応。植物は光合成で栄養分と酸素をつくり、呼吸でエネルギーを取り出す(動物は呼吸のみ)。</figcaption>
</figure>
<ul>
<li>植物は光合成も呼吸も行う。動物は呼吸のみ</li>
<li>食物連鎖:生産者(植物)→ 消費者(草食動物→肉食動物)→ 分解者(菌類・細菌)</li>
</ul>
<div class="kp"><b>生態系のバランス:</b> 分解者が生物の死がいや排出物を無機物に戻し、物質が循環している。外来種の侵入や環境破壊はこのバランスを崩す。</div>`,
      quiz: [
        { q: "金属に共通する性質として正しいものはどれか。",
          c: ["電気を通さない", "みがくと光沢が出て、電気や熱をよく通す", "必ず磁石につく", "水に溶けやすい"],
          a: 1, e: "金属は金属光沢を持ち、電気・熱をよく通し、たたくと広がる展性・引っぱるとのびる延性があります。磁石につくのは鉄など一部だけです。" },
        { q: "微生物の働きで人間に有益な物質ができることを何というか。",
          c: ["腐敗", "発酵", "燃焼", "蒸発"],
          a: 1, e: "同じ微生物の分解活動でも、人に有益なら「発酵」、有害なら「腐敗」と呼び分けます。ヨーグルトや納豆は発酵食品です。" },
        { q: "ヨーグルトやチーズをつくるのに主に関わる微生物はどれか。",
          c: ["酵母", "乳酸菌", "納豆菌", "カビ(こうじ菌)"],
          a: 1, e: "乳酸菌が牛乳の糖を分解して乳酸をつくることでヨーグルトやチーズができます。パン・酒は酵母、納豆は納豆菌です。" },
        { q: "植物が光のエネルギーを使い、二酸化炭素と水から栄養分と酸素をつくる働きを何というか。",
          c: ["呼吸", "光合成", "蒸散", "発酵"],
          a: 1, e: "光合成は葉緑体で行われ、二酸化炭素と水から光エネルギーを使ってデンプンと酸素をつくります。呼吸は逆に栄養分と酸素からエネルギーを取り出す働きです。" },
        { q: "生態系で、生物の死がいやふんを無機物に分解する役割を担う生物はどれか。",
          c: ["生産者", "消費者", "分解者", "外来種"],
          a: 2, e: "菌類(カビ・キノコ)や細菌などの分解者が有機物を無機物に戻すことで、物質が循環し生態系のバランスが保たれます。" }
      ]
    }
  ]
},

/* ==================== 物理基礎 ==================== */
{
  id: "physics", name: "物理基礎", icon: "⚛️", color: "#4f46e5",
  desc: "運動・力・エネルギー・波・電気",
  units: [
    {
      id: "phys-1",
      title: "運動と力",
      minutes: 20,
      points: `
<h3>速さの計算</h3>
<div class="formula">速さ = 距離 ÷ 時間   (v = x / t)<br>例:120kmを2時間で進む → 120 ÷ 2 = 60 km/h</div>
<ul>
<li><b>等速直線運動</b>:速さが一定。距離は時間に比例(v-tグラフは水平な直線、その下の面積が距離)</li>
<li><b>等加速度運動</b>:加速度が一定。自由落下は重力加速度 g ≒ 9.8 m/s² で加速</li>
<li>加速度 = 速度の変化 ÷ かかった時間</li>
</ul>
<figure class="fig">
<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="v-tグラフ">
  <rect x="50" y="100" width="140" height="65" fill="var(--accent)" fill-opacity="0.16"/>
  <line x1="50" y1="165" x2="305" y2="165" stroke="var(--text-sub)" stroke-width="1.5"/>
  <line x1="50" y1="25" x2="50" y2="165" stroke="var(--text-sub)" stroke-width="1.5"/>
  <polygon points="305,165 297,161 297,169" fill="var(--text-sub)"/>
  <polygon points="50,25 46,33 54,33" fill="var(--text-sub)"/>
  <text x="300" y="182" font-size="12" fill="var(--text-sub)">t(時間)</text>
  <text x="20" y="30" font-size="12" fill="var(--text-sub)">v(速さ)</text>
  <line x1="50" y1="100" x2="285" y2="100" stroke="var(--accent)" stroke-width="2.6"/>
  <text x="200" y="94" font-size="12" fill="var(--accent)" font-weight="700">等速直線運動</text>
  <line x1="50" y1="165" x2="245" y2="50" stroke="var(--primary)" stroke-width="2.6"/>
  <text x="150" y="70" font-size="12" fill="var(--primary)" font-weight="700">等加速度運動</text>
  <text x="120" y="140" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">面積 = 距離</text>
</svg>
<figcaption>速さと時間のグラフ。等速は水平線、等加速度は傾いた直線(傾き=加速度)。グラフとt軸で囲む面積が進んだ距離。</figcaption>
</figure>
<h3>ニュートンの運動の3法則</h3>
<table>
<tr><th>法則</th><th>内容</th></tr>
<tr><td>①慣性の法則</td><td>力がはたらかなければ、静止は静止、運動は等速直線運動を続ける</td></tr>
<tr><td>②運動の法則</td><td>力を加えると加速度が生じる。<b>F = ma</b>(力=質量×加速度)</td></tr>
<tr><td>③作用・反作用</td><td>物体Aが物体Bに力を加えると、BもAに同じ大きさで逆向きの力を返す</td></tr>
</table>
<div class="kp"><b>運動方程式 F = ma:</b> 力(N)= 質量(kg)× 加速度(m/s²)。同じ力でも質量が大きいほど加速しにくい。</div>
<h3>いろいろな力</h3>
<ul>
<li><b>重力</b>:地球が物を引く力。重さ(N)= 質量(kg)× g(9.8)</li>
<li><b>垂直抗力</b>:面が物体を押し返す力 / <b>摩擦力</b>:動きを妨げる力 / <b>張力</b>:糸が引く力</li>
<li>力のつり合い:静止している物体にはたらく力の合計は0</li>
</ul>
<div class="warn"><b>質量と重さの違い:</b> 質量(kg)は場所が変わっても不変。重さ(N)は重力の大きさで、月では地球の約6分の1になる。</div>`,
      quiz: [
        { q: "180kmの道のりを3時間かけて進んだときの平均の速さはどれか。",
          c: ["30 km/h", "60 km/h", "90 km/h", "540 km/h"],
          a: 1, e: "速さ = 距離 ÷ 時間 = 180 ÷ 3 = 60 km/h。速さ・距離・時間の関係は物理基礎の最重要公式です。" },
        { q: "「力がはたらかなければ、運動している物体は等速直線運動を続ける」という法則はどれか。",
          c: ["慣性の法則", "運動の法則", "作用・反作用の法則", "万有引力の法則"],
          a: 0, e: "慣性の法則(運動の第1法則)です。電車が急停止すると体が前へ傾くのは、体が運動を続けようとするためです。" },
        { q: "運動方程式 F = ma で、質量2kgの物体に4Nの力を加えたときの加速度はどれか。",
          c: ["0.5 m/s²", "2 m/s²", "8 m/s²", "6 m/s²"],
          a: 1, e: "F = ma より a = F ÷ m = 4 ÷ 2 = 2 m/s²。力を質量で割ると加速度が求まります。" },
        { q: "作用・反作用の法則の例として正しいものはどれか。",
          c: ["ボールを投げると手が疲れる", "壁を押すと、壁も同じ大きさで手を押し返す", "重い物ほど落ちるのが速い", "動いている物は止まる"],
          a: 1, e: "作用・反作用は「AがBを押すと、BもAを同じ大きさ・逆向きで押し返す」という法則です。ロケットが進むのもガスを噴射した反作用によるものです。" },
        { q: "質量と重さの関係について正しい記述はどれか。",
          c: ["月へ行くと質量が6分の1になる", "月へ行くと重さ(重力)が約6分の1になるが、質量は変わらない", "質量と重さは常に等しい", "重さは場所によって変わらない"],
          a: 1, e: "質量(kg)は物質そのものの量で場所によらず一定です。重さ(N)は重力の大きさなので、重力の弱い月では地球の約6分の1になります。" }
      ]
    },
    {
      id: "phys-2",
      title: "エネルギー・波・電気",
      minutes: 20,
      points: `
<h3>仕事とエネルギー</h3>
<div class="formula">仕事(J)= 力(N)× 力の向きに動いた距離(m)<br>W = F × x</div>
<ul>
<li><b>運動エネルギー</b>:動いている物体が持つエネルギー(速い・重いほど大きい)</li>
<li><b>位置エネルギー</b>:高い所にある物体が持つエネルギー(高い・重いほど大きい)</li>
<li><b>力学的エネルギー保存:</b> 摩擦などがなければ、運動エネルギー+位置エネルギーの合計は一定(振り子・ジェットコースター)</li>
</ul>
<h3>波の性質</h3>
<table>
<tr><th>用語</th><th>意味</th></tr>
<tr><td>波長</td><td>1つの波の長さ(山から山まで)</td></tr>
<tr><td>振動数(周波数)</td><td>1秒間の振動回数(単位Hz)</td></tr>
<tr><td>振幅</td><td>振動の大きさ(音では大きさ、光では明るさ)</td></tr>
</table>
<figure class="fig">
<svg viewBox="0 0 340 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="波の波長と振幅">
  <line x1="20" y1="80" x2="320" y2="80" stroke="var(--text-sub)" stroke-width="1" stroke-dasharray="4 4"/>
  <path d="M 20 80 Q 50 0 80 80 Q 110 160 140 80 Q 170 0 200 80 Q 230 160 260 80 Q 290 0 320 80" fill="none" stroke="var(--primary)" stroke-width="2.6"/>
  <line x1="50" y1="40" x2="50" y2="20" stroke="var(--text-sub)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="170" y1="40" x2="170" y2="20" stroke="var(--text-sub)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="50" y1="24" x2="170" y2="24" stroke="var(--accent)" stroke-width="1.6"/>
  <polygon points="50,24 61,20 61,28" fill="var(--accent)"/>
  <polygon points="170,24 159,20 159,28" fill="var(--accent)"/>
  <text x="110" y="16" font-size="12" fill="var(--accent)" text-anchor="middle" font-weight="700">波長 λ</text>
  <line x1="110" y1="80" x2="110" y2="120" stroke="var(--ng)" stroke-width="1.6"/>
  <polygon points="110,80 106,91 114,91" fill="var(--ng)"/>
  <polygon points="110,120 106,109 114,109" fill="var(--ng)"/>
  <text x="118" y="104" font-size="12" fill="var(--ng)" font-weight="700">振幅</text>
  <text x="316" y="74" font-size="11" fill="var(--text-sub)" text-anchor="end">静止位置</text>
</svg>
<figcaption>波長は山から山(谷から谷)までの長さ、振幅は静止位置から山(谷)までの高さ。1秒間の波の数が振動数。</figcaption>
</figure>
<div class="formula">波の速さ = 波長 × 振動数  (v = fλ)</div>
<ul>
<li><b>音</b>:空気の振動。高い音=振動数が多い、大きい音=振幅が大きい。真空では伝わらない</li>
<li>光は音よりずっと速い(だから雷は光ってから音が遅れて届く)</li>
</ul>
<h3>電気</h3>
<div class="formula">オームの法則:電圧(V)= 電流(A)× 抵抗(Ω)  V = IR</div>
<ul>
<li>電力(W)= 電圧(V)× 電流(A)。電力量(消費電力量)= 電力 × 時間</li>
<li><b>直列つなぎ</b>:電流はどこも同じ、電圧は分かれる。<b>並列つなぎ</b>:電圧はどこも同じ、電流は分かれる</li>
<li>日本の家庭用電源は<b>交流</b>。乾電池は<b>直流</b></li>
</ul>`,
      quiz: [
        { q: "10Nの力で物体を力の向きに3m動かしたときの仕事はどれか。",
          c: ["3 J", "13 J", "30 J", "0.3 J"],
          a: 2, e: "仕事 = 力 × 距離 = 10 × 3 = 30 J(ジュール)。物体を動かす向きに加えた力と移動距離の積です。" },
        { q: "摩擦がないとき、振り子が振れても一定に保たれるものはどれか。",
          c: ["運動エネルギーだけ", "位置エネルギーだけ", "運動エネルギーと位置エネルギーの合計", "空気抵抗"],
          a: 2, e: "力学的エネルギー保存の法則により、運動エネルギーと位置エネルギーは互いに移り変わりますが、その合計は一定に保たれます。" },
        { q: "電圧が6V、抵抗が3Ωのとき、流れる電流はオームの法則より何Aか。",
          c: ["0.5 A", "2 A", "9 A", "18 A"],
          a: 1, e: "V = IR より I = V ÷ R = 6 ÷ 3 = 2 A。電圧を抵抗で割ると電流が求まります。" },
        { q: "音について正しい記述はどれか。",
          c: ["真空中でもよく伝わる", "高い音は振動数が多い", "光より速く伝わる", "振幅が大きいほど音が高くなる"],
          a: 1, e: "音は空気などの振動なので真空では伝わりません。振動数が多いほど高い音、振幅が大きいほど大きい音になります。光の方がはるかに速いです。" },
        { q: "日本の一般家庭のコンセントから供給される電気はどれか。",
          c: ["直流", "交流", "静電気", "電磁波"],
          a: 1, e: "家庭用電源は電流の向きが周期的に入れ替わる交流です。乾電池やUSBは向きが一定の直流です。" }
      ]
    }
  ]
},

/* ==================== 化学基礎 ==================== */
{
  id: "chemistry", name: "化学基礎", icon: "🧪", color: "#db2777",
  desc: "物質の構成・化学反応・酸と塩基",
  units: [
    {
      id: "chem-1",
      title: "物質の成り立ちと原子",
      minutes: 20,
      points: `
<h3>物質の分類</h3>
<ul>
<li><b>純物質</b>:1種類の物質(水、酸素、食塩)<b>混合物</b>:2種類以上が混ざったもの(空気、海水)</li>
<li>純物質は<b>単体</b>(1種類の元素:酸素O₂、鉄Fe)と<b>化合物</b>(2種類以上の元素:水H₂O、二酸化炭素CO₂)に分かれる</li>
</ul>
<h3>原子の構造</h3>
<div class="kp">原子は中心の<b>原子核</b>(+の陽子と電気を持たない中性子)と、まわりを回る<b>電子</b>(−)からなる。<br>陽子の数=<b>原子番号</b>。陽子数と電子数が等しいので原子全体は電気的に中性。</div>
<figure class="fig">
<svg viewBox="0 0 320 218" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="原子の構造">
  <ellipse cx="160" cy="100" rx="115" ry="46" fill="none" stroke="var(--text-sub)" stroke-width="1.3" transform="rotate(32 160 100)"/>
  <ellipse cx="160" cy="100" rx="115" ry="46" fill="none" stroke="var(--text-sub)" stroke-width="1.3" transform="rotate(-32 160 100)"/>
  <circle cx="257" cy="161" r="8" fill="var(--primary)"/><text x="257" y="165" font-size="11" fill="#fff" text-anchor="middle" font-weight="800">−</text>
  <circle cx="63" cy="39" r="8" fill="var(--primary)"/><text x="63" y="43" font-size="11" fill="#fff" text-anchor="middle" font-weight="800">−</text>
  <circle cx="257" cy="39" r="8" fill="var(--primary)"/><text x="257" y="43" font-size="11" fill="#fff" text-anchor="middle" font-weight="800">−</text>
  <circle cx="63" cy="161" r="8" fill="var(--primary)"/><text x="63" y="165" font-size="11" fill="#fff" text-anchor="middle" font-weight="800">−</text>
  <circle cx="151" cy="93" r="11" fill="var(--ng)"/><text x="151" y="98" font-size="12" fill="#fff" text-anchor="middle" font-weight="800">+</text>
  <circle cx="171" cy="95" r="11" fill="var(--text-sub)"/>
  <circle cx="158" cy="112" r="11" fill="var(--ng)"/><text x="158" y="117" font-size="12" fill="#fff" text-anchor="middle" font-weight="800">+</text>
  <circle cx="60" cy="204" r="6" fill="var(--ng)"/><text x="70" y="208" font-size="11" fill="var(--text-sub)">陽子(+)</text>
  <circle cx="145" cy="204" r="6" fill="var(--text-sub)"/><text x="155" y="208" font-size="11" fill="var(--text-sub)">中性子</text>
  <circle cx="228" cy="204" r="6" fill="var(--primary)"/><text x="238" y="208" font-size="11" fill="var(--text-sub)">電子(−)</text>
</svg>
<figcaption>中心の原子核(陽子+中性子)のまわりを電子が回る。陽子の数が原子番号を決める。</figcaption>
</figure>
<ul>
<li><b>同位体</b>:陽子数が同じで中性子数が異なる原子(例:水素の¹Hと²H)</li>
<li><b>イオン</b>:原子が電子を失う(陽イオン)・受け取る(陰イオン)ことで電気を帯びたもの</li>
</ul>
<h3>周期表の見方</h3>
<table>
<tr><th>族</th><th>名称</th><th>特徴</th></tr>
<tr><td>1族</td><td>アルカリ金属(H除く)</td><td>反応しやすい。1価の陽イオンになりやすい</td></tr>
<tr><td>17族</td><td>ハロゲン</td><td>1価の陰イオンになりやすい</td></tr>
<tr><td>18族</td><td>貴ガス(希ガス)</td><td>安定でほとんど反応しない</td></tr>
</table>
<h3>化学結合</h3>
<ul>
<li><b>イオン結合</b>:陽イオンと陰イオンが引き合う(塩化ナトリウム NaCl)</li>
<li><b>共有結合</b>:原子どうしが電子を共有(水 H₂O、二酸化炭素)</li>
<li><b>金属結合</b>:金属原子が自由電子で結びつく(電気をよく通す理由)</li>
</ul>`,
      quiz: [
        { q: "次のうち「混合物」はどれか。",
          c: ["水(H₂O)", "酸素(O₂)", "海水", "鉄(Fe)"],
          a: 2, e: "海水は水や塩などさまざまな物質が混ざった混合物です。水・酸素・鉄はそれぞれ1種類でできた純物質です。" },
        { q: "1種類の元素だけからできている「単体」はどれか。",
          c: ["水(H₂O)", "二酸化炭素(CO₂)", "酸素(O₂)", "食塩(NaCl)"],
          a: 2, e: "酸素O₂は酸素原子だけからなる単体です。水・二酸化炭素・食塩は2種類以上の元素からなる化合物です。" },
        { q: "原子の中心にある原子核を構成する粒子の組み合わせはどれか。",
          c: ["陽子と電子", "陽子と中性子", "電子と中性子", "電子のみ"],
          a: 1, e: "原子核は+の電気を持つ陽子と電気を持たない中性子からできています。−の電気を持つ電子は原子核のまわりに存在します。" },
        { q: "原子番号は何の数で決まるか。",
          c: ["中性子の数", "電子の数の2倍", "陽子の数", "原子核と電子の合計"],
          a: 2, e: "原子番号 = 陽子の数です。原子は陽子数と電子数が等しいため電気的に中性になっています。" },
        { q: "塩化ナトリウム(NaCl)を形づくっている化学結合はどれか。",
          c: ["共有結合", "イオン結合", "金属結合", "水素結合"],
          a: 1, e: "ナトリウムイオン(陽イオン)と塩化物イオン(陰イオン)が静電気力で引き合うイオン結合でできています。金属どうしなら金属結合、非金属どうしなら共有結合です。" }
      ]
    },
    {
      id: "chem-2",
      title: "化学反応・酸と塩基・酸化還元",
      minutes: 20,
      points: `
<h3>物質量(モル)</h3>
<div class="kp">原子や分子はとても小さく数が多いので、<b>6.0×10²³個を1mol(モル)</b>としてまとめて数える(アボガドロ定数)。<br>物質1molの質量(g)=その物質のモル質量(原子量・分子量にgをつけた値)。</div>
<h3>化学変化と化学反応式</h3>
<ul>
<li>反応の前後で原子の種類と数は変わらない(<b>質量保存の法則</b>)→ だから係数で両辺の原子数をそろえる</li>
<li>例:2H₂ + O₂ → 2H₂O(水素と酸素から水)</li>
</ul>
<h3>酸と塩基</h3>
<table>
<tr><th></th><th>性質</th><th>例</th></tr>
<tr><td>酸</td><td>水に溶けて水素イオン H⁺ を出す。青リトマス紙を赤に。すっぱい</td><td>塩酸、硫酸、酢酸</td></tr>
<tr><td>塩基(アルカリ)</td><td>水に溶けて水酸化物イオン OH⁻ を出す。赤リトマス紙を青に。ぬるぬる</td><td>水酸化ナトリウム、アンモニア</td></tr>
</table>
<div class="kp"><b>pH(ピーエイチ):</b> 7が中性、7より小さいほど酸性が強い、7より大きいほど塩基性(アルカリ性)が強い。</div>
<figure class="fig">
<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="pHスケール">
  <defs>
    <linearGradient id="phgrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d1495b"/>
      <stop offset="50%" stop-color="#2a9d5c"/>
      <stop offset="100%" stop-color="#2b6cb0"/>
    </linearGradient>
  </defs>
  <rect x="30" y="42" width="280" height="26" rx="4" fill="url(#phgrad)"/>
  <text x="30" y="84" font-size="11" fill="var(--text)" text-anchor="middle">0</text>
  <text x="170" y="84" font-size="11" fill="var(--text)" text-anchor="middle">7</text>
  <text x="310" y="84" font-size="11" fill="var(--text)" text-anchor="middle">14</text>
  <line x1="170" y1="36" x2="170" y2="74" stroke="var(--text)" stroke-width="2"/>
  <text x="170" y="28" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">中性 (pH7)</text>
  <text x="34" y="108" font-size="12" fill="#d1495b" font-weight="700">← 酸性(H⁺)</text>
  <text x="306" y="108" font-size="12" fill="#2b6cb0" text-anchor="end" font-weight="700">塩基性(OH⁻) →</text>
</svg>
<figcaption>pHは0〜14。7が中性で、小さいほど酸性(塩酸など)、大きいほど塩基性(水酸化ナトリウムなど)が強い。</figcaption>
</figure>
<div class="formula">中和:酸 + 塩基 → 塩(えん)+ 水<br>例:HCl + NaOH → NaCl + H₂O</div>
<h3>酸化と還元</h3>
<ul>
<li><b>酸化</b>:酸素と結びつく(または電子を失う)。鉄がさびる、ものが燃える</li>
<li><b>還元</b>:酸素を失う(または電子を受け取る)。酸化と還元は必ず同時に起こる</li>
<li>金属のイオンへのなりやすさ=<b>イオン化傾向</b>。大きい金属ほど酸化されやすい(さびやすい)</li>
</ul>`,
      quiz: [
        { q: "アボガドロ定数(1molあたりの粒子の数)はおよそいくつか。",
          c: ["6.0×10²³個", "3.14個", "100個", "1000個"],
          a: 0, e: "1molは約6.0×10²³個の粒子の集まりです。膨大な数の原子・分子をまとめて扱うための単位が物質量(mol)です。" },
        { q: "化学反応式で両辺の係数をそろえる理由の根拠となる法則はどれか。",
          c: ["エネルギー保存の法則", "質量保存の法則", "オームの法則", "慣性の法則"],
          a: 1, e: "反応の前後で原子の種類と数は変化しない(質量保存の法則)ため、両辺で各原子の数が等しくなるよう係数を調整します。" },
        { q: "酸性の水溶液に共通する性質はどれか。",
          c: ["水に溶けて水酸化物イオンOH⁻を生じる", "水に溶けて水素イオンH⁺を生じる", "赤色リトマス紙を青色にする", "手につくとぬるぬるする"],
          a: 1, e: "酸は水中で水素イオンH⁺を生じ、青リトマス紙を赤に変えます。OH⁻を生じ赤リトマスを青にし、ぬるぬるするのは塩基(アルカリ)の性質です。" },
        { q: "酸と塩基が反応して塩と水ができる反応を何というか。",
          c: ["酸化", "還元", "中和", "燃焼"],
          a: 2, e: "中和反応です。塩酸と水酸化ナトリウムから食塩と水ができる(HCl + NaOH → NaCl + H₂O)のが代表例です。" },
        { q: "鉄がさびる現象は化学的にどれにあたるか。",
          c: ["還元", "酸化", "中和", "蒸発"],
          a: 1, e: "鉄が空気中の酸素と結びついてさびる(酸化鉄になる)のは酸化の一種です。酸素と結びつくのが酸化、酸素を失うのが還元です。" }
      ]
    }
  ]
},

/* ==================== 生物基礎 ==================== */
{
  id: "biology", name: "生物基礎", icon: "🧬", color: "#65a30d",
  desc: "細胞・遺伝子・からだの調節・生態系",
  units: [
    {
      id: "bio-1",
      title: "細胞と遺伝子(DNA)",
      minutes: 20,
      points: `
<h3>細胞の基本</h3>
<div class="kp">すべての生物は<b>細胞</b>からできている。細胞には核を持つ<b>真核細胞</b>(動物・植物・菌類)と、核を持たない<b>原核細胞</b>(細菌)がある。</div>
<table>
<tr><th>構造</th><th>はたらき</th></tr>
<tr><td>核</td><td>DNA(遺伝情報)を含む。細胞の司令塔</td></tr>
<tr><td>細胞膜</td><td>細胞を包み、物質の出入りを調節</td></tr>
<tr><td>ミトコンドリア</td><td>呼吸を行いエネルギー(ATP)をつくる</td></tr>
<tr><td>葉緑体(植物)</td><td>光合成を行う</td></tr>
<tr><td>細胞壁(植物)</td><td>細胞を保護・支える</td></tr>
</table>
<figure class="fig">
<svg viewBox="0 0 330 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="植物細胞の模式図">
  <rect x="22" y="28" width="180" height="152" rx="26" fill="var(--ok)" fill-opacity="0.10" stroke="var(--ok)" stroke-width="3"/>
  <rect x="30" y="36" width="164" height="136" rx="20" fill="none" stroke="var(--text-sub)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="86" cy="92" r="29" fill="var(--primary)" fill-opacity="0.20" stroke="var(--primary)" stroke-width="2"/>
  <circle cx="92" cy="96" r="8" fill="var(--primary)"/>
  <ellipse cx="150" cy="118" rx="25" ry="12" fill="var(--ng)" fill-opacity="0.18" stroke="var(--ng)" stroke-width="1.8"/>
  <path d="M 130 118 Q 140 110 150 118 Q 160 126 170 118" fill="none" stroke="var(--ng)" stroke-width="1.4"/>
  <ellipse cx="108" cy="150" rx="22" ry="11" fill="var(--ok)" fill-opacity="0.35" stroke="var(--ok)" stroke-width="1.6" transform="rotate(-18 108 150)"/>
  <ellipse cx="64" cy="142" rx="19" ry="10" fill="var(--ok)" fill-opacity="0.35" stroke="var(--ok)" stroke-width="1.6" transform="rotate(14 64 142)"/>
  <line x1="180" y1="40" x2="214" y2="44" stroke="var(--text-sub)" stroke-width="1"/><text x="218" y="48" font-size="11.5" fill="var(--text)" font-weight="700">細胞壁</text>
  <line x1="112" y1="90" x2="214" y2="84" stroke="var(--text-sub)" stroke-width="1"/><text x="218" y="88" font-size="11.5" fill="var(--text)" font-weight="700">核(DNA)</text>
  <line x1="120" y1="150" x2="214" y2="124" stroke="var(--text-sub)" stroke-width="1"/><text x="218" y="128" font-size="11.5" fill="var(--text)" font-weight="700">葉緑体</text>
  <line x1="168" y1="120" x2="214" y2="164" stroke="var(--text-sub)" stroke-width="1"/><text x="218" y="168" font-size="11.5" fill="var(--text)" font-weight="700">ミトコンドリア</text>
</svg>
<figcaption>植物細胞の模式図。破線が細胞膜。細胞壁・葉緑体は植物細胞に特有で、動物細胞にはない。</figcaption>
</figure>
<h3>エネルギーとATP</h3>
<p>生命活動のエネルギーは<b>ATP</b>という物質でやりとりされる(エネルギーの通貨)。呼吸で栄養分を分解してATPをつくる。</p>
<h3>遺伝子とDNA</h3>
<ul>
<li><b>DNA</b>:遺伝情報の本体。二重らせん構造(ワトソンとクリックが解明)</li>
<li>DNAの一部で、体をつくるタンパク質の設計図となる部分が<b>遺伝子</b></li>
<li>1つの個体のすべての遺伝情報を<b>ゲノム</b>という</li>
<li>体細胞分裂:1個の細胞が2個に分かれる。分裂の前にDNAが正確に<b>複製</b>されるので、同じ遺伝情報が受け継がれる</li>
</ul>
<div class="kp"><b>DNAの塩基:</b> A(アデニン)・T(チミン)・G(グアニン)・C(シトシン)の4種類。<b>AとT、GとC</b>が必ずペアになる(相補性)。</div>`,
      quiz: [
        { q: "細胞内で呼吸を行い、生命活動に必要なエネルギーをつくり出す構造はどれか。",
          c: ["核", "ミトコンドリア", "細胞壁", "液胞"],
          a: 1, e: "ミトコンドリアは酸素を使って栄養分を分解し、エネルギー(ATP)をつくる「細胞の発電所」です。核はDNAを収める司令塔です。" },
        { q: "核を持たない細胞(原核細胞)からできている生物はどれか。",
          c: ["ヒト", "サクラ", "大腸菌(細菌)", "キノコ"],
          a: 2, e: "細菌(大腸菌など)は核を持たない原核細胞でできています。動物・植物・菌類は核を持つ真核細胞です。" },
        { q: "DNAの構造として正しいものはどれか。",
          c: ["一本の直線", "二重らせん構造", "球状のかたまり", "網目状"],
          a: 1, e: "DNAは2本の鎖がらせん状にねじれた二重らせん構造をしています。ワトソンとクリックによって明らかにされました。" },
        { q: "DNAの塩基の組み合わせ(相補性)として正しいものはどれか。",
          c: ["AとG、TとC", "AとT、GとC", "AとC、TとG", "すべての塩基が自由に結合する"],
          a: 1, e: "DNAではA(アデニン)とT(チミン)、G(グアニン)とC(シトシン)が必ずペアになります。この規則性がDNA複製の正確さを支えています。" },
        { q: "細胞分裂の前にDNAが正確にコピーされることを何というか。",
          c: ["複製", "呼吸", "光合成", "蒸散"],
          a: 0, e: "DNAの複製です。分裂前にDNAが正確に複製されるため、新しくできた細胞にも同じ遺伝情報が伝わります。" }
      ]
    },
    {
      id: "bio-2",
      title: "からだの調節と免疫",
      minutes: 20,
      points: `
<h3>体内環境の維持(恒常性・ホメオスタシス)</h3>
<p>体温・血糖・水分などを一定に保とうとする働きを<b>恒常性(ホメオスタシス)</b>という。<b>自律神経</b>と<b>ホルモン</b>が協力して調節する。</p>
<table>
<tr><th>自律神経</th><th>働き</th></tr>
<tr><td>交感神経</td><td>活動・緊張時に働く(心拍増加・血圧上昇)</td></tr>
<tr><td>副交感神経</td><td>安静・リラックス時に働く(心拍減少・消化促進)</td></tr>
</table>
<h3>ホルモンと血糖の調節</h3>
<ul>
<li>ホルモンは<b>内分泌腺</b>から血液中に分泌され、特定の器官に作用する</li>
<li><b>血糖(血液中の糖)を下げる</b>ホルモンは<b>インスリン</b>(すい臓から)。不足すると糖尿病</li>
<li>血糖を上げるホルモン:グルカゴン、アドレナリンなど</li>
</ul>
<figure class="fig">
<svg viewBox="0 0 340 178" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="血糖の調節">
  <path d="M62,62 Q114,22 164,60" fill="none" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#fi)"/>
  <text x="110" y="26" font-size="10" fill="var(--primary)" text-anchor="middle" font-weight="700">インスリンで下げる</text>
  <path d="M278,62 Q226,22 176,60" fill="none" stroke="var(--accent)" stroke-width="2.2" marker-end="url(#fg)"/>
  <text x="232" y="26" font-size="10" fill="var(--accent)" text-anchor="middle" font-weight="700">グルカゴン等で上げる</text>
  <path d="M148,110 Q100,150 62,112" fill="none" stroke="var(--text-sub)" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#fd)"/>
  <text x="96" y="166" font-size="9.5" fill="var(--text-sub)" text-anchor="middle">食後に上昇</text>
  <path d="M192,110 Q240,150 278,112" fill="none" stroke="var(--text-sub)" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#fd)"/>
  <text x="244" y="166" font-size="9.5" fill="var(--text-sub)" text-anchor="middle">空腹で低下</text>
  <rect x="18" y="64" width="82" height="44" rx="8" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.4"/>
  <text x="59" y="91" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">血糖 高い</text>
  <rect x="129" y="64" width="82" height="44" rx="8" fill="var(--accent)" fill-opacity="0.16" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="170" y="84" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">血糖 正常</text>
  <text x="170" y="99" font-size="9.5" fill="var(--text-sub)" text-anchor="middle">一定に保つ</text>
  <rect x="240" y="64" width="82" height="44" rx="8" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.4"/>
  <text x="281" y="91" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="700">血糖 低い</text>
  <defs>
    <marker id="fi" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--primary)"/></marker>
    <marker id="fg" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)"/></marker>
    <marker id="fd" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-sub)"/></marker>
  </defs>
</svg>
<figcaption>血糖が上がればインスリンが下げ、下がればグルカゴン等が上げて、つねに正常へ戻す(負のフィードバック)。すい臓が中心的に働く。</figcaption>
</figure>
<h3>肝臓と腎臓</h3>
<ul>
<li><b>肝臓</b>:栄養分の貯蔵、有害物質の解毒、胆汁の生成</li>
<li><b>腎臓</b>:血液をろ過して尿をつくり、不要物や余分な水分を排出</li>
</ul>
<h3>免疫(体を守るしくみ)</h3>
<div class="kp"><b>自然免疫</b>:生まれつき備わる。白血球が病原体を食べる(食作用)など、素早く広く対応。<br><b>獲得免疫(適応免疫)</b>:特定の病原体を記憶し、次はすばやく強く対応する。リンパ球(T細胞・B細胞)が中心。</div>
<ul>
<li>一度かかると強い抵抗力ができる=免疫の記憶。これを利用したのが<b>ワクチン</b>(弱めた病原体などを接種し記憶をつくる)</li>
<li>アレルギー:免疫が過剰に反応してしまうこと(花粉症など)</li>
</ul>`,
      quiz: [
        { q: "体温や血糖などの体内環境を一定に保とうとする働きを何というか。",
          c: ["恒常性(ホメオスタシス)", "光合成", "遺伝", "進化"],
          a: 0, e: "恒常性(ホメオスタシス)です。自律神経とホルモンが協調して、体内環境を一定範囲に保っています。" },
        { q: "運動や緊張したときに主に働き、心拍数を上げる自律神経はどれか。",
          c: ["交感神経", "副交感神経", "運動神経", "感覚神経"],
          a: 0, e: "交感神経は活動・緊張・興奮の場面で優位になり、心拍数や血圧を上げます。安静時には副交感神経が優位になります。" },
        { q: "血糖(血液中の糖の濃度)を下げる働きを持つホルモンはどれか。",
          c: ["アドレナリン", "グルカゴン", "インスリン", "成長ホルモン"],
          a: 2, e: "インスリンはすい臓から分泌され、血糖を下げる唯一のホルモンです。不足したり効きにくくなると糖尿病になります。" },
        { q: "血液をろ過して尿をつくり、不要物を排出する器官はどれか。",
          c: ["肝臓", "腎臓", "心臓", "肺"],
          a: 1, e: "腎臓は血液をろ過して余分な水分や老廃物を尿として排出します。肝臓は解毒や栄養の貯蔵を担います。" },
        { q: "ワクチンが病気の予防に役立つしくみとして正しいものはどれか。",
          c: ["病原体を直接殺す薬だから", "弱めた病原体などで免疫の記憶をあらかじめつくるから", "体温を上げて菌を殺すから", "栄養を補給するから"],
          a: 1, e: "ワクチンは弱毒化・無毒化した病原体やその一部を接種して、免疫にその病原体を記憶させます。実際に感染したとき素早く強く対応できるようになります。" }
      ]
    }
  ]
},

/* ==================== 地学基礎 ==================== */
{
  id: "earth", name: "地学基礎", icon: "🌏", color: "#0369a1",
  desc: "地球・大気と海洋・宇宙",
  units: [
    {
      id: "earth-1",
      title: "地球の内部と地震・火山",
      minutes: 20,
      points: `
<h3>地球の構造</h3>
<div class="kp">地球は外側から<b>地殻</b>(岩石の薄い層)→<b>マントル</b>(岩石。ゆっくり流動)→<b>核</b>(主に鉄。外核は液体、内核は固体)の層構造。</div>
<figure class="fig">
<svg viewBox="0 0 330 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="地球の内部構造">
  <circle cx="115" cy="120" r="96" fill="var(--accent)" fill-opacity="0.18" stroke="none"/>
  <circle cx="115" cy="120" r="100" fill="none" stroke="var(--text-sub)" stroke-width="3"/>
  <circle cx="115" cy="120" r="52" fill="var(--ng)" fill-opacity="0.28" stroke="var(--ng)" stroke-width="1.2"/>
  <circle cx="115" cy="120" r="24" fill="var(--ng)" fill-opacity="0.60"/>
  <line x1="209" y1="89" x2="238" y2="70" stroke="var(--text-sub)" stroke-width="1"/><text x="242" y="74" font-size="11.5" fill="var(--text)" font-weight="700">地殻</text>
  <line x1="188" y1="120" x2="238" y2="112" stroke="var(--text-sub)" stroke-width="1"/><text x="242" y="116" font-size="11.5" fill="var(--text)" font-weight="700">マントル</text>
  <line x1="150" y1="132" x2="238" y2="154" stroke="var(--text-sub)" stroke-width="1"/><text x="242" y="158" font-size="11.5" fill="var(--text)" font-weight="700">外核(液体)</text>
  <line x1="122" y1="120" x2="238" y2="196" stroke="var(--text-sub)" stroke-width="1"/><text x="242" y="200" font-size="11.5" fill="var(--text)" font-weight="700">内核(固体)</text>
</svg>
<figcaption>外側から地殻→マントル→外核→内核。核は主に鉄で、外核は液体、内核は固体。</figcaption>
</figure>
<h3>プレートテクトニクス</h3>
<ul>
<li>地表は十数枚の<b>プレート</b>(硬い板)に分かれ、マントルの動きに乗って移動している</li>
<li>プレートの境界で地震や火山が集中して起こる。日本は4枚のプレートの境界にある</li>
</ul>
<h3>地震</h3>
<table>
<tr><th>用語</th><th>意味</th></tr>
<tr><td>震源</td><td>地下で地震が発生した場所</td></tr>
<tr><td>震央</td><td>震源の真上の地表の点</td></tr>
<tr><td>マグニチュード(M)</td><td>地震そのものの規模(エネルギーの大きさ)</td></tr>
<tr><td>震度</td><td>各地点での揺れの大きさ(0〜7の10段階)</td></tr>
</table>
<div class="kp"><b>P波とS波:</b> 速いP波(初期微動)が先に届き、遅いS波(主要動)が後から届く。この時間差(初期微動継続時間)が長いほど震源は遠い。緊急地震速報はP波を検知して発表する。</div>
<h3>火山</h3>
<ul>
<li>マグマが地表に出たものが溶岩。マグマの<b>ねばりけ</b>で火山の形が変わる</li>
<li>ねばりけが弱い→なだらかな形(盾状火山)、強い→ドーム状で爆発的な噴火</li>
<li>火成岩:マグマが地表付近で急に冷えた<b>火山岩</b>、地下でゆっくり冷えた<b>深成岩</b></li>
</ul>`,
      quiz: [
        { q: "地球の中心部にある、主に鉄でできている層はどれか。",
          c: ["地殻", "マントル", "核", "大気"],
          a: 2, e: "地球は地殻→マントル→核の層構造で、中心の核は主に鉄でできています(外核は液体、内核は固体)。" },
        { q: "地震そのものの規模(放出エネルギーの大きさ)を表すものはどれか。",
          c: ["震度", "マグニチュード", "震央", "初期微動"],
          a: 1, e: "マグニチュードは地震そのものの規模を表します。一方、震度は各地点での揺れの大きさで、同じ地震でも場所により震度は異なります。" },
        { q: "地震で、先に到達して小さな揺れ(初期微動)を起こす波はどれか。",
          c: ["P波", "S波", "表面波", "津波"],
          a: 0, e: "P波は速く伝わり最初の小さな揺れ(初期微動)を起こします。遅れて届くS波が大きな揺れ(主要動)を起こします。緊急地震速報はP波を利用します。" },
        { q: "地表付近でのゆれの大きさを0〜7で表す指標はどれか。",
          c: ["マグニチュード", "震度", "波長", "標高"],
          a: 1, e: "震度は各地点のゆれの強さを0・1・2・3・4・5弱・5強・6弱・6強・7の10段階で表します。地震の規模を表すマグニチュードとは別物です。" },
        { q: "ねばりけの強いマグマによってできる火山の特徴はどれか。",
          c: ["溶岩が広くうすく流れ、なだらかな形になる", "ドーム状に盛り上がり、爆発的な噴火をしやすい", "火山にならない", "海底にしかできない"],
          a: 1, e: "ねばりけの強いマグマは流れにくくドーム状に盛り上がり、ガスがたまって爆発的な噴火になりやすいです。ねばりけの弱いマグマはなだらかな盾状火山をつくります。" }
      ]
    },
    {
      id: "earth-2",
      title: "大気・海洋と宇宙",
      minutes: 20,
      points: `
<h3>大気と天気</h3>
<ul>
<li>大気圧:空気の重さによる圧力。高い山ほど気圧は低い</li>
<li><b>低気圧</b>:上昇気流が生じ、雲ができて<b>天気が悪い</b>。<b>高気圧</b>:下降気流で<b>晴れ</b>やすい</li>
<li>日本付近では偏西風により天気は<b>西から東</b>へ移り変わる</li>
</ul>
<h3>水の循環と前線</h3>
<ul>
<li>太陽のエネルギーで海水が蒸発→雲→雨・雪→川→海と循環している</li>
<li><b>寒冷前線</b>:寒気が暖気を押し上げ、短時間の強い雨。通過後は気温が下がる</li>
<li><b>温暖前線</b>:暖気が寒気の上をはい上がり、広い範囲で長く弱い雨</li>
</ul>
<figure class="fig">
<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="寒冷前線と温暖前線の断面">
  <!-- 寒冷前線(左) -->
  <polygon points="15,150 15,108 100,150" fill="#3b82f6" fill-opacity="0.20"/>
  <line x1="15" y1="150" x2="165" y2="150" stroke="var(--text-sub)" stroke-width="1.5"/>
  <ellipse cx="78" cy="62" rx="34" ry="26" fill="var(--text-sub)" fill-opacity="0.35"/>
  <ellipse cx="55" cy="72" rx="20" ry="16" fill="var(--text-sub)" fill-opacity="0.35"/>
  <line x1="60" y1="92" x2="56" y2="146" stroke="var(--primary)" stroke-width="2"/>
  <line x1="78" y1="92" x2="74" y2="146" stroke="var(--primary)" stroke-width="2"/>
  <line x1="96" y1="92" x2="92" y2="146" stroke="var(--primary)" stroke-width="2"/>
  <path d="M 95 148 Q 70 120 60 98" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#ah)"/>
  <text x="90" y="24" font-size="12.5" fill="var(--text)" text-anchor="middle" font-weight="700">寒冷前線</text>
  <text x="90" y="172" font-size="11" fill="var(--text-sub)" text-anchor="middle">強い雨・短時間</text>
  <text x="30" y="140" font-size="10.5" fill="#2563eb" font-weight="700">寒気</text>
  <!-- 仕切り -->
  <line x1="180" y1="30" x2="180" y2="180" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <!-- 温暖前線(右) -->
  <polygon points="345,150 345,120 235,150" fill="#3b82f6" fill-opacity="0.20"/>
  <line x1="195" y1="150" x2="345" y2="150" stroke="var(--text-sub)" stroke-width="1.5"/>
  <ellipse cx="285" cy="98" rx="46" ry="15" fill="var(--text-sub)" fill-opacity="0.35"/>
  <ellipse cx="315" cy="112" rx="30" ry="12" fill="var(--text-sub)" fill-opacity="0.35"/>
  <line x1="250" y1="128" x2="250" y2="148" stroke="var(--primary)" stroke-width="1.6"/>
  <line x1="270" y1="130" x2="270" y2="148" stroke="var(--primary)" stroke-width="1.6"/>
  <line x1="290" y1="132" x2="290" y2="148" stroke="var(--primary)" stroke-width="1.6"/>
  <line x1="310" y1="134" x2="310" y2="148" stroke="var(--primary)" stroke-width="1.6"/>
  <path d="M 205 146 Q 260 130 320 118" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#ah)"/>
  <text x="270" y="24" font-size="12.5" fill="var(--text)" text-anchor="middle" font-weight="700">温暖前線</text>
  <text x="270" y="172" font-size="11" fill="var(--text-sub)" text-anchor="middle">弱い雨・広範囲</text>
  <text x="328" y="140" font-size="10.5" fill="#2563eb" font-weight="700">寒気</text>
  <defs><marker id="ah" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b"/></marker></defs>
</svg>
<figcaption>寒冷前線は寒気が暖気を急に押し上げ、積乱雲で短時間の強い雨。温暖前線は暖気が寒気の上をゆるやかにはい上がり、広範囲に弱い雨(オレンジ矢印=暖気の動き)。</figcaption>
</figure>
<h3>地球温暖化とオゾン層</h3>
<div class="kp"><b>温室効果:</b> 二酸化炭素・メタンなどの温室効果ガスが地表からの熱を吸収し、気温を保つ。ガスの増加が<b>地球温暖化</b>の原因とされる。<br><b>オゾン層</b>:上空で紫外線を吸収し生物を守る。フロンによる破壊(オゾンホール)が問題となった。</div>
<h3>太陽系と宇宙</h3>
<table>
<tr><th>天体</th><th>特徴</th></tr>
<tr><td>太陽</td><td>自ら光る恒星。太陽系の中心</td></tr>
<tr><td>惑星</td><td>太陽のまわりを公転。水金地火木土天海の8つ</td></tr>
<tr><td>衛星</td><td>惑星のまわりを回る(月は地球の衛星)</td></tr>
</table>
<ul>
<li>地球型惑星(水・金・地・火):小さく岩石でできて密度が大きい</li>
<li>木星型惑星(木・土・天・海):大きくガス中心で密度が小さい</li>
<li>宇宙の始まりは<b>ビッグバン</b>と考えられている。銀河系(天の川銀河)に太陽系は属する</li>
</ul>`,
      quiz: [
        { q: "低気圧の中心付近で起こりやすい天気はどれか。",
          c: ["よく晴れる", "雲ができて天気が悪くなる", "必ず雪になる", "気温が急上昇する"],
          a: 1, e: "低気圧では上昇気流が生じて雲ができやすく、天気がくずれます。高気圧では下降気流により晴れやすくなります。" },
        { q: "日本付近で天気が西から東へ移り変わる主な原因はどれか。",
          c: ["偏西風", "季節風", "海流", "台風"],
          a: 0, e: "日本の上空には偏西風(西から東へ吹く風)が吹いているため、天気も西から東へ移動します。天気予報で西の空を気にするのはこのためです。" },
        { q: "寒冷前線の通過にともなう天気の特徴はどれか。",
          c: ["広い範囲で長時間おだやかな雨が降る", "短時間に強い雨が降り、通過後は気温が下がる", "一日中晴れる", "気温が上がり続ける"],
          a: 1, e: "寒冷前線は寒気が暖気を急激に押し上げるため、積乱雲による短時間の強い雨をもたらし、通過後は気温が下がります。温暖前線は逆に長く弱い雨です。" },
        { q: "地球温暖化の主な原因とされる、熱を吸収する気体はどれか。",
          c: ["酸素", "窒素", "二酸化炭素などの温室効果ガス", "水素"],
          a: 2, e: "二酸化炭素・メタンなどの温室効果ガスが地表からの熱を吸収し大気を暖めます。これらの増加が地球温暖化の主因と考えられています。" },
        { q: "太陽のように自ら光を出す天体を何というか。",
          c: ["惑星", "衛星", "恒星", "彗星"],
          a: 2, e: "自ら光を出す天体を恒星といい、太陽もその一つです。惑星(地球など)は自ら光らず、恒星の光を反射しています。月のような衛星は惑星を回ります。" }
      ]
    }
  ]
}
];

// 全科目を結合
const SUBJECTS = SUBJECTS_1.concat(SUBJECTS_2);

// ============ 試験ガイド情報 ============
const EXAM_GUIDE = {
  intro: "高等学校卒業程度認定試験(高卒認定・旧大検)は、高校を卒業していない人が「高校卒業者と同等以上の学力がある」と認定される国の試験です。合格すると大学・短大・専門学校の受験資格が得られ、多くの就職・資格試験でも高卒扱いとなります。",
  cards: [
    {
      h: "受験資格",
      body: "<ul><li>試験実施年度末までに満16歳以上になる人</li><li>大学入学資格がまだない人(すでに高校を卒業している人は対象外)</li><li>全日制高校に在籍中でも受験可能</li></ul>"
    },
    {
      h: "試験科目(8〜9科目)",
      body: "<p>合格には次の分野から所定の科目に合格する必要があります。</p><ul><li><b>国語</b>(必須)</li><li><b>数学</b>(必須)</li><li><b>英語</b>(必須)</li><li><b>地理歴史</b>:地理、歴史</li><li><b>公共</b>(必須)</li><li><b>理科</b>:「科学と人間生活+基礎1科目」または「基礎3科目」の選び方がある</li></ul><p class='footer-small'>科目構成は制度改正で変わることがあります。出願前に必ず最新の受験案内を確認してください。</p>"
    },
    {
      h: "合格ライン",
      body: "<ul><li>各科目<b>おおむね40点前後(100点満点)</b>が合格の目安といわれます</li><li>マークシート方式で、正誤問題・選択問題が中心</li><li>一度合格した科目は<b>次回以降免除</b>(科目合格の積み重ねが可能)</li><li>すべての必要科目に合格すれば「高卒認定合格」</li></ul>"
    },
    {
      h: "試験日程・回数",
      body: "<ul><li>年に<b>2回</b>実施(例年8月ごろと11月ごろ)</li><li>2日間にわたって実施</li><li>出願は試験の約2か月前から</li></ul><p class='footer-small'>正確な日程・会場・出願方法は文部科学省および各都道府県教育委員会の公式発表で確認してください。</p>"
    },
    {
      h: "科目免除",
      body: "<p>高校で単位を修得している場合、その科目の受験が免除されることがあります。在籍していた(している)高校で「単位修得証明書」を取り寄せて確認しましょう。英検・数検などの資格でも一部免除される場合があります。</p>"
    },
    {
      h: "この教材の使い方",
      body: "<ul><li>①各科目の単元で<b>要点</b>を読む → ②<b>問題演習</b>で確認、の順で進めましょう</li><li>間違えた問題は自動で<b>「弱点復習」</b>に集まります。試験前にここを重点的に</li><li>「実力テスト」で本番形式の力試しができます(合格ライン40点で判定)</li><li>進捗はこの端末に自動保存されます。毎日少しずつ続けるのが合格への近道です</li></ul>"
    }
  ]
};
