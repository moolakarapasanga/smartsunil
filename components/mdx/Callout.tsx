export function Callout({
  type = "info",
  children
}: {
  type?: "info" | "warning" | "danger";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-sky-400/20 bg-sky-400/5 text-sky-100",
    warning: "border-yellow-400/20 bg-yellow-400/5 text-yellow-100",
    danger: "border-red-400/20 bg-red-400/5 text-red-100"
  };

  return <div className={`my-6 rounded-xl border p-4 text-sm leading-6 ${styles[type]}`}>{children}</div>;
}
