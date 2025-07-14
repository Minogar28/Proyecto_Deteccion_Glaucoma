import { ModalWrapper, SpinnerBase } from "@/components";

type ModalLoadWrapperProps = {
  open: boolean;
  onClose: () => void;
  loading: boolean;
  error?: string;
  width?: string;
  children: React.ReactNode;
};

export default function ModalLoadWrapper({
  open,
  onClose,
  loading,
  error,
  width = "600px",
  children,
}: ModalLoadWrapperProps) {
  return (
    <ModalWrapper open={open} onClose={onClose} width={width}>
      {loading ? (
        <div className='flex h-[300px] w-full items-center justify-center'>
          <SpinnerBase size='lg' />
        </div>
      ) : error ? (
        <div className='p-6 text-center text-red-500 font-medium'>{error}</div>
      ) : (
        <div className='relative'>{children}</div>
      )}
    </ModalWrapper>
  );
}
