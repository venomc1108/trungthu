
(function () {
  'use strict';

  (function tryLockLandscape() {
    function lockLandscape() {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().then(function () {
          if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape').catch(function () {});
          }
        }).catch(function () {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(function () {});
        }
      }
    }
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
                    || (window.matchMedia('(max-width: 900px)').matches && 'ontouchstart' in window);

    if (isMobile) {
      const unlockOnce = function () {
        lockLandscape();
        document.removeEventListener('touchstart', unlockOnce);
        document.removeEventListener('click', unlockOnce);
      };
      document.addEventListener('touchstart', unlockOnce, { once: true, passive: true });
      document.addEventListener('click', unlockOnce, { once: true });

      // Thử lock luôn (nếu browser cho phép)
      lockLandscape();
    }

    // Khi xoay màn hình, resize lại canvas
    window.addEventListener('orientationchange', function () {
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    });
  })();

  const PEOPLE = [
    { name: "Hoàng Nhật Anh",       message: "Chúc tổ trưởng tổ 1 trung thu sớm quên đi ng đó và tập trung vào việc học nha👀" },
    { name: "Hoàng Phương Anh",     message: "Chúc phanh trung thu vui vẻ, và học tập tiếp thu nhanh he." },
    { name: "Trần Hoàng Bách",      message: "Chúc bách Trung Thu rộn ràng, học tập tiến bộ, đạt nhiều thành tích cao❤️‍🔥." },
    { name: "Nguyễn Ngọc Bảo Bình", message: "Chúc lớp phó học tập một đêm trung thu trọn vẹn và trong học tập mong bình giúp lớp tiến bộ thêm:>💞👀" },
    { name: "Lê Thị Thanh Bình",    message: "Chúc tổ trưởng tổ 3 siêu học bá luôn dịu dàng, xinh đẹp, gặp nhiều may mắn trong cuộc sống.👀" },
    { name: "Trần Thị Mai Chi",     message: "Chúc Mchi Trung Thu an lành, học hành tấn tới, luôn vui vẻ bên bạn bè và bt thương thân thể mình với 😞⁉️." },
    { name: "Nguyễn Phạm Ngọc Chi", message: "Chúc ngchi một mùa Trung Thu ngọt ngào, học hành tiến bộ, đạt nhiều thành tích cao 💞." },
    { name: "Hoàng Hải Dăng",       message: "Chúc em Đăng 10A6 Trung Thu vv, sự nghiệp học tập thăng tiến vượt bậc và sớm có ny sống qua đông nha 🥀." },
    { name: "Trần Lê Minh Đức",     message: "Chúc Đức Trung Thu vv, đạt được mọi dự định trong năm học mới và sớm quên đc nha 😭." },
    { name: "Nguyễn Gia Hoàng Dũng",message: "Chúc tk em Dũng một mùa Trung Thu trọn vẹn, học tập tiến bộ nha em" },
    { name: "Đặng Thùy Dương",      message: "Chúc Dương Trung Thu vv, học giỏi và luôn rạng rỡ và sớm có ny sống qua đông nha 🫠." },
    { name: "Đặng Trường Giang",    message: "Chúc tk em giang bớt phá lại, đừng quậy mà ảnh hưởng tới tập thể lớp😞👹." },
    { name: "Lê Ngọc Hà",           message: "Chúc bí thư Trung Thu vv, học giỏi, và luôn có đóng góp to lớn cho lớp nha 💞🐧." },
    { name: "Nguyễn Văn Hoàng Hảo", message: "Uầy chúc a Hảo Trung Thu vv, sức khỏe dồi dào, học hành tấn tới và có tk nào bắt nạt lớp a Hảo bảo kê nha ❤️‍🔥💞." },
    { name: "Lê Văn Hoàng",         message: "Chúc bò Trung Thu vv, học hành siêu giỏi và ae ta sẽ bá khi nhất 10a6🥶❄️☃️" },
    { name: "Bùi Nguyễn Việt Hương", message: "Chúc Hương luôn dịu dàng(dịu lại đi🐧), học giỏi, gặp nhiều may mắn💞🥀." },
    { name: "Lê Quốc Bảo Khanh",    message: "Chúc Khanh Trung Thu an khang, sự nghiệp học tập ngày càng rạng rỡ nha~~ 💞❤️‍🔥👹." },
    { name: "Nguyễn Đình Anh Khôi", message: "Chúc tk e Khôi một mùa Trung Thu trọn vẹn, luôn tỏa sáng trong tập thể💞☃️." },
    { name: "Đặng Thị Thùy Linh",   message: "Chúc Linh Trung Thu vv học giỏi và luôn có những thành tích trong học tập💞❤️‍🔥." },
    { name: "Nguyễn Đình Tấn Lộc",  message: "Chúc lớp phó lao đôn Trung Thu vui vẻ, tài lộc đầy nhà, học hành tấn tới và lao động cho mik xin vc nhẹ:) 😞."},
    { name: "Phan Thị Xuân Mai",    message: "Chúc Xuân Mai một đêm Trung Thu siêu vv, luôn xinh đẹp như cj hằng, dịu dàng và luôn có những thành tích tuyệt vời trong học tập💞💗💝 ." },
    { name: "Nguyễn Bảo Nam",       message: "Chúc bạn Trung Thu ấm áp bên gia đình, học tập tiến bộ vượt bậc." },
    { name: "Nguyễn Thị Hoàng Ngân", message: "Chúc Ngân một mùa Trung Thu an lành, gặp nhiều điều tốt đẹp và học bớt cười lại để tập trung học💞⁉️🥶☃️." },
    { name: "Nguyễn Khánh Ngọc",    message: "Chúc Ngọc Trung Thu vui vẻ, học giỏi và ít trầm lại để có thể hòa nhập với mng❤️‍🔥" },
    { name: "Trần Khôi Nguyên",     message: "Chúc lớp trưởng 10a6 Trung Thu vv, sự nghiệp học tập ngày càng thăng tiến và lấy đc giải nếu có giải bóng đá 👀❤️‍🔥." },
    { name: "Nguyễn Danh Nhân",     message: "Chúc Nhân Trung Thu ấm áp, luôn là niềm tự hào của gia đình và thầy cô🥀🐧👹." },
    { name: "Nguyễn Trần Khánh Nhật", message: "Chúc KNhật em một mùa Trung Thu vv, trong giờ học tập trung và thành tích nâng cao 👀." },
    { name: "Hà Huy Long Nhật",     message: "sau này lên lớp bớt farm aura lại :))))." },
    { name: "Hoàng Thị Ngọc Nhi",   message: "Chúc Nhi xinh đẹp, dịu dàng, đón Trung Thu ấm áp bên gia đình và sẽ vô đc clb hope🥶👀👹⁉️💞🐧." },
    { name: "Hoàng Quỳnh Như",      message: "Chúc Quỳnh Như một mùa Trung Thu an lành, luôn rạng rỡ, hạnh phúc và luôn có thể duy trì sự tự tin trong học tập nhaa💞💝." },
    { name: "Thái Sơn Phong",       message: "Chúc SPhong Trung Thu vv, học tập tiến bộ, sự nghiệp thăng tiến🐧👀😞." },
    { name: "Nguyễn Đình Hải Phong", message: "Chúc tk e Phong Trung Thu vv, mọi điều ước đều thành hiện thực và bớt gay lại 🏳️‍🌈." },
    { name: "Nguyễn Phạm Hà Phương", message: "Chúc Phương một mùa Trung Thu vv, luôn học giỏi và tích cực trong học tập nha." },
    { name: "Nguyễn Hoàng Sang",    message: "Chúc bo bình Trung Thu vv, gặp nhiều điều tốt đẹp trong cuộc sống👀🐧." },
    { name: "Trân Văn Tân",         message: "Chúc e Tân Trung Thu vui vẻ, tài lộc đầy nhà, học hành tấn tới và sớm gặp đc ng mình thg nha 👀." },
    { name: "Lê Anh Thư",           message: "Chúc tổ trưởng tổ 4 Trung Thu vv, học giỏi và luôn hạnh phúc👀🥀💞." },
    { name: "Đặng Hà Thúy Tiên",    message: "Chúc Tiên Trung Thu vv, luôn dịu dàng và rạng rỡ💞🥀👀." },
    { name: "Hà Huyền Trang",         message: "Chúc Trang Trung Thu vui vẻ, ít trầm lại cởi mở với lớp để tạo ra môi trưởng học tập vui vẻ.💝 " },
    { name: "Trần Thị Huyền Trang", message: "Chúc Trang Trung Thu vv, học giỏi, gặp nhiều may mắn trong cuộc sống.👀☃️" },
    { name: "Phạm Hoàng Anh Tuấn",  message: "Chúc Tuấn Trung Thu vv, sự nghiệp học tập ngày càng rạng rỡ🐧🏳️‍🌈." },
    { name: "Nguyễn Bá Tuấn Vĩ",    message: "Chúc tk e Vĩ một mùa Trung Thu trọn vẹn, học hành tấn tới, gặp nhiều may mắn và bớt nch." },
    { name: "Nguyễn Hà Đức Vinh",   message: "Chúc tk em Vinh Trung Thu vui vẻ, học tập suôn sẻ và bớt dien lại:) 😞⁉️." },
    { name: "Nguyễn Thị Hải Yến",   message: "Chúc Yến Trung Thu vv, luôn học là siêu học bá. 👀" },
    { name: "Phạm Tiến Đạt",        message: "Chúc tk em Đạt Trung Thu ấm áp, học tập tiến bộ và ăn mau chóng lớn-) 🥶🐧." },
    { name: "Cô Oanh",        message: "Chúc Cô Trung Thu vv, ấm áp bên gia đình và chúc cô luôn thành công trong sự nghiệp trồng người của mình, và chúng em cũng mong ước cô sẽ đồng hành cùng chúng em hết 3 năm c3💞❤️‍🔥" }
  ];

  const IMAGES = [
    "anh2.jpg"
  ];

  const canvas = document.getElementById('starCanvas');
  const ctx = canvas.getContext('2d');
  let W, H;
  let stars = [];
  const STAR_COUNT = 90;         
  let fireworks = [];

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    createStars();
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.4,
        b: Math.random() * 0.6 + 0.4,
        sp: Math.random() * 0.015 + 0.003,
        ph: Math.random() * Math.PI * 2
      });
    }
  }
  function drawStars(t) {
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const tw = Math.sin(t * s.sp + s.ph) * 0.35 + 0.65;
      const a = s.b * tw;
      ctx.fillStyle = 'rgba(255,255,220,' + a + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createFirework(cx, cy) {
    const n = 18 + Math.floor(Math.random() * 12);
    const colors = ['#FFD966', '#FFB347', '#FF6B6B', '#FFF1B8', '#FFAA33', '#FF9F68'];
    for (let i = 0; i < n; i++) {
      const ang = Math.random() * Math.PI * 2;
      const sp = Math.random() * 4 + 1.6;
      fireworks.push({
        x: cx, y: cy,
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp,
        r: Math.random() * 2.2 + 1.2,
        c: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.02 + Math.random() * 0.02
      });
    }
  }

  function updateFireworks() {
    for (let i = fireworks.length - 1; i >= 0; i--) {
      const p = fireworks[i];
      p.x += p.vx; p.y += p.vy;
      p.vy += 0.05;
      p.vx *= 0.99; p.vy *= 0.99;
      p.life -= p.decay;
      p.r *= 0.99;
      if (p.life <= 0 || p.r < 0.3) { fireworks.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = p.life * 0.9;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function animate(ts) {
    ctx.clearRect(0, 0, W, H);
    drawStars(ts * 0.001);
    if (fireworks.length) updateFireworks();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  requestAnimationFrame(animate);

  /* =======================================================
     3. ĐÈN LỒNG — GRID 9×5, CÁCH XA NHAU
     ======================================================= */
  const field = document.getElementById('lanternField');

  const COLS = 9;
  const ROWS = 5;
  const TOTAL = COLS * ROWS; // 45

  // Vùng đèn: 4% → 96% (ngang), 30% → 96% (dọc) — chừa trên cho tiêu đề
  const AREA_LEFT = 4;
  const AREA_TOP  = 30;
  const AREA_W    = 92;
  const AREA_H    = 66;

  function buildGridOrder() {
    const cells = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        cells.push({ col: c, row: r });
      }
    }
    for (let i = cells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cells[i], cells[j]] = [cells[j], cells[i]];
    }
    return cells;
  }

  const GRID = buildGridOrder();

  function buildChineseLanternSVG(type) {
    const red = '#d40000';
    const redDark = '#8b0000';
    const redLight = '#ff2a2a';
    const gold = '#ffd966';
    const goldDark = '#b8860b';

    if (type === 'star') {
      return `
      <svg class="lantern-svg" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="0" x2="50" y2="14" stroke="${goldDark}" stroke-width="2"/>
        <rect x="38" y="12" width="24" height="6" rx="2" fill="${gold}" stroke="${goldDark}" stroke-width="1"/>
        <polygon points="50,22 60,48 88,48 65,64 74,92 50,76 26,92 35,64 12,48 40,48"
                 fill="${red}" stroke="${gold}" stroke-width="2.5" stroke-linejoin="round"/>
        <polygon points="50,32 56,48 74,48 60,58 65,76 50,66 35,76 40,58 26,48 44,48"
                 fill="${redLight}" opacity="0.55"/>
        <rect x="38" y="94" width="24" height="6" rx="2" fill="${gold}" stroke="${goldDark}" stroke-width="1"/>
        <line x1="46" y1="100" x2="46" y2="140" stroke="${gold}" stroke-width="1.6"/>
        <line x1="50" y1="100" x2="50" y2="146" stroke="${gold}" stroke-width="1.6"/>
        <line x1="54" y1="100" x2="54" y2="140" stroke="${gold}" stroke-width="1.6"/>
        <circle cx="46" cy="142" r="2" fill="${red}"/>
        <circle cx="50" cy="148" r="2" fill="${red}"/>
        <circle cx="54" cy="142" r="2" fill="${red}"/>
      </svg>`;
    }

    if (type === 'round') {
      return `
      <svg class="lantern-svg" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="0" x2="50" y2="14" stroke="${goldDark}" stroke-width="2"/>
        <rect x="36" y="12" width="28" height="7" rx="2" fill="${gold}" stroke="${goldDark}" stroke-width="1"/>
        <circle cx="50" cy="58" r="34" fill="${red}" stroke="${gold}" stroke-width="2.5"/>
        <circle cx="50" cy="58" r="34" fill="url(#roundGrad)" opacity="0.55"/>
        <line x1="50" y1="24" x2="50" y2="92" stroke="${gold}" stroke-width="1" opacity="0.7"/>
        <line x1="30" y1="30" x2="30" y2="86" stroke="${gold}" stroke-width="1" opacity="0.6"/>
        <line x1="70" y1="30" x2="70" y2="86" stroke="${gold}" stroke-width="1" opacity="0.6"/>
        <text x="50" y="66" text-anchor="middle"
              font-family="serif" font-size="22" fill="${gold}" font-weight="bold">福</text>
        <rect x="36" y="88" width="28" height="7" rx="2" fill="${gold}" stroke="${goldDark}" stroke-width="1"/>
        <line x1="44" y1="95" x2="44" y2="132" stroke="${gold}" stroke-width="1.6"/>
        <line x1="50" y1="95" x2="50" y2="138" stroke="${gold}" stroke-width="1.6"/>
        <line x1="56" y1="95" x2="56" y2="132" stroke="${gold}" stroke-width="1.6"/>
        <circle cx="44" cy="134" r="2" fill="${red}"/>
        <circle cx="50" cy="140" r="2" fill="${red}"/>
        <circle cx="56" cy="134" r="2" fill="${red}"/>
        <defs>
          <radialGradient id="roundGrad" cx="35%" cy="30%">
            <stop offset="0%"  stop-color="#ff8080"/>
            <stop offset="100%" stop-color="#8b0000"/>
          </radialGradient>
        </defs>
      </svg>`;
    }

    return `
    <svg class="lantern-svg" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="0" x2="50" y2="12" stroke="${goldDark}" stroke-width="2"/>
      <rect x="34" y="10" width="32" height="7" rx="2" fill="${gold}" stroke="${goldDark}" stroke-width="1"/>
      <ellipse cx="50" cy="58" rx="36" ry="40" fill="${red}" stroke="${gold}" stroke-width="2.5"/>
      <ellipse cx="50" cy="58" rx="36" ry="40" fill="url(#ovalGrad)" opacity="0.6"/>
      <path d="M50 18 Q50 58 50 98" stroke="${gold}" stroke-width="1" fill="none" opacity="0.75"/>
      <path d="M30 26 Q26 58 30 90" stroke="${gold}" stroke-width="1" fill="none" opacity="0.55"/>
      <path d="M70 26 Q74 58 70 90" stroke="${gold}" stroke-width="1" fill="none" opacity="0.55"/>
      <path d="M20 40 Q14 58 20 76" stroke="${gold}" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M80 40 Q86 58 80 76" stroke="${gold}" stroke-width="1" fill="none" opacity="0.4"/>
      <text x="50" y="66" text-anchor="middle"
            font-family="serif" font-size="22" fill="${gold}" font-weight="bold">福</text>
      <rect x="34" y="96" width="32" height="7" rx="2" fill="${gold}" stroke="${goldDark}" stroke-width="1"/>
      <line x1="42" y1="103" x2="42" y2="138" stroke="${gold}" stroke-width="1.6"/>
      <line x1="46" y1="103" x2="46" y2="144" stroke="${gold}" stroke-width="1.6"/>
      <line x1="50" y1="103" x2="50" y2="146" stroke="${gold}" stroke-width="1.6"/>
      <line x1="54" y1="103" x2="54" y2="144" stroke="${gold}" stroke-width="1.6"/>
      <line x1="58" y1="103" x2="58" y2="138" stroke="${gold}" stroke-width="1.6"/>
      <circle cx="42" cy="140" r="2" fill="${red}"/>
      <circle cx="46" cy="146" r="2" fill="${red}"/>
      <circle cx="50" cy="148" r="2" fill="${red}"/>
      <circle cx="54" cy="146" r="2" fill="${red}"/>
      <circle cx="58" cy="140" r="2" fill="${red}"/>
      <defs>
        <radialGradient id="ovalGrad" cx="35%" cy="30%">
          <stop offset="0%"  stop-color="#ff8080"/>
          <stop offset="100%" stop-color="#8b0000"/>
        </radialGradient>
      </defs>
    </svg>`;
  }

  function createLantern(index, cell) {
    const person = PEOPLE[index % PEOPLE.length];
    const types = ['oval', 'oval', 'star', 'oval', 'round'];
    const type = types[index % types.length];

    const cellW = AREA_W / COLS;
    const cellH = AREA_H / ROWS;

    // Jitter CỰC NHỎ (chỉ 10% ô) để đèn KHÔNG chồng lên nhau
    const padX = cellW * 0.35;
    const padY = cellH * 0.35;
    const offsetX = padX + Math.random() * (cellW - padX * 2);
    const offsetY = padY + Math.random() * (cellH - padY * 2);

    const leftPct = AREA_LEFT + cell.col * cellW + offsetX;
    const topPct  = AREA_TOP  + cell.row * cellH + offsetY;

    // Đèn chiếm tối đa 70% ô để chừa khoảng cách
    const sizeByW = (cellW / 100) * window.innerWidth  * 0.65;
    const sizeByH = (cellH / 100) * window.innerHeight * 0.65;
    const size = Math.max(26, Math.min(sizeByW, sizeByH, 60));

    const dur = 3 + Math.random() * 3;

    const wrap = document.createElement('div');
    wrap.className = 'lantern-wrap';
    wrap.style.left = leftPct + '%';
    wrap.style.top  = topPct + '%';
    wrap.style.width  = size + 'px';
    wrap.style.height = (size * 1.5) + 'px';
    wrap.style.animationDuration = dur + 's';
    wrap.style.animationDelay = (-Math.random() * dur) + 's';

    wrap.innerHTML = buildChineseLanternSVG(type);

    const nameEl = document.createElement('div');
    nameEl.className = 'lantern-name';
    nameEl.textContent = person.name;
    wrap.appendChild(nameEl);

    wrap.addEventListener('click', function (e) {
      e.stopPropagation();
      openModal(person, index);
      const rect = wrap.getBoundingClientRect();
      createFirework(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });

    field.appendChild(wrap);
  }

  for (let i = 0; i < TOTAL; i++) {
    createLantern(i, GRID[i]);
  }

  /* =======================================================
     4. MODAL
     ======================================================= */
  const overlay    = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg   = document.getElementById('modalImg');
  const modalPoem  = document.getElementById('modalPoem');
  const modalClose = document.getElementById('modalClose');

  function openModal(person, index) {
    modalTitle.textContent = person.name;
    modalPoem.textContent  = '“' + person.message + '”';
    modalImg.src = IMAGES[index % IMAGES.length];
    modalImg.alt = person.name;
    overlay.classList.add('active');
  }

  function closeModal() { overlay.classList.remove('active'); }

  modalClose.addEventListener('click', function (e) { e.stopPropagation(); closeModal(); });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
  });

  /* =======================================================
     5. NHẠC — aa.mp3
     ======================================================= */
  const musicBtn = document.getElementById('musicBtn');
  const bgMusic  = document.getElementById('bgMusic');
  let isPlaying  = false;

  window.addEventListener('load', function () {
    bgMusic.volume = 0.45;
    bgMusic.play().then(function () {
      isPlaying = true; musicBtn.textContent = '🔊';
    }).catch(function () {
      isPlaying = false; musicBtn.textContent = '🎵';
    });
  });

  document.addEventListener('click', function firstClick() {
    if (!isPlaying) {
      bgMusic.play().then(function () {
        isPlaying = true; musicBtn.textContent = '🔊';
      }).catch(function () {});
    }
    document.removeEventListener('click', firstClick);
  });

  musicBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.textContent = '🎵';
      isPlaying = false;
    } else {
      bgMusic.play().then(function () {
        musicBtn.textContent = '🔊';
        isPlaying = true;
      }).catch(function () {});
    }
  });

})();