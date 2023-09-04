import { useState } from 'react';
import { useAppDispatch } from '../context/hook';
import { addContact } from '../context/contactSlice';

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && phoneNumber) {
      const newContact = {
        id: new Date().getTime(),
        name,
        email,
        phoneNumber,
      };
      dispatch(addContact(newContact));
      setName('');
      setEmail('');
      setPhoneNumber('');
    }
  };
  return (
    <div className='w-full p-8'>
      <h2 className='text-white font-semibold text-xl'>Add Contact</h2>
      <form className='w-full' onSubmit={handleAddContact}>
        <div className='mt-4'>
          <p className='text-white'>Name</p>
          <input
            type='text'
            className='w-full rounded-lg bg-transparent text-white border-dotted border border-white mt-2 h-[40px]'
            placeholder='Enter the name of the contact'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mt-4'>
          <p className='text-white'>Email</p>
          <input
            type='text'
            placeholder='Enter the email address'
            className='w-full rounded-lg bg-transparent text-white border-dotted border border-white mt-2 h-[40px]'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mt-4'>
          <p className='text-white'>Phone</p>
          <input
            type='tel'
            placeholder='Enter the phone number'
            className='w-full rounded-lg bg-transparent text-white border-dotted border border-white mt-2 h-[40px]'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button className='w-full rounded-lg bg-[#19a7ce] text-white mt-4 h-[40px] pl-4 text-center'>
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
