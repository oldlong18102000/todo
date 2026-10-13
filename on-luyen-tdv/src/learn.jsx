import { Q } from './data/questions.js';
import { EX } from './data/exercises.js';
import { LES, MON } from './data/lessons.js';
import { LT, qOf, eOf, stQ, stE } from './lib.js';
import { Bar, Html, Stat, go } from './ui.jsx';

export function Home({ P, reset }) {
  const a = stQ(P);
  const b = stE(P);
  const wrong = Q.filter((q) => P.q[q.id] && !P.q[q.id].ok).length;
  return (
    <>
      <h1>Ôn luyện thi thẻ thẩm định viên về giá</h1>
      <p className="lead">
        Bài học ngắn theo ba môn, {Q.length} câu trắc nghiệm có giải thích, và {EX.length} bài tính giải từng bước. Nội dung
        bám theo tài liệu K181.
      </p>
      <div className="card">
        <div className="stat">
          <Stat value={`${a.ok}/${a.tot}`} label="câu đã làm đúng" />
          <Stat value={wrong} label="câu đang sai" />
          <Stat value={`${b.done}/${b.tot}`} label="bài tính đã xong" />
        </div>
        <Bar a={a.ok} b={a.tot} />
        <div className="row" style={{ marginTop: 12 }}>
          <button className="btn" onClick={() => go('luyen-mix')}>Làm nhanh 10 câu ngẫu nhiên</button>
          {wrong > 0 && (
            <button className="btn g" onClick={() => go('luyen-sai')}>Ôn {wrong} câu đã sai</button>
          )}
        </div>
      </div>
      <h2>Ba môn thi</h2>
      <div className="grid">
        {[1, 2, 3].map((m) => {
          const q = stQ(P, m);
          const e = stE(P, m);
          const n = LES.filter((l) => l.m === m).length;
          return (
            <div className="card" key={m}>
              <span className="pill">{MON[m].n}</span>
              <h3 style={{ marginTop: 8 }}>{MON[m].t}</h3>
              <p className="mut sm" style={{ margin: '0 0 8px' }}>{MON[m].d}</p>
              <Bar a={q.ok} b={q.tot} />
              <div className="sm mut">{n} bài học · {q.ok}/{q.tot} câu đúng · {e.done}/{e.tot} bài tính</div>
              <div className="row" style={{ marginTop: 10 }}>
                <a className="btn s" href="#hoc">Học</a>
                <button className="btn s g" onClick={() => go(`luyen-m${m}`)}>Luyện câu hỏi</button>
                <button className="btn s g" onClick={() => go(`bai-m${m}`)}>Bài tính</button>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Cách ôn gợi ý</h2>
      <ol className="lead" style={{ paddingLeft: 20 }}>
        <li>Đọc một bài học, ghi nhớ khung “Nhớ nhanh”.</li>
        <li>Làm ngay câu hỏi cùng chủ đề; đọc phần giải thích kể cả khi đã đúng.</li>
        <li>Với bài tính: tự làm, nhập kết quả để kiểm tra, rồi mới mở từng bước.</li>
        <li>Cuối mỗi tuần ôn lại toàn bộ câu đã sai.</li>
      </ol>
      <details className="card">
        <summary><b>Lưu ý về nguồn và độ tin cậy</b></summary>
        <ul className="sm" style={{ paddingLeft: 18 }}>
          <li>Không tìm thấy đáp án chính thức công khai của các kỳ thi. Lời giải đề BĐS 2017 là phép tính của người soạn với giả định ghi rõ trong bài, không phải đáp án của Hội đồng thi.</li>
          <li>Một số số liệu trong giáo trình lệch nhẹ so với tính lại (đã chú thích trong bài tính liên quan, ví dụ thặng dư bài 2: 108.317,58 chứ không phải 108.204,15).</li>
          <li>Hai tệp .ppt (Luật kinh doanh BĐS, Nguyên lý HTĐG 2025) chưa đọc được; phần pháp luật thuế (GTGT, TNDN) còn mỏng. Văn bản pháp luật có thể đã sửa đổi, hãy đối chiếu bản hiện hành trước khi thi.</li>
          <li>Chưa có tài liệu thẩm định giá doanh nghiệp nên không có phần này.</li>
          <li>Tiến độ lưu trong trình duyệt này, không đồng bộ sang thiết bị khác.</li>
        </ul>
        <button className="btn s g" onClick={reset}>Xóa tiến độ</button>
      </details>
    </>
  );
}

export function LessonIndex({ P }) {
  return (
    <>
      <h1>Bài học</h1>
      <p className="lead">Chọn một bài; cuối mỗi bài có liên kết sang câu hỏi và bài tính cùng chủ đề.</p>
      {[1, 2, 3].map((m) => (
        <div key={m}>
          <h2>{MON[m].n} · {MON[m].t}</h2>
          <ul className="tree">
            {LES.filter((l) => l.m === m).map((l, i) => {
              const qs = qOf(l.t);
              const ok = qs.filter((q) => P.q[q.id]?.ok).length;
              const ne = eOf(l.t).length;
              return (
                <li key={l.t}>
                  <a className="it" href={`#hoc-${l.t}`}>
                    <span className="n">{i + 1}</span>
                    <span className="tt">{l.title}<small>{l.sum}</small></span>
                    <span className={`pill ${qs.length && ok === qs.length ? 'o' : ''}`}>
                      {ok}/{qs.length} câu{ne ? ` · ${ne} bài` : ''}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

const cut = (t) => t.slice(0, 32) + (t.length > 32 ? '…' : '');

export function Lesson({ t, P }) {
  const l = LT[t];
  if (!l) return <LessonIndex P={P} />;
  const i = LES.indexOf(l);
  const pv = LES[i - 1];
  const nx = LES[i + 1];
  const qs = qOf(t);
  const ok = qs.filter((q) => P.q[q.id]?.ok).length;
  const es = eOf(t);
  return (
    <>
      <div className="crumb"><a href="#hoc">Bài học</a> › {MON[l.m].n}</div>
      <h1>{l.title}</h1>
      <p className="lead">{l.sum}</p>
      <Html className="les" html={l.html} />
      {l.k?.length > 0 && (
        <div className="key">
          <b>Nhớ nhanh</b>
          <ul>{l.k.map((x, j) => <li key={j} dangerouslySetInnerHTML={{ __html: x }} />)}</ul>
        </div>
      )}
      <div className="card">
        <b>Luyện tập chủ đề này</b>
        <div className="row" style={{ marginTop: 10 }}>
          {qs.length > 0 && (
            <button className="btn" onClick={() => go(`luyen-${t}`)}>{qs.length} câu trắc nghiệm (đúng {ok})</button>
          )}
          {es.length > 0 && (
            <button className="btn g" onClick={() => go(`bai-${t}`)}>{es.length} bài tính</button>
          )}
          {!qs.length && !es.length && <span className="mut sm">Chưa có bài luyện riêng cho chủ đề này.</span>}
        </div>
      </div>
      <div className="row" style={{ justifyContent: 'space-between', marginTop: 18 }}>
        {pv ? <a className="btn s g" href={`#hoc-${pv.t}`}>← {cut(pv.title)}</a> : <span />}
        {nx ? <a className="btn s g" href={`#hoc-${nx.t}`}>{cut(nx.title)} →</a> : <span />}
      </div>
    </>
  );
}
