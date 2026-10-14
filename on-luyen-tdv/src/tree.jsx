import { useState } from 'react';
import { OVERVIEW, TREES } from './data/trees.js';
import { qOf } from './lib.js';

function Mastery({ P, q }) {
  const qs = qOf(q);
  if (!qs.length) return null;
  const seen = qs.filter((x) => P.q[x.id]).length;
  const ok = qs.filter((x) => P.q[x.id]?.ok).length;
  const cls = ok === qs.length ? 'o' : seen === 0 ? '' : seen - ok > 0 ? 'b' : 'w';
  return <span className={`pill ${cls}`} title="Số câu đã làm đúng / tổng số câu">{ok}/{qs.length} câu</span>;
}

function Node({ node, depth, mode, P }) {
  const kids = node.k || [];
  const [open, setOpen] = useState(mode === 'all' || depth < 2);
  const has = kids.length > 0;
  return (
    <li>
      <div className={`tn d${Math.min(depth, 3)}`}>
        {has ? (
          <button className="tg" aria-expanded={open} aria-label={open ? 'Thu gọn' : 'Mở rộng'} onClick={() => setOpen(!open)}>
            {open ? '−' : '+'}
          </button>
        ) : (
          <span className="tg dot" aria-hidden="true">•</span>
        )}
        <span className="tt2" onClick={() => has && setOpen(!open)} style={{ cursor: has ? 'pointer' : 'default' }}>{node.t}</span>
        {node.q && <Mastery P={P} q={node.q} />}
        {node.h && <a className="pill" href={`#${node.h}`}>Bài học →</a>}
        {node.q && qOf(node.q).length > 0 && <a className="pill w" href={`#luyen-${node.q}`}>Luyện</a>}
      </div>
      {has && open && (
        <ul className="tr">
          {kids.map((c, i) => <Node key={i} node={c} depth={depth + 1} mode={mode} P={P} />)}
        </ul>
      )}
    </li>
  );
}

export function TreeView({ P }) {
  const all = [...TREES, OVERVIEW];
  const [id, setId] = useState(all[0].id);
  const [mode, setMode] = useState('default'); // đổi mode sẽ dựng lại cây (key) để mở hết / thu gọn
  const [ver, setVer] = useState(0);
  const cur = all.find((t) => t.id === id);
  const set = (m) => { setMode(m); setVer(ver + 1); };
  return (
    <>
      <h1>Sơ đồ cây</h1>
      <p className="lead">
        Bấm dấu + / − để mở hoặc thu gọn từng nhánh. Nhánh có số “x/y câu” cho biết bạn đã làm đúng bao nhiêu câu của chủ đề đó
        (xanh: đúng hết, đỏ: đang có câu sai). Bấm “Bài học” hoặc “Luyện” để đi tiếp.
      </p>
      <div className="row" style={{ marginBottom: 12 }}>
        {all.map((t) => (
          <button key={t.id} className={`pill chip ${t.id === id ? '' : 'off'}`} onClick={() => { setId(t.id); set('default'); }}>{t.title}</button>
        ))}
      </div>
      <div className="row" style={{ marginBottom: 12 }}>
        <button className="btn s g" onClick={() => set('all')}>Mở hết</button>
        <button className="btn s g" onClick={() => set('default')}>Thu gọn</button>
      </div>
      <div className="card">
        <ul className="tr root" key={`${id}-${mode}-${ver}`}>
          <Node node={cur.root} depth={0} mode={mode} P={P} />
        </ul>
      </div>
    </>
  );
}
