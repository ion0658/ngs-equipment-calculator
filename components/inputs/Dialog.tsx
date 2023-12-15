import { JSX } from "preact/jsx-runtime";
import { Ref } from "preact/hooks";

interface DialogProps {
  dialog_ref: Ref<HTMLDialogElement>;
  close: () => void;
}

type Props = JSX.HTMLAttributes<HTMLDialogElement> & DialogProps;

export function Dialog(props: Props) {
  return (
    <dialog ref={props.dialog_ref} onClick={props.close} class="dialog">
      <div onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </dialog>
  );
}
