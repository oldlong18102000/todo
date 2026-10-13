import { useEffect, useRef, useState } from 'react';
import { Q } from './data/questions.js';
import { MON } from './data/lessons.js';
import { LT, qOf, shuffle, shortTitle, useHash, useProgress } from './lib.js';
import { Home, Lesson, LessonIndex } from './learn.jsx';
import { Quiz, QuizSetup } from './quiz.jsx';
import { ExIndex, Exercise } from './practice.jsx';
import { Formulas } from './formulas.jsx';

const TABS = [['', 'Tổng quan'], ['hoc', 'Bài học'], ['luyen', 'Trắc nghiệm'], ['bai', 'Bài tính'], ['ct', 'Công thức']];

const newSession = (qs, label) => ({
  label,
  i: 0,
  list: qs.map((q) => ({ q, perm: shuffle(q.o.map((_, k) => k)), pick: null })),
});

export default function App() {
  const hash = useHash();
  const { P, markQ, markEx, reset } = useProgress();
  const [QS, setQS] = useState(null);
  const [setup, setSetup] = useState({ m: '', t: '', mode: 'all', n: '20' });
  const [a, ...rest] = hash.split('-');
  const arg = rest.join('-');
  const tab = ['hoc', 'luyen', 'bai', 'ct'].includes(a) ? a : '';
  const Pref = useRef(P);
  Pref.current = P;

  // #luyen-<bộ câu> tạo phiên mới rồi đổi hash về #luyen
  useEffect(() => {
    if (a !== 'luyen' || !arg) return;
    let l;
    if (arg === 'mix') l = shuffle(Q).slice(0, 10);
    else if (arg === 'sai') l = Q.filter((q) => Pref.current.q[q.id] && !Pref.current.q[q.id].ok);
    else if (/^m\d$/.test(arg)) l = shuffle(Q.filter((q) => q.m == arg[1])).slice(0, 20);
    else l = shuffle(qOf(arg));
    const label = arg === 'mix' ? '10 câu ngẫu nhiên' : arg === 'sai' ? 'Ôn câu đã sai'
      : /^m\d$/.test(arg) ? MON[arg[1]].n : LT[arg] ? shortTitle(LT[arg].title) : arg;
    setQS(l.length ? newSession(l, label) : null);
    history.replaceState(null, '', '#luyen');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    if (!l.length) setEmpty(true);
  }, [hash]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => window.scrollTo(0, 0), [hash]);

  const pick = (j) => {
    const it = QS.list[QS.i];
    if (it.pick !== null) return;
    const k = it.perm[j];
    markQ(it.q.id, k === it.q.a);
    setQS({ ...QS, list: QS.list.map((x, n) => (n === QS.i ? { ...x, pick: k } : x)) });
  };
  const quit = () => { setQS(null); location.hash = 'luyen'; };
  const redo = () => setQS(newSession(shuffle(QS.list.filter((x) => x.pick !== x.q.a).map((x) => x.q)), 'Làm lại câu sai'));

  let view;
  if (a === 'hoc') view = arg ? <Lesson t={arg} P={P} /> : <LessonIndex P={P} />;
  else if (a === 'luyen') {
    if (arg) view = null;
    else if (QS) view = <Quiz S={QS} P={P} onPick={pick} onNext={() => setQS({ ...QS, i: QS.i + 1 })} onQuit={quit} onRedo={redo} />;
    else if (empty) view = (<><h1>Chưa có câu nào</h1><p className="lead">Bộ câu này đang trống.</p><button className="btn" onClick={() => { setEmpty(false); location.hash = 'luyen'; }}>Quay lại</button></>);
    else view = <QuizSetup P={P} setup={setup} setSetup={setSetup} onStart={(qs, f) => { setSetup(f); setQS(newSession(shuffle(qs).slice(0, +f.n), 'Bộ câu tự chọn')); }} />;
  } else if (a === 'bai') view = /^b\d+$/.test(arg) ? <Exercise key={arg} id={arg} P={P} markEx={markEx} /> : <ExIndex P={P} filter={arg} />;
  else if (a === 'ct') view = <Formulas />;
  else view = <Home P={P} reset={reset} />;

  return (
    <div className="wrap">
      <header className="top">
        <div className="brand"><b>Ôn thi thẻ thẩm định viên</b><span>Pháp luật · BĐS · Động sản</span></div>
        <nav>
          {TABS.map(([k, label]) => (
            <a key={k} href={`#${k}`} className={tab === k ? 'on' : ''}>{label}</a>
          ))}
        </nav>
      </header>
      <main>{view}</main>
    </div>
  );
}
