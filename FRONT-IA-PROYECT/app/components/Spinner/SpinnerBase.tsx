import CircularProgress from "@mui/joy/CircularProgress";

type PropsSpinnerBase = {
  size: "sm" | "md" | "lg";
  value?: number | 50;
  variant?: "plain" | "outlined" | "soft" | "solid";
  determinate?: boolean | false;
};

export default function SpinnerBase({
  size,
  value = 30,
  variant = "soft",
  determinate,
}: PropsSpinnerBase) {
  return (
    <div className='absolute w-full inset-0 flex items-center justify-center bg-white z-10'>
      <CircularProgress
        determinate={determinate}
        size={size}
        value={value}
        variant={variant}
      />
    </div>
  );
}
