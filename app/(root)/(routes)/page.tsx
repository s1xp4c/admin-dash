"use client";

//non-relatives
import { useEffect } from "react";

//relatives
import { useStoreModal } from ":/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-3">root</div>;
};

export default SetupPage;
