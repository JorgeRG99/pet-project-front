export default function ServiceHomeCard({ children, title, description }) {
  return (
    <div className="flex flex-col items-center gap-10 w-[400px]">
      {children}
      <h3 className="text-3xl font-alegreya font-medium text-center text-primary">
        {title}
      </h3>

      <p className="text-xl font-alegreya font-normal">{description}</p>
    </div>
  );
}
