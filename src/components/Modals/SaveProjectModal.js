import { useState, useCallback, useMemo } from "react";
import Modal from "./ProjectSave";

const SaveProjectModal = ({
  showSaveProjectModal,
  setShowSaveProjectModal,
  srcDoc
}) => {
  return (
    <Modal
      showModal={showSaveProjectModal}
      setShowModal={setShowSaveProjectModal}
    >
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
      <iframe
          className="bg-white"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="580vh"
        />

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <button
            className={` border-gray-200 bg-white text-black hover:bg-gray-50flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setShowSaveProjectModal(false);
            }}
          >
              <>
                <p>Close</p>
              </>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function useSaveProjectModal(srcDoc) {
  const [showSaveProjectModal, setShowSaveProjectModal] = useState(false);

  const SaveProjectModalCallback = useCallback(() => {
    return (
      <SaveProjectModal
        showSaveProjectModal={showSaveProjectModal}
        setShowSaveProjectModal={setShowSaveProjectModal}
        srcDoc={srcDoc}
      />
    );
  }, [showSaveProjectModal, setShowSaveProjectModal, srcDoc]);

  return useMemo(
    () => ({
      setShowSaveProjectModal,
      SaveProjectModal: SaveProjectModalCallback,
    }),
    [setShowSaveProjectModal, SaveProjectModalCallback]
  );
}
