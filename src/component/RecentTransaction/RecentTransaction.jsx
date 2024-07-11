import React,{useState} from "react";
import styles from "./RecentTransaction.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi2";

const RecentTransSactions = ({ title, date, price, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEditClick = () => {
    if (isEditing && newTitle !== title) {
      onEdit(newTitle); 
    }
    setIsEditing(!isEditing); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.expenseItem}>
        <div className={styles.itemText}>
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className={styles.editInput}
            />
          ) : (
            <>
              <span>{title}</span>
              <span style={{color: 'grey' }}>{date}</span>
            </>
          )}
        </div>
      </div>
      <div className={styles.addDeleteBtn}>
        <p className={styles.inr}>₹{price}</p>
        <button className={styles.deleteBtn} onClick={onDelete}>
          <MdOutlineCancel className={styles.icon} />
        </button>
        <button className={styles.editBtn} onClick={handleEditClick}>
          <HiOutlinePencil className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
export default RecentTransSactions;