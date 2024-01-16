import { styled } from "styled-components";

export const ModalStyles = styled.div`
    min-width: 500px;
    border: 10px;
    .react-responsive-modal-modal {
        background: #171717 !important;
        color: #ffffff !important;
        width: 100%;
    }
    .user-details {
        margin-top: 10px;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .image {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        margin-right: 10px
    }

    .flex {
       display: flex ;
       align-items: center;
    }

    .text {
        font-weight: normal;
    }

    @media only screen and (max-width: 767px) {
        min-width: auto;
    }
`