import { useState } from 'react';
import { EX, nf } from './data/exercises.js';
import { MON } from './data/lessons.js';
import { LT, parseNum, runEx, shortTitle } from './lib.js';
import { Html } from './ui.jsx';

export function ExIndex({ P, filter }) {
  const m = /^m\d$/.test(filter || '') ? +filter[1] : 0;
  const t = filter && !m ? filter : '';
  return (
    <>
      <h1>Bài tính</h1>
      <p className="lead">
        Tự làm trước, nhập kết quả để kiểm tra, rồi mở từng bước để so cách làm. Mọi con số trong lời giải do máy tính lại.
      </p>
      <div className="row" style={{ marginBottom: 14 }}>
        <a className={`pill ${!filter ? '' : 'w'}`} href="#bai">Tất cả</a>
        {[1, 2, 3].map((k) => (
          <a key={k} className={`pill ${m === k ? '' : 'w'}`} href={`#bai-m${k}`}>{MON[k].n}</a>
        ))}
        {t && <span className="pill">Chủ đề: {shortTitle((LT[t] || { title: t }).title)}</span>}
      </div>
      {[1, 2, 3].map((k) => {
        if (m && m !== k) return null;
        const es = EX.filter((e) => e.m === k && (!t || e.t === t));
        if (!es.length) return null;
        return (
          <div key={k}>
            <h2>{MON[k].n} · {MON[k].t}</h2>
            <ul className="tree">
              {es.map((e) => {
                const d = P.ex[e.id]?.done;
                return (
                  <li key={e.id}>
                    <a className="it" href={`#bai-${e.id}`}>
                      <span className="n">{e.id.slice(1)}</span>
                      <span className="tt">{e.title}<small>{e.src}</small></span>
                      <span className={`pill ${d ? 'o' : 'w'}`}>{d ? 'Đã xong' : e.lv}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export function Exercise({ id, P, markEx }) {
  const e = EX.find((x) => x.id === id);
  if (!e) return <ExIndex P={P} />;
  // key={id} ở nơi gọi: chuyển bài thì state (số bước đã mở, kết quả kiểm tra) được đặt lại
  return <ExerciseBody e={e} markEx={markEx} />;
}

function ExerciseBody({ e, markEx }) {
  const r = runEx(e);
  const n = r.steps.length;
  const [shown, setShown] = useState(0);
  const [mine, setMine] = useState('');
  const [res, setRes] = useState(null);
  const all = shown >= n;
  const i = EX.indexOf(e);

  const open = (k) => {
    const v = Math.min(k, n);
    setShown(v);
    if (v >= n) markEx(e.id);
  };
  const check = () => {
    const v = parseNum(mine);
    if (isNaN(v)) return setRes({ k: 'w', msg: 'Hãy nhập một số' });
    const tol = e.tol || 0.005;
    const good = Math.abs(v - r.ans) <= Math.max(Math.abs(r.ans) * tol, 0.011);
    setRes(good ? { k: 'o', ok: true } : { k: 'b', ok: false });
    if (good) markEx(e.id);
  };

  return (
    <>
      <div className="crumb"><a href="#bai">Bài tính</a> › {MON[e.m].n} › <span>{e.lv}</span></div>
      <h1>{e.title}</h1>
      <p className="mut sm">Nguồn: {e.src}</p>
      <Html className="card les" html={e.prompt} />
      <div className="card" style={{ marginTop: 12 }}>
        <b>Kiểm tra kết quả của bạn</b>
        <div className="row" style={{ marginTop: 8 }}>
          <input type="text" inputMode="decimal" placeholder="Nhập số" style={{ width: 160 }} value={mine}
            onChange={(ev) => setMine(ev.target.value)} onKeyDown={(ev) => ev.key === 'Enter' && check()} />
          <span className="mut sm">{e.unit || ''}</span>
          <button className="btn s" onClick={check}>Kiểm tra</button>
        </div>
        <div className="sm" style={{ marginTop: 8 }}>
          {res?.msg && <span className="pill w">{res.msg}</span>}
          {res && !res.msg && res.ok && <><span className="pill o">Đúng</span> Kết quả khớp ({nf(r.ans)}).</>}
          {res && !res.msg && !res.ok && (
            <><span className="pill b">Chưa khớp</span> Hãy rà lại từng bước bên dưới; đáp số đúng chỉ hiện khi bạn xem hết lời giải.</>
          )}
        </div>
      </div>
      <h2>Lời giải từng bước</h2>
      {r.steps.slice(0, shown).map((s, k) => (
        <div className="step" key={k}>
          <Html as="h4" html={s.h} />
          <Html className="les" html={s.b} />
        </div>
      ))}
      {all && (
        <>
          <div className="ans">Kết quả: {nf(r.ans)} {e.unit || ''}</div>
          {r.note && <div className="note"><b>Lưu ý:</b> <span dangerouslySetInnerHTML={{ __html: r.note }} /></div>}
        </>
      )}
      <div className="row">
        {!all && (
          <>
            <button className="btn" onClick={() => open(shown + 1)}>Xem bước {shown + 1}/{n}</button>
            <button className="btn g" onClick={() => open(n)}>Xem hết</button>
          </>
        )}
      </div>
      <div className="row" style={{ justifyContent: 'space-between', marginTop: 20 }}>
        {EX[i - 1] ? <a className="btn s g" href={`#bai-${EX[i - 1].id}`}>← Bài trước</a> : <span />}
        {LT[e.t] && <a className="btn s g" href={`#hoc-${e.t}`}>Bài học liên quan</a>}
        {EX[i + 1] ? <a className="btn s g" href={`#bai-${EX[i + 1].id}`}>Bài sau →</a> : <span />}
      </div>
    </>
  );
}
