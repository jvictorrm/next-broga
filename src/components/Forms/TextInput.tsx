import cn from "@/helpers/cn";

export type TextInputProps = React.ComponentProps<"input"> & {
  label?: string | null | undefined;
  error?: string | null | undefined;
};

const TextInput = ({ label, error, className, ...props }: TextInputProps) => {
  return (
    <div className={cn("my-4", className)}>
      {label && <label className="text-slate-300 my-2">{label}</label>}
      <input
        className={cn(
          "w-full rounded-md border-2 border-transparent bg-slate-800 px-4 py-3 text-base text-slate-200 focus:outline-none focus:ring-0",
          {
            "border-red-500": !!error,
          }
        )}
        {...props}
      />
      {error && (
        <div className="my-2">
          <small className="text-sm text-red-500">{error}</small>
        </div>
      )}
    </div>
  );
};

export default TextInput;
