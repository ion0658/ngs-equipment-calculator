import type { Equipment, EquipmentItem } from "../../libs/type.d.ts";
import { type Signal, useSignal } from "@preact/signals";
import { EquipmentItemInput } from "./EquipmentItemInput.tsx";
import { Ref, useRef } from "preact/hooks";
import { Dialog } from "./Dialog.tsx";

interface EquipmentInputProps {
  //   label: string;
  equipment: Signal<Equipment>;
}

export function EquipmentInput(props: EquipmentInputProps) {
  const { equipment } = props;
  const show_detail = useSignal(true);
  const load_dialog_ref = useRef<HTMLDialogElement>(null);
  const save_dialog_ref = useRef<HTMLDialogElement>(null);

  const open_dialog = (ref: Ref<HTMLDialogElement>) => {
    if (ref.current) {
      ref.current.showModal();
    }
  };
  const close_dialog = (ref: Ref<HTMLDialogElement>) => {
    if (ref.current) {
      ref.current.close();
    }
  };

  return (
    <>
      <div class="block p-2 my-2 border rounded border-gray-300 dark:border-gray-600">
        <div class="border-b border-gray-700 dark:border-gray-200 mb-2">
          <button
            type="button"
            class="flex items-center text-xl text-left w-full font-semibold mb-2 text-gray-900 dark:text-white"
            onClick={(e) => {
              e.stopPropagation();
              show_detail.value = !show_detail.value;
            }}
          >
            <span>{equipment.value.label}</span>
            <button
              type="button"
              class="ms-auto me-1 my-auto p-1 border rounded border-blue-700 dark:border-blue-300 text-blue-700 dark:text-blue-300 hover:bg-blue-700 hover:text-white dark:hover:text-white dark:hover:bg-blue-300"
              onClick={(e) => {
                e.stopPropagation();
                open_dialog(save_dialog_ref);
              }}
            >
              Save
            </button>
            <button
              type="button"
              class="mx-1 my-auto p-1 border rounded border-yellow-700 dark:border-yellow-300 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-700 hover:text-white dark:hover:text-white dark:hover:bg-yellow-300"
              onClick={(e) => {
                e.stopPropagation();
                open_dialog(load_dialog_ref);
              }}
            >
              Load
            </button>
            <svg
              data-accordion-icon
              class="mx-2 mt-1.5 w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </div>
        <div
          class={`${show_detail.value ? "block" : "hidden"}`}
        >
          <div class="flex-1 m-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
            <EquipmentItemInput
              label="Weapon"
              equipment={equipment.value.weapon_op}
              onChange={(eq: EquipmentItem) => {
                equipment.value = {
                  ...equipment.value,
                  weapon_op: eq,
                };
              }}
            />
          </div>
          <div class="flex-1 mx-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
            <EquipmentItemInput
              label="Unit 1"
              equipment={equipment.value.unit1_op}
              onChange={(eq: EquipmentItem) => {
                equipment.value = {
                  ...equipment.value,
                  unit1_op: eq,
                };
              }}
            />
          </div>
          <div class="flex-1 mx-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
            <EquipmentItemInput
              label="Unit 2"
              equipment={equipment.value.unit2_op}
              onChange={(eq: EquipmentItem) => {
                equipment.value = {
                  ...equipment.value,
                  unit2_op: eq,
                };
              }}
            />
          </div>
          <div class="flex-1 mx-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
            <EquipmentItemInput
              label="Unit 3"
              equipment={equipment.value.unit3_op}
              onChange={(eq: EquipmentItem) => {
                equipment.value = {
                  ...equipment.value,
                  unit3_op: eq,
                };
              }}
            />
          </div>
        </div>
      </div>
      <Dialog
        dialog_ref={load_dialog_ref}
        close={() => close_dialog(load_dialog_ref)}
      >
        <div class="relative  w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Load Equipment
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  close_dialog(load_dialog_ref);
                }}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4">
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  close_dialog(load_dialog_ref);
                }}
              >
                Load
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        dialog_ref={save_dialog_ref}
        close={() => close_dialog(save_dialog_ref)}
      >
        <div class="relative  w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Save Equipment
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  close_dialog(save_dialog_ref);
                }}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4">
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  close_dialog(save_dialog_ref);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
