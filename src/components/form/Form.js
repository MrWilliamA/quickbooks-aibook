import Styles from "./Form.module.css";

const Form = ({ setFormData, setIsFormSubmitted }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Sanitize input using regex to prevent HTML injection
    const sanitizedValue = value.replace(/<.*?>/g, "");

    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };
  //handle form subit
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <form method="POST" onSubmit={handleSubmit} className={Styles.form}>
      <div className={Styles.formSubRow}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          required
          onChange={handleInputChange}
        />
      </div>
      <div className={Styles.formSubRow}>
        <label htmlFor="LastName">Last Name:</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="LastName"
          required
        />
      </div>
      <div className={Styles.formSubRow}>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Enter Email" name="email" required />
      </div>
      <div className={Styles.btnContainer}>
        <button
          type="submit"
          placeholder="Submit"
          name="submit"
          id={Styles.submit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
