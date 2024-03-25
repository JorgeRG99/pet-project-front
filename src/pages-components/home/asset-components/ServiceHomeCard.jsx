import { Button } from "@/components/ui/button";

export default function ServiceHomeCard({ children, title, description }) {
  return (
    <div className="flex flex-col items-center gap-10 lg:w-[25%] sm:w-[400px]">
      {children}
      <h3 className="text-3xl font-alegreya font-medium text-center text-primary-dark">
        {title}
      </h3>

      <p className="text-xl font-alegreya font-normal">{description}</p>

      <Button className="text-white text-md bg-primary-dark" size="lg">Leer más</Button>
    </div>
  );
}
