import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import "../../../style.scss"

export function MyDialog({isOpen, onClose}) {
  

  return (
    <Dialog className = "settingModalWrapper" open={isOpen} onClose={onClose}>
      <Dialog.Panel className="settingModalContent">
        <Dialog.Title className="settinModalTitle">Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>
        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
      </Dialog.Panel>
    </Dialog>
  )
}