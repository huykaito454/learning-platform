import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../store/modal/modalSlice";
const ExplanationModal = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { question } = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "999",
      borderRadius: "10px",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={() => {
        dispatch(setIsOpen(false));
      }}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="w-full flex flex-col items-start overflow-y-scroll max-h-[80vh]">
        {question?.answer && question?.answer.length > 0 ? (
          question?.answer.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 pb-4">
              <span className="uppercase font-semibold">{item?.title}</span>
              {item?.img && (
                <img
                  src={`data:image/png;base64, ${item?.img}`}
                  alt=""
                />
              )}
              {item?.subpods &&
                item?.subpods?.length > 0 &&
                item?.subpods?.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 pb-4">
                    <p className=" uppercase font-semibold">{item?.title}</p>
                    <img
                      src={item?.img?.src}
                      alt=""
                      style={{
                        width: `${item?.img?.width}px`,
                        height: `${item?.img?.height}px`,
                      }}
                    />
                  </div>
                ))}
            </div>
          ))
        ) : (
          <span>....</span>
        )}
      </div>
    </Modal>
  );
};

export default ExplanationModal;
