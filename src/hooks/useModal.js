import React, { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  return { isOpen, setIsOpen };
};

export default useModal;
