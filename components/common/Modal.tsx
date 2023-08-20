import { ReactNode } from 'react';

import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';

type ModalProps = {
  content: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};
const ModalCard: React.FC<ModalProps> = ({ content, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={0} mx={6} borderRadius={'16px'}>
        <ModalCloseButton />
        {content}
      </ModalContent>
    </Modal>
  );
};

export default ModalCard;
