import { useState, useCallback, useMemo } from "react";
import LoadingDots from "../LoadingDots/LoadingDots";
import Modal from "./ProjectSave";

const SaveProjectModal = ({
  showSaveProjectModal,
  setShowSaveProjectModal,
}) => {
  const [SaveProjectClicked, setSaveProjectClicked] = useState(false);

  return (
    <Modal
      showModal={showSaveProjectModal}
      setShowModal={setShowSaveProjectModal}
    >
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="/">
            <img
              src={""}
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="text-sm text-gray-500">
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <button
            disabled={SaveProjectClicked}
            className={`${
              SaveProjectClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setSaveProjectClicked(true);
            }}
          >
            {SaveProjectClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <p>Save Project</p>
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function useSaveProjectModal() {
  const [showSaveProjectModal, setShowSaveProjectModal] = useState(false);

  const SaveProjectModalCallback = useCallback(() => {
    return (
      <SaveProjectModal
        showSaveProjectModal={showSaveProjectModal}
        setShowSaveProjectModal={setShowSaveProjectModal}
      />
    );
  }, [showSaveProjectModal, setShowSaveProjectModal]);

  return useMemo(
    () => ({
      setShowSaveProjectModal,
      SaveProjectModal: SaveProjectModalCallback,
    }),
    [setShowSaveProjectModal, SaveProjectModalCallback]
  );
}