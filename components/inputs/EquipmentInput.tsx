import type { Equipment, EquipmentItem } from "../../libs/type.d.ts";
import { type Signal, useSignal } from "@preact/signals";
import { EquipmentItemInput } from "./EquipmentItemInput.tsx";
import { Ref, useRef, useState } from "preact/hooks";
import { Dialog } from "./Dialog.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface EquipmentInputProps {
  equipment: Signal<Equipment>;
}

export function EquipmentInput(props: EquipmentInputProps) {
  if (!IS_BROWSER) {
    return <></>;
  }
  const { equipment } = props;
  const show_detail = useSignal(true);
  const load_dialog_ref = useRef<HTMLDialogElement>(null);
  const save_dialog_ref = useRef<HTMLDialogElement>(null);
  const [equipment_label, set_equipment_label] = useState(
    equipment.value.label,
  );

  const open_dialog = (ref: Ref<HTMLDialogElement>) => {
    if (ref.current) {
      set_equipment_list(load_equipments());
      ref.current.showModal();
    }
  };
  const close_dialog = (ref: Ref<HTMLDialogElement>) => {
    if (ref.current) {
      ref.current.close();
    }
  };

  const save_equipments = (equipment: Equipment) => {
    localStorage.setItem(
      `equipment_${equipment.label}`,
      JSON.stringify(equipment),
    );
  };

  const remove_equipment = (label: string) => {
    localStorage.removeItem(`equipment_${label}`);
  };

  const load_equipments = () => {
    const equipments = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("equipment_")) {
        const equipment = localStorage.getItem(key);
        if (equipment) {
          equipments.push(JSON.parse(equipment));
        }
      }
    }
    return equipments;
  };

  const [equipment_list, set_equipment_list] = useState(load_equipments());

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
        <div class="relative w-full min-w-fit max-h-full">
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
              {equipment_list.map((eq) => {
                return (
                  <div class="w-full flex">
                    <label class="flex-1 my-auto m-1 me-2 text-sm font-medium text-gray-900 dark:text-white">
                      {eq.label}
                    </label>
                    <button
                      type="button"
                      class="flex ms-auto me-1 my-auto p-1 border rounded border-yellow-700 dark:border-yellow-300 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-700 hover:text-white dark:hover:text-white dark:hover:bg-yellow-300"
                      onClick={() => {
                        equipment.value = eq;
                        close_dialog(load_dialog_ref);
                      }}
                    >
                      Load
                    </button>
                    <button
                      type="button"
                      class="flex mx-1 my-auto p-1 border rounded border-red-700 dark:border-red-300 text-red-700 dark:text-red-300 hover:bg-red-700 hover:text-white dark:hover:text-white dark:hover:bg-red-300"
                      onClick={() => {
                        remove_equipment(eq.label);
                        close_dialog(load_dialog_ref);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        dialog_ref={save_dialog_ref}
        close={() => close_dialog(save_dialog_ref)}
      >
        <div class="relative w-full min-w-fit max-h-full">
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
              <label
                for="save_equip_label"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Equipment Label
              </label>
              <div class="relative">
                <input
                  id="save_equip_label"
                  type="text"
                  value={equipment_label}
                  class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => set_equipment_label(e.currentTarget.value)}
                />
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    const tmp = {
                      ...equipment.value,
                      label: equipment_label,
                    };
                    save_equipments(tmp);
                    equipment.value = tmp;
                    close_dialog(save_dialog_ref);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
