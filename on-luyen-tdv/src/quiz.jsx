import { useMemo, useState } from 'react';
import { Q } from './data/questions.js';
import { LES, MON } from './data/lessons.js';
import { LT, L_, qOf, shortTitle } from './lib.js';
import { Bar, Html, Stat } from './ui.jsx';

const filt = (P, f) =>
  Q.filter(
    (q) =>
      (!f.m || q.m == f.m) &&
      (!f.t || q.t === f.t) &&
      (f.mode === 'all' || (f.mode === 'new' ? !P.q[q.id] : P.q[q.id] && !P.q[q.id].ok)),
  );

export function QuizSetup({ P, setup, setSetup, onStart }) {
  const f = setup;
  const tops = LES.filter((l) => (!f.m || l.m == f.m) && qOf(l.t).length);
  const count = useMemo(() => filt(P, f).length, [P, f]);
  const [empty, setEmpty] = useState(false);
  const upd = (patch) => {
    setEmpty(false);
    setSetup({ ...f, ...patch });
  };
  return (
    <>
      <h1>Luyện trắc nghiệm</h1>
      <p className="lead">Mỗi câu có giải thích vì sao đáp án đúng và nguồn tài liệu. Thứ tự đáp án được xáo mỗi lần.</p>
      <div className="card">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))' }}>
          <label className="f">Môn
            <select value={f.m} onChange={(e) => upd({ m: e.target.value, t: '' })}>
              <option value="">Tất cả</option>
              {[1, 2, 3].map((m) => <option key={m} value={m}>{MON[m].n} · {MON[m].t}</option>)}
            </select>
          </label>
          <label className="f">Chủ đề
            <select value={f.t} onChange={(e) => upd({ t: e.target.value })}>
              <option value="">Tất cả chủ đề</option>
              {tops.map((l) => <option key={l.t} value={l.t}>{shortTitle(l.title)}</option>)}
            </select>
          </label>
          <label className="f">Lọc
            <select value={f.mode} onChange={(e) => upd({ mode: e.target.value })}>
              <option value="all">Tất cả câu</option>
              <option value="new">Chưa làm</option>
              <option value="wrong">Đã làm sai</option>
            </select>
          </label>
          <label className="f">Số câu
            <select value={f.n} onChange={(e) => upd({ n: e.target.value })}>
              {['10', '20', '40'].map((n) => <option key={n} value={n}>{n}</option>)}
              <option value="999">Tất cả</option>
            </select>
          </label>
        </div>
        <div className="row" style={{ marginTop: 14 }}>
          <button className="btn" onClick={() => (count ? onStart(filt(P, f).slice(), f) : setEmpty(true))}>Bắt đầu</button>
          <span className="mut sm">{empty ? 'Không có câu nào phù hợp bộ lọc.' : `${count} câu phù hợp`}</span>
        </div>
      </div>
    </>
  );
}

export function Quiz({ S, P, onPick, onNext, onQuit, onRedo }) {
  const tot = S.list.length;
  if (S.i >= tot) return <Summary S={S} onRedo={onRedo} onQuit={onQuit} />;
  const it = S.list[S.i];
  const q = it.q;
  const done = it.pick !== null;
  const good = it.pick === q.a;
  return (
    <>
      <div className="crumb">
        <button className="link" onClick={onQuit}>← Thoát</button> · {S.label}
      </div>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <span className="pill">{MON[q.m].n} · {shortTitle((LT[q.t] || { title: q.t }).title)}</span>
        <span className="mut sm num">Câu {S.i + 1}/{tot}</span>
      </div>
      <Bar a={S.i + (done ? 1 : 0)} b={tot} />
      <Html className="q" html={q.s} />
      {it.perm.map((k, j) => {
        let c = '';
        if (done) c = k === q.a ? ' ok' : k === it.pick ? ' bad' : '';
        return (
          <button key={j} className={`opt${c}`} disabled={done} onClick={() => onPick(j)}>
            <b>{L_[j]}</b>
            <span dangerouslySetInnerHTML={{ __html: q.o[k] }} />
          </button>
        );
      })}
      {done && (
        <>
          <div className={`exp ${good ? 'ok' : 'bad'}`}>
            <b>{good ? 'Đúng.' : 'Chưa đúng.'} Đáp án: {L_[it.perm.indexOf(q.a)]}. <span dangerouslySetInnerHTML={{ __html: q.o[q.a] }} /></b>
            <Html html={q.w} className="" />
            <div className="src">Nguồn: {q.src}</div>
          </div>
          <div className="row">
            <button className="btn" onClick={onNext}>{S.i + 1 < tot ? 'Câu tiếp' : 'Xem kết quả'}</button>
            {LT[q.t] && <a className="btn g" href={`#hoc-${q.t}`}>Xem lại bài học</a>}
          </div>
        </>
      )}
    </>
  );
}

function Summary({ S, onRedo, onQuit }) {
  const ok = S.list.filter((x) => x.pick === x.q.a);
  const bad = S.list.filter((x) => x.pick !== x.q.a);
  return (
    <>
      <h1>Kết quả</h1>
      <div className="card">
        <div className="stat">
          <Stat value={`${ok.length}/${S.list.length}`} label="câu đúng" />
          <Stat value={`${Math.round((ok.length / S.list.length) * 100)}%`} label="tỷ lệ" />
        </div>
        <Bar a={ok.length} b={S.list.length} />
      </div>
      {bad.length > 0 && (
        <>
          <h2>Các câu cần xem lại</h2>
          {bad.map((x) => (
            <div className="card" style={{ marginBottom: 10 }} key={x.q.id}>
              <Html style={{ fontWeight: 600 }} html={x.q.s} />
              <div className="sm" style={{ margin: '6px 0' }}>
                <span className="pill b">Bạn chọn</span> <span dangerouslySetInnerHTML={{ __html: x.q.o[x.pick] }} /><br />
                <span className="pill o">Đúng</span> <span dangerouslySetInnerHTML={{ __html: x.q.o[x.q.a] }} />
              </div>
              <Html className="sm" html={x.q.w} />
              {LT[x.q.t] && (
                <a className="sm" href={`#hoc-${x.q.t}`} style={{ color: 'var(--ac)' }}>
                  Bài học: {shortTitle(LT[x.q.t].title)}
                </a>
              )}
            </div>
          ))}
        </>
      )}
      <div className="row" style={{ marginTop: 14 }}>
        {bad.length > 0 && <button className="btn" onClick={onRedo}>Làm lại {bad.length} câu sai</button>}
        <button className="btn g" onClick={onQuit}>Chọn bộ câu khác</button>
        <a className="btn g" href="#">Trang chủ</a>
      </div>
    </>
  );
}
