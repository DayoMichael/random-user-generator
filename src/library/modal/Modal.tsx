import React, {FC} from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ModalStyles } from "./ModalStyles";
import { getHumanDate } from "../../utils";
import { RowData } from "../../common/types";

type ModalType = {
  open: boolean;
  onCloseModal: () => void;
  data: RowData;
};

const ModalView: FC<ModalType>  = ({ open, onCloseModal, data })  =>{
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <ModalStyles>
        <div className="flex">
            <img alt="user" className="image" src={data?.picture?.thumbnail}/>
            <h2>{`${data?.name?.first}'s Details`}</h2>
        </div>
        
        <div className="user-details">
            <div className="details">
                <h4>Name: <span className="text">{`${data?.name?.title} ${data?.name?.last} ${data?.name?.first}`}</span></h4>
                <h4>Email: <span className="text">{data?.email}</span></h4>
                <h4>Phone: <span className="text">{data?.cell}</span></h4>
                <h4>Address: <span className="text">{`${data?.location?.city}, ${data?.location?.city}, ${data?.location?.country}`}</span></h4>
                <h4>Gender: <span className="text">{data?.gender}</span></h4>
                <h4>Date Of Birth: <span className="text">{`${getHumanDate(data?.dob?.date || "")}`}</span></h4>
            </div>
        </div>
      </ModalStyles>
    </Modal>
  );
}

export default ModalView;
