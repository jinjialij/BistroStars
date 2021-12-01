import classes from "./Checkout.module.css";
import { useState } from "react";

const validationErrorMsg = {
  name: "Name cannot be empty",
  address: "Address cannot be empty",
  phone: "Invalid Phone number",
  postalcode: "Invalid Post code",
};

const Checkout = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState({
    name: false,
    address: false,
    postalcode: false,
    phone: false,
  });
  const [touched, setTouched] = useState({
    name: false,
    address: false,
    postalcode: false,
    phone: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    setTouched({
      name: true,
      address: true,
      postalcode: true,
      phone: true,
    });
    if (!valid.name && !valid.address && !valid.phone && !valid.postalcode) {
      return false;
    } else {
      const form = {
        name: name,
        address: address,
        postcode: postalcode,
        phone: phone,
      };
      props.onConfirm(form);
      setName("");
      setAddress("");
      setPhone("");
      setPostalcode("");
    }
  };

  const nameHandler = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
    setTouched((prev) => {
      return { ...prev, name: true };
    });
    setName(value);
    if (value && value.trim().length > 0) {
      setValid((prev) => {
        return { ...prev, name: true };
      });
    } else {
      setValid((prev) => {
        return { ...prev, name: false };
      });
    }
  };

  const addressHandler = (event) => {
    const value = event.target.value;
    setTouched((prev) => {
      return { ...prev, address: true };
    });
    setAddress(value);
    if (value && value.trim().length > 0) {
      setValid((prev) => {
        return { ...prev, address: true };
      });
    } else {
      setValid((prev) => {
        return { ...prev, address: false };
      });
    }
  };

  const phoneHandler = (event) => {
    const value = event.target.value;
    setTouched((prev) => {
      return { ...prev, phone: true };
    });
    setPhone(value);
    if (value && value.trim().length === 10) {
      setValid((prev) => {
        return { ...prev, phone: true };
      });
    } else {
      setValid((prev) => {
        return { ...prev, phone: false };
      });
    }
  };

  const postalcodeHandler = (event) => {
    const value = event.target.value;
    setTouched((prev) => {
      return { ...prev, postalcode: true };
    });
    setPostalcode(value);
    if (value && value.trim().length === 6) {
      setValid((prev) => {
        return { ...prev, postalcode: true };
      });
    } else {
      setValid((prev) => {
        return { ...prev, postalcode: false };
      });
    }
  };

  return (
    <form className={classes.checkout} onSubmit={submitHandler}>
      <div className={classes.field}>
        <label htmlFor="customer_name">Your name</label>
        <input
          type="text"
          name="customer_name"
          onChange={nameHandler}
          value={name}
        />
        {touched.name && !valid.name && (
          <p className={classes.invalid}>{validationErrorMsg.name}</p>
        )}
      </div>

      <div className={classes.field}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          onChange={addressHandler}
          value={address}
        />
        {touched.address && !valid.address && (
          <p className={classes.invalid}>{validationErrorMsg.address}</p>
        )}
      </div>
      <div className={classes.field}>
        <label htmlFor="postalcode">Post code</label>
        <input
          type="text"
          name="postalcode"
          onChange={postalcodeHandler}
          value={postalcode}
        />
        {touched.postalcode && !valid.postalcode && (
          <p className={classes.invalid}>{validationErrorMsg.postalcode}</p>
        )}
      </div>
      <div className={classes.field}>
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          onChange={phoneHandler}
          value={phone}
        />
        {touched.phone && !valid.phone && (
          <p className={classes.invalid}>{validationErrorMsg.phone}</p>
        )}
      </div>
      <div className={classes.buttons}>
        <button type="button" name="cancel" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" name="confirm" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
