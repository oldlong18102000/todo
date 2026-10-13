import { useState } from 'react';
import { irrf, nf, pa } from './data/exercises.js';
import { parseNum } from './lib.js';

const CALC = [
  { t: 'Giá trị tương lai / hiện tại của một khoản', fx: 'FV = PV × (1+r)ⁿ', f: [['PV', '1000'], ['r %/kỳ', '7.5'], ['n kỳ', '5']],
    run: ([pv, r, n]) => `FV = ${nf(pv * Math.pow(1 + r / 100, n))}` },
  { t: 'Niên kim cuối kỳ', fx: 'PV = A·[1−(1+r)⁻ⁿ]/r ; FV = A·[(1+r)ⁿ−1]/r', f: [['A', '100'], ['r %/kỳ', '10'], ['n kỳ', '5']],
    run: ([A, r, n]) => { const i = r / 100; return `PV = ${nf(A * pa(i, n))} · FV = ${nf((A * (Math.pow(1 + i, n) - 1)) / i)}`; } },
  { t: 'Trả nợ đều mỗi kỳ', fx: 'A = PV·r/[1−(1+r)⁻ⁿ]', f: [['Vay', '2000'], ['r %/kỳ', '10'], ['n kỳ', '5']],
    run: ([v, r, n]) => `A = ${nf(v / pa(r / 100, n))}` },
  { t: 'Lãi suất thực', fx: '(1 + r/m)ᵐ − 1', f: [['r danh nghĩa %/năm', '12'], ['m kỳ ghép/năm', '4']],
    run: ([r, m]) => `Lãi thực = ${nf((Math.pow(1 + r / 100 / m, m) - 1) * 100)}%/năm` },
  { t: 'Vốn hóa trực tiếp', fx: 'V = I / R   (I: thu nhập ròng; R: tỷ suất vốn hóa)', f: [['I (thu nhập ròng/năm)', '1000'], ['R %', '8']],
    run: ([I, R]) => `V = ${nf(I / (R / 100))}` },
  { t: 'Đòn bẩy tài chính', fx: 'ROE = [R₀ − i·(D/V)] / (E/V)', f: [['R₀ % sinh lợi tài sản', '10'], ['i % lãi vay', '8'], ['D/V % vay', '50']],
    run: ([r0, i, d]) => { const dv = d / 100; return `ROE = ${nf(((r0 / 100 - (i / 100) * dv) / (1 - dv)) * 100)}% · ${i < r0 ? 'vay có lợi' : 'vay bất lợi'}`; } },
  { t: 'Hệ số quy mô (quy tắc lũy thừa)', fx: 'Giá₂ = Giá₁ × (Công suất₂/Công suất₁)ˣ ; x thường lấy 0,6',
    f: [['Giá máy 1', '500'], ['Công suất 1', '100'], ['Công suất 2', '150'], ['x', '0.6']],
    run: ([g, c1, c2, x]) => `Giá₂ = ${nf(g * Math.pow(c2 / c1, x))}` },
];

function Calc({ c }) {
  const [vals, setVals] = useState(() => c.f.map(([, v]) => v));
  const nums = vals.map(parseNum);
  const out = nums.some(isNaN) ? '' : c.run(nums);
  return (
    <div className="card" style={{ marginBottom: 12 }}>
      <b>{c.t}</b>
      <div className="fx">{c.fx}</div>
      <div className="calc">
        {c.f.map(([l], j) => (
          <label className="f" key={l}>{l}
            <input type="text" inputMode="decimal" value={vals[j]}
              onChange={(e) => setVals(vals.map((v, k) => (k === j ? e.target.value : v)))} />
          </label>
        ))}
      </div>
      <div className="res">{out}</div>
    </div>
  );
}

function Npv() {
  const [cfText, setCfText] = useState('-1000; 300; 400; 500');
  const [rText, setRText] = useState('10');
  const cf = cfText.split(/[;\s]+/).filter(Boolean).map(parseNum);
  const r = parseNum(rText) / 100;
  let out = '';
  if (cf.length >= 2 && !cf.some(isNaN) && !isNaN(r)) {
    const f = (x) => cf.reduce((s, c, i) => s + c / Math.pow(1 + x, i), 0);
    out = `NPV = ${nf(f(r))} · IRR = ${f(-0.9) * f(2) <= 0 ? nf(irrf(cf) * 100) + '%' : 'không xác định'}`;
  }
  return (
    <div className="card">
      <b>NPV và IRR của dòng tiền</b>
      <div className="fx">NPV = Σ CFₜ/(1+r)ᵗ ; IRR: NPV = 0</div>
      <label className="f">Dòng tiền từ kỳ 0, cách nhau dấu cách hoặc chấm phẩy (ví dụ -1000; 300; 400; 500)
        <input type="text" value={cfText} onChange={(e) => setCfText(e.target.value)} />
      </label>
      <label className="f" style={{ marginTop: 8, maxWidth: 160 }}>r %/kỳ
        <input type="text" value={rText} onChange={(e) => setRText(e.target.value)} />
      </label>
      <div className="res">{out}</div>
    </div>
  );
}

export function Formulas() {
  return (
    <>
      <h1>Công thức và máy tính nhanh</h1>
      <p className="lead">Dùng để tự kiểm tra các phép tính trong bài. Dấu thập phân nhập bằng dấu chấm hoặc phẩy đều được.</p>
      {CALC.map((c) => <Calc key={c.t} c={c} />)}
      <Npv />
      <h2>Bảng tra nhanh</h2>
      <div className="tw">
        <table>
          <tbody>
            <tr><th>Cách tiếp cận</th><th>Phương pháp chính</th><th>Khi dùng</th></tr>
            <tr><td>Thị trường</td><td>So sánh trực tiếp; chiết trừ</td><td>Có giao dịch tương tự, đủ số lượng</td></tr>
            <tr><td>Chi phí</td><td>Đất + công trình (trừ hao mòn); chi phí tái tạo/thay thế</td><td>Tài sản mới, đặc thù, ít giao dịch</td></tr>
            <tr><td>Thu nhập</td><td>Vốn hóa trực tiếp; dòng tiền chiết khấu</td><td>Tài sản tạo thu nhập</td></tr>
            <tr><td>Thặng dư</td><td>Giá trị đất = giá trị phát triển − chi phí − lợi nhuận</td><td>Đất có tiềm năng phát triển</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
