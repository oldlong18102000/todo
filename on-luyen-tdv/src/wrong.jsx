import { Q } from './data/questions.js';
import { LES, MON } from './data/lessons.js';
import { LT, L_, qOf, shortTitle, wrongOf } from './lib.js';
import { Bar, Html, go } from './ui.jsx';

/* Trang "Sai nhiều": xếp câu theo số lần làm sai và chỉ ra chủ đề yếu nhất */
export function WrongView({ P }) {
  const rows = Q.filter((q) => wrongOf(P.q[q.id]) > 0)
    .map((q) => ({ q, w: wrongOf(P.q[q.id]), n: P.q[q.id].n || 0, ok: P.q[q.id].ok, last: P.q[q.id].last || 0 }))
    .sort((a, b) => b.w - a.w || a.n - b.n || b.last - a.last);
  const total = rows.reduce((s, r) => s + r.w, 0);

  const topics = LES.map((l) => {
    const qs = qOf(l.t);
    const seen = qs.filter((x) => P.q[x.id]);
    const wrongTimes = seen.reduce((s, x) => s + wrongOf(P.q[x.id]), 0);
    const attempts = seen.reduce((s, x) => s + (P.q[x.id].n || 0), 0);
    return { l, qs: qs.length, wrongTimes, attempts, rate: attempts ? wrongTimes / attempts : 0 };
  })
    .filter((t) => t.wrongTimes > 0)
    .sort((a, b) => b.rate - a.rate || b.wrongTimes - a.wrongTimes)
    .slice(0, 6);

  if (!rows.length) {
    return (
      <>
        <h1>Câu sai nhiều</h1>
        <p className="lead">Chưa có câu nào bị làm sai. Hãy làm vài bộ trắc nghiệm trước, những câu bạn hay sai sẽ được tổng hợp ở đây.</p>
        <button className="btn" onClick={() => go('luyen-mix')}>Làm nhanh 10 câu ngẫu nhiên</button>
      </>
    );
  }
  return (
    <>
      <h1>Câu sai nhiều</h1>
      <p className="lead">
        Danh sách các câu bạn làm sai, xếp theo số lần sai giảm dần. Đây là phần nên ôn lại trước nhất.
      </p>
      <div className="card">
        <div className="stat">
          <div><b>{rows.length}</b><span className="mut sm">câu từng sai</span></div>
          <div><b>{total}</b><span className="mut sm">lượt sai</span></div>
          <div><b>{rows.filter((r) => r.ok).length}</b><span className="mut sm">đã sửa được ở lần gần nhất</span></div>
        </div>
        <div className="row" style={{ marginTop: 12 }}>
          <button className="btn" onClick={() => go('luyen-saimax')}>Luyện 10 câu sai nhiều nhất</button>
          <button className="btn g" onClick={() => go('luyen-sai')}>Luyện tất cả câu đang sai</button>
        </div>
      </div>

      {topics.length > 0 && (
        <>
          <h2>Chủ đề cần củng cố</h2>
          <div className="grid">
            {topics.map((t) => (
              <div className="card" key={t.l.t}>
                <span className="pill">{MON[t.l.m].n}</span>
                <h3 style={{ marginTop: 8 }}>{shortTitle(t.l.title)}</h3>
                <Bar a={t.wrongTimes} b={t.attempts} />
                <div className="sm mut">Sai {t.wrongTimes}/{t.attempts} lượt làm</div>
                <div className="row" style={{ marginTop: 8 }}>
                  <a className="btn s" href={`#hoc-${t.l.t}`}>Học lại</a>
                  <a className="btn s g" href={`#luyen-${t.l.t}`}>Luyện</a>
                  <a className="btn s g" href="#cay">Sơ đồ</a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2>Danh sách câu hỏi</h2>
      {rows.map((r, i) => (
        <details className="wq" key={r.q.id}>
          <summary>
            <span className="rk">{i + 1}</span>
            <Html as="span" className="qt" html={r.q.s} />
            <span className={`pill ${r.ok ? 'w' : 'b'}`}>Sai {r.w} lần</span>
          </summary>
          <div className="sm" style={{ marginTop: 10 }}>
            <span className="pill o">Đáp án</span> {L_[r.q.a]}. <span dangerouslySetInnerHTML={{ __html: r.q.o[r.q.a] }} />
            <Html className="exp" html={r.q.w} />
            <div className="mut">{MON[r.q.m].n} · {shortTitle((LT[r.q.t] || { title: r.q.t }).title)} · Nguồn: {r.q.src}</div>
            {LT[r.q.t] && <a href={`#hoc-${r.q.t}`} style={{ color: 'var(--ac)' }}>Xem bài học</a>}
          </div>
        </details>
      ))}
    </>
  );
}
