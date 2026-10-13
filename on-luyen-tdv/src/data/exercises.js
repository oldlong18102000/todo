// Bài tính có lời giải từng bước. Mọi số trong lời giải được tính bằng code khi hiển thị.
const nf=(x,d=2)=>Number(x).toLocaleString('vi-VN',{minimumFractionDigits:d,maximumFractionDigits:d});
const pct=(x,d=2)=>nf(x*100,d)+'%';
const pa=(r,n)=>(1-Math.pow(1+r,-n))/r;
const irrf=(cf)=>{let lo=-.9,hi=2;const f=r=>cf.reduce((s,c,i)=>s+c/Math.pow(1+r,i),0);for(let k=0;k<200;k++){const m=(lo+hi)/2;if(f(lo)*f(m)<=0)hi=m;else lo=m}return (lo+hi)/2};
const EX=[];
const ex=o=>{o.id='b'+(EX.length+1);EX.push(o)};

/* ===== MÔN 1: TOÁN ỨNG DỤNG (Chuyên đề 2) ===== */
ex({m:1,t:'toan',title:'Ông P: huy động thêm bao nhiêu để 5 năm sau mua căn hộ?',lv:'Cơ bản',src:'CĐ2 – Toán ứng dụng, bài 1a',
prompt:'<p>Ông P dự kiến sau 5 năm mua căn hộ trị giá <b>5.000 triệu</b>. Hiện có <b>3.000 triệu</b>, lãi suất tiền gửi <b>7,5%/năm</b>. Tính số tiền ông phải huy động thêm để gửi ngay lúc này.</p>',
unit:'triệu đồng',run(){const pv=5000/Math.pow(1.075,5);const a=pv-3000;return{ans:a,steps:[
{h:'Nhận dạng',b:'Cần một khoản tiền gửi MỘT LẦN hôm nay để sau 5 năm thành 5.000: đây là bài hiện giá (PV) của một khoản tương lai.'},
{h:'Công thức',b:'PV = FV / (1 + r)<sup>n</sup>'},
{h:'Tính PV',b:`PV = 5.000 / 1,075<sup>5</sup> = 5.000 / ${nf(Math.pow(1.075,5),4)} = <b>${nf(pv)}</b> triệu`},
{h:'Trừ số đang có',b:`Huy động thêm = ${nf(pv)} − 3.000 = <b>${nf(a)}</b> triệu`}],note:'Giáo trình: 482,79 triệu.'}}});
ex({m:1,t:'toan',title:'Ông P: gửi đều cuối mỗi năm bao nhiêu?',lv:'Cơ bản',src:'CĐ2 – Toán ứng dụng, bài 1c',
prompt:'<p>Cùng số liệu bài trước: ông P có 3.000 triệu, lãi 7,5%/năm, cần 5.000 triệu sau 5 năm. Nếu ngoài khoản 3.000 triệu ông gửi thêm một khoản <b>đều cuối mỗi năm</b>, khoản đó là bao nhiêu?</p>',
unit:'triệu đồng/năm',run(){const g=Math.pow(1.075,5);const fv=3000*g;const sh=5000-fv;const A=sh*.075/(g-1);return{ans:A,steps:[
{h:'Giá trị tương lai của 3.000 triệu hiện có',b:`3.000 × 1,075<sup>5</sup> = 3.000 × ${nf(g,4)} = ${nf(fv)} triệu`},
{h:'Số còn thiếu sau 5 năm',b:`5.000 − ${nf(fv)} = <b>${nf(sh)}</b> triệu`},
{h:'Công thức niên kim gửi cuối kỳ (FV)',b:'A = Thiếu × r / [(1+r)<sup>n</sup> − 1]'},
{h:'Tính A',b:`A = ${nf(sh)} × 0,075 / (${nf(g,4)} − 1) = <b>${nf(A)}</b> triệu/năm`}],note:'Giáo trình: 119,33 triệu. Câu b: nếu gửi 140 triệu/năm thì tổng sau 5 năm = 5.120,06 triệu > 5.000 nên đủ tiền.'}}});
ex({m:1,t:'toan',title:'Ông P: vay 2.000 triệu, trả đều 5 năm',lv:'Cơ bản',src:'CĐ2 – Toán ứng dụng, bài 1d',
prompt:'<p>Ngân hàng cho ông P vay <b>2.000 triệu</b> (phần còn thiếu) với lãi <b>10%/năm</b>, 5 năm, trả đều cuối mỗi năm (gốc + lãi). Tính số tiền trả hằng năm.</p>',
unit:'triệu đồng/năm',run(){const A=2000*.1/(1-Math.pow(1.1,-5));return{ans:A,steps:[
{h:'Nhận dạng',b:'Khoản vay hôm nay = hiện giá của chuỗi trả nợ đều: PV = A × [1 − (1+r)<sup>−n</sup>]/r. Giải ngược ra A.'},
{h:'Công thức',b:'A = PV × r / [1 − (1+r)<sup>−n</sup>]'},
{h:'Tính',b:`A = 2.000 × 0,1 / (1 − 1,1<sup>−5</sup>) = 200 / ${nf(1-Math.pow(1.1,-5),5)} = <b>${nf(A)}</b> triệu/năm`}],note:'Giáo trình: 527,59 triệu.'}}});
ex({m:1,t:'toan',title:'Ông N: chọn ngân hàng A (12%, ghép quý) hay B (12,2%, ghép nửa năm)?',lv:'Cơ bản',src:'CĐ2 – Toán ứng dụng, bài 2c',
prompt:'<p>Hai ngân hàng cho vay 1 tỷ đồng, 5 năm, gốc trả khi đáo hạn. A: <b>12%/năm ghép lãi hàng quý</b>. B: <b>12,2%/năm ghép lãi 6 tháng/lần</b>. Tính lãi suất thực của A (nhập %) và cho biết nên vay ngân hàng nào.</p>',
unit:'% (lãi thực của A)',run(){const a=Math.pow(1.03,4)-1,b=Math.pow(1.061,2)-1;return{ans:a*100,steps:[
{h:'Nguyên tắc',b:'Khi kỳ ghép lãi khác nhau, so sánh LÃI SUẤT THỰC: r<sub>thực</sub> = (1 + r<sub>danh nghĩa</sub>/m)<sup>m</sup> − 1.'},
{h:'Ngân hàng A',b:`m = 4: (1 + 0,12/4)<sup>4</sup> − 1 = 1,03<sup>4</sup> − 1 = <b>${pct(a)}</b>`},
{h:'Ngân hàng B',b:`m = 2: (1 + 0,122/2)<sup>2</sup> − 1 = 1,061<sup>2</sup> − 1 = <b>${pct(b)}</b>`},
{h:'Kết luận',b:`${pct(a)} < ${pct(b)} nên vay ngân hàng <b>A</b> (dù lãi danh nghĩa thấp hơn ít, thực tế chênh lệch nhỏ).`}],note:'Giáo trình: 12,55% và 12,57%.'}}});
ex({m:1,t:'toan',title:'Ông N: trả nợ đều mỗi quý cho khoản vay 1 tỷ ở ngân hàng A',lv:'Cơ bản',src:'CĐ2 – Toán ứng dụng, bài 2d',
prompt:'<p>Ông N vay <b>1.000 triệu</b> ở ngân hàng A (12%/năm, ghép quý), 5 năm, trả đều cuối mỗi quý (gốc + lãi). Tính số tiền trả mỗi quý.</p>',
unit:'triệu đồng/quý',run(){const r=.03,n=20;const A=1000*r/(1-Math.pow(1+r,-n));return{ans:A,steps:[
{h:'Đổi kỳ',b:'Lãi mỗi kỳ r = 12%/4 = 3%; số kỳ n = 5 × 4 = 20.'},
{h:'Công thức',b:'A = PV × r / [1 − (1+r)<sup>−n</sup>]'},
{h:'Tính',b:`A = 1.000 × 0,03 / (1 − 1,03<sup>−20</sup>) = 30 / ${nf(1-Math.pow(1.03,-20),5)} = <b>${nf(A)}</b> triệu/quý (≈ 67.215.708 đồng)`}],note:'Giáo trình: 67.215.708 đồng.'}}});

/* ===== MÔN 2: BẤT ĐỘNG SẢN ===== */
ex({m:2,t:'sosanh',title:'So sánh: thửa đất 56 m² (điều chỉnh theo yếu tố, lấy BĐS thẩm định làm chuẩn)',lv:'Khó',src:'BÀI TẬP VẬN DỤNG BĐS – So sánh bài 1',
prompt:`<p>Thẩm định thửa đất ở <b>56 m²</b>. Thông tin 3 thửa so sánh:</p>
<div class="tw"><table><tr><th>Yếu tố</th><th>Cần thẩm định</th><th>SS1</th><th>SS2</th><th>SS3</th></tr>
<tr><td>Giá bán/m²</td><td>?</td><td>22 trđ</td><td>20 trđ</td><td>22,5 trđ</td></tr>
<tr><td>Pháp lý</td><td>Có sổ</td><td>Chưa hợp thức</td><td>Có sổ</td><td>Có sổ</td></tr>
<tr><td>Lợi thế kinh doanh</td><td>Ngõ 10m</td><td>Ngõ 10m</td><td>Ngõ 8m</td><td>2 mặt ngõ 8m</td></tr>
<tr><td>Hạ tầng</td><td>Thoát nước kém</td><td>Tốt</td><td>Tốt</td><td>Tốt</td></tr>
<tr><td>Hướng</td><td>Tây</td><td>Đông</td><td>Đông Nam</td><td>Bắc</td></tr>
<tr><td>Cảnh quan</td><td>Khu dân cư</td><td>Khu dân cư</td><td>Khu dân cư</td><td>Công viên</td></tr>
<tr><td>Thanh toán</td><td>Trả ngay</td><td>60% ngay, 40% sau 1 năm</td><td>Trả ngay</td><td>Trả ngay</td></tr></table></div>
<p>Thị trường: chi phí hợp thức hóa SS1 = 1 trđ/m²; ngõ 10m cao hơn ngõ 8m 10%, kém 2 mặt ngõ 8m 5% (giáo trình quy: ngõ 8m = 90%, 2 mặt ngõ 8m = 105%); công viên cao hơn khu dân cư 5%; thoát nước tốt cao hơn kém 10%; hướng Tây = Bắc, kém Đông 5%, kém Đông Nam 10%; lãi vay 1 năm 20%/năm. Ước tính giá trị thửa đất.</p>`,
unit:'triệu đồng (cả thửa)',tol:.015,run(){
const base1=22*(.6+.4/1.2),a1=-22+base1;const p1=base1+1;
const adj=(a,b)=>a/b-1;const ha=adj(100,110),dong=adj(100,105),dn=adj(100,110),nga8=adj(100,90),nga2=adj(100,105),cv=adj(100,105);
const r=[{b:p1,a:[ha,dong],abs:[a1,1]},{b:20,a:[nga8,ha,dn],abs:[]},{b:22.5,a:[nga2,ha,cv],abs:[]}];
const out=r.map(x=>{const t=x.a.reduce((s,y)=>s+y,0);const p=x.b*(1+t);const g=x.abs.reduce((s,y)=>s+Math.abs(y),0)+x.a.reduce((s,y)=>s+Math.abs(x.b*y),0);const net=x.abs.reduce((s,y)=>s+y,0)+x.b*t;return{p,t,g,net,k:x.abs.length+x.a.length}});
const mean=(out[0].p+out[1].p+out[2].p)/3;const val=out[2].p*56;
return{ans:val,steps:[
{h:'1. Quy các thông tin thị trường về tỷ lệ so với tài sản thẩm định',b:`Ngõ: 10m = 100%, 8m = 90%, 2 mặt ngõ 8m = 105% → SS2: 100/90 − 1 = <b>+${pct(nga8)}</b>; SS3: 100/105 − 1 = <b>${pct(nga2)}</b>.<br>Hạ tầng tốt = 110% (thẩm định kém = 100%) → 100/110 − 1 = <b>${pct(ha)}</b>.<br>Hướng: Tây = Bắc = 100%, Đông = 105%, Đông Nam = 110% → SS1: <b>${pct(dong)}</b>; SS2: <b>${pct(dn)}</b>; SS3 (Bắc): 0.<br>Cảnh quan: công viên 105% → SS3: <b>${pct(cv)}</b>.`},
{h:'2. Điều chỉnh số tiền tuyệt đối TRƯỚC (thanh toán, pháp lý) – chỉ SS1',b:`Thanh toán: 22 × 0,6 + 22 × 0,4 / 1,2 = ${nf(base1)} (điều chỉnh ${nf(a1)}).<br>Pháp lý: + 1 (chi phí hợp thức hóa) → ${nf(p1)} trđ/m². Đây là giá cơ sở cho các điều chỉnh %.`},
{h:'3. Điều chỉnh tỷ lệ % trên giá cơ sở (cộng các tỷ lệ)',b:`SS1: ${nf(p1)} × (1 ${pct(ha)} ${pct(dong)}) → tổng ${pct(out[0].t)} → <b>${nf(out[0].p)}</b> trđ/m².<br>SS2: 20 × (1 + ${pct(nga8)} ${pct(ha)} ${pct(dn)}) → tổng ${pct(out[1].t)} → <b>${nf(out[1].p)}</b>.<br>SS3: 22,5 × (1 ${pct(nga2)} ${pct(ha)} ${pct(cv)}) → tổng ${pct(out[2].t)} → <b>${nf(out[2].p)}</b>.`},
{h:'4. Kiểm tra nguyên tắc khống chế 15% và các chỉ tiêu chọn',b:`Trung bình ${nf(mean)}; chênh lệch ${out.map(o=>pct(o.p/mean-1)).join(' / ')} → đều &lt; 15%.<br>Số lần điều chỉnh: ${out.map(o=>o.k).join(' / ')}. Điều chỉnh gộp: ${out.map(o=>nf(o.g)).join(' / ')}; thuần: ${out.map(o=>nf(o.net)).join(' / ')}. SS3 nhỏ nhất về gộp và thuần, ít lần (3) → chọn SS3.`},
{h:'5. Giá trị thửa đất',b:`${nf(out[2].p)} × 56 = <b>${nf(val)}</b> triệu ≈ 1.025 triệu (làm tròn).`}],
note:'Giáo trình: 1.025 triệu. Sai khác nhỏ ở SS1 (giáo trình 18,49, tính lại ra 18,55) do làm tròn; kết luận chọn SS3 không đổi. Nếu dùng cách "trung bình cộng" của 3 mức giá chỉ dẫn thì ≈ 1.035 triệu: cả hai cách đều chấp nhận được nếu nêu lý do.'}}});

ex({m:2,t:'sosanh',title:'So sánh: lô đất mặt phố Bà Triệu (điều chỉnh %, lấy giá tài sản so sánh làm chuẩn)',lv:'Khó',src:'BÀI TẬP VẬN DỤNG BĐS – So sánh bài 2',
prompt:`<p>Lô đất mục tiêu: <b>4,5 m × 20 m = 90 m²</b>, đã có sổ, mặt phố Bà Triệu (một chiều), bên số chẵn (bên phải đường). Ba lô so sánh:</p>
<ul><li>SS1 (số 265, số lẻ = bên TRÁI đường): 230 triệu/m²; có sổ. Lô thẩm định số 306 (số chẵn = bên PHẢI); đất bên phải có giá cao hơn bên trái 10% → SS1 điều chỉnh +10% (giáo trình điều chỉnh trực tiếp theo giá SS1).</li>
<li>SS2: 240 triệu/m²; có sổ; mặt tiền 3,2 m (nhỏ); lợi thế kinh doanh kém.</li>
<li>SS3: 210 triệu/m²; CHƯA có sổ nhưng đủ điều kiện; môi trường kém (xưởng cơ khí), phong thủy kém.</li></ul>
<p>Mức điều chỉnh (tính trực tiếp theo giá hiện hành của tài sản so sánh): mặt tiền 4,5–5 m cao hơn mặt tiền 3,2 m 3% → SS2 +3%; lợi thế kinh doanh SS2 +2%; phong thủy SS3 +2%; môi trường SS3 +1%. Pháp lý điều chỉnh trước: nộp tiền sử dụng đất trong hạn mức (hạn mức 120 m², diện tích 81 m²) bằng 50% giá Nhà nước 60 triệu/m². Các tài sản đáng tin ngang nhau. Tính giá trị quyền sử dụng đất.</p>`,
unit:'triệu đồng',run(){const l3=210+60*.5;const f=[1.10,1.05,1.03];const base=[230,240,l3];const p=base.map((b,i)=>b*f[i]);const m=p.reduce((s,x)=>s+x,0)/3;const v=m*90;return{ans:v,steps:[
{h:'1. Điều chỉnh pháp lý trước (số tuyệt đối)',b:`SS3 chưa có sổ: tiền sử dụng đất trong hạn mức = 60 × 50% = 30 triệu/m² → giá SS3 = 210 + 30 = <b>${nf(l3)}</b> triệu/m². SS1 và SS2 đã có sổ nên giữ nguyên.`},
{h:'2. Cộng tổng tỷ lệ điều chỉnh % trên giá đã điều chỉnh pháp lý',b:`SS1: +10% → hệ số 1,10. SS2: +2% (lợi thế) +3% (mặt tiền) = +5% → 1,05. SS3: +1% (môi trường) +2% (phong thủy) = +3% → 1,03.`},
{h:'3. Mức giá chỉ dẫn',b:`SS1: 230 × 1,10 = <b>${nf(p[0],1)}</b>; SS2: 240 × 1,05 = <b>${nf(p[1],1)}</b>; SS3: ${nf(l3)} × 1,03 = <b>${nf(p[2],1)}</b> triệu/m².`},
{h:'4. Chọn mức giá',b:`Độ tin cậy ngang nhau, chênh lệch so với trung bình đều nhỏ (&lt; 15%) → lấy bình quân: (${nf(p[0],1)} + ${nf(p[1],1)} + ${nf(p[2],1)})/3 = <b>${nf(m,2)}</b> triệu/m².`},
{h:'5. Giá trị lô đất',b:`${nf(m,2)} × 90 = <b>${nf(v)}</b> triệu ≈ 22.566 triệu.`}],note:'Giáo trình: 22.566 triệu (≈ 250,73 triệu/m²).'}}});

ex({m:2,t:'chiphi',title:'Chi phí kết hợp so sánh: tách giá đất rồi cộng giá trị công trình',lv:'Khó',src:'BÀI TẬP VẬN DỤNG BĐS – Chi phí bài 1',
prompt:`<p>BĐS thẩm định: đất <b>60 m² (4 m × 15 m)</b>; nhà 3 tầng khung bê tông, sàn xây dựng <b>150 m²</b>, chất lượng còn lại 80%, đơn giá xây mới 3,5 triệu/m². Ba BĐS so sánh (giá bán trọn gói):</p>
<div class="tw"><table><tr><th></th><th>SS1</th><th>SS2</th><th>SS3</th></tr><tr><td>Đất</td><td>80 m² (5×16)</td><td>60 m² (3×20)</td><td>90 m² (5×18)</td></tr><tr><td>Sàn XD</td><td>200 m²</td><td>150 m²</td><td>250 m²</td></tr><tr><td>Còn lại</td><td>75%</td><td>80%</td><td>80%</td></tr><tr><td>Đơn giá XD mới</td><td>3,5</td><td>3,2</td><td>3,3</td></tr><tr><td>Giá bán</td><td>1.235 triệu</td><td>924 triệu</td><td>1.470 triệu</td></tr></table></div>
<p>Giá đất theo bề rộng: &gt;3,8–4 m = 100%; 3–3,8 m = 96%; &gt;4–6 m = 104%. Theo chiều dài: ≤16 m = 100%; &gt;16–25 m = 95%. Theo quy mô: 60–80 m² = 100%; &gt;80–100 m² = 93%. Ước tính giá trị BĐS.</p>`,
unit:'triệu đồng',tol:.01,run(){
const l=[1235-200*3.5*.75,924-150*3.2*.8,1470-250*3.3*.8];const area=[80,60,90];const u=l.map((x,i)=>x/area[i]);
const adj=[[100/104-1],[100/96-1,100/95-1],[100/104-1,100/95-1,100/93-1]];
const pu=u.map((x,i)=>x*(1+adj[i].reduce((s,y)=>s+y,0)));const m=pu.reduce((s,x)=>s+x,0)/3;
const ct=150*3.5*.8;const land=pu[0]*60;const v=land+ct;return{ans:v,steps:[
{h:'1. Giá trị còn lại của công trình trên mỗi BĐS so sánh (chiết trừ)',b:`SS1: 200 × 3,5 × 75% = 525 → đất = 1.235 − 525 = <b>${nf(l[0],0)}</b> → ${nf(u[0],3)} trđ/m².<br>SS2: 150 × 3,2 × 80% = 384 → đất = <b>${nf(l[1],0)}</b> → ${nf(u[1],3)}.<br>SS3: 250 × 3,3 × 80% = 660 → đất = <b>${nf(l[2],0)}</b> → ${nf(u[2],3)}.`},
{h:'2. Điều chỉnh về bề rộng/chiều dài/quy mô (lấy đất thẩm định = 100%: rộng 4 m, dài 15 m, 60 m²)',b:`SS1: rộng 5 m (104%) → 100/104 − 1 = ${pct(adj[0][0])}. Dài 16 m, quy mô 80 m² = 100%: không đổi.<br>SS2: rộng 3 m (96%) → +${pct(adj[1][0])}; dài 20 m (95%) → +${pct(adj[1][1])}.<br>SS3: rộng 5 m → ${pct(adj[2][0])}; dài 18 m → +${pct(adj[2][1])}; quy mô 90 m² (93%) → +${pct(adj[2][2])}.`},
{h:'3. Mức giá chỉ dẫn của đất',b:`SS1: <b>${nf(pu[0],4)}</b>; SS2: <b>${nf(pu[1],4)}</b>; SS3: <b>${nf(pu[2],4)}</b> trđ/m². Trung bình ${nf(m,4)}; lệch ${pu.map(x=>pct(x/m-1)).join(' / ')} (đều &lt; 15%).`},
{h:'4. Chọn mức giá',b:`SS1 chỉ điều chỉnh 1 lần, điều chỉnh gộp và thuần nhỏ nhất → chọn SS1: ${nf(pu[0],4)} trđ/m².`},
{h:'5. Giá trị đất + công trình',b:`Đất: ${nf(pu[0],4)} × 60 = <b>${nf(land)}</b>; công trình: 150 × 3,5 × 80% = <b>${nf(ct,0)}</b>.<br>BĐS = ${nf(land)} + ${nf(ct,0)} = <b>${nf(v)}</b> triệu ≈ 932 triệu.`}],note:'Giáo trình: 932 triệu (nếu lấy trung bình của ba mức giá: 9,3990 × 60 + 420 ≈ 983,9 triệu).'}}});

ex({m:2,t:'chiphi',title:'Chi phí: đất (chiết trừ từ lô bên cạnh) + công trình theo hao mòn kết cấu',lv:'Trung bình',src:'BÀI TẬP VẬN DỤNG BĐS – Chi phí bài 2',
prompt:`<p>BĐS A: đất <b>300 m²</b>, đủ pháp lý; nhà 3 tầng bê tông cốt thép, sàn <b>120 m²/tầng</b>. Hao mòn kết cấu: móng 32%, tường 44%, sàn 36%, mái 44%. Tỷ trọng kết cấu trong giá trị công trình: móng 8%, tường 18%, sàn 16%, mái 14%. Đơn giá xây mới 4 triệu/m². Chi phí khắc phục bếp lạc hậu 13 triệu.<br>Lô đất trống bên cạnh <b>250 m²</b>, chưa có sổ, vừa bán <b>2.250 triệu</b>; để được cấp sổ phải nộp tiền sử dụng đất = 100% giá Nhà nước (12 triệu/m²) cho toàn bộ diện tích. Ước tính giá trị BĐS A.</p>`,
unit:'triệu đồng',run(){const nop=250*12;const tot=2250+nop;const u=tot/250;const land=300*u;const rem=[68*8,56*18,64*16,56*14].reduce((s,x)=>s+x,0)/(8+18+16+14)/100;const ct=120*3*4*rem-13;return{ans:land+ct,steps:[
{h:'1. Quy lô đất bên cạnh về cùng trạng thái pháp lý (có sổ)',b:`Tiền sử dụng đất phải nộp = 250 × 12 = ${nf(nop,0)} triệu → giá khi hoàn chỉnh pháp lý = 2.250 + ${nf(nop,0)} = ${nf(tot,0)} triệu → <b>${nf(u,0)}</b> triệu/m².`},
{h:'2. Giá đất BĐS A',b:`300 × ${nf(u,0)} = <b>${nf(land,0)}</b> triệu.`},
{h:'3. Chất lượng còn lại của công trình (bình quân gia quyền)',b:`Còn lại: móng 68%, tường 56%, sàn 64%, mái 56%.<br>(68×8 + 56×18 + 64×16 + 56×14) / (8+18+16+14) = ${nf([68*8,56*18,64*16,56*14].reduce((s,x)=>s+x,0),0)} / 56 = <b>${pct(rem,0)}</b>.`},
{h:'4. Giá trị công trình',b:`Chi phí xây mới: 120 × 3 × 4 = 1.440 triệu. Còn lại: 1.440 × ${pct(rem,0)} = ${nf(1440*rem,0)}; trừ chi phí khắc phục bếp 13 → <b>${nf(ct,0)}</b> triệu.`},
{h:'5. Tổng',b:`${nf(land,0)} + ${nf(ct,0)} = <b>${nf(land+ct,0)}</b> triệu.`}],note:'Giáo trình: 7.151 triệu. Chi phí khắc phục bếp là hao mòn chức năng khắc phục được, trừ riêng ngoài hao mòn vật lý của kết cấu.'}}});

ex({m:2,t:'thunhap',title:'Vốn hóa trực tiếp: chung cư 30 phòng cho thuê',lv:'Khó',src:'BÀI TẬP VẬN DỤNG BĐS – Thu nhập bài 1',
prompt:`<p>Chung cư 30 phòng: 15 phòng loại 1 cho thuê <b>4 triệu/tháng</b>, 15 phòng loại 2 <b>3 triệu/tháng</b>. Ba chung cư tương tự: A 34 phòng, 31 có khách; B 30, 27; C 28, 25. Chi phí vận hành/thu nhập thực tế: A 435,6/1.210; B 374,5/1.070; C 340/1.000 (triệu/năm). Tổn thất do khách nợ dây dưa 5,16%. Tỷ suất vốn hóa 20% (áp cho thu nhập sau thuế). Thuế 25% lợi nhuận trước thuế. Ước tính giá trị (cách 1: cộng tỷ lệ thất thu).</p>`,
unit:'triệu đồng',tol:.005,run(){const v=[[34,31],[30,27],[28,25]];const e=v.reduce((s,[a,b])=>s+(1-b/a),0)/3;const gross=15*4*12+15*3*12;const h=gross*(1-(e+.0516));const c=[435.6/1210,374.5/1070,340/1000];const cr=c.reduce((s,x)=>s+x,0)/3;const cp=h*cr;const ebt=h-cp;const net=ebt*.75;return{ans:net/.2,steps:[
{h:'1. Tổng thu nhập tiềm năng',b:`15 × 4 × 12 + 15 × 3 × 12 = 720 + 540 = <b>${nf(gross,0)}</b> triệu/năm.`},
{h:'2. Tỷ lệ phòng trống bình quân',b:`A: ${pct(1-31/34)}; B: ${pct(1-27/30)}; C: ${pct(1-25/28)} → bình quân <b>${pct(e)}</b>.`},
{h:'3. Thu nhập thực tế (tổng thất thu = phòng trống + nợ dây dưa)',b:`Thất thu = ${pct(e)} + 5,16% = ${pct(e+.0516)} → thu nhập thực tế = ${nf(gross,0)} × (1 − ${pct(e+.0516)}) = <b>${nf(h)}</b> triệu.`},
{h:'4. Chi phí',b:`Tỷ lệ chi phí/thu nhập: A ${pct(c[0],0)}, B ${pct(c[1],0)}, C ${pct(c[2],0)} → bình quân <b>${pct(cr,0)}</b>. Chi phí = ${nf(h)} × ${pct(cr,0)} = ${nf(cp)} triệu.`},
{h:'5. Thu nhập thuần sau thuế',b:`Trước thuế: ${nf(h)} − ${nf(cp)} = ${nf(ebt)}; sau thuế (×75%) = <b>${nf(net)}</b> triệu.`},
{h:'6. Vốn hóa',b:`V = I / R = ${nf(net)} / 20% = <b>${nf(net/.2)}</b> triệu.`}],note:'Giáo trình: 2.610,55 triệu (làm tròn tỷ lệ 9,84%). Cách 2 (thất thu tính nối tiếp) ≈ 2.626 triệu. Điểm thi: thu nhập sau thuế phải đi với R sau thuế.'}}});

ex({m:2,t:'thunhap',title:'Vốn hóa vĩnh viễn: quán bia 400 m² đất',lv:'Trung bình',src:'BÀI TẬP VẬN DỤNG BĐS – Thu nhập bài 2',
prompt:`<p>Quán bia: thu ăn uống <b>28 triệu/ngày</b> và dịch vụ khác <b>0,5 triệu/ngày</b> × 26 ngày/tháng. Chi hàng tháng: mua hàng 180; lương 20 × 1,5 = 30; điện 2; nước 1; an ninh 1,2; vệ sinh 0,3; quảng cáo 1; quản lý 20 (triệu). Chi hàng năm: bàn ghế bát đĩa 30; pháp lý, thuế 20 (triệu). Kinh doanh ổn định vĩnh viễn; tỷ suất sinh lời ngành 14%/năm. Ước tính giá trị BĐS.</p>`,
unit:'triệu đồng',run(){const rev=(28+.5)*26*12;const mon=180+30+2+1+1.2+.3+1+20;const cost=mon*12+30+20;const I=rev-cost;return{ans:I/.14,steps:[
{h:'1. Thu hằng năm',b:`(28 + 0,5) × 26 × 12 = <b>${nf(rev,0)}</b> triệu.`},
{h:'2. Chi hằng năm',b:`Chi theo tháng = ${nf(mon,1)} triệu/tháng → × 12 = ${nf(mon*12,0)}; cộng chi hàng năm 30 + 20 → <b>${nf(cost,0)}</b> triệu.`},
{h:'3. Thu nhập thuần',b:`${nf(rev,0)} − ${nf(cost,0)} = <b>${nf(I,0)}</b> triệu/năm.`},
{h:'4. Vốn hóa vĩnh viễn',b:`V = I / R = ${nf(I,0)} / 0,14 = <b>${nf(I/.14)}</b> triệu.`}],note:'Giáo trình: 42.971,43 triệu. Lưu ý: bài không trừ thuế TNDN, và khấu hao không phải chi phí tiền mặt; chỉ cần nhất quán với R.'}}});

ex({m:2,t:'thunhap',title:'Dòng tiền chiết khấu: tòa tháp đôi Vincom (còn 41 năm)',lv:'Khó',src:'BÀI TẬP VẬN DỤNG BĐS – DCF',
prompt:`<p>Khu đất giao 50 năm, đã sử dụng 9 năm (còn <b>41 năm</b>). Sàn thương mại tầng 1–6: 4.100 m² xây dựng/sàn, diện tích sử dụng 70%; tầng 7–22 của 2 tháp: 1.400 m²/sàn/tháp, sử dụng 80%. Tỷ lệ lấp đầy 95%. Giá thuê (USD/m²/tháng): tầng 1: 100; tầng 2–6: 45; tầng 7–22: 30. Bãi xe 500.000 USD/năm, quảng cáo 500.000 USD/năm. Chi phí vận hành và thuế = 23% tổng thu. Chiết khấu 8%/năm (USD), dòng tiền đều 41 năm. Ước tính giá trị (triệu USD).</p>`,
unit:'triệu USD',tol:.002,run(){const d1=4100*.7*.95*100*12,d2=4100*5*.7*.95*45*12,d3=1400*2*16*.8*.95*30*12;const tot=d1+d2+d3+1e6;const net=tot*.77;const v=net*pa(.08,41);return{ans:v/1e6,steps:[
{h:'1. Thu thuê tầng 1',b:`4.100 × 70% × 95% × 100 × 12 = <b>${nf(d1,0)}</b> USD/năm.`},
{h:'2. Thu thuê tầng 2–6',b:`4.100 × 5 tầng × 70% × 95% × 45 × 12 = <b>${nf(d2,0)}</b> USD/năm.`},
{h:'3. Thu thuê tầng 7–22',b:`1.400 × 2 tháp × 16 tầng × 80% × 95% × 30 × 12 = <b>${nf(d3,0)}</b> USD/năm.`},
{h:'4. Tổng thu và thu nhập thuần',b:`Cộng bãi xe + quảng cáo 1.000.000 → tổng thu ${nf(tot,0)}. Thu nhập thuần = × (1 − 23%) = <b>${nf(net,0)}</b> USD/năm.`},
{h:'5. Hiện giá niên kim 41 năm, 8%',b:`Hệ số = [1 − 1,08<sup>−41</sup>]/0,08 = ${nf(pa(.08,41),4)} → V = ${nf(net,0)} × ${nf(pa(.08,41),4)} = <b>${nf(v,0)}</b> USD ≈ ${nf(v/1e6)} triệu USD.`}],note:'Giáo trình: 220.146.680 USD. Dòng tiền đều có thời hạn: dùng niên kim, không dùng V = I/R.'}}});

ex({m:2,t:'thangdu',title:'Thặng dư: giá đất tối đa khi đấu giá lô 1 ha xây chung cư',lv:'Khó',src:'BÀI TẬP PP THẶNG DƯ – Bài 1',
prompt:`<p>Lô đất <b>1 ha</b>, được xây <b>60%</b>. Xây 2 tòa chung cư, mỗi tầng mỗi tòa 20 căn, cao 25 tầng, thời gian 1 năm. Chi phí: quy hoạch 1.000; dọn mặt bằng 100; hạ tầng 1 triệu/m² đất; xây chung cư 10 triệu/m² sàn; phí đấu giá 20; chi phí khác cho đất 4% giá đất (triệu đồng). Vốn vay 10%/năm (chi phí xây vay 2 lần cách nhau 6 tháng, lãi 6 tháng = 5%). Lợi nhuận xây dựng 10% (quy hoạch + dọn + hạ tầng + xây); lợi nhuận đất 15% (giá đất + chi phí đất, không gồm lãi). Giá bán căn hộ: tầng 1–10: 3.200; tầng 11–25: 3.600 (triệu). Chi phí bán 500. Giá đất đấu giá tối đa?</p>`,
unit:'triệu đồng',run(){const dt=20*2*10*3200+20*2*15*3600;const cx=6000*25*10,ht=10000;const lv=.1*(1000+100+ht+cx/2)+.05*cx/2;const ln=.1*(1000+100+ht+cx);const cp=1000+100+ht+cx+lv+ln+500;const res=dt-cp;const X=(res-25)/1.3;return{ans:X,steps:[
{h:'1. Doanh thu phát triển',b:`Tầng 1–10: 20 × 2 × 10 × 3.200 = 1.280.000; tầng 11–25: 20 × 2 × 15 × 3.600 = 2.160.000 → <b>${nf(dt,0)}</b> triệu.`},
{h:'2. Chi phí xây dựng và hạ tầng',b:`Diện tích sàn một tầng = 10.000 × 60% = 6.000 m² → xây dựng 6.000 × 25 × 10 = <b>${nf(cx,0)}</b>; hạ tầng 10.000 × 1 = <b>${nf(ht,0)}</b>.`},
{h:'3. Lãi vay giai đoạn xây dựng',b:`10% × (1.000 + 100 + 10.000 + ${nf(cx/2,0)}) + 5% × ${nf(cx/2,0)} = <b>${nf(lv,0)}</b> (chi phí xây vay 2 lần: nửa đầu chịu lãi cả năm, nửa sau chịu lãi 6 tháng).`},
{h:'4. Lợi nhuận xây dựng & chi phí bán',b:`10% × (1.000 + 100 + 10.000 + ${nf(cx,0)}) = <b>${nf(ln,0)}</b>; chi phí bán 500. Tổng chi phí giai đoạn xây dựng = <b>${nf(cp,0)}</b>.`},
{h:'5. Giá trị thặng dư dành cho đất (đã gồm chi phí và lợi nhuận mua đất)',b:`${nf(dt,0)} − ${nf(cp,0)} = <b>${nf(res,0)}</b> triệu.`},
{h:'6. Giải phương trình ẩn X (giá đất)',b:`Chi phí khác 0,04X; phí đấu giá 20; lãi vay = 10% × (X + 20 + 0,04X) = 0,104X + 2; lợi nhuận đất = 15% × (X + 0,04X + 20) = 0,156X + 3.<br>X + 20 + 0,04X + 0,104X + 2 + 0,156X + 3 = 1,3X + 25 = ${nf(res,0)} → X = (${nf(res,0)} − 25)/1,3 = <b>${nf(X)}</b> triệu.`}],note:'Giáo trình: 1.279.734,62 triệu. Kết luận: đây là mức giá TỐI ĐA mà nhà đầu tư chấp nhận được.'}}});

ex({m:2,t:'thangdu',title:'Thặng dư: lô đất 1 ha phân lô bán, hoàn vốn 3 năm',lv:'Trung bình',src:'BÀI TẬP PP THẶNG DƯ – Bài 2 (có chỉnh lỗi)',
prompt:`<p>Lô đất 10.000 m², được xây 60%. Chia 60 lô bán (6.000 m² → 100 m²/lô). Hạ tầng 0,5 triệu/m² đất; chi phí bán 1.000; thuế 1.500; lợi nhuận đòi hỏi 6.000 (triệu). Giá chuyển quyền lô 100 m²: 30 triệu/m². <b>Trường hợp 2</b>: hoàn vốn 3 năm; chi phí hạ tầng năm 1; chi phí bán năm 2; thuế và lợi nhuận năm 3; doanh thu năm 3; lãi suất 15%. Tính giá trị mảnh đất.</p>`,
unit:'triệu đồng',run(){const dt=6000*30;const a=(dt-1500-6000)/Math.pow(1.15,3);const b=5000/1.15;const c=1000/Math.pow(1.15,2);const v=a-b-c;return{ans:v,steps:[
{h:'1. Doanh thu phát triển',b:`Quy mô lô = 6.000/60 = 100 m² → giá 30 triệu/m² → DT = 6.000 × 30 = <b>${nf(dt,0)}</b> triệu (thu năm 3).`},
{h:'2. Trường hợp 1 (bán hết trong 1 năm, không chiết khấu)',b:`V = 180.000 − (5.000 + 1.000 + 1.500 + 6.000) = <b>166.500</b> triệu.`},
{h:'3. Trường hợp 2: chiết khấu theo đúng năm phát sinh',b:`Năm 3 (DT − thuế − lợi nhuận) = ${nf(dt-7500,0)} → /1,15<sup>3</sup> = ${nf(a)}.<br>Năm 1 (hạ tầng 5.000) → /1,15 = ${nf(b)}.<br>Năm 2 (chi phí bán 1.000) → /1,15<sup>2</sup> = ${nf(c)}.`},
{h:'4. Giá trị',b:`V = ${nf(a)} − ${nf(b)} − ${nf(c)} = <b>${nf(v)}</b> triệu.`}],note:'LƯU Ý: lời giải trong giáo trình ghi 108.204,15 triệu vì chiết khấu chi phí bán (năm 2) bằng 1.000/1,15 = 869,57 thay vì 1.000/1,15² = 756,14. Theo đúng đề (chi phí bán năm 2) kết quả là 108.317,58 triệu; nếu thi, trình bày rõ năm phát sinh từng khoản.'}}});

/* ----- Đề thi 2017 ----- */
const E17={land:null};
function e17(){
const d=[{ar:97.5,fl:3,bu:8,q:.9,tot:7200,w:100,s:100,e:95},{ar:113.4,fl:2,bu:7,q:.8,tot:8000,w:120,s:90,e:100},{ar:75.6,fl:3,bu:7,q:.85,tot:5200,w:108,s:100,e:95}];
const L=d.map(x=>{const ct=x.ar*x.fl*x.bu*x.q;const land=x.tot-ct;return{ct,land,u:land/x.ar}});
const f=d.map(x=>(108/x.w)*(90/x.s)*(95/x.e));const pu=L.map((x,i)=>x.u*f[i]);const m=pu.reduce((s,x)=>s+x,0)/3;
const landV=m*112;const ctS=112*3*7.5*.75;const V=landV+ctS;const y=[50*12/7200,55*12/8000,35*12/5200];const ya=y.reduce((s,x)=>s+x,0)/3;
return{d,L,f,pu,m,landV,ctS,V,y,ya,rent:V*ya/12,roe:(ya-.3*.08)/.7}}
ex({m:2,t:'de2017',title:'Đề 2017, câu 2a: phương pháp chiết trừ tìm giá đất (112 m²)',lv:'Đề thi',src:'Đề thi BĐS 2017 (kỳ thi XII, đề số 2) – lời giải do trợ giảng làm, KHÔNG phải đáp án chính thức',
prompt:`<p>BĐS thẩm định: mặt tiền đường, đất <b>112 m² (5,6 m × 20 m)</b>, nhà 3 tầng khung bê tông, chất lượng còn lại 75%, môi trường kém, đơn giá xây mới 7,5 triệu/m². Ba BĐS vừa bán:</p>
<div class="tw"><table><tr><th></th><th>BĐS1</th><th>BĐS2</th><th>BĐS3</th></tr><tr><td>Đất</td><td>97,5 m² (3,9×25)</td><td>113,4 m² (6,3×18)</td><td>75,6 m² (4,2×18)</td></tr><tr><td>Nhà</td><td>3 tầng, còn 90%</td><td>2 tầng, còn 80%</td><td>3 tầng, còn 85%</td></tr><tr><td>Môi trường</td><td>Kém</td><td>Tốt</td><td>Kém</td></tr><tr><td>Giá bán</td><td>7,2 tỷ</td><td>8 tỷ</td><td>5,2 tỷ</td></tr><tr><td>Đơn giá xây mới</td><td>8 triệu/m²</td><td>7</td><td>7</td></tr></table></div>
<p>Tương quan giá đất: chiều rộng &gt;4–6 m cao hơn &gt;3,5–4 m là 8% và thấp hơn &gt;6–8 m là 10%; quy mô &gt;100 m² thấp hơn ≤100 m² là 10%; môi trường kém thấp hơn tốt 5%. <b>Giả định của lời giải</b>: đề không nêu diện tích sàn, coi mỗi tầng chiếm hết diện tích đất (sàn = đất × số tầng). Câu a) dùng phương pháp chiết trừ ước tính giá trị lô đất thẩm định.</p>`,
unit:'triệu đồng',tol:.01,run(){const r=e17();return{ans:r.landV,steps:[
{h:'1. Chiết trừ: giá đất của từng BĐS so sánh',b:`BĐS1: CTXD = 97,5 × 3 × 8 × 90% = ${nf(r.L[0].ct)} → đất = 7.200 − ${nf(r.L[0].ct)} = ${nf(r.L[0].land)} → <b>${nf(r.L[0].u,3)}</b> trđ/m².<br>BĐS2: 113,4 × 2 × 7 × 80% = ${nf(r.L[1].ct)} → đất = ${nf(r.L[1].land)} → <b>${nf(r.L[1].u,3)}</b>.<br>BĐS3: 75,6 × 3 × 7 × 85% = ${nf(r.L[2].ct)} → đất = ${nf(r.L[2].land)} → <b>${nf(r.L[2].u,3)}</b>.`},
{h:'2. Lập thang tương quan (đặt mức thấp nhất = 100)',b:'Rộng: &gt;3,5–4 m = 100; &gt;4–6 m = 108; &gt;6–8 m = 108/0,9 = 120. Quy mô: ≤100 m² = 100; &gt;100 m² = 90. Môi trường: tốt = 100; kém = 95.<br>Tài sản thẩm định: rộng 5,6 m → 108; 112 m² → 90; môi trường kém → 95.'},
{h:'3. Hệ số điều chỉnh = thẩm định / so sánh (từng yếu tố, nhân nối tiếp)',b:`BĐS1 (3,9 m → 100; 97,5 m² → 100; kém → 95): 108/100 × 90/100 × 95/95 = ${nf(r.f[0],4)}.<br>BĐS2 (6,3 m → 120; 113,4 m² → 90; tốt → 100): 108/120 × 90/90 × 95/100 = ${nf(r.f[1],4)}.<br>BĐS3 (4,2 m → 108; 75,6 m² → 100; kém → 95): 108/108 × 90/100 × 95/95 = ${nf(r.f[2],4)}.`},
{h:'4. Mức giá chỉ dẫn của đất',b:`BĐS1: ${nf(r.L[0].u,3)} × ${nf(r.f[0],4)} = <b>${nf(r.pu[0],2)}</b>; BĐS2: <b>${nf(r.pu[1],2)}</b>; BĐS3: <b>${nf(r.pu[2],2)}</b> trđ/m². Trung bình ${nf(r.m,2)}; lệch ${r.pu.map(x=>pct(x/r.m-1,1)).join(' / ')} (đều &lt; 15%).`},
{h:'5. Giá trị lô đất thẩm định',b:`${nf(r.m,2)} × 112 = <b>${nf(r.landV)}</b> triệu.`}],note:'Đây là cách làm của trợ giảng; đề không cho đủ dữ kiện (diện tích sàn). Khi thi hãy NÊU RÕ giả định và làm nhất quán; đề yêu cầu làm tròn 2 số lẻ.'}}});
ex({m:2,t:'de2017',title:'Đề 2017, câu 2b: phương pháp chi phí tìm giá trị BĐS',lv:'Đề thi',src:'Đề thi BĐS 2017 – lời giải do trợ giảng làm',
prompt:'<p>Dùng giá đất ở câu 2a (chiết trừ), ước tính giá trị thị trường của BĐS bằng phương pháp chi phí. Nhà 3 tầng, sàn giả định 112 × 3 m², đơn giá xây mới 7,5 triệu/m², chất lượng còn lại 75%.</p>',
unit:'triệu đồng',tol:.01,run(){const r=e17();return{ans:r.V,steps:[
{h:'1. Giá đất',b:`Từ câu 2a: <b>${nf(r.landV)}</b> triệu.`},
{h:'2. Chi phí xây mới và hao mòn',b:`Sàn: 112 × 3 = 336 m² → chi phí xây mới 336 × 7,5 = 2.520 triệu. Chất lượng còn lại 75% → hao mòn 25% = 630 triệu.`},
{h:'3. Giá trị công trình',b:`2.520 − 630 = <b>${nf(r.ctS,0)}</b> triệu.`},
{h:'4. Giá trị BĐS',b:`${nf(r.landV)} + ${nf(r.ctS,0)} = <b>${nf(r.V)}</b> triệu. (Điều kiện môi trường kém đã được phản ánh trong giá đất so sánh nên không trừ hao mòn ngoại biên lần nữa, tránh tính trùng.)`}],note:'Đề chưa nói rõ có trừ hao mòn ngoại biên; nếu muốn, nêu giả định này trong bài.'}}});
ex({m:2,t:'de2017',title:'Đề 2017, câu 2c–2e: thu nhập thuê, sinh lợi vốn chủ và lãi vay tối đa',lv:'Đề thi',src:'Đề thi BĐS 2017 – lời giải do trợ giảng làm',
prompt:`<p>c) Tính thu nhập hằng tháng từ cho thuê BĐS thẩm định (theo tỷ suất thuê/giá bán của 3 BĐS so sánh: BĐS1 thuê 50 triệu/tháng, giá 7.200; BĐS2 55 triệu, giá 8.000; BĐS3 35 triệu, giá 5.200; dùng giá trị từ câu 2b).<br>d) Đầu tư bằng 30% vốn vay, lãi vay 8%/năm. Tính tỷ suất sinh lợi trên vốn chủ sở hữu và nhận xét.<br>e) Lãi vay tối đa để vay vẫn có lợi?</p><p>Nhập đáp số của <b>câu c</b> (triệu đồng/tháng).</p>`,
unit:'triệu đồng/tháng',tol:.01,run(){const r=e17();return{ans:r.rent,steps:[
{h:'c1. Tỷ suất thuê (sinh lợi gộp) từng BĐS so sánh',b:`BĐS1: 50 × 12/7.200 = <b>${pct(r.y[0])}</b>; BĐS2: 55 × 12/8.000 = <b>${pct(r.y[1])}</b>; BĐS3: 35 × 12/5.200 = <b>${pct(r.y[2])}</b> → bình quân <b>${pct(r.ya)}</b>/năm.`},
{h:'c2. Thu nhập thuê của BĐS thẩm định',b:`${nf(r.V)} × ${pct(r.ya)} = ${nf(r.V*r.ya)} triệu/năm → <b>${nf(r.rent)}</b> triệu/tháng.`},
{h:'d. Tỷ suất sinh lợi trên vốn chủ',b:`Vay 30% × lãi 8% = 2,4% chi phí lãi trên tổng vốn. ROE = (${pct(r.ya)} − 2,4%)/70% = <b>${pct(r.roe)}</b> > ${pct(r.ya)} (tỷ suất sinh lợi của BĐS) → <b>vay có lợi</b> (đòn bẩy dương), vì lãi vay 8% < tỷ suất sinh lợi ${pct(r.ya)}. Mức tăng nhỏ vì chênh lệch hai tỷ suất rất ít, trong khi rủi ro tài chính tăng.`},
{h:'e. Lãi vay tối đa',b:`ROE > y ⇔ i < y → lãi vay phải thấp hơn tỷ suất sinh lợi của BĐS: tối đa <b>${pct(r.ya)}</b>/năm (không phụ thuộc tỷ lệ vay).`}],note:'Giả định đã nêu: thu nhập thuê gộp bằng tỷ lệ thuê/giá; đề không cho chi phí vận hành nên không tính thuế và chi phí. Nếu chi phí vận hành đáng kể thì dùng thu nhập thuần.'}}});
ex({m:2,t:'de2017',title:'Đề 2017, câu 3: thặng dư khu đất 20.000 m² xây chung cư 18 tầng',lv:'Đề thi',src:'Đề thi BĐS 2017 – lời giải do trợ giảng làm',
prompt:`<p>Khu đất <b>20.000 m²</b> đã chuyển mục đích sang đất ở, xây chung cư <b>18 tầng</b> để bán, được xây 60%. Hoàn thành và bán hết trong 1 năm. Diện tích căn hộ bán chiếm <b>80%</b> tổng diện tích sàn xây dựng. Đầu năm: chi phí thiết kế, quy hoạch dự án <b>1.200 triệu</b>. Cuối năm: hạ tầng <b>1,2 triệu/m²</b> (trên diện tích đất); xây nhà <b>6,5 triệu/m²</b> sàn; vay 60% hạ tầng + xây dựng, lãi 10%/năm; chi phí quảng cáo bán 1,5% doanh thu; quản lý dự án 10% (tổng chi phí hạ tầng + xây dựng); giá bán căn hộ <b>18 triệu/m²</b> (chưa VAT). Lợi nhuận nhà đầu tư 14% tổng chi phí trực tiếp và gián tiếp (không gồm chi phí tài chính). Tỷ suất chiết khấu 10%. Ước tính giá đất.</p>`,
unit:'triệu đồng',tol:.01,run(){const land=20000,build=land*.6,fa=build*18,sale=fa*.8,rev=sale*18;const ht=land*1.2,xd=fa*6.5,design=1200,ql=.1*(ht+xd),qc=.015*rev,lv=.6*(ht+xd)*.1;const profit=.14*(ht+xd+design+ql+qc);const endc=ht+xd+ql+qc+lv+profit;const V=(rev-endc)/1.1-design;return{ans:V,steps:[
{h:'1. Diện tích và doanh thu',b:`Diện tích xây dựng = 20.000 × 60% = 12.000 m²; tổng sàn = 12.000 × 18 = <b>${nf(fa,0)}</b> m²; diện tích bán = 80% = ${nf(sale,0)} m²; doanh thu = ${nf(sale,0)} × 18 = <b>${nf(rev,0)}</b> triệu.`},
{h:'2. Chi phí trực tiếp',b:`Hạ tầng: 20.000 × 1,2 = <b>${nf(ht,0)}</b>; xây dựng: ${nf(fa,0)} × 6,5 = <b>${nf(xd,0)}</b>.`},
{h:'3. Chi phí gián tiếp',b:`Quản lý dự án 10% × (${nf(ht,0)} + ${nf(xd,0)}) = <b>${nf(ql,0)}</b>; quảng cáo 1,5% × ${nf(rev,0)} = <b>${nf(qc,0)}</b>; thiết kế 1.200 (đầu năm).`},
{h:'4. Lãi vay và lợi nhuận',b:`Lãi vay = 60% × ${nf(ht+xd,0)} × 10% = <b>${nf(lv,0)}</b>. Lợi nhuận = 14% × (${nf(ht+xd,0)} + 1.200 + ${nf(ql,0)} + ${nf(qc,0)}) = <b>${nf(profit,0)}</b>.`},
{h:'5. Thặng dư tại cuối năm, chiết khấu về hiện tại',b:`Doanh thu − chi phí cuối năm = ${nf(rev,0)} − ${nf(endc,0)} = ${nf(rev-endc,0)}; chiết khấu 1 năm: /1,1 = ${nf((rev-endc)/1.1,0)}; trừ chi phí thiết kế đầu năm (không chiết khấu) 1.200 → <b>${nf(V,0)}</b> triệu.`}],note:'Đề không có đáp án chính thức, đây là một cách lập luận hợp lý. Nếu coi mọi khoản phát sinh đồng thời (không chiết khấu) thì V ≈ 1.179.452 triệu. Khi thi: nêu rõ giả định về thời điểm phát sinh từng khoản và nhất quán.'}}});

/* ===== MÔN 3: MÁY THIẾT BỊ & TÀI SẢN VÔ HÌNH ===== */
ex({m:3,t:'may_hm',title:'Hao mòn theo kỹ thuật so sánh: xe ben 4 chân',lv:'Trung bình',src:'Bài tập chi phí (CĐ5) – bài 1',
prompt:'<p>Xe ben đời 2022, đã dùng 3 năm nhưng chạy quá công suất nên tuổi đời hiệu quả <b>5 năm</b>. Hai xe cùng loại vừa bán: SS1 giá <b>870 triệu</b> (tuổi đời hiệu quả 4 năm), SS2 giá <b>630 triệu</b> (6 năm). Xe mới 100% hiện bán <b>1.500 triệu</b>. Tính giá trị hao mòn của xe thẩm định.</p>',
unit:'triệu đồng',tol:.01,run(){const h1=(1500-870)/1500,h2=(1500-630)/1500;const a1=h1/4,a2=h2/6;const rate=(a1+a2)/2*5;return{ans:rate*1500,steps:[
{h:'1. Hao mòn lũy kế của từng xe so sánh',b:`SS1: 1.500 − 870 = 630 → ${pct(h1,0)}. SS2: 1.500 − 630 = 870 → ${pct(h2,0)}.`},
{h:'2. Tỷ lệ hao mòn hàng năm',b:`SS1: ${pct(h1,0)}/4 = <b>${pct(a1)}</b>; SS2: ${pct(h2,0)}/6 = <b>${pct(a2)}</b>.`},
{h:'3. Áp cho xe thẩm định (tuổi đời hiệu quả 5 năm)',b:`Bình quân hằng năm = (${pct(a1)} + ${pct(a2)})/2 = ${pct((a1+a2)/2,3)} → × 5 năm = <b>${pct(rate)}</b>.`},
{h:'4. Giá trị hao mòn',b:`${pct(rate)} × 1.500 = <b>${nf(rate*1500)}</b> triệu.`}],note:'Giáo trình làm tròn 9,67% nên ra 50,43% và 756,45 triệu; sai khác 0,03%. Giá trị xe = 1.500 − 756,25 ≈ 743,75 triệu.'}}});
ex({m:3,t:'may_hm',title:'Hao mòn vật lý theo kỹ thuật tổng cộng: ô tô bán tải',lv:'Cơ bản',src:'Bài tập chi phí (CĐ5) – bài 2',
prompt:'<p>Chuyên gia đánh giá: hao mòn động cơ 20% (tỷ trọng 55%), khung gầm 15% (15%), hệ thống điện 5% (20%), hệ thống khác 5% (10%). Tính tỷ lệ hao mòn vật lý của xe.</p>',
unit:'%',tol:.005,run(){const h=.2*.55+.15*.15+.05*.2+.05*.1;return{ans:h*100,steps:[
{h:'Công thức',b:'H = Σ (hao mòn bộ phận i × tỷ trọng giá trị bộ phận i) / Σ tỷ trọng. Tổng tỷ trọng = 100% nên không cần chia.'},
{h:'Tính',b:`20% × 55% = 11%; 15% × 15% = 2,25%; 5% × 20% = 1%; 5% × 10% = 0,5% → H = <b>${nf(h*100)}%</b>.`}],note:'Giáo trình: 14,75%.'}}});
ex({m:3,t:'may_hm',title:'Hao mòn kinh tế của dây chuyền sản xuất bia thủ công',lv:'Trung bình',src:'Bài tập chi phí (CĐ5) – bài 4',
prompt:'<p>Dây chuyền có tuổi đời kinh tế 20 năm, tuổi đời hiệu quả 8 năm. Dòng tiền thuần hiện nay 1.000 triệu/năm; do thuế tiêu thụ đặc biệt (sửa đổi) dự báo giảm còn 700 triệu/năm đến hết tuổi đời. Tỷ suất sinh lời trung bình ngành 15%. Tính hao mòn kinh tế.</p>',
unit:'triệu đồng',run(){const a=300*pa(.15,12);return{ans:a,steps:[
{h:'1. Thu nhập mất đi hàng năm',b:'1.000 − 700 = <b>300</b> triệu/năm.'},
{h:'2. Số năm còn lại',b:'Tuổi đời kinh tế còn lại = 20 − 8 = <b>12</b> năm.'},
{h:'3. Hiện tại hóa niên kim',b:`Hệ số = [1 − 1,15<sup>−12</sup>]/0,15 = ${nf(pa(.15,12),4)} → 300 × ${nf(pa(.15,12),4)} = <b>${nf(a)}</b> triệu.`}],note:'Giáo trình: 1.626,19 triệu. Đây là hao mòn NGOẠI BIÊN (do thuế, thị trường) và không khắc phục được.'}}});
ex({m:3,t:'may_cp',title:'Chi phí tái tạo trạm trộn bê tông và giá trị sau hao mòn',lv:'Trung bình',src:'Bài tập chi phí (CĐ5) – bài 5',
prompt:'<p>Trạm trộn bê tông của công ty X (mua từ ABB): thiết bị nhập khẩu CIF <b>300.000 USD</b> (tỷ giá 25.000 đ/USD, thuế nhập khẩu 0%), vận chuyển 10 triệu; phần trong nước: nguyên vật liệu 370 triệu, máy thiết bị 220, nhân công 310, lắp đặt 40; quản lý phân xưởng 120, quản lý doanh nghiệp 130; lợi nhuận 10% tổng chi phí. Tuổi đời kinh tế 30 năm, hiệu quả 6 năm. Tính giá trị trạm.</p>',
unit:'triệu đồng',run(){const imp=300000*25000/1e6;const tot=imp+10+370+220+310+40+120+130;const prof=tot*.1;const rc=tot+prof;const hm=6/30;return{ans:rc*(1-hm),steps:[
{h:'1. Chi phí trực tiếp',b:`Nhập khẩu: 300.000 × 25.000 = <b>${nf(imp,0)}</b> triệu; vận chuyển 10; vật liệu 370; máy 220; nhân công 310; lắp đặt 40.`},
{h:'2. Chi phí gián tiếp và tổng',b:`Quản lý phân xưởng 120 + quản lý DN 130 = 250 → tổng chi phí = <b>${nf(tot,0)}</b> triệu.`},
{h:'3. Lợi nhuận và chi phí tái tạo',b:`Lợi nhuận 10% = ${nf(prof,0)} → chi phí tái tạo = <b>${nf(rc,0)}</b> triệu (mới 100%).`},
{h:'4. Hao mòn theo tuổi đời',b:`6/30 = <b>${pct(hm,0)}</b>.`},
{h:'5. Giá trị',b:`${nf(rc,0)} × (1 − 20%) = <b>${nf(rc*(1-hm),0)}</b> triệu.`}],note:'Giáo trình: 7.656 triệu (9.570 × 80%).'}}});
ex({m:3,t:'may_tn',title:'So sánh: máy ủi bánh xích Komatsu 2012',lv:'Trung bình',src:'Bài tập thị trường (CĐ5) – bài 2',
prompt:`<p>Máy ủi thẩm định: SX 2012, công suất 50 m³/h, 18 tấn, lực ủi 7.000 kg. So sánh: SS1 (2010, 50, 18 tấn, 7.500 kg) giá 2.400; SS2 (2012, 60, 15 tấn, 7.000 kg) giá 2.610; SS3 (2012, 50, 15 tấn, 7.500 kg) giá 2.530 (triệu). Tương quan giá: SX 2012 = 110% so với 2010; công suất 50 = 90% so với 60; 18 tấn = 105% so với 15 tấn; lực ủi 7.000 = 93% so với 7.500. Chất lượng còn lại như nhau. Ước tính giá trị (cộng tổng tỷ lệ điều chỉnh trên giá gốc, cách giáo trình).</p>`,
unit:'triệu đồng',tol:.005,run(){const p=[2400*(1+.10-.07),2610*(1-.10+.05),2530*(1+.05-.07)];const m=p.reduce((s,x)=>s+x,0)/3;return{ans:m,steps:[
{h:'1. Tỷ lệ điều chỉnh từng yếu tố (đưa về thẩm định)',b:'Năm SX: SS1 +10% (2010 → 2012). Công suất: SS2 90% − 100% = −10%. Trọng lượng: SS2, SS3 +5%. Lực ủi: SS1, SS3 93% − 100% = −7%.'},
{h:'2. Giá chỉ dẫn (cộng tổng tỷ lệ)',b:`SS1: 2.400 × (1 + 10% − 7%) = <b>${nf(p[0],1)}</b>.<br>SS2: 2.610 × (1 − 10% + 5%) = <b>${nf(p[1],1)}</b>.<br>SS3: 2.530 × (1 + 5% − 7%) = <b>${nf(p[2],1)}</b>.`},
{h:'3. Kiểm tra chênh lệch (&lt; 15%)',b:`Trung bình ${nf(m,2)}; lệch ${p.map(x=>pct(x/m-1,1)).join(' / ')}. Chênh lệch rất nhỏ.`},
{h:'4. Chọn',b:`Phương án 1: trung bình <b>${nf(m,2)}</b> triệu. Phương án 2 (chọn SS3 vì gộp, biên độ, thuần nhỏ nhất): 2.479,4 triệu.`}],note:'Giáo trình: 2.476,97 triệu (hoặc 2.479,4). Nếu nhân nối tiếp các hệ số thay vì cộng tỷ lệ, kết quả hơi thấp hơn (~2.464); cả hai đều được nếu nêu rõ.'}}});
ex({m:3,t:'may_tn',title:'Điều chỉnh điều kiện thanh toán của máy so sánh',lv:'Cơ bản',src:'Bài tập thị trường (CĐ5) – bài 1',
prompt:'<p>Máy so sánh bán 120 triệu, trả 40% sau ký hợp đồng và 60% sau 1 năm; lãi suất vay thương mại 12%/năm. Tài sản thẩm định mua trong điều kiện thương mại bình thường (trả ngay). Tính giá máy so sánh sau điều chỉnh.</p>',
unit:'triệu đồng',run(){const v=48+72/1.12;return{ans:v,steps:[
{h:'1. Tách phần trả ngay và trả chậm',b:'Trả ngay 40% × 120 = 48 triệu; trả chậm 60% × 120 = 72 triệu sau 1 năm.'},
{h:'2. Chiết khấu phần trả chậm',b:`72 / 1,12 = <b>${nf(72/1.12)}</b> triệu.`},
{h:'3. Giá tương đương trả ngay',b:`48 + ${nf(72/1.12)} = <b>${nf(v)}</b> triệu.`}],note:'Giáo trình: 112.285.715 đồng.'}}});
ex({m:3,t:'may_tn',title:'Thu nhập: giá trị dây chuyền máy và IRR',lv:'Trung bình',src:'Bài tập thu nhập (CĐ5) – bài 1',
prompt:'<p>Dòng tiền thuần năm 1 là 700 triệu, mỗi năm tăng 10% (5 năm). Giá trị thu hồi năm 5: 50 triệu (trước thuế 20%). Vốn chủ 100%, chi phí vốn 15%, dòng tiền cuối năm. Tính giá trị dây chuyền; và IRR nếu giá mua 2.800 triệu.</p>',
unit:'triệu đồng (giá trị)',run(){const cf=[700,770,847,931.7,1024.87];const sal=40;const pv=cf.reduce((s,c,i)=>s+c/Math.pow(1.15,i+1),0)+sal/Math.pow(1.15,5);const irr=irrf([-2800,...cf.slice(0,4),cf[4]+sal]);return{ans:pv,steps:[
{h:'1. Dòng tiền thuần các năm',b:'700; 770; 847; 931,7; 1.024,87 (mỗi năm × 1,1).'},
{h:'2. Giá trị thu hồi sau thuế',b:'50 × (1 − 20%) = <b>40</b> triệu (thu cuối năm 5).'},
{h:'3. Hiện giá ở 15%',b:`Σ CF<sub>t</sub>/1,15<sup>t</sup> + 40/1,15<sup>5</sup> = <b>${nf(pv)}</b> triệu.`},
{h:'4. IRR khi giá mua 2.800',b:`NPV tại 15% = ${nf(pv-2800)} (> 0) nên IRR > 15%; tại 16% NPV ≈ −60,11. Nội suy (hoặc giải chính xác): IRR ≈ <b>${pct(irr)}</b> > 15% → đáng mua.`}],note:'Giáo trình: 2.809,97 triệu; IRR 15,14%.'}}});
ex({m:3,t:'may_tn',title:'Chọn nhà cung cấp thiết bị bằng NPV với WACC',lv:'Khó',src:'Bài tập thu nhập (CĐ5) – bài 3',
prompt:'<p>X: giá 5.150, tuổi đời 8 năm, dòng tiền thuần 1.100/năm, thanh lý 50 (trước thuế). Y: giá 5.650, 8 năm, 1.200/năm, thanh lý 80. Vốn chủ 75% (15%), vay 25% (12%, lãi trả hàng năm, gốc cuối kỳ), thuế 20%. Tính NPV của X (triệu đồng) và chọn nhà cung cấp.</p>',
unit:'triệu đồng (NPV của X)',tol:.02,run(){const w=.75*.15+.25*.12*.8;const nx=-5150+1100*pa(w,8)+50*.8/Math.pow(1+w,8);const ny=-5650+1200*pa(w,8)+80*.8/Math.pow(1+w,8);return{ans:nx,steps:[
{h:'1. WACC (chi phí vay sau thuế)',b:`WACC = 0,75 × 15% + 0,25 × 12% × (1 − 20%) = 11,25% + 2,4% = <b>${pct(w)}</b>.`},
{h:'2. NPV của X',b:`Niên kim 8 năm = ${nf(pa(w,8),4)}; thanh lý sau thuế = 50 × 0,8 = 40 → NPV<sub>X</sub> = −5.150 + 1.100 × ${nf(pa(w,8),4)} + 40/(1+WACC)<sup>8</sup> = <b>${nf(nx)}</b>.`},
{h:'3. NPV của Y',b:`NPV<sub>Y</sub> = −5.650 + 1.200 × ${nf(pa(w,8),4)} + 64/(1+WACC)<sup>8</sup> = <b>${nf(ny)}</b>.`},
{h:'4. Kết luận',b:`NPV<sub>X</sub> (${nf(nx)}) > NPV<sub>Y</sub> (${nf(ny)}) → <b>chọn X</b>. IRR của X khoảng ${pct(irrf([-5150,...Array(7).fill(1100),1100+40]))}.`}],note:'Giáo trình: NPV X = 27,61; NPV Y = 5,61 → chọn X. Lưu ý khác với các bài vốn hóa: ở đây tổng dòng tiền phải chiết khấu theo từng năm.'}}});
ex({m:3,t:'may_tn',title:'Khấu hao số dư giảm dần có điều chỉnh, NPV và IRR của thiết bị',lv:'Khó',src:'Bài tập thu nhập (CĐ5) – bài 2',
prompt:'<p>Mua thiết bị 1.200 triệu, 4 năm, dòng tiền thuần (chưa kể khấu hao) 75; 110; 140; 150. Khấu hao theo số dư giảm dần có điều chỉnh (hệ số 1,5), thanh lý 40 (trước thuế 20%). Vốn chủ 70% (16%), vay 30% (13%). Thuế 20%. Tính NPV (triệu) theo kiểu giáo trình: dòng tiền = thu thuần + khấu hao (không xét lá chắn thuế).</p>',
unit:'triệu đồng (NPV)',tol:.02,run(){const d1=1200*.375,d2=(1200-d1)*.375;const rest=1200-d1-d2;const dep2=[d1,d2,rest/2,rest/2];const cf=[75,110,140,150].map((c,i)=>c+dep2[i]);const w=.7*.16+.3*.13*.8;const npv=cf.reduce((s,c,i)=>s+c/Math.pow(1+w,i+1),0)+32/Math.pow(1+w,4)-1200;const irr=irrf([-1200,cf[0],cf[1],cf[2],cf[3]+32]);return{ans:npv,steps:[
{h:'1. Tỷ lệ khấu hao nhanh',b:'(1/4) × 1,5 = <b>37,5%</b>.'},
{h:'2. Bảng khấu hao',b:`Năm 1: 1.200 × 37,5% = ${nf(d1)}; còn lại ${nf(1200-d1)}.<br>Năm 2: ${nf(1200-d1)} × 37,5% = ${nf(d2)}; còn lại ${nf(rest)}.<br>Năm 3–4: mức khấu hao nhanh nhỏ hơn mức đường thẳng phần còn lại, chuyển đường thẳng = ${nf(rest)}/2 = ${nf(rest/2)}/năm.`},
{h:'3. Dòng tiền',b:`Năm 1: 75 + ${nf(dep2[0])} = ${nf(cf[0])}; năm 2: ${nf(cf[1])}; năm 3: ${nf(cf[2])}; năm 4: ${nf(cf[3])} + thanh lý sau thuế 40 × 0,8 = 32.`},
{h:'4. WACC',b:`0,7 × 16% + 0,3 × 13% × 0,8 = <b>${pct(w)}</b>.`},
{h:'5. NPV và IRR',b:`NPV = <b>${nf(npv)}</b> triệu > 0 → <b>nên mua</b>. IRR ≈ <b>${pct(irr)}</b> > WACC.`}],note:'Giáo trình: NPV = +52,97 triệu; IRR = 16,58%.'}}});
ex({m:3,t:'tsvh',title:'Tài sản vô hình: phương pháp tiền sử dụng (ví dụ minh họa)',lv:'Trung bình',src:'Ví dụ của trợ giảng minh họa Chuẩn mực/CĐ6 (không phải đề gốc)',
prompt:'<p>Một thương hiệu giúp doanh nghiệp có doanh thu dự báo 5 năm: 1.000; 1.100; 1.200; 1.300; 1.400 (triệu). Tỷ lệ tiền sử dụng thương hiệu trên thị trường 5% doanh thu, thuế TNDN 20%, tỷ suất chiết khấu 14%, thu cuối năm. Ước tính giá trị thương hiệu (không có giá trị cuối kỳ).</p>',
unit:'triệu đồng',run(){const s=[1000,1100,1200,1300,1400];const cf=s.map(x=>x*.05*.8);const pv=cf.reduce((a,c,i)=>a+c/Math.pow(1.14,i+1),0);return{ans:pv,steps:[
{h:'1. Tiền sử dụng tiết kiệm được mỗi năm',b:`Doanh thu × 5%: ${s.map(x=>nf(x*.05,0)).join('; ')}.`},
{h:'2. Sau thuế 20%',b:`× 0,8: ${cf.map(x=>nf(x,0)).join('; ')}.`},
{h:'3. Hiện tại hóa ở 14%',b:`${cf.map((x,i)=>nf(x,0)+'/1,14<sup>'+(i+1)+'</sup>').join(' + ')} = <b>${nf(pv)}</b> triệu.`}],note:'Nhất quán: nếu tiền sử dụng đã gồm chi phí duy trì thương hiệu thì không trừ chi phí này nữa; nếu không gồm thì phải trừ chi phí duy trì khỏi dòng tiền. Có thể cộng thêm giá trị cuối kỳ nếu thương hiệu tiếp tục tạo thu nhập.'}}});

export { EX, nf, pct, pa, irrf };
