export const Bar = ({ a, b }) => (
  <div className="bar">
    <i style={{ width: `${b ? Math.round((a / b) * 100) : 0}%` }} />
  </div>
);

export const Html = ({ html, as: Tag = 'div', ...rest }) => (
  <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />
);

export const Stat = ({ value, label }) => (
  <div>
    <b>{value}</b>
    <span className="mut sm">{label}</span>
  </div>
);

export const go = (h) => {
  location.hash = h;
};
