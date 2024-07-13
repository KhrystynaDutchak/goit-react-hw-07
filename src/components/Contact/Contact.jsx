import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ contact: { name, id, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id} className={css.item}>
      <div className={css.info}>
        <p className={css.infoItem}><FaPhoneAlt /> {name}</p>
        <p className={css.infoItem}><FaUser /> {number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}