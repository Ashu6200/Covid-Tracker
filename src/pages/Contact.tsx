import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Sidebar from '../components/Sidebar';

const Contact = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex gap-5 h-full w-full'>
        <Sidebar />
        <div className='p-8 overflow-scroll rounded-3xl backdrop-blur-[3.2px] bg-newBlack w-full'>
          <div className='grid grid-columns-2 h-full'>
            <div className='contactFirst rounded-3xl backdrop-blur-[3.2px] bg-black'>
              <ContactForm />
            </div>
            <div className='contactSecond rounded-3xl backdrop-blur-[3.2px] bg-black overflow-y-scroll relative'>
              <ContactList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
