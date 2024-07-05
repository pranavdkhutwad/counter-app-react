import "./Badge.css";

function Badge({ count }) {
  return <div className="badge">{count || "zero"}</div>;
}

export default Badge;
