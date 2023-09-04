import { deleteContact } from '../context/contactSlice';
import { useAppDispatch } from '../context/hook';
import { RootState } from '../context/store';
import { useSelector } from 'react-redux';
import UpdateContact from './UpdateContact';

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contactLits = useSelector((state: RootState) => state.contact);
  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className='w-full'>
      <h2 className='text-white font-semibold text-xl sticky top-0 bg-black pt-8 px-8 pb-4'>
        Contact List
      </h2>
      <div className='px-8'>
        {contactLits.map((contact) => {
          return (
            <div key={contact.id} className='p-2 w-full'>
              <h4 className='text-white font-semibold'>
                <span className='text-regalblue font-semibold'>Name : </span>
                {contact.name}
                {'   '}
                <span className='text-regalblue font-semibold'>Email : </span>
                {contact.email}{' '}
                <span className='text-regalblue font-semibold'>
                  Phone Number :{' '}
                </span>
                {contact.phoneNumber}
              </h4>
              <div>
                <p className='text-white text-sm font-semibold'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates minus nostrum unde ducimus commodi, ipsum ad dolor
                  vel
                </p>
                <div className='w-full flex gap-4'>
                  <UpdateContact
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phoneNumber={contact.phoneNumber}
                  />
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className='w-full rounded-lg bg-[red] text-white mt-4 h-[40px] pl-4 font-bold text-sm text-center'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
