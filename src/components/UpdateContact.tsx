import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import { styled as s } from '@mui/material/styles';
import { editContact } from '../context/contactSlice';
import { useAppDispatch } from '../context/hook';

interface ContactType {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const UpdateContact = ({ id, name, email, phoneNumber }: ContactType) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [nameUpdated, setNameUpdated] = useState(name);
  const [emailUpdated, setEmailUpdated] = useState(email);
  const [phoneNumberUpdated, setPhoneNumberUpdated] = useState(phoneNumber);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      editContact({
        id,
        name: nameUpdated,
        email: emailUpdated,
        phoneNumber: phoneNumberUpdated,
      })
    );
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={handleClickOpen}
        className='w-full rounded-lg bg-[#19a7ce] text-white mt-4 h-[40px] pl-4 font-bold text-sm text-center'
      >
        Update
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className=''
      >
        <form className='w-full bg-black p-8' onSubmit={handleSubmit}>
          <div className='mt-4'>
            <p className='text-white'>Name</p>
            <input
              type='text'
              className='w-full rounded-lg bg-transparent text-white border-dotted border border-white mt-2 h-[40px]'
              placeholder='Enter the name of the contact'
              value={nameUpdated}
              onChange={(e) => setNameUpdated(e.target.value)}
            />
          </div>
          <div className='mt-4'>
            <p className='text-white'>Email</p>
            <input
              type='text'
              placeholder='Enter the email address'
              className='w-full rounded-lg bg-transparent text-white border-dotted border border-white mt-2 h-[40px]'
              value={emailUpdated}
              onChange={(e) => setEmailUpdated(e.target.value)}
            />
          </div>
          <div className='mt-4'>
            <p className='text-white'>Phone</p>
            <input
              type='tel'
              placeholder='Enter the phone number'
              className='w-full rounded-lg bg-transparent text-white border-dotted border border-white mt-2 h-[40px]'
              value={phoneNumberUpdated}
              onChange={(e) => setPhoneNumberUpdated(e.target.value)}
            />
          </div>
          <div className='flex gap-2'>
            <button className='w-full rounded-lg bg-[#19a7ce] text-white mt-4 h-[40px] pl-4 text-center'>
              Add
            </button>
            <button
              onClick={handleClose}
              className='w-full rounded-lg bg-[red] text-white mt-4 h-[40px] pl-4 text-center'
            >
              Close
            </button>
          </div>
        </form>
      </BootstrapDialog>
    </>
  );
};
const BootstrapDialog = s(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: '60%',
    maxWidth: 'auto',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
    width: '400px',
    maxWidth: '100%',
    borderRadius: '30px',
    '&::-webkit-scrollbar': {
      width: '1px',
    },
  },
}));
export default UpdateContact;
