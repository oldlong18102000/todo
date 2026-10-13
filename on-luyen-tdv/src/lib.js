import { useEffect, useState } from 'react';
import { Q } from './data/questions.js';
import { EX } from './data/exercises.js';
import { LES } from './data/lessons.js';

const KEY = 'tdv-on-luyen-v1';

export const LT = Object.fromEntries(LES.map((l) => [l.t, l]));
export const L_ = ['A', 'B', 'C', 'D', 'E', 'F'];
export const shortTitle = (t) => t.replace(/:.*/, '');
export const qOf = (t) => Q.filter((q) => q.t === t);
export const eOf = (t) => EX.filter((e) => e.t === t);

export const shuffle = (a) => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export function parseNum(s) {
  s = String(s).trim().replace(/\s/g, '').replace(/[^\d.,\-]/g, '');
  if (!s) return NaN;
  if (s.includes(',') && s.includes('.')) {
    if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
    else s = s.replace(/,/g, '');
  } else if (s.includes(',')) {
    s = /^-?\d{1,3}(,\d{3})+$/.test(s) ? s.replace(/,/g, '') : s.replace(',', '.');
  } else if (s.includes('.')) {
    if (/^-?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
  }
  return parseFloat(s);
}

const exCache = {};
export const runEx = (e) => exCache[e.id] || (exCache[e.id] = e.run());

/* Tiến độ lưu trong localStorage: { q: {id: {ok, n, last}}, ex: {id: {done, t}} } */
const load = () => {
  const base = { q: {}, ex: {} };
  try {
    const s = localStorage.getItem(KEY);
    if (s) return Object.assign(base, JSON.parse(s));
  } catch (e) {}
  return base;
};

export function useProgress() {
  const [P, setP] = useState(load);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(P));
    } catch (e) {}
  }, [P]);
  const markQ = (id, ok) =>
    setP((p) => ({ ...p, q: { ...p.q, [id]: { ok, n: (p.q[id]?.n || 0) + 1, last: Date.now() } } }));
  const markEx = (id) => setP((p) => ({ ...p, ex: { ...p.ex, [id]: { ...p.ex[id], done: true, t: Date.now() } } }));
  const reset = () => setP({ q: {}, ex: {} });
  return { P, markQ, markEx, reset };
}

export const stQ = (P, m) => {
  const l = Q.filter((q) => !m || q.m === m);
  return { tot: l.length, ok: l.filter((q) => P.q[q.id]?.ok).length };
};
export const stE = (P, m) => {
  const l = EX.filter((e) => !m || e.m === m);
  return { tot: l.length, done: l.filter((e) => P.ex[e.id]?.done).length };
};

export function useHash() {
  const [h, setH] = useState(() => location.hash.slice(1));
  useEffect(() => {
    const f = () => setH(location.hash.slice(1));
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return h;
}
