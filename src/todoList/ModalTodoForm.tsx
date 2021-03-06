import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { Backdrop, Wrapper, StyledModal, Header, HeaderText, CloseButton, Content } from '../Style/ModalToForm.style'
export interface ModalTodoFormProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText: string;
}

const ModalTodoForm: React.FC<ModalTodoFormProps> = ({ isShown, hide, modalContent, headerText }) => {

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 27 && isShown) {
            hide();
        }
    };
    useEffect(() => {
        isShown
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset");
        document.addEventListener("keydown", onKeyDown, false);
        return () => {
            document.removeEventListener("keydown", onKeyDown, false);
        };
    }, [isShown]);

    const modal = (
        <React.Fragment>
            <Backdrop onClick={hide} />
            <Wrapper
                aria-modal
                aria-labelledby={headerText}
                tabIndex={-1}
                role="dialog"
            >
                <StyledModal>
                    <Header>
                        <HeaderText>{headerText}</HeaderText>
                        <CloseButton onClick={hide}>X</CloseButton>
                    </Header>
                    <Content>{modalContent}</Content>
                </StyledModal>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

export default ModalTodoForm;
